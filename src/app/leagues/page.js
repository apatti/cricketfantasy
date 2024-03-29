'use client'

import { Divider, Flex, Heading, TableRow,TableCell, TableBody, Table, Loader, TableHead, CheckboxField, Icon } from '@aws-amplify/ui-react';
import { BiSolidSortAlt } from "react-icons/bi";
import { get } from '@aws-amplify/api-rest';

import { useRouter } from 'next/navigation'
import  useSortData  from '@/hooks/useSortData';

import { useState, useEffect } from 'react';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [standings, setStandings] = useState([]);
    const router = useRouter()
    const { items, requestSort } = useSortData(standings,'items');

    const getStandings = async () => {
        try {
            const restOperation = get({ 
              apiName: 'fantasyapi',
              path: '/league/standings/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==' 
            });
            const response = await restOperation.response;
            const leagueResponse = await response.body.json()
            console.log(leagueResponse);
            setIsLoading(false);
            setStandings(leagueResponse.standings);
          } catch (e) {
            console.log('GET call failed: ', e);
          }
    }
    useEffect( () => {
        getStandings();
    }, []);

    return(
        <Flex direction="column" justifyContent="center" gap="20px" width="100%" padding="30px">
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
            <Heading level={1}>Dukes IPL Fantasy 2024</Heading>
            <Divider width="100%" />
            <Heading level={3}>Standings</Heading>
            <Table
                highlightOnHover={true}
                variation="bordered"
                padding="10x">
                <TableHead>
                    <TableRow>
                        <TableCell onClick={()=>requestSort('phase2points')}>#</TableCell>
                        <TableCell onClick={()=>requestSort('teamName')}>Team Name<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('manager')}>Manager<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell>Captain</TableCell>
                        <TableCell>Vice Captain</TableCell>
                        <TableCell onClick={()=>requestSort('phaseBooster')}>Phase Booster<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('leaguepoints')}>League points<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('phase1points')}>Phase 1 points<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('phase2points')}>Phase 2 points<Icon as={BiSolidSortAlt} /></TableCell>
                        <TableCell onClick={()=>requestSort('fa')}>Waiver budget<Icon as={BiSolidSortAlt} /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((standing, index) => (
                        <TableRow key={standing.teamName} onClick={()=>router.push(`/team/${standing.manager}`)}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{standing.teamName}</TableCell>
                            <TableCell>{standing.manager}</TableCell>
                            <TableCell>{Buffer.from(standing.captain,'base64').toString("utf-8").split('-')[1]}</TableCell>
                            <TableCell>{Buffer.from(standing.vicecaptain,'base64').toString("utf-8").split('-')[1]}</TableCell>
                            <TableCell><CheckboxField name="booster" checked={standing.phaseBooster} 
                                isIndeterminate={!standing.phaseBooster} 
                                isReadOnly={true} 
                                isDisabled={!standing.phaseBooster}/></TableCell>
                            <TableCell>{standing.leaguepoints}</TableCell>
                            <TableCell>{standing.phase1points}</TableCell>
                            <TableCell>{standing.phase2points}</TableCell>
                            <TableCell>${standing.fa}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
            </Table>
        </Flex>
      );
}