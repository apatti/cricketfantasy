/* Amplify Params - DO NOT EDIT
	AUTH_IPLFANTASY_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const AWS = require('aws-sdk')
const express = require('express')
const applyMiddleware = require('./middleware').applyMiddleware;


const dynamodb = new AWS.DynamoDB.DocumentClient();
var leagueTable = "iplfantasy-league";
var iplPlayerTable = "iplPlayer";

// declare a new express app
const app = express()
applyMiddleware(app);


var tableName = "fantasyTeam";

if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
  iplPlayerTable = iplPlayerTable + '-' + process.env.ENV;
}

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/fantasyTeams', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/fantasyTeams/faTransactions/*', async function(req, res) {
  let pathParam = req.apiGateway.event.pathParameters.proxy;
  if(!pathParam){
    res.json({success:'no param',data:[]});
    return;
  }

  const PARAM_REGEX = /faTransactions\/(.*)\/(.*)/;
  const [, lid, tid] = pathParam.match(PARAM_REGEX);

  if(req.user && req.user.Username != tid){
    console.log("Requestor is not the owner of the team", tid, req.user.Username);
    res.json({ statusCode: 403, url: req.url, body: "Forbidden" });
    return;
  }
  var entryTime = new Date();
  entryTime.setHours(entryTime.getHours()-7);
  let params = { TableName: tableName, 
    Key: { 
      id: tid,
      owner: `FA#${entryTime.getMonth()+1}${entryTime.getDate()}`
    }
  };

  await dynamodb.get(params, function(err, data) {
    if(err){
      res.json({ statusCode: 200, error: err.message, url: req.url, transactions: [] });
    }
    else{
      if(data.Item === undefined){
        res.json({ statusCode: 200, url: req.url, transactions: [] });
        return;
      }
      let item = data.Item;
      if(item.processed){
        res.json({ statusCode: 200, url: req.url, transactions: [] });
        return;
      }
      let transactions = Object.keys(item).reduce((accumulator, key) => {
        if(key !== "id" && key !== "owner" && key !== "league" && key !=="entryTime" && key !=="processed"){
          let addedPlayer = key.split("#")[0];
          let droppedPlayer = key.split("#")[1];
          let faEntryTime = item[key].split("#")[1];
          let amount = item[key].split("#")[0];
          
          accumulator.push({
            "add":Buffer.from(addedPlayer).toString("utf-8"),
            "drop":Buffer.from(droppedPlayer).toString("utf-8"),
            "amount":amount,
            "entryTime":Buffer.from(faEntryTime).toString("utf-8")})
        }
        return accumulator;
      }, []);
      transactions.sort((a,b) => new Date(b.entryTime) - new Date(a.entryTime));
      res.json({ statusCode: 200, url: req.url, transactions: transactions });
    }
  });
  //res.json({ statusCode: 200, url: req.url, transactions: transactions.Item }); 
});

app.get('/fantasyTeams/completedFATransactions/*', async function(req, res) {
  let pathParam = req.apiGateway.event.pathParameters.proxy;
  if(!pathParam){
    res.json({success:'no param',data:[]});
    return;
  }

  const PARAM_REGEX = /completedFATransactions\/(.*)\/(.*)/;
  const [, lid, tid] = pathParam.match(PARAM_REGEX);

  var entryTime = new Date();
  entryTime.setHours(entryTime.getHours()-7);

  var params = {
    TableName: tableName,
    KeyConditionExpression: '#id = :hkey AND begins_with(#owner,:rkey)',
    ExpressionAttributeValues: {
      ':hkey': tid,
      ':rkey': 'FA#'
    },
    ExpressionAttributeNames:{
      '#id': 'id',
      '#owner': 'owner'
    }
  };

  await dynamodb.query(params, function(err, data) {
    //console.log("Completed data:",JSON.stringify(data));
    if(err){
      res.json({ statusCode: 200, error: err.message, url: req.url, transactions: [] });
    }
    else{
      if(data.Items === undefined){
        res.json({ statusCode: 200, url: req.url, transactions: [] });
        return;
      }
      let transactions = [];
      for(let i=0;i<data.Items.length;i++){
        let item = data.Items[i];
        if(!item.processed){
          res.json({ statusCode: 200, url: req.url, transactions: [] });
          return;
        }
        let transaction = Object.keys(item).reduce((accumulator, key) => {
          if(key !== "id" && key !== "owner" && key !== "league" && key !=="entryTime" && key !=="processed"){
            console.log(key);
            let addedPlayer = key.split("#")[0];
            let droppedPlayer = key.split("#")[1];
            let faEntryTime = item[key].split("#")[1];
            let amount = item[key].split("#")[0];
            if(!faEntryTime){
              faEntryTime = entryTime.toISOString();
            }
            else{
              faEntryTime = Buffer.from(faEntryTime, 'base64').toString("utf-8");
            }
            accumulator.push({
              "add":Buffer.from(addedPlayer).toString("utf-8"),
              "drop":Buffer.from(droppedPlayer).toString("utf-8"),
              "amount":amount,
              "entryTime":faEntryTime,
              "processed":item.processed})
          }
          return accumulator;
        }, []);
        transactions.push(transaction);
      }
      transactions.sort((a,b) => new Date(b[0].entryTime) - new Date(a[0].entryTime));
      res.json({ statusCode: 200, url: req.url, transactions: transactions });
    }
  });
  //res.json({ statusCode: 200, url: req.url, transactions: transactions.Item }); 
});

app.get('/fantasyTeams/*', async function(req, res) {
  let pathParam = req.apiGateway.event.pathParameters.proxy;
  if(!pathParam){
    res.json({success:'no param',data:[]});
    return;
  }

  const PARAM_REGEX = /(.*)\/(.*)/;
  const [, lid, tid] = pathParam.match(PARAM_REGEX);

  let ownerKey = "v0-team";
  if(req.user && req.user.Username != tid){
    console.log("Requestor is not the owner of the team", tid, req.user.Username);
    ownerKey = "meta";
    //res.json({ statusCode: 403, url: req.url, body: "Forbidden" });
    //return;
  }

  let params = { TableName: tableName, 
    Key: { 
      id: tid,
      owner: ownerKey
    }
  };
  let teamObj = await dynamodb.get(params).promise();
  let teamMeta = teamObj.Item;

  let playerParams = { TableName: iplPlayerTable,
    IndexName: "fantasyTeam-index",
    KeyConditionExpression: "playerIcon = :v_tid", 
    ExpressionAttributeValues: {
      ":v_tid": tid,
    },
    "ScanIndexForward": false
  };
let teamPlayers = await dynamodb.query(playerParams).promise();
if(teamPlayers.Items.length === 0){
  res.json({ statusCode: 200, url: req.url, team: teamMeta });
  return;
}
teamMeta.team = teamPlayers.Items.map((player) => `${player.id}#${player.name}#${player.role}#${player.team}#${player.icon}#${player.playerCost}`);

res.json({ statusCode: 200, url: req.url, team: teamMeta });
  // Add your code here
});



/****************************
* Example post method *
****************************/

