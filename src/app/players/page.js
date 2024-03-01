'use client'

import { PlayerCard } from '@/ui-components';
import { Collection, Flex } from '@aws-amplify/ui-react';

import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function Home() {
  const { data, error } = useSWR('https://ps7uojduq2.execute-api.us-west-1.amazonaws.com/staging/players', fetcher)
  if (!data) return <div>Loading...</div>
  
  return (
    <Flex
    padding="24px 32px 24px 32px">
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search for player"
      itemsPerPage={8}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={data.players || []}
    >
      {(item, index) => (
        <PlayerCard
          margin="5px 5px 5px 5px"
          key={item.id}
          playerName={item.name}
          role={item.role}
          teamName={item.team}
          profilePic={item.icon}
          profileLink={item.profile}
        ></PlayerCard>
      )}
    </Collection>
    </Flex>
  );
}
