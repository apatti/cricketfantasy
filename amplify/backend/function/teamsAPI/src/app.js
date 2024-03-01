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

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const dynamodb = new AWS.DynamoDB.DocumentClient();

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

var tableName = "cricketTeam";
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

app.get('/iplTeams', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/iplTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/iplTeams', function(req, res) {
	try{
  const timestamp = new Date().toISOString();
  // Add your code here
  var putRequests = [];
  for(let i=0; i<req.body.length; i++){
    putRequests.push({
      PutRequest:{
        Item: {
          ...req.body[i],
          id: new Buffer.from(req.body[i].shortName.toLowerCase()).toString('base64'),
          createdAt: timestamp,
          updatedAt: timestamp,
          userId: getUserId(req)
        }
      }
    })
  }
  let params = {
    RequestItems: {
    [tableName]: putRequests
  }
  }
  //console.log(JSON.stringify(params));

  dynamodb.batchWrite(params, (err, data) => {
    if (err) {
      res.json({ statusCode: 500, error: err.message, url: req.url });
    } else {
      res.json({ statusCode: 200, url: req.url, body: JSON.stringify(params.Item) })
    }
  });
	}catch(err){
		res.json({ statusCode: 500, error: "Exception:"+err.message, url: req.url });
	}
});

app.post('/iplTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/iplTeams', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/iplTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/iplTeams', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/iplTeams/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

const getUserId = (request) => {
  try {
    const reqContext = request.apiGateway.event.requestContext;
    const authProvider = reqContext.identity.cognitoAuthenticationProvider;
    return authProvider ? authProvider.split(":CognitoSignIn:").pop() : "UNAUTH";
  } catch (error) {
    return "UNAUTH";
  }
}

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
