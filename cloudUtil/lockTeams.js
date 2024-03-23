import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument,UpdateCommand,GetCommand,PutCommand } from '@aws-sdk/lib-dynamodb';

const dynamodb = DynamoDBDocument.from(new DynamoDB());


console.log('Loading function');

export const handler = async (event, context) => {

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
        
    //let teams = ['angrez1'];
    let tableName = 'fantasyTeam-staging';
    
    for(const team of teams){
        console.log(`Locking ${team}`);
        
        //Read v0
        let teamParams = { TableName: tableName,
                    Key: {
                        id: team,
                        "owner":"v0-team"
                    },
                  };

        let teamCommand = new GetCommand(teamParams);
        let teamDetail = await dynamodb.send(teamCommand);
        console.log(JSON.stringify(teamDetail.Item));
        if(!teamDetail.Item.phaseBooster){
            teamDetail.Item.phaseBooster=false;
        }
        const teamUpdateCommand = new UpdateCommand({
            TableName: tableName,
            Key: {
                id: team,
                owner:"meta"
            },
            UpdateExpression: "SET #fieldCap = :cap, #fieldVCap = :vcap, #fieldFA = :fa, #fieldPbooster = :phasebooster",
            ExpressionAttributeNames:{
                "#fieldCap":"captain",
                "#fieldVCap":"vicecaptain",
                "#fieldFA":"fa",
                "#fieldPbooster":"phaseBooster"
            },
            ExpressionAttributeValues: {
                ":cap": teamDetail.Item.captain,
                ":vcap":teamDetail.Item.vicecaptain,
                ":fa":teamDetail.Item.fa,
                ":phasebooster":teamDetail.Item.phaseBooster
            },
            ReturnValues: "ALL_NEW",
        });
        
        const lockTeam = await dynamodb.send(teamUpdateCommand);
        console.log("LockTeam:",lockTeam);
        
        var entryTime = new Date();
        entryTime.setHours(entryTime.getHours()-7);
        
        const teamPutCommand = new PutCommand({
            TableName: tableName,
            Item: {
              id: team,
              owner:`team#${entryTime.getMonth()+1}${entryTime.getDate()}${entryTime.getHours()}`,
              captain:teamDetail.Item.captain,
              vicecaptain:teamDetail.Item.vicecaptain,
              fa:teamDetail.Item.fa,
              phaseBooster:teamDetail.Item.phaseBooster
            },
        });
        const bkpLockTeam = await dynamodb.send(teamPutCommand);
        console.log("Backup:",bkpLockTeam);    
    }
    console.log("Lock process completed");
    
};
