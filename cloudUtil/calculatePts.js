import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { QueryCommand,DynamoDBDocument,UpdateCommand,PutCommand,GetCommand } from '@aws-sdk/lib-dynamodb';

const dynamodb = DynamoDBDocument.from(new DynamoDB());


console.log('Loading function');

export const handler = async (event, context) => {
    
    let points = {};
    
    for(const playerName of Object.keys(event)){
        let player = event[playerName];
        
        let playerPoints = {
            potm:0
        };
        
        //POTM
        if("potm" in player){
            playerPoints.potm = 50;
        }
        
        //Batting
        if("batting" in player && Object.keys(player.batting).length>0){
            let batting = player.batting
            playerPoints.runs = parseInt(batting.runs);
            
            playerPoints.sixes = parseInt(batting.sixes)*2;
            playerPoints.fours = parseInt(batting.fours);
            
            playerPoints.duck = (playerPoints.runs==0)?-10:0;
            let srr = parseFloat(batting.srr);
            playerPoints.srr=0;
            if(playerPoints.runs>=15){
                if(srr<=100){
                    playerPoints.srr = -20;
                }
                if(srr>100 && srr<=120){
                    playerPoints.srr = -15;
                }
                if(srr>120 && srr<=140){
                    playerPoints.srr=0;
                }
                if(srr>140 && srr<=160){
                    playerPoints.srr=10;
                }
                if(srr>160 && srr<=180){
                    playerPoints.srr=15;
                }
                if(srr>180 && srr<=200){
                    playerPoints.srr=20;
                }
                if(srr>200){
                    playerPoints.srr=30;
                }
            }
            playerPoints.milestone=0;
            if(playerPoints.runs>=25 && playerPoints.runs<40){
                playerPoints.milestone=10
            }
            if(playerPoints.runs>=40 && playerPoints.runs<60){
                playerPoints.milestone=15
            }
            if(playerPoints.runs>=60 && playerPoints.runs<80){
                playerPoints.milestone=20
            }
            if(playerPoints.runs>=80 && playerPoints.runs<100){
                playerPoints.milestone=25
            }
            if(playerPoints.runs>=100){
                playerPoints.milestone=30
            }
        
        }
        
        //Bowling
        if("bowling" in player && Object.keys(player.bowling).length>0){
            let bowling = player.bowling;
            let wickets = parseInt(bowling.wickets);
            playerPoints.wickets = wickets*30;
            playerPoints.dots = parseInt(bowling.dots);
            playerPoints.maidens = parseInt(bowling.maidens)*25;
            playerPoints.eco=0;
            let overs = parseFloat(bowling.overs);
            if(overs>=2){
                let eco = parseFloat(bowling.eco);
                if(eco<4){
                    playerPoints.eco = 30;
                }
                if(eco>=4 && eco<6){
                    playerPoints.eco = 20;
                }
                if(eco>=6 && eco<7){
                    playerPoints.eco = 10;
                }
                if(eco>=7 && eco<8){
                    playerPoints.eco = 0;
                }
                if(eco>=8 && eco<9){
                    playerPoints.eco = -5;
                }
                if(eco>=9 && eco<10){
                    playerPoints.eco = -10;
                }
                if(eco>=10){
                    playerPoints.eco = -20;
                }
            }
            playerPoints.bowlingmilestone=0;
            switch(wickets){
                case 2:
                    playerPoints.bowlingmilestone=10;
                    break;
                case 3:
                    playerPoints.bowlingmilestone=15;
                    break;
                case 4:
                    playerPoints.bowlingmilestone=20;
                    break;
                case 5:
                    playerPoints.bowlingmilestone=25;
                    break;
                case 6:
                    playerPoints.bowlingmilestone=40;
                    break;
            }
        }
        playerPoints.fielding=0;
        playerPoints.fieldingBonus=0;
        //Fielding
        if("fielding" in player){
            playerPoints.fielding = player.fielding*10;
            if(player.fielding>1){
                playerPoints.fieldingBonus=10;
            }
        }
        
        points[playerName]=playerPoints;
        //console.log("Writing todb");
        const dbCommand = new PutCommand({
            TableName: "match-points",
            Item: {
              matchid: "1",
              playername:playerName,
              ...playerPoints
            },
          });

        const response = await dynamodb.send(dbCommand);
    //console.log(response)
    }
    
    let teamPoints = {};
    
    //teams
    let teams = [
        'angrez1',
        'Chintala9',
        'DMK',
        'JanasenaTDP',
        'Khansaarboyz',
        'Kiran',
        'Mirchi',
        'Pete6',
        'Raool',
        'RoyalDuke',
        'SRK',
        'Sabarishvr',
        'SherKhan',
        'Supi5',
        'WorthVarma',
        'sagar1221'
        ];
    //teams = ['WorthVarma'];
    
    //getTeam Players
    
    let tableName = 'fantasyTeam-staging';
    for(let tp=0;tp<teams.length;tp++){
        let team = teams[tp];
        teamPoints[team]={teamTotalPoints:0};
        
        
        //get team meta
        let teamParams = { TableName: tableName,
                    Key: {
                        id: team,
                        "owner":"team#3227"
                    },
                  };

        let teamCommand = new GetCommand(teamParams);
        let teamDetail = await dynamodb.send(teamCommand);
        let captain = Buffer.from(teamDetail.Item.captain,'base64').toString('ascii').split('-')[1];
        let vicecaptain = Buffer.from(teamDetail.Item.vicecaptain,'base64').toString('ascii').split('-')[1];
        let phaseBooster = false;
        if(teamDetail.Item.phaseBooster){
            phaseBooster=teamDetail.Item.phaseBooster;
        }
        
        //Get current day FA transactions
        let teamPlayersParams = { TableName: "iplPlayer-staging",
                        IndexName: "fantasyTeam-index",
                        KeyConditionExpression: "#playerIcon = :v_faKey", 
                        ExpressionAttributeValues: {
                          ":v_faKey": team
                        },
                        ExpressionAttributeNames:{
                          "#playerIcon": "playerIcon"
                        },
                        "ScanIndexForward": false
                      };
    
        let teamPlayersCommand = new QueryCommand(teamPlayersParams);
        let teamPlayerTransactions = await dynamodb.send(teamPlayersCommand);
        let teamPlayers = teamPlayerTransactions.Items;
        
        for(let p=0;p<teamPlayers.length;p++){
            let teamPlayerPoints=0;
            let teamPlayerName = teamPlayers[p].name;
            let teamPlayerRole = teamPlayers[p].role;
            
            if(teamPlayerName in points){
                let playerPoint = points[teamPlayerName];
                console.log(`Calculating points for ${teamPlayerName}`);
                if("runs" in playerPoint){
                    teamPlayerPoints += playerPoint.runs;
                }
                teamPlayerPoints += playerPoint.potm;
                teamPlayerPoints += playerPoint.fielding;
                
                if("duck" in playerPoint && teamPlayerRole!="BOWLER"){
                    teamPlayerPoints += playerPoint.duck;
                }
                if("fours" in playerPoint){
                    teamPlayerPoints += playerPoint.fours;
                }
                if("milestone" in playerPoint){
                    teamPlayerPoints += playerPoint.milestone;
                }
                
                if("sixes" in playerPoint){
                    teamPlayerPoints += playerPoint.sixes;
                }
                
                if("srr" in playerPoint){
                    teamPlayerPoints += playerPoint.srr;
                }
                
                if("wickets" in playerPoint){
                    teamPlayerPoints += playerPoint.wickets;
                }
                
                if("bowlingmilestone" in playerPoint){
                    teamPlayerPoints += playerPoint.bowlingmilestone;
                }
                
                if("dots" in playerPoint){
                    teamPlayerPoints += playerPoint.dots;
                }
                
                if("eco" in playerPoint){
                    teamPlayerPoints += playerPoint.eco;
                }
                
                if("maidens" in playerPoint){
                    teamPlayerPoints += playerPoint.maidens;
                }
                
                if("fieldingBonus" in playerPoint){
                    teamPlayerPoints += playerPoint.fieldingBonus;    
                }
                
                if(teamPlayerName.toLowerCase()==captain){
                    teamPlayerPoints = (phaseBooster)?teamPlayerPoints*3:teamPlayerPoints*2;
                }
                
                if(teamPlayerName.toLowerCase()==vicecaptain){
                    teamPlayerPoints = (phaseBooster)?teamPlayerPoints*2:teamPlayerPoints*1.5;
                }
                if(phaseBooster&&teamPlayerName.toLowerCase()!=vicecaptain&&teamPlayerName.toLowerCase()!=captain){
                    teamPlayerPoints = teamPlayerPoints*1.5;
                }
            }
            teamPoints[team][teamPlayers[p].name]=teamPlayerPoints;
            teamPoints[team].teamTotalPoints +=teamPlayerPoints;
        }
        
        const dbCommand = new PutCommand({
            TableName: "match-points",
            Item: {
              matchid: "1",
              playername:team,
              ...teamPoints[team]
            },
          });
        const response = await dynamodb.send(dbCommand);
        
        const updatePtsCommand = new UpdateCommand({
            TableName: tableName,
            Key: {
                id: team,
                owner:"meta"
            },
            UpdateExpression: "ADD leaguepoints :points,phase1points :points",
            ExpressionAttributeValues: {
                ":points": teamPoints[team].teamTotalPoints,
            },
            ReturnValues: "ALL_NEW",
        });
    
        const updatePts = await dynamodb.send(updatePtsCommand);
        //console.log(JSON.stringify(addCommand))
    }
    
    return teamPoints;  // Echo back the first key value
    // throw new Error('Something went wrong');
};
