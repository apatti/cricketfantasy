'use client'

import { Button, Divider, Flex, Heading, Label,Input, Text, View } from '@aws-amplify/ui-react';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Home() {
  const { data, error } = useSWR('https://ps7uojduq2.execute-api.us-west-1.amazonaws.com/staging/league/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==', fetcher)
  if (!data) return <div>Loading...</div>
  console.log(data);
  return (
    <Flex
    as="form"
    padding="24px 32px 24px 32px"
    direction="column"
    alignItems="flex-start"
    wrap ="nowrap"
    gap="1rem">
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
            <Input id="team_name" placeholder="Enter team name" isRequired />
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
        <Input id="league_key" placeholder="Enter league key" isRequired />
        <Button variation="Primary">Join League</Button>
        <Divider />
    </Flex>
  );
}
