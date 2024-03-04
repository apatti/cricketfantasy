'use client';

import { Inter } from "next/font/google";
//import "./globals.css";
import "@aws-amplify/ui-react/styles.css";
const inter = Inter({ subsets: ["latin"] });
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

import { Flex, ThemeProvider,Link, Authenticator } from '@aws-amplify/ui-react';

import { getCurrentUser } from 'aws-amplify/auth';

import { useState, useEffect } from 'react';
import { handleSignOut } from "./util";
import { useNavigateAction } from "../ui-components/utils";


Amplify.configure({ ...awsExports, ssr: true });
import { MainNavBar,Footer, studioTheme, LoggedInUser } from "@/ui-components";


export default function RootLayout({ children }) {
  const [showAuthenticationWindow, setShowAuthenticationWindow] = useState(false);
  const [displayLoggedInUserModal, setDisplayLoggedInUserModal] = useState("none");
  const [displayLoginBtn, setDisplayLoginBtn] = useState("inline-flex");
  const [user, setUser] = useState({username:"Sign In"});
  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const { username, userId, signInDetails } = await getCurrentUser();
        setUser({username, userId, signInDetails})
      }
      catch(err){
        console.log(err);
      }
    }
    fetchUserData();
  },[]);

  const loginBtnOnClick = () => {
    if(user&&user.username&&user.username!=="Sign In"){
      setDisplayLoggedInUserModal("block");
      setDisplayLoginBtn("none");
      setShowAuthenticationWindow(false);
    }
    else{
      setDisplayLoginBtn("inline-flex");
      setDisplayLoggedInUserModal("none");
      setShowAuthenticationWindow(true);
    }
  };

  const loggedUserModalCloseOnClick = () => {
    setDisplayLoggedInUserModal("none");
    setDisplayLoginBtn("inline-flex");
  }

  const userLogInComplete = (user) =>{
    setShowAuthenticationWindow(false);
    setDisplayLoginBtn("inline-flex");
    setUser(user);
  };

  const signOutButtonOnClick = () => {
    handleSignOut();
    setUser({username:"Sign In"});
    setDisplayLoggedInUserModal("none");
    setDisplayLoginBtn("inline-flex");
  }

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MainNavBar loginBtnLabel={user.username} 
            overrides={{
              "MainNavBar":{"justifyContent":"space-evenly",
              "padding":"24px 5x 24px 5px"},
              "Home":{style:{cursor:"grab"}, "onClick":useNavigateAction({ type: "url", url: "/" })},
              "Players":{style:{cursor:"grab"}, "onClick":useNavigateAction({ type: "url", url: "/players" })},
              "Leagues":{style:{cursor:"grab"}, "onClick":useNavigateAction({ type: "url", url: "/leagues" })},
              "Team":{style:{cursor:"grab"}, "onClick":useNavigateAction({ type: "url", url: "/team" })},
              "Rules":{style:{cursor:"grab"}, "onClick":useNavigateAction({ type: "url", url: "/rules" })},
              "loginBtnName":{style:{cursor:"grab"},"onClick":loginBtnOnClick},
              "LoggedInUser":{"userName":user.username,overrides:{
                                          "SignOut":{"onClick":signOutButtonOnClick},
                                          "Icon/close":{"onClick":loggedUserModalCloseOnClick}}}
            }} 
            displayLoggedInUserModal={displayLoggedInUserModal}
            displayLoginBtn={displayLoginBtn}
          />
          <div>{
              (showAuthenticationWindow) && <Authenticator variation="modal">
                {({ user }) => (
                  userLogInComplete(user)
                )}
              </Authenticator>
          }
        </div>
            <Flex
              backgroundColor="rgba(255,255,255,1)">
              {children}
            </Flex>
            
          <Footer overrides={{"margin-top":"auto"}}/>
        </ThemeProvider>
      </body>
    </html>
  );
}
