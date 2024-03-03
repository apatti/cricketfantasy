'use client'

import { Button, Divider, Flex, Heading, Label,Input, Text, View, Grid, Authenticator, Alert, Loader, Message } from '@aws-amplify/ui-react';
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
            console.log('GET call succeeded: ', response);
            setIsLoading(false);
            setStandings(response.standings);
          } catch (e) {
            console.log('GET call failed: ', e);
          }
    }
    useEffect( () => {
        getStandings();
    }, []);

    return(
        <Flex>
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
        </Flex>
      );
}