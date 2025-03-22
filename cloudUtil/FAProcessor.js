import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { QueryCommand,DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamodb = DynamoDBDocument.from(new DynamoDB());

import {getOwnerDetails, compareTransactions,writeFullHistory,commitTransactionToDB} from './utils.mjs';

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

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    //Get owner details:
    let ownerDetails = await getOwnerDetails();
    let ownerTeamComboMap = {};
    //Get all transactions:
    let entryTime = new Date();
    entryTime.setHours(entryTime.getHours()-7);
    let faKey = `FA#${entryTime.getMonth()+1}${entryTime.getDate()}`;
    //console.log(faKey);
    //faKey = `FA#321`;
    let tableName = 'fantasyTeam-staging';
    
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
    
    let transactions=[];
    for(let i=0;i<faTransactions.Items.length;i++){
        let item = faTransactions.Items[i];
        if(!item || item.processed==true){
            continue;
        }
        let team = item.id;
        
        transactions = Object.keys(item).reduce((accumulator, key) => {
            if(key !== "id" && key !== "owner" && key !== "league" && key !== 'entryTime' && key!=="processed"){
                
                let addPlayer = key.split("#")[0];
                let addPlayerString = Buffer.from(addPlayer, 'base64').toString("utf-8");
                let addPlayerRole = Buffer.from(key.split("#")[1], 'base64').toString("utf-8");

                let dropPlayer = key.split("#")[2];
                let dropPlayerString = Buffer.from(dropPlayer, 'base64').toString("utf-8");
                let dropPlayerRole = Buffer.from(key.split("#")[3], 'base64').toString("utf-8");

                //console.log(Buffer.from(item[key].split('#')[2],'base64').toString("utf-8"));
                let teamCombo = JSON.parse(Buffer.from(item[key].split('#')[2],'base64').toString("utf-8"));

                let entry = {
                    team:team,
                    drop:dropPlayerString,
                    dropPlayerRole:dropPlayerRole,
                    amount:item[key].split("#")[0],
                    entryTime:item[key].split('#')[1],
                    entryTimeString:Buffer.from(item[key].split('#')[1],'base64').toString("utf-8"),
                    teamCombo:teamCombo,
                    teamRank: ownerDetails[team].rank,
                    teamFA: ownerDetails[team].fa,
                    add: addPlayer,
                    addPlayerString:addPlayerString,
                    addPlayerRole:addPlayerRole
                };
                accumulator.push(entry);
            }
            return accumulator;
        }, transactions);
    }
    let sortedTransactions = [...transactions].sort(compareTransactions);
    
    let processedPlayers = [];
    let returnBody = {finalTransactions:[],allBids:sortedTransactions}
    
    sortedTransactions.forEach((transaction)=>{
        //check if team doesnt exist in ownerTeamComboMap
        if(!ownerTeamComboMap[transaction.team]){
            ownerTeamComboMap[transaction.team] = transaction.teamCombo;
        }

        if(processedPlayers.includes(transaction.add)){
            //console.log("Processed player:",transaction.add);
            return;
        }
        if(processedPlayers.includes(transaction.drop)){
            //console.log("Processed player:",transaction.drop);
            return;
        }
        if(transaction.amount==0){
            //console.log("zero dollar bid:",transaction);
            return;
        }
        if(transaction.amount>transaction.teamFA){
            console.log("Budget exceeds:",transaction);
            return;
        }
        
        let teamCombo = JSON.parse(JSON.stringify(ownerTeamComboMap[transaction.team]));
        
        let addPlayerRole = transaction.addPlayerRole;
        let dropPlayerRole = transaction.dropPlayerRole;
        teamCombo[addPlayerRole] = teamCombo[addPlayerRole]+1;
        teamCombo[dropPlayerRole] = teamCombo[dropPlayerRole]-1;

        if(teamCombo.BATSMAN<2 || teamCombo.BATSMAN>3){
            console.log("Invalid combo on BATSMAN:",teamCombo);
            return;
        }
        if(teamCombo.BOWLER<2 || teamCombo.BOWLER>3){
            console.log("Invalid combo on BOWLER:",teamCombo);
            return;
        }
        if(teamCombo.ALL_ROUNDER<1 || teamCombo.ALL_ROUNDER>3){
            console.log("Invalid combo on ALL_ROUNDER:",teamCombo);
            return;
        } 
        if(teamCombo.WICKET_KEEPER>2){
            console.log("Invalid combo on WICKET_KEEPER:",teamCombo);
            return;
        }

        //Add entry to final transaction
        returnBody.finalTransactions.push({
            addPlayer:transaction.add,
            addPlayerString:transaction.addPlayerString,
            dropPlayer:transaction.drop,
            team:transaction.team,
            amount:transaction.amount
        });

        //Update owner team combo map
        ownerTeamComboMap[transaction.team] = teamCombo;

        //push add player to processedPlayers
        processedPlayers.push(transaction.add);
        //push drop player to processedPlayers
        processedPlayers.push(transaction.drop);
        //deduct amount from teamFA in other entries.
        sortedTransactions.forEach((t)=>{
            if(t.team==transaction.team){
                t.teamFA -= transaction.amount;
            }
        })
    });
    
    console.log(returnBody.finalTransactions);
    
    
    //DB Transactions
    //Commit each of final transaction to DB.
    for(const transaction of returnBody.finalTransactions){
        let commitToDBResponse =await commitTransactionToDB(faKey,transaction);
    }
    
    
    //Commit history.
    let historyResponse = await writeFullHistory(returnBody);
    body = returnBody;
    
    
    return {
        statusCode,
        body,
        headers,
    };
};
