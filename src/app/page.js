'use client'
import { ThemeProvider, Divider, Flex, Loader,View } from '@aws-amplify/ui-react';
import { TournamentCard } from '@/ui-components';
import { get } from '@aws-amplify/api-rest';
import { useState, useEffect } from 'react';

export default function Home() {
  const [state, setState] = useState({isLoading: true, news: []});

  const getNews = async () => {
    try {
      const restOperation = get({ 
        apiName: 'fantasyapi',
        path: '/league' 
      });
      const response = await restOperation.response;
      const news = await response.body.json()
      console.log(news);
      setState({isLoading: false, news: news.news});
    } catch (e) {
      console.log('GET call failed: ', e);
    }
  }

  useEffect( () => {
    getNews();
  }, []);

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
        {(state.isLoading) && <Loader width="5rem" height="5rem"/>}
        <Flex
          direction="row"
          gap="20px"
          wrap="wrap"
          justifyContent="center"
          alignItems="center">
          {state.news.map((item, index) => (
            <View>
              <div dangerouslySetInnerHTML={{ __html: item.news }}></div>
              <Divider />
            </View>
          ))}
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}
