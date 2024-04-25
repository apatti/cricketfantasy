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

var tableName = "iplfantasy-league";
var fantasyTeamTable = "fantasyTeam";
var liveScoreTable = "livescore";

if (process.env.ENV && process.env.ENV !== "NONE") {
  fantasyTeamTable = fantasyTeamTable + '-' + process.env.ENV;
}

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

/**********************
 * Example get method *
 **********************/

app.get('/league', async function(req, res) {
  // Add your code here
  let news = [];
  let params = { TableName: "dailyNews" };
    let items;
    do {
      items = await dynamodb.scan(params).promise();
      items.Items.forEach((item) => news.push(item));
      params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey != "undefined");
  news.sort((a,b) => {
    return parseInt(b.id) - parseInt(a.id);
  });
    
  res.json({ statusCode: 200, url: req.url, news: news });
});

app.get('/league/livescore/*', async function(req, res) {

  let entryTime = new Date();
  entryTime.setHours(entryTime.getHours()-7);
  let hourKey = '7';
  if(entryTime.getHours()>2 && entryTime.getHours()<7){
    hourKey = '3';
  }
  let faKey = `team#${entryTime.getMonth()+1}${entryTime.getDate()}${hourKey}`
  let params = { TableName: liveScoreTable,
    KeyConditionExpression: "#teamId = :teamId", 
    ExpressionAttributeValues: {
      ":teamId": faKey
    },
    ExpressionAttributeNames:{
      "#teamId": "teamId"
    },
    "ScanIndexForward": false
  };
  let liveScore = await dynamodb.query(params).promise();
  console.log(liveScore);
  
  res.json({ statusCode: 200, url: req.url, liveScore: liveScore.Items });
});

app.get('/league/standings/*', async function(req, res) {
  // Add your code here
  let params = { TableName: fantasyTeamTable,
                  IndexName: "owner-id-index",
                  KeyConditionExpression: "#owner = :v_purpose", 
                  ExpressionAttributeValues: {
                    ":v_purpose": "meta"
                  },
                  ExpressionAttributeNames:{
                    "#owner": "owner"
                  },
                  "ScanIndexForward": false
                };
  let league = await dynamodb.query(params).promise();
  console.log(league);
  league.Items.sort((a,b) => {
    if(a.leaguepoints < b.leaguepoints){
      return 1}
    if(b.leaguepoints < a.leaguepoints){
      return -1;
    }
    if(b.leaguepoints==a.leaguepoints){
      return (a.phase5points < b.phase5points) ? 1 : -1;
    } 
  });
  res.json({ statusCode: 200, url: req.url, standings: league.Items });
});

app.get('/league/transactions/*', async function(req, res) {
  if(!req.query || req.query.eventTime==null || req.query.eventTime==''){
    res.json({ statusCode: 400, url: req.url, error: "eventTime is required" });
    return;
  }

  let eventTime = req.query.eventTime;
  let params = { TableName: "freeAgencyHistory", 
    Key: { 
      eventTime: eventTime,
    }
  };

  await dynamodb.get(params, function(err, data) {
    if (err) {
      res.json({ statusCode: 400, url: req.url, error: err });
    } else {
      let transactions = [];
      transactions.processingTime = data.Item.eventCreationString;
      let finalTransactions = data.Item.finalTransactions;
      let allTransactions = data.Item.allBids;

      for(let i=0;i<finalTransactions.length;i++){
        let transaction = {win:finalTransactions[i]};
        transaction.bids = allTransactions.filter(bid=>bid.add==finalTransactions[i].addPlayer&&bid.drop!=finalTransactions[i].dropPlayer);
        transactions.push(transaction);
      }
      res.json({ statusCode: 200, url: req.url, transactions: transactions });
    }
  });

});

app.get('/league/*', async function(req, res) {
  // Add your code here
  let params = { TableName: tableName, 
                  Key: { id: req.params[0]},
                  AttributesToGet: ["name", "benchCount", "maxPlayers", "maxTeamCount", "currentTeamCount", "commissioner", "leagueKey","faBudget","minFABidAmount"]};
  let league = await dynamodb.get(params).promise();
  res.json({ statusCode: 200, url: req.url, league: league.Item });
});

/****************************
* Example post method *
****************************/

app.post('/league', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/league/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/league', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/league/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/league', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/league/*', function(req, res) {
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