app.post('/fantasyTeams', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/fantasyTeams/{lid}/{tid}/freeAgency', function(req, res) {
  // Add your code here
  
  //PK: PlayerID
  //SK: FA#MMDD
  //Fields: PTA#PTR, Value:$$

  let faAddRequest = req.body;
  let entryTime = new Date(); 
  entryTime.setHours(entryTime.getHours()-7);
  
  let params = {
      TableName : tableName,
      Item: {
        id:req.params[1],
        league:req.params[0],
        owner:`FA#${entryTime.getMonth()+1}${entryTime.getDate()}`,
        ...faAddRequest
      }
  };
  
  try{
    dynamodb.put(params, function(err, data) {
      if (err) {
        res.json({ statusCode: 500, error: err.message, url: req.url });
      } else {
        res.json({ statusCode: 201, url: req.url, body: JSON.stringify(params.Item) })
        //console.log("PutItem succeeded:", name);
      }
    });
  }
  catch(err){
    res.json({ statusCode: 500, error: "Exception:"+err.message, url: req.url });
  }
}
);

app.post('/fantasyTeams/*', async function(req, res) {
  // Add your code here
  let teamRequest = req.body;

  let leagueParams = { TableName: leagueTable, 
    Key: { id: req.params[0]},
    AttributesToGet: ["maxTeamCount", "currentTeamCount", "leagueKey"]};
  
  let league = await dynamodb.get(leagueParams).promise();
  if(!league.Item){
    res.json({ statusCode: 404, url: req.url, body: "League not found" });
    return;
  }
  if(league.Item.currentTeamCount >= league.Item.maxTeamCount){ //league is full   
    res.json({ statusCode: 400, url: req.url, body: "League is full" });
    return;
  }

  if(!teamRequest.leagueKey || teamRequest.leagueKey !== league.Item.leagueKey){
    res.json({ statusCode: 403, url: req.url, body: "Invalid league key" });
    return;
  }

  //wrong choice of sort key name
  let team = {
    ...teamRequest,
    owner: "meta",
    league: req.params[0],
  }

  let entryTime = new Date();
  entryTime.setHours(entryTime.getHours()-7);
  let initialTeam = [
    "FA1#Empty Spot 1#Player#IPL#https://fantasyrolepics.s3.us-west-1.amazonaws.com/dukesFA1.jpeg",
    "FA2#Empty Spot 2#Player#IPL#https://fantasyrolepics.s3.us-west-1.amazonaws.com/dukesFA1.jpeg",
    "FA3#Empty Spot 3#Player#IPL#https://fantasyrolepics.s3.us-west-1.amazonaws.com/dukesFA1.jpeg",
    "FA4#Empty Spot 4#Player#IPL#https://fantasyrolepics.s3.us-west-1.amazonaws.com/dukesFA1.jpeg",
    "FA5#Empty Spot 5#Player#IPL#https://fantasyrolepics.s3.us-west-1.amazonaws.com/dukesFA1.jpeg",
    "FA6#Empty Spot 6#Player#IPL#https://fantasyrolepics.s3.us-west-1.amazonaws.com/dukesFA1.jpeg"];

  const requests = [{
    PutRequest:{
      Item: {
        league: req.params[0],
        owner: "meta",
        ...teamRequest
      }
    }
  },{
    PutRequest:{
      Item: {
        league: req.params[0],
        owner: "v0-team",
        team: dynamodb.createSet(initialTeam),
        id: teamRequest.id,
        captain: teamRequest.captain?teamRequest.captain:"FA1#Empty Spot 1",
        vicecaptain: teamRequest.vicecaptain?teamRequest.vicecaptain:"FA2#Empty Spot 2",
        fa:200,
        entryTime: entryTime.toISOString()
      }
    }
  },{
    PutRequest:{
      Item: {
        league: req.params[0],
        owner: entryTime.toISOString()+"#team",
        team: dynamodb.createSet(initialTeam),
        id:teamRequest.id,
        captain: teamRequest.captain?teamRequest.captain:"FA1#Empty Spot 1",
        vicecaptain: teamRequest.vicecaptain?teamRequest.vicecaptain:"FA2#Empty Spot 2",
        fa:200,
        entryTime: entryTime.toISOString()
      }
    }
  }
];

  let params = {
    RequestItems: {
      [tableName]: requests
    }
  };
  
  dynamodb.batchWrite(params,async function(err,data){
    if(err){
      console.log("Unable to add team", teamRequest.teamName, ". Error JSON:", JSON.stringify(err, null, 2));
      res.json({ statusCode: 500, error: err.message, url: req.url });
      return;
    } else {
      let leagueUpdate = await dynamodb.update({
        TableName: leagueTable,
        Key: { id: req.params[0] },
        UpdateExpression: "SET currentTeamCount = currentTeamCount + :currentTeamChange",
        ExpressionAttributeValues: {
          ":currentTeamChange": 1
        },
        ReturnValues: "ALL_NEW"
      }).promise();
      team.currentTeamCount = leagueUpdate.Attributes.currentTeamCount;
      console.log(leagueUpdate);
      console.log("PutItem succeeded:", teamRequest.teamName);
      res.json({ statusCode: 200, url: req.url, body: team });
    }
  })

  /*
  dynamodb.put(params,async function(err,data){
    if(err){
      console.log("Unable to add team", teamRequest.teamName, ". Error JSON:", JSON.stringify(err, null, 2));
      res.json({ statusCode: 500, error: err.message, url: req.url });
      return;
    } else {
      let leagueUpdate = await dynamodb.update({
        TableName: leagueTable,
        Key: { id: req.params[0] },
        UpdateExpression: "SET currentTeamCount = currentTeamCount + :currentTeamChange",
        ExpressionAttributeValues: {
          ":currentTeamChange": 1
        },
        ReturnValues: "ALL_NEW"
      }).promise();
      team.currentTeamCount = leagueUpdate.Attributes.currentTeamCount;
      console.log(leagueUpdate);
      console.log("PutItem succeeded:", teamRequest.teamName);
      res.json({ statusCode: 200, url: req.url, body: team });
    }
  });
  */
  //res.json({ statusCode: 200, url: req.url, body: req.body });
  
});
/****************************
* Example put method *
****************************/

