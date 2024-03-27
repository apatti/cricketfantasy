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
        For 3:00am PST game, points would be updated at 8:00 am PST <br/>
        For 7:00am PST game, points would be updated at 12:00 pm PST <br/>
        <p>Best of luck!!</p>
      </Flex>
      <Divider width="100%"/>
      <Flex
        padding="24px 32px 24px 32px">
        <TournamentCard 
          overrides={{
            "image":{"objectFit":"fill"},
            "Create League":{"isDisabled":true},
            "Join League":{"isDisabled":true},
            }} />
      </Flex>
    </ThemeProvider>
  );
}
