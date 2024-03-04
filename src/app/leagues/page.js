'use client'

import { Divider, Flex, Heading, TableRow,TableCell, Text, TableBody, Authenticator, Table, Loader, Message, TableHead } from '@aws-amplify/ui-react';
import { get } from '@aws-amplify/api-rest';

import { useState, useEffect } from 'react';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [standings, setStandings] = useState([]);

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
                Draft date: 03/17/2024 <br/>
                Draft time: 12pm
            <Divider width="100%" />
            <Heading level={3}>Standings</Heading>
            <Table
                highlightOnHover={true}
                variation="striped"
                padding="10x">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Team Name</TableCell>
                        <TableCell>Manager</TableCell>
                        <TableCell>Slogan</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {standings.map((standing, index) => (
                        <TableRow key={standing.teamName}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{standing.teamName}</TableCell>
                            <TableCell>{standing.manager}</TableCell>
                            <TableCell>{standing.teamSlogan}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
            </Table>
        </Flex>
      );
}