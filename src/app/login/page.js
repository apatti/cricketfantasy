'use client'
import { LoggedInUser } from "@/ui-components";
import { Authenticator } from '@aws-amplify/ui-react';

export default function Home() {
    return (
        <Authenticator variation="modal">
          {({ signOut, user }) => (
            <LoggedInUser 
            userName={user.username}
            overrides={{"SignOut":{"onClick":signOut}}}
            />
          )}
        </Authenticator>
      );
}