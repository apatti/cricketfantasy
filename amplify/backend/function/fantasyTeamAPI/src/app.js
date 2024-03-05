/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const AWS = require('aws-sdk')
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const dynamodb = new AWS.DynamoDB.DocumentClient();
var leagueTable = "iplfantasy-league";

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

var tableName = "fantasyTeam";

if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
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

app.get('/fantasyTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/fantasyTeams', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

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
  
  let initialTeam = ["FA1","FA2","FA3","FA4","FA5"];

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
        teamPayload: JSON.stringify(initialTeam),
        team: dynamodb.createSet(initialTeam),
        id: teamRequest.id,
        entryTime: entryTime.toISOString()
      }
    }
  },{
    PutRequest:{
      Item: {
        league: req.params[0],
        owner: entryTime.toISOString()+"#team",
        teamPayload: JSON.stringify(initialTeam),
        team: dynamodb.createSet(initialTeam),
        id:teamRequest.id,
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

app.put('/fantasyTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
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
