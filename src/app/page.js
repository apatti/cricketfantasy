'use client'
import { ThemeProvider, Divider, Flex } from '@aws-amplify/ui-react';
import { TournamentCard } from '@/ui-components';


export default function Home() {
  return (
    <ThemeProvider>
      <Flex direction="column" justifyContent="center" gap="20px"
      alignItems="left">
        <h2>Welcome to Dukes IPL Fantasy 2024</h2>
        Draft date: 03/17/2024 <br/>
        Draft time: 12pm
        <p>Best of luck!!</p>
      </Flex>
      <Divider />
      <Flex
        padding="24px 32px 24px 32px">
        <TournamentCard overrides={{"image":{"objectFit":"fill"},"Create League":{"isDisabled":true}}} />
      </Flex>
    </ThemeProvider>
  );
}
