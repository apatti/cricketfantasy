import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { QueryCommand,DynamoDBDocument,UpdateCommand,PutCommand } from '@aws-sdk/lib-dynamodb';

const dynamodb = DynamoDBDocument.from(new DynamoDB());

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
export const handler = async (event) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    let entryTime = new Date();
    entryTime.setHours(entryTime.getHours()-7);
    let faKey = `FA#${entryTime.getMonth()+1}${entryTime.getDate()}`
    let tableName = 'fantasyTeam-staging';
    
    let playerTableName = 'iplPlayer-staging';
    

    //Get current day FA transactions
    let faParams = { TableName: tableName,
                    IndexName: "owner-id-index",
                    KeyConditionExpression: "#owner = :v_faKey", 
                    ExpressionAttributeValues: {
                      ":v_faKey": faKey
                    },
                    ExpressionAttributeNames:{
                      "#owner": "owner"
                    },
                    "ScanIndexForward": false
                  };

    let faTransactionsCommand = new QueryCommand(faParams);
    let faTransactions = await dynamodb.send(faTransactionsCommand);
    //console.log("FA Transactions:",JSON.stringify(faTransactions.Items));
    //body = JSON.stringify(faTransactions.Items)
    
    let transactions={};
    for(let i=0;i<faTransactions.Items.length;i++){
        let item = faTransactions.Items[i];
        if(!item || item.processed==true){
            continue;
        }
        let team = item.id;
        //console.log("item:",item);
        transactions = Object.keys(item).reduce((accumulator, key) => {
            if(key !== "id" && key !== "owner" && key !== "league" && key !== 'entryTime' && key!=="processed"){
                //console.log("key:",key);
                let addedPlayer = key.split("#")[0];
                let droppedPlayer = key.split("#")[1];
                
                let entry = {team:team,drop:(droppedPlayer.startsWith("FA"))?droppedPlayer:Buffer.from(droppedPlayer,'base64').toString("utf-8"),amount:item[key].split("#")[0],entryTime:item[key].split('#')[1]};
                if (addedPlayer in accumulator){
                    accumulator[addedPlayer].push(entry)
                }
                else{
                    accumulator[addedPlayer]=[entry];
                }
            }
            return accumulator;
        }, transactions);
    }
    
    var keysSorted = Object.keys(transactions).sort(function(a,b){
        transactions[a].sort((x,y)=>y.amount-x.amount);
        transactions[b].sort((x,y)=>y.amount-x.amount);
    
        return transactions[b][0].amount-transactions[a][0].amount;
    })
    //body = transactions;
    let processedPlayers = [];
    
    let finalOutCome = [];
    //for (const [playerToAdd, details] of Object.entries(transactions)) {
    for(let i=0;i<keysSorted.length;i++){
        let playerToAdd = keysSorted[i];
        let details = transactions[keysSorted[i]];
        if(processedPlayers.includes(playerToAdd)){
            console.log(`${playerToAdd} already processed`);
            continue;
        }
        
        
        /*details.sort((a,b)=>{
            if(a.amount<b.amount){
                return -1;
            }
            if(a.amount>b.amount){
                return 1;
            }
            if(a.amount==b.amount){
                return new Date(b.entryTime) - new Date(a.entryTime)
            }
        });*/
        
        let detail={};
        let j=0;
        do{
            detail = details[j];
            if(processedPlayers.includes(`${detail.team}_${detail.drop}`)){
                console.log(`${detail.team}_${detail.drop} already processed as dropped player, to add: ${playerToAdd}`);
                j++;
                detail = {};
                continue;
            }
            break;
        }while(j<details.length);
        processedPlayers.push(playerToAdd);
        if(Object.keys(detail).length==0){
            //console.log("Continuing");
            continue;
        }
        
        processedPlayers.push(`${detail.team}_${detail.drop}`);
        finalOutCome.push({addedPlayer:playerToAdd,droppedPlayer:detail.drop,team:detail.team,amount:detail.amount});
    }
    
    
    //console.log("Final outcome:",JSON.stringify(finalOutCome));
    body = finalOutCome;
    
    for(let i = 0;i<finalOutCome.length;i++){
        let transaction = finalOutCome[i];
        let playerToAdd = transaction.addedPlayer;
        
        let playerToAddTeam = (Buffer.from(playerToAdd,'base64').toString("utf-8")).split('-')[0];
        //Assign the players
        
        //Update playerinfo for add: updating playerprofile
        const addCommand = new UpdateCommand({
            TableName: playerTableName,
            Key: {
                id: playerToAdd,
                team:playerToAddTeam.toUpperCase()
            },
            UpdateExpression: "set playerIcon = :playerToAdd,playerCost = :playerCost",
            ExpressionAttributeValues: {
                ":playerToAdd": transaction.team,
                ":playerCost": transaction.amount
            },
            ReturnValues: "ALL_NEW",
        });
    
        const addPlayer = await dynamodb.send(addCommand);
        console.log(JSON.stringify(addCommand))
        
        //Update playerinfo for remove: except if its FA
        //Update playerinfo for add: updating playerprofile
        let playerToDrop = transaction.droppedPlayer;
        if(!playerToDrop.startsWith("FA")){
            let playerToDropTeam = playerToDrop.split('-')[0];
            const removeCommand = new UpdateCommand({
                TableName: playerTableName,
                Key: {
                    id: Buffer.from(playerToDrop).toString('base64'),
                    team:playerToDropTeam.toUpperCase()
                },
                UpdateExpression: "set playerIcon = :playerToDrop,playerCost = :playerCost",
                ExpressionAttributeValues: {
                    ":playerToDrop": "undefined",
                    ":playerCost": 1
                },
                ReturnValues: "ALL_NEW",
            });
    
            const removePlayer = await dynamodb.send(removeCommand);
        }
        let subtractAmount = transaction.amount*-1;
        //Adjust FA amount.
        const setFAAmountCommand = new UpdateCommand({
            TableName: tableName,
            Key: {
                id: transaction.team,
                owner:"v0-team"
            },
            UpdateExpression: "ADD #field :amount",
            ExpressionAttributeNames:{
                "#field":"fa"
            },
            ExpressionAttributeValues: {
                ":amount": subtractAmount
            },
            ReturnValues: "ALL_NEW",
        });
        
        const setFAAmount = await dynamodb.send(setFAAmountCommand);
        console.log("SET FA:",setFAAmount);
        
        const setProcessedCommand = new UpdateCommand({
            TableName: tableName,
            Key: {
                id: transaction.team,
                owner:faKey
            },
            UpdateExpression: "set #field = :processed",
            ExpressionAttributeNames:{
                "#field":"processed"
            },
            ExpressionAttributeValues: {
                ":processed": true
            },
            ReturnValues: "ALL_NEW",
        });
    
        const setProcessed = await dynamodb.send(setProcessedCommand);
        console.log(setProcessed);
        
    }
    
    
    console.log("Writing history");
    const historyCommand = new PutCommand({
            TableName: "freeAgencyHistory",
            Item: {
              eventTime: `${entryTime.getMonth()+1}${entryTime.getDate()}${entryTime.getHours()}`,
              finalOutCome:finalOutCome,
              transactions:transactions,
              eventCreation:`${entryTime.getMonth()+1}${entryTime.getDate()}`
            },
          });

    const response = await dynamodb.send(historyCommand);
    console.log(response)
    
    return {
        statusCode,
        body,
        headers,
    };
};
