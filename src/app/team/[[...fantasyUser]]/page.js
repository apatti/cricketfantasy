'use client'

import { Flex, Authenticator, Loader, Collection, Modal } from '@aws-amplify/ui-react';
import { get } from '@aws-amplify/api-rest';
import { PlayerCard } from '@/ui-components';
import { getCurrentUserName } from '@/app/util';


import { useState, useEffect } from 'react';

export default function Home({params}) {
    const [isLoading, setIsLoading] = useState(true);
    const [teamRoster, setTeamRoster] = useState([]);
    const [faList,setFAList] = useState([]);
    const [userName,setUserName] = useState("");
    const [addBtnVisible,setAddBtnVisible] = useState("none");

    const getUserName = async() =>{
        const username = await getCurrentUserName();
        setUserName(username);
        if(!params.fantasyUser || username==params.fantasyUser){
            setAddBtnVisible("");
        }
        else{
            setAddBtnVisible("none");
        }
    }

    const getTeam = async () => {
        try {
            if(!userName){
                return;
            }
            let fantasyUser = params.fantasyUser;
            if(!fantasyUser){
                fantasyUser = userName;
            }
            const restOperation = get({ 
              apiName: 'fantasyapi',
              path: '/fantasyTeams/ZHVrZXMgaXBsIGZhbnRhc3kgMjAyNA==/'+fantasyUser 
            });
            const response = await restOperation.response;
            const teamResponse = await response.body.json()
            setIsLoading(false);
            var teamData = teamResponse.team.team;
            var teamRoster = teamData.map(item=>{
                var teamMeta = item.split("#");
                return {
                    id:teamMeta[0],
                    name:teamMeta[1],
                    role:teamMeta[2],
                    team:teamMeta[3],
                    profilePic:teamMeta.length>4?teamMeta[4]:'',
                    profileLink:teamMeta.length>5?teamMeta[5]:'/'
                }
            });
            setTeamRoster(teamRoster);
          } catch (e) {
            console.log('GET call failed: ', e);
          }
    }
    useEffect( () => {
        getUserName();
    }, []);
    useEffect(()=>{
        getTeam();
    },[userName])

    return(
        <Authenticator.Provider>
        <Flex padding="24px 32px 24px 32px">
            {(isLoading) && <Loader width="5rem" height="5rem"/>}
            <Collection
                type="grid"
                isSearchable={false}
                isPaginated={true}
                searchPlaceholder="Search for player"
                itemsPerPage={8}
                templateColumns="1fr 1fr 1fr"
                autoFlow="row"
                alignItems="stretch"
                justifyContent="stretch"
                items={teamRoster || []}
            >
            {(item, index) => (
                <PlayerCard
                margin="5px 5px 5px 5px"
                key={item.id}
                playerName={item.name}
                role={item.role}
                teamName={item.team}
                profilePic={item.profilePic}
                profileLink={item.profileLink}
                addBtnLabel="Replace"
                addBtnVisible={addBtnVisible}
                ></PlayerCard>
                )}
            </Collection>
        </Flex>
        </Authenticator.Provider>
      );
}