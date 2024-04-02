'use client'

import { Authenticator, Loader, TableHead,TableCell,TableRow,TableBody,
    TableFoot,Table, Heading,SelectField, Flex, View,Divider } from '@aws-amplify/ui-react';
import { useState, useEffect, useReducer } from 'react';
import { get } from '@aws-amplify/api-rest';

const FATransactions = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [faList,setFAList] = useState([]);
    const [faDate,setFADate] = useState("");
    const [dateList,setDateList] = useState([]);
    const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), {
        isLoading:true,
        faList:[],
        faDate:"",
        dateList:[]
    });

    const getDates = () => {
        let dates = [];
        let startDate = new Date("2024-03-29");
        let today = new Date();
        while(startDate < today){
            dates.push({value:startDate.getMonth()+1+""+startDate.getDate(),label:startDate.toDateString()});
            startDate.setDate(startDate.getDate()+1);
        }
        setState({dateList:dates,faDate:dates[dates.length-1].value});
    };

    const getFATransactions = async () => {
        let eventTime = state.faDate;
        try {
            if(eventTime === ""){
                setIsLoading(false);
                return;
            }
            const restOperation = get({ 
              apiName: 'fantasyapi',
              path: '/league/transactions/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==',
              options: {queryParams: {eventTime}}
            });
            const response = await restOperation.response;
            const leagueResponse = await response.body.json()
            console.log(leagueResponse);
            setState({isLoading:false,faList:leagueResponse.transactions});
          } catch (e) {
            console.log('GET call failed: ', e);
          }
    };

    useEffect( () => {
        getDates();
    }, []);
    useEffect( () => {
        getFATransactions();
    }, [state.faDate]);


    return (
        <Authenticator.Provider>
        <Flex direction="column">
            <Heading level={3}>FA Transactions</Heading>
            <SelectField
                onChange={(e)=>setState({faDate:e.target.value})}
                value={state.faDate}
            >
                {state.dateList.map((date) => (
                    <option key={date.value} value={date.value}>{date.label}</option>
                ))}
            </SelectField>
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
            <Table
                    highlightOnHover={true}
                    variation="striped"
                    padding="10x">
                <TableHead>
                    <TableRow>
                        <TableCell>Player</TableCell>
                        <TableCell>Awarded To</TableCell>
                        <TableCell>Owner</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {state.faList.map((transaction, index) => (
                        <TableRow key={transaction.player}>
                            <TableCell>
                                <Flex direction="column" gap="10px">
                                    <View>{transaction.win.addPlayerString.split('-')[1]}</View>
                                    <View>${transaction.win.amount} Winning Bid</View>
                                    <Divider width="100%"/>
                                    {transaction.bids.map((bid,index) => (
                                        <View key={index}>{bid.team} bid ${bid.amount} to drop {bid.drop.split('-')[1]} failed</View>
                                    ))}
                                </Flex>
                            </TableCell>
                            <TableCell>To</TableCell>
                            <TableCell>
                                <Flex direction="column" gap="10px">
                                    <View>{transaction.win.team}</View>
                                    <View>(Dropped: {transaction.win.dropPlayer.split('-')[1]})</View>
                                </Flex>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Flex>
        </Authenticator.Provider>
    );
};

export default FATransactions