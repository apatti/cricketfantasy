import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { QueryCommand,DynamoDBDocument,UpdateCommand,PutCommand} from '@aws-sdk/lib-dynamodb';

const dynamodb = DynamoDBDocument.from(new DynamoDB());


export const getOwnerDetails = async () =>{
    
    let tableName = 'fantasyTeam-staging';
    
    //Get current day rankings
    let faParams = { TableName: tableName,
                    IndexName: "owner-id-index",
                    KeyConditionExpression: "#owner = :v_faKey", 
                    ExpressionAttributeValues: {
                      ":v_faKey": "meta"
                    },
                    ExpressionAttributeNames:{
                      "#owner": "owner"
                    },
                    "ScanIndexForward": false,
                    "ProjectionExpression":"id,fa,leaguepoints"
                  };

    let rankingCommand = new QueryCommand(faParams);
    
    try{
      
      let rankingItems = await dynamodb.send(rankingCommand);
      let rankings = {};

      if (rankingItems.Items && rankingItems.Items.length > 0) {
        //rankings = rankingItems.Items;
        rankingItems.Items.sort((a, b) => (b.leaguepoints - a.leaguepoints));
        
        rankingItems.Items.forEach((r,index)=>rankings[r.id]={...r,rank:index+1});
        
      } else {
        console.log("No items found in response");
      }
    
      return rankings;
    }
    catch(e){
      console.log(e);
      return [];
    }
    
}

export const compareTransactions = (a,b) =>{
  // Compare amount in descending order
  if (b.amount !== a.amount) {
    return b.amount - a.amount;
  }
  // If amount is same, compare teamRank in ascending order
  if (b.teamRank !== a.teamRank) {
    return b.teamRank - a.teamRank;
  }
  // If amount and rank are same, compare entryTimeString in ascending order
  return new Date(a.entryTimeString) - new Date(b.entryTimeString);
}

export const commitTransactionToDB = async (faKey,transaction) =>{
  let playerTableName = 'iplPlayer-staging';
  //addedPlayerString
  //Update playerinfo for add: updating playerprofile
  let playerToAddTeam = transaction.addPlayerString.split('-')[0];
  const addCommand = new UpdateCommand({
      TableName: playerTableName,
      Key: {
          id: transaction.addPlayer,
          team:playerToAddTeam
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
  let playerToDrop = transaction.dropPlayer;
  if(!playerToDrop.startsWith("FA")){
      let playerToDropTeam = playerToDrop.split('-')[0];
      const removeCommand = new UpdateCommand({
          TableName: playerTableName,
          Key: {
              id: Buffer.from(playerToDrop).toString('base64'),
              team:playerToDropTeam
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
  let tableName = 'fantasyTeam-staging';
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
  return setProcessed;
  
}

export const writeFullHistory = async (faTransactions)=>{
  let entryTime = new Date();
  entryTime.setHours(entryTime.getHours()-7);
  console.log("Writing history");
  const historyCommand = new PutCommand({
          TableName: "freeAgencyHistory",
          Item: {
            eventTime: `${entryTime.getMonth()+1}${entryTime.getDate()}`,
            finalTransactions:faTransactions.finalTransactions,
            allBids:faTransactions.allBids,
            eventCreation:`${entryTime.getMonth()+1}${entryTime.getDate()}${entryTime.getHours()}`,
            eventCreationString:entryTime.toString()
          },
        });

    const response = await dynamodb.send(historyCommand);
    console.log(response)
    return response;
}