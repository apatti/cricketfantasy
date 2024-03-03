'use client'

import { Button, Divider, Flex, Heading, Label,Input, Text, View, Grid, Authenticator, Alert, Loader, Message } from '@aws-amplify/ui-react';
import { post } from '@aws-amplify/api-rest';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Home() {
    const [league, setLeague] = useState({});
    const [teamCreationError, setTeamCreationError] = useState("");
    const [creatingTeam, setCreatingTeam] = useState(false);

  const { data, error,isLoading } = useSWR('https://ps7uojduq2.execute-api.us-west-1.amazonaws.com/staging/league/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==', fetcher)
  if(error){
    return <Alert variation="error" isDismissible={true} hasIcon={true} heading="Error">{error.message}</Alert>
  }
  
  return (
    <Authenticator variation='modal'>
        {({ user }) => (
            <Flex>
                {(isLoading) ? <Loader width="5rem" height="5rem"/> :
        <Grid
        as="form"
        padding="24px 32px 24px 32px"
        direction="column"
        alignItems="flex-start"
        wrap ="nowrap"
        gap="1rem"
        onSubmit={async (e) => {
            setCreatingTeam(true);
            e.preventDefault();
            try{
                if (e.target.team_name.value === '') {
                    throw new Error('Team name is required');
                }
                if (e.target.league_key.value === '') {
                    throw new Error('League key is required');
                }
                
                const restOperation = post({
                    apiName: 'fantasyapi',
                    path: '/fantasyTeams/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==',
                    options: {
                        body: {
                            id: user.username,
                            leagueKey: e.target.league_key.value,
                            teamName: e.target.team_name.value,
                            teamSlogan: e.target.team_slogan.value,
                            manager:user.username
                        }
                    }
                    });
                console.log(restOperation);
                const { body } = await restOperation.response;
                const response = await body.json();

                console.log('POST call succeeded');
                console.log(response);
                //Alert.success('Team added to the league successfully');
                setTeamCreationError("success");
            } catch (error) {
                setTeamCreationError(error.message);
                console.log(error);
            }
            setCreatingTeam(false);
        }}
        >
            <Heading level={2}>Welcome to {data.league.name}</Heading>
            <Divider label="League details" size="large"/>
            <View>  Tournament Type: Draft</View>
            <View>  Draft date: 03/17/2024 </View>
            <View>  Draft time: 12pm </View>
            <View>  Max fantasy teams: {data.league.maxTeamCount}</View>
            <View>  Max players per team: {data.league.maxPlayers}</View>
            <View>  Total players on bench: {data.league.benchCount}</View>
            <View>  Teams registered: {data.league.currentTeamCount}</View>
            <Divider label="Team details" size="large"/>
            <Flex direction="column" gap="1rem">
                <Label htmlFor="team_name">
                    Team name
                    <Text as="span" fontSize="small" color="font.error">
                        {' '}
                        (required)
                    </Text>
                </Label>
                <Input id="team_name" placeholder="Enter team name" isRequired={true} />
                <Label htmlFor="team_slogan">
                    Team slogan
                    <Text as="span" fontSize="small" color="font.info">
                        {' '}
                        (optional)
                    </Text>
                </Label>
                <Input id="team_slogan" placeholder="Enter team slogan" />
            </Flex>
            <Divider label="League key" size="large"/>
            <Label htmlFor="league_key">
                Please enter league key to join
                <Text as="span" fontSize="small" color="font.error">
                    {' '}
                    (required)
                </Text>
            </Label>
            <Input id="league_key" placeholder="Enter league key" isRequired={true} />
            {(!creatingTeam)?
                <Button type="submit" variation="Primary">Join League</Button>:
                <Loader variation="linear"/>
            }
            {(teamCreationError !== "" && teamCreationError!=="success") && <Alert variation="error" isDismissible={true} hasIcon={true} heading="Error">{teamCreationError}</Alert>}
            {(teamCreationError === "success") && <Message variation="success" isDismissible={true} hasIcon={true} heading="Success">Team added to the league successfully</Message>}
            <Divider />
        </Grid>}
        </Flex>
        )}
    </Authenticator>
  );
}