app.put('/fantasyTeams', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/fantasyTeams/*', async function(req, res) {
  // Add your code heref
  let pathParam = req.apiGateway.event.pathParameters.proxy;
  if(!pathParam){
    res.json({success:'no param',data:[]});
    return;
  }

  const PARAM_REGEX = /(.*)\/(.*)/;
  const [, lid, tid] = pathParam.match(PARAM_REGEX);
  if(!req.user || req.user.Username !== tid){
    console.log("Requestor is not the owner of the team", tid, req.user.Username);
    res.json({ statusCode: 403, url: req.url, body: "Forbidden" });
    return;
  }

  var changes = req.body;
  let entryTime = new Date();
  entryTime.setHours(entryTime.getHours()-7);
  var {faChanges:_,...nonFa} = changes;
  nonFa['entryTime']=entryTime.toISOString();
  var itemKeys = Object.keys(nonFa);
  
  //Update V0-Team, create new currentDate#team, if needed create fA entries

  let v0UpdateParams = {
    TableName: tableName,
    Key: {
      id: tid,
      owner: 'v0-team'
    },
    ReturnValues: "ALL_NEW",
    UpdateExpression: `SET ${itemKeys.map((k, index) =>`#field${index} = :value${index}`).join(', ')}`,
    ExpressionAttributeNames: itemKeys.reduce((accumulator, k, index) => ({ ...accumulator, [`#field${index}`]: k }), {}),
    ExpressionAttributeValues: itemKeys.reduce((accumulator, k, index) => ({ ...accumulator, [`:value${index}`]: nonFa[k] }), {}),
  }
  
  console.log("v0-Team update:",JSON.stringify(v0UpdateParams));
  await dynamodb.update(v0UpdateParams, function(err, data) {
    if (err) {
      res.json({ statusCode: 500, error: err.message, url: req.url });
      return;
    } else {
      console.log("v0-Team update succeeded:", tid);
      //console.log(JSON.stringify(data, null, 2));
      let params = { 
        TableName : tableName,
        Item: {
          ...data.Attributes,
          id:tid,
          owner: entryTime.toISOString()+"#team"
        }
      };
      console.log("backup:",JSON.stringify(params));
      dynamodb.put(params,async function(err,data){
        if(err){
          console.log("Unable to add secondary team, error JSON:", JSON.stringify(err, null, 2));
          res.json({ statusCode: 500, error: err.message, url: req.url });
          return;
        } else {
          console.log("PutItem succeeded:", tid);
          if("faChanges" in changes && Object.keys(changes.faChanges).length > 0){
            let faChanges = changes.faChanges;
            //faChanges['entryTime']=entryTime.toISOString();
            let faEntryTime = Buffer.from(entryTime.toISOString()).toString('base64');
            var faKeys = Object.keys(faChanges);
            let faUpdateParams = {
              TableName: tableName,
              Key: {
                id: tid,
                owner: `FA#${entryTime.getMonth()+1}${entryTime.getDate()}`
              },
              ReturnValues: "ALL_NEW",
              UpdateExpression: `SET ${faKeys.map((k, index) =>`#field${index} = :value${index}`).join(', ')}, entryTime = :entryTime`,
              ExpressionAttributeNames: faKeys.reduce((accumulator, k, index) => ({ ...accumulator, [`#field${index}`]: `${faChanges[k].toAdd}#${k}#${faEntryTime}` }), {}),
              ExpressionAttributeValues: faKeys.reduce((accumulator, k, index) => ({ ...accumulator, [`:value${index}`]: faChanges[k].amount }), {':entryTime':entryTime.toISOString()})
            }
            console.log("FA Update:",JSON.stringify(faUpdateParams));
            await dynamodb.update(faUpdateParams, function(err, data) {
              if (err) {
                res.json({ statusCode: 500, error: err.message, url: req.url });
                return;
              } else {
                console.log("FA update succeeded:", tid);
                console.log(JSON.stringify(data, null, 2));
                res.json({ statusCode: 200, url: req.url, body: data.Attributes });
              }
            });
          }
          else{
            res.json({ statusCode: 200, url: req.url });
          }
        }
      });
    }
  });

  //res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/fantasyTeams', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/fantasyTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
