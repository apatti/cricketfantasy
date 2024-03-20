import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { QueryCommand,DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

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
    
    
    let params = { TableName: playerTableName,
                  FilterExpression: "attribute_not_exists(playerIcon) or playerIcon = :null or playerIcon = :undefined",
                  ExpressionAttributeValues: {
                  ':null': null,
                  ':undefined':'undefined'
                }};
    
    let items;
    let freeAgents = [];
    //Get all free agents
    do {
        items = await dynamodb.scan(params);
        items.Items.forEach((item) => freeAgents.push(item));
        params.ExclusiveStartKey = items.LastEvaluatedKey;
    } while (typeof items.LastEvaluatedKey != "undefined");

    //console.log(JSON.stringify(freeAgents));

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

    //let faTransactions = await dynamodb.query(faParams);
    let faTransactionsCommand = new QueryCommand(faParams);
    let faTransactions = await dynamodb.send(faTransactionsCommand);
    console.log("FA Transactions:",JSON.stringify(faTransactions.Items));
    
    let transactions={};
    for(let i=0;i<faTransactions.Items.length;i++){
        let item = faTransactions.Items[i];
        if(!item){
            continue;
        }
        let team = item.id;
        transactions = Object.keys(item).reduce((accumulator, key) => {
            if(key !== "id" && key !== "owner" && key !== "league" && key !== 'entryTime'){
                let addedPlayer = key.split("#")[0];
                let droppedPlayer = key.split("#")[1];
                let entry = {team:team,drop:Buffer.from(droppedPlayer).toString("utf-8"),amount:item[key]};
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
    
    let processedPlayers = [];
    
    let finalOutCome = [];
    for (const [playerToAdd, details] of Object.entries(transactions)) {
        if(processedPlayers.includes(playerToAdd)){
            console.log(`${playerToAdd} already processed`);
            continue;
        }
        processedPlayers.push(playerToAdd);
        
        details.sort((a,b)=>a.amount<b.amount ? 1:-1);
        
        let detail = details[0];
        if(processedPlayers.includes(`${detail.team}_${detail.drop}`)){
            console.log(`${detail.team}_${detail.drop} already processed`);
            continue;
        }
        processedPlayers.push(`${detail.team}_${detail.drop}`);
        finalOutCome.push({addedPlayer:playerToAdd,droppedPlayer:detail.drop,team:detail.team,amount:detail.amount});
    }
    
    
    console.log("Final outcome:",JSON.stringify(finalOutCome));
    body = JSON.stringify(finalOutCome);

    return {
        statusCode,
        body,
        headers,
    };
};
