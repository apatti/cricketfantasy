'use client'

import { Flex, Authenticator, Loader, TableHead,TableCell,TableRow,TableBody,TableFoot,Table, Heading,SelectField,Divider,Grid, Label,Text, SwitchField, Input,Button } from '@aws-amplify/ui-react';
import { get,put } from '@aws-amplify/api-rest';

import { getCurrentUserName } from '@/app/util';
import { useRouter } from 'next/navigation'



import { useState, useEffect } from 'react';

export default function Home({params}) {
    const [isLoading, setIsLoading] = useState(true);
    const [faList,setFAList] = useState([]);
    const [faBudgetVariation,setFABudgetVariation]=useState("success");
    const [isCaptainError,setCaptainError]=useState(false)
    const [userName,setUserName] = useState("");
    const [enableEdit,setEnableEdit] = useState(false)
    const [isEditMode,setEditMode] = useState(false);
    const [faAmountHasError,setFaAmountHasError] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        id:"",
        phaseBooster: false,
        captain: "TBD",
        vicecaptain: "TBD",
        fa: 0,
        teamRoster: [],
        changes:{
            faChanges:{}
        }
    });

    const getUserName = async() =>{
        const username = await getCurrentUserName();
        setUserName(username);
        if(!params.fantasyUser || username==params.fantasyUser){
            setEnableEdit(true);
        }
        else{
            setEnableEdit(false);
        }
    }

    const getTeam = async () => {
        try {
            if(!userName){
                return;
            }
            let fantasyUser = params.fantasyUser;
            if(!fantasyUser){
                fantasyUser = userName;
            }
            const restOperation = get({ 
              apiName: 'fantasyapi',
              path: '/fantasyTeams/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==/'+fantasyUser 
            });
            const response = await restOperation.response;
            const teamResponse = await response.body.json()
            setIsLoading(false);
            var teamData = teamResponse.team.team;
            var teamRoster = teamData.map(item=>{
                var teamMeta = item.split("#");
                return {
                    id:teamMeta[0],
                    name:teamMeta[1],
                    role:teamMeta[2],
                    team:teamMeta[3],
                    profilePic:teamMeta.length>4?teamMeta[4]:'',
                    profileLink:teamMeta.length>5?teamMeta[5]:'/'
                }
            });
            
            if(teamResponse.team.fa>50&&teamResponse.team.fa<100){
                setFABudgetVariation("warning")
            }
            if(teamResponse.team.fa<50){
                setFABudgetVariation("error");
            }
            
            setFormData({
                ...formData,
                id:teamResponse.team.id,
                phaseBooster: teamResponse.team.phaseBooster,
                captain: teamResponse.team.captain,
                vicecaptain: teamResponse.team.vicecaptain,
                fa: teamResponse.team.fa,
                teamRoster: teamRoster
            });
          } catch (e) {
            console.log('GET call failed: ', e);
          }
    }

    const getFAs = async () => {
        setIsLoading(true);
        const restOperation = get({ 
            apiName: 'fantasyapi',
            path: '/players/freeAgents'
          });
          const response = await restOperation.response;
          const faResponse = await response.body.json()
          //data.players 
          setFAList(faResponse.players);
          setIsLoading(false);
    }

    useEffect( () => {
        getUserName();
    }, []);
    useEffect(()=>{
        getTeam();
    },[userName])

    const editSubmit = async (e) =>{
        e.preventDefault();
        console.log(e);
        if(!userName){
            return;
        }
        let fantasyUser = params.fantasyUser;
        if(!fantasyUser){
            fantasyUser = userName;
        }
        const restOperation = put({ 
          apiName: 'fantasyapi',
          path: '/fantasyTeams/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==/'+fantasyUser,
          options: {
            body:formData.changes 
          }
        });
        const response = await restOperation.response;
        const teamResponse = await response.body.json();
        console.log(teamResponse);
        alert(JSON.stringify(teamResponse));
    }

    return(
        <Authenticator.Provider>
        <Flex padding="24px 32px 24px 32px">
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
            <Grid
                as="form"
                padding="24px 32px 24px 32px"
                direction="column"
                alignItems="flex-start"
                wrap ="nowrap"
                gap="1rem"
                onSubmit={(e)=>editSubmit(e)}
             >
                <Heading width="auto" level={3}>{formData.id}</Heading>
                <Divider/>
                <SwitchField
                    isDisabled={!enableEdit}
                    label="Edit Mode:"
                    labelPosition="start"
                    trackCheckedColor='red'
                    size="large"
                    isChecked={isEditMode}
                    onChange={(e)=>{
                        if(e.target.checked==true){
                            getFAs();
                        }
                        setEditMode(e.target.checked);
                    }}
                    ></SwitchField>
                <SelectField
                    name="captain"
                    label="Captain"
                    isDisabled={!isEditMode}
                    value={formData.captain.split('#')[0]}
                    hasError={isCaptainError}
                    errorMessage="Captain and Vice-captain can't be same player"
                    onChange={(e) => {
                        e.preventDefault();
                        if(e.target.value==formData.vicecaptain.split('#')[0]){
                            setCaptainError(true);
                            return;
                        }
                        setFormData({...formData, captain:e.target.value, changes:{...formData.changes, captain:e.target.value}});
                    }}
                    >
                        {formData.teamRoster.map((player, index) => (
                            <option value={player.id}>{player.name}</option>
                        ))}
                </SelectField>
                <SelectField
                    name="vicecaptain"
                    label="Vice-Captain"
                    isDisabled={!isEditMode}
                    value={formData.vicecaptain.split('#')[0]}
                    hasError={isCaptainError}
                    errorMessage="Captain and Vice-captain can't be same player"
                    onChange={(e) => {
                        e.preventDefault();
                        if(e.target.value==formData.vicecaptain.split('#')[0]){
                            setCaptainError(true);
                            return;
                        }
                        setFormData({...formData, vicecaptain:e.target.value, changes:{...formData.changes, vicecaptain:e.target.value}});
                    }}
                    >
                        {formData.teamRoster.map((player, index) => (
                            <option value={player.id}>{player.name}</option>
                        ))}
                </SelectField>
                <Label htmlFor="fa_amount">FA Budget:</Label>
                <Text id="fa_amount" 
                    variation={faBudgetVariation}>${formData.fa}
                </Text>
                
                <Table
                    highlightOnHover={true}
                    variation="striped"
                    padding="10x">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Team</TableCell>
                            {isEditMode&&<TableCell>Replacement Player</TableCell>}
                            {isEditMode&&<TableCell>FA Amount</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formData.teamRoster.map((player, index) => (
                            <TableRow key={player.id}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.role}</TableCell>
                                <TableCell>{player.team}</TableCell>
                                {isEditMode&&<TableCell>
                                        <SelectField
                                            name={index+"_replacement"}
                                            placeholder="Select replacement player"
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setFormData({...formData, changes:{...formData.changes, faChanges:{...formData.changes.faChanges,[player.id]:{...formData.changes.faChanges[[player.id]],toAdd:e.target.value}} }});
                                            }}
                                            >
                                                {faList.map((player, index) => (
                                                    <option value={player.id}>{player.name}</option>
                                                ))}
                                        </SelectField>
                                    </TableCell>}
                                {isEditMode&&<TableCell>
                                        <Input name={index+"_faAmount"} inputMode="numeric" hasError={faAmountHasError} onChange={(e)=>{
                                            e.preventDefault();
                                            if(e.currentTarget.value<=0 || e.currentTarget.value>formData.fa){
                                                setFaAmountHasError(true);
                                                return;
                                            }
                                            setFormData({...formData, changes:{...formData.changes, faChanges:{...formData.changes.faChanges,[player.id]:{...formData.changes.faChanges[[player.id]],amount:e.currentTarget.value}} }});
                                            setFABudgetVariation(false);
                                        }}/>
                                    </TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFoot>
                        <TableRow>
                            <TableCell colSpan="6">
                                <Button type="submit" 
                                        variation="primary" 
                                        colorTheme="error" isFullWidth={true} isDisabled={!isEditMode}>Save</Button>
                            </TableCell>
                        </TableRow>
                    </TableFoot>
                </Table>
            </Grid>
        </Flex>
        </Authenticator.Provider>
      );
}