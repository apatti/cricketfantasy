'use client'

import { Divider, Flex, Heading, TableRow,TableCell, TableBody, Table, Loader, TableHead, CheckboxField, Icon } from '@aws-amplify/ui-react';
import { BiSolidSortAlt } from "react-icons/bi";
import { get } from '@aws-amplify/api-rest';

import { useRouter } from 'next/navigation'
import  useSortData  from '@/hooks/useSortData';

import { useState, useEffect } from 'react';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [liveScore, setLiveScore] = useState([]);
    const router = useRouter()
    const { items, requestSort } = useSortData(liveScore,'items');

    const getLiveScore = async () => {
        try {
            const restOperation = get({ 
              apiName: 'fantasyapi',
              path: '/league/livescore/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==' 
            });
            const response = await restOperation.response;
            const leagueResponse = await response.body.json()
            console.log(leagueResponse);
            setIsLoading(false);
            setLiveScore(leagueResponse.liveScore);
          } catch (e) {
            console.log('GET call failed: ', e);
          }
    }
    useEffect( () => {
        getLiveScore();
    }, []);

    return(
        <Flex direction="column" justifyContent="center" gap="20px" width="100%" padding="30px">
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
            <Heading level={1}>Dukes IPL Fantasy 2024</Heading>
            <Divider width="100%" />
            <Heading level={3}>Live score</Heading>
            <Table
                highlightOnHover={true}
                variation="bordered"
                padding="10x">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={()=>requestSort('points')}>#</TableCell>
                        <TableCell onClick={()=>requestSort('matchId')}>Player Name<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('owner')}>Team Name<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('points')}>Points<Icon as={BiSolidSortAlt} /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((score, index) => (
                        <TableRow key={score.matchId}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{score.matchId}</TableCell>
                            <TableCell>{score.owner}</TableCell>
                            <TableCell>{score.points}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
            </Table>
        </Flex>
      );
}