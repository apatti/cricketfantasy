/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require('aws-sdk')

const axios = require('axios');
const cheerio = require('cheerio');

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const dynamodb = new AWS.DynamoDB.DocumentClient();


// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())


var tableName = "iplPlayer";
var bucketName = "rolepics00931"
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

app.get('/players', async function(req, res) {
  // Add your code here
  let players = [];
  let params = { TableName: tableName };
    let items;
    do {
      items = await dynamodb.scan(params).promise();
      items.Items.forEach((item) => players.push(item));
      params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey != "undefined");
  res.json({ statusCode: 200, url: req.url, players: players })
  
}); 

app.get('/players/freeAgents',async function(req, res) {
  // Add your code here
  let players = [];
  let params = { TableName: tableName,
                  FilterExpression: "attribute_not_exists(playerIcon) or playerIcon = :null or playerIcon = :undefined",
                  ExpressionAttributeValues: {
                  ':null': null,
                  ':undefined':'undefined'
                }};
    let items;
    do {
      items = await dynamodb.scan(params).promise();
      items.Items.forEach((item) => players.push(item));
      params.ExclusiveStartKey = items.LastEvaluatedKey;
  } while (typeof items.LastEvaluatedKey != "undefined");
  res.json({ statusCode: 200, url: req.url, players: players })
  
}); 

app.get('/players/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/players', async function(req, res) {
  // Add your code here
  const baseUrl = "https://www.espncricinfo.com";
  let successTeams =[];
  let failedTeams = [];

  for(const k in req.body){
    var teamName = k;
    var teamUrl = req.body[k];
    //var data = axios
    var data = await(await axios.get(teamUrl)).data;
    const $ = cheerio.load(data);
    const playerElements = $('div.ds-relative.ds-flex.ds-flex-row.ds-space-x-4.ds-p-3');
    
    for(const playerElement of playerElements){
        let role = $(playerElement).find('.ds-text-tight-s.ds-font-regular.ds-mb-2.ds-mt-1').text().trim();
        let icon = "https://fantasyrolepics.s3.us-west-1.amazonaws.com/batsman.jpg";
        if(role.toLowerCase().lastIndexOf('wicketkeeper')>-1){
            role = "WICKET_KEEPER";
            icon = "https://fantasyrolepics.s3.us-west-1.amazonaws.com/keeper.jpg";
        }
        else if(role.toLowerCase().lastIndexOf('allrounder')>-1){
            role = "ALL_ROUNDER";
            icon = "https://fantasyrolepics.s3.us-west-1.amazonaws.com/allrounder.jpg";
        }
        else if(role.toLowerCase().lastIndexOf('bowler')>-1){
            role = "BOWLER";
            icon="https://fantasyrolepics.s3.us-west-1.amazonaws.com/cricketfastbowler.jpeg"
        }
        else{
            role = "BATSMAN";
        }
        
        let name =$(playerElement).find('.ds-popper-wrapper.ds-inline').text().trim(); 
        let player = {
            id:Buffer.from(`${teamName.toLowerCase()}-${name.toLowerCase()}`).toString('base64'),
            name: name,
            profile:`${baseUrl}${$(playerElement).find('.ds-inline-flex.ds-items-start.ds-leading-none').attr('href')}`,
            playerIcon:`${$(playerElement).find('.ds-block').attr('data-src')}`,
            icon:icon,
            role: role,
            team:teamName
        };  
        let params = {
            
            TableName : tableName,
            Item: player
        };
        
        try{
          dynamodb.put(params, function(err, data) {
            if (err) {
              console.log("Unable to add player", name, ". Error JSON:", JSON.stringify(err, null, 2));
              failedTeams.push(name);
              //res.json({ statusCode: 500, error: err.message, url: req.url });
            } else {
              //res.json({ statusCode: 200, url: req.url, body: JSON.stringify(params.Item) })
              console.log("PutItem succeeded:", name);
              successTeams.push(name);
            }
          });
        }
        catch(err){
          res.json({ statusCode: 500, error: "Exception:"+err.message, url: req.url });
        }
    }
}
  res.json({success: 'post call succeed!', url: req.url, body: {successTeams, failedTeams}})
});

app.post('/players/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/players', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/players/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/players', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/players/*', function(req, res) {
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
