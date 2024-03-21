'use client'

import { Flex, Authenticator, Loader, TableHead,TableCell,TableRow,TableBody,
        TableFoot,Table, Heading,SelectField,Divider,Grid, Label,Text, 
        SwitchField, Input,Button, Alert,Accordion } from '@aws-amplify/ui-react';
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
    const [generalUserErrorMessage, setGeneralUserErrorMessage] = useState("");
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
    const [pendingTransactions, setPendingTransactions] = useState([]);
    const [completedTransactions, setCompletedTransactions] = useState([]);

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

    const getPendingTransactions = async () => {
        if(!userName){
            return;
        }
        const restOperation = get({ 
            apiName: 'fantasyapi',
            path: '/fantasyTeams/faTransactions/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==/'+userName
          });
          const response = await restOperation.response;
          const pendingTransactionsResponse = await response.body.json()
          //data.players 
          setPendingTransactions(pendingTransactionsResponse.transactions);
          //setIsLoading(false);
    }

    const getCompletedTransactions = async () => {
        if(!userName){
            return;
        }
        const restOperation = get({ 
            apiName: 'fantasyapi',
            path: '/fantasyTeams/completedFATransactions/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==/'+userName
          });
          const response = await restOperation.response;
          const pendingTransactionsResponse = await response.body.json()
          //data.players 
          setCompletedTransactions(pendingTransactionsResponse.transactions);
          //setIsLoading(false);
    }

    const extractTransactionPlayer = (player) =>{
        if(player.startsWith("FA")){
            return player;
        }
        let decodedPlayer = Buffer.from(player, 'base64').toString('ascii');
        return `${decodedPlayer.split("-")[1]} (${decodedPlayer.split("-")[0]})`;
    }

    useEffect( () => {
        getUserName();
    }, []);
    useEffect(()=>{
        getTeam();
        getPendingTransactions();
        getCompletedTransactions();
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
        try{
            if(formData.changes.captain && ((formData.changes.captain==formData.vicecaptain)||(formData.changes.captain==formData.vicecaptain))){
                setCaptainError(true);
                return;
            }
            if(formData.changes.vicecaptain && ((formData.changes.vicecaptain==formData.captain)||(formData.changes.captain==formData.vicecaptain))){
                setCaptainError(true);
                return;
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
            setEditMode(false);
            if(teamResponse.statusCode!=200){
                setGeneralUserErrorMessage(`Error: ${teamResponse.statusCode} - ${teamResponse.error}`);    
                return;
            }
            setGeneralUserErrorMessage("Changes saved successfully");
            setCaptainError(false);
            await getPendingTransactions();
        } catch (e) {
            console.log('PUT call failed: ', e);
            console.log(JSON.parse(e.response.body));
            const { 
                statusCode, 
                headers, 
                body 
              } = error.response;
            setGeneralUserErrorMessage(`Error: ${statusCode} - ${body}`);
        }

    }

    return(
        <Authenticator.Provider>
        <Flex padding="24px 32px 24px 32px" direction="column">
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
            {(generalUserErrorMessage!="") && <Alert variation={generalUserErrorMessage.startsWith("Error")?"error":"success"} isDismissible={true}
                hasIcon={true}>{generalUserErrorMessage}</Alert>}
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
                        setCaptainError(false);
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
                        if(e.target.value==formData.captain.split('#')[0]){
                            setCaptainError(true);
                            return;
                        }
                        setFormData({...formData, vicecaptain:e.target.value, changes:{...formData.changes, vicecaptain:e.target.value}});
                        setCaptainError(false);
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
                                        <Input name={index+"_faAmount"} id={index+"_faAmount"} inputMode="text" hasError={faAmountHasError} onInput={(e)=>{
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
            <Divider/>
            <Heading width="auto" level={4}>Free Agent transactions</Heading>
            <Accordion.Container allowMultiple defaultValue={['Pending transactions']}>
                {enableEdit && <Accordion.Item value="Pending transactions">
                    <Accordion.Trigger>
                        Pending transactions
                        <Accordion.Icon />
                    </Accordion.Trigger>
                    <Accordion.Content>
                        <Table
                            highlightOnHover={true}
                            variation="bordered"
                            padding="10x" id="pendingTransactions" name="pendingTransactions">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Player to add</TableCell>
                                    <TableCell>Player to drop</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pendingTransactions.map((transaction, index) => (
                                    <TableRow key={index+1}>
                                        <TableCell>{index+1}</TableCell>
                                        <TableCell>{extractTransactionPlayer(transaction.add)}</TableCell>
                                        <TableCell>{extractTransactionPlayer(transaction.drop)}</TableCell>
                                        <TableCell>{transaction.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Accordion.Content>
                </Accordion.Item>
                }
                <Accordion.Item value="Completed transactions">
                    <Accordion.Trigger>
                        Processed transactions
                        <Accordion.Icon />
                    </Accordion.Trigger>
                    <Accordion.Content>
                        <Table
                            highlightOnHover={true}
                            variation="bordered"
                            padding="10x" id="completedTransactions" name="completedTransactions">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Player to add</TableCell>
                                    <TableCell>Player to drop</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {completedTransactions.map((completedTransaction, index) => (
                                    completedTransaction.map((transaction, index) => (
                                        <TableRow key={index+1}>
                                            <TableCell>{index+1}</TableCell>
                                            <TableCell>{extractTransactionPlayer(transaction.add)}</TableCell>
                                            <TableCell>{extractTransactionPlayer(transaction.drop)}</TableCell>
                                            <TableCell>{transaction.amount}</TableCell>
                                        </TableRow>
                                    ))))}
                            </TableBody>
                        </Table>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Container>
        </Flex>
        </Authenticator.Provider>
      );
}