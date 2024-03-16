'use client'
import { ThemeProvider, Divider, Flex, Link } from '@aws-amplify/ui-react';
import { TournamentCard } from '@/ui-components';
import { useNavigateAction } from '../ui-components/utils';

export default function Home() {
  return (
    <ThemeProvider>
      <Flex direction="column" justifyContent="center" gap="20px"
      alignItems="left">
        <h2>Welcome to Dukes IPL Fantasy 2024</h2>
        Draft date: 03/17/2024 <br/>
        Draft time: 12pm <br/>
        <Link href="https://teams.live.com/meet/9363408312812?p=UcZ0xfNUsE0UOmTP" isExternal={true} textDecoration="underline" >Dukes IPL Draft Teams link</Link>
        <p>Best of luck!!</p>
      </Flex>
      <Divider width="100%"/>
      <Flex
        padding="24px 32px 24px 32px">
        <TournamentCard 
          overrides={{
            "image":{"objectFit":"fill"},
            "Create League":{"isDisabled":true},
            "Join League":{"onClick":useNavigateAction({ type: "url", url: "/leagues/joinLeague" })},
            }} />
      </Flex>
    </ThemeProvider>
  );
}
