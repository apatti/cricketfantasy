/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, View } from "@aws-amplify/ui-react";
import Buttondefaultfalselink from "./Buttondefaultfalselink";
import LoggedInUser from "./LoggedInUser";
export default function MainNavBar(props) {
  const {
    userImg,
    profileItems,
    a,
    loginBtnLabel = "Sign In",
    showLoggedInUserModal,
    showLoginBtn,
    displayLoginBtn = "inline-flex",
    displayLoggedInUserModal = "none",
    loginBtnOnClick,
    src = "/logo/dukesIPL.jpeg",
    homeBtnOnClick,
    overrides,
    ...rest
  } = props;
  return (
    <Flex
      gap="50px"
      direction="row"
      width="auto"
      height="96px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(245,78,78,1)"
      {...getOverrideProps(overrides, "MainNavBar")}
      {...rest}
    >
      <Flex
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="85px"
          height="85px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="50px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={src}
          {...getOverrideProps(overrides, "dukeslogo")}
        ></Image>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="1079px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "navItems")}
      >
        <Buttondefaultfalselink
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          label="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Buttondefaultfalselink>
        <Buttondefaultfalselink
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          label="Leagues"
          {...getOverrideProps(overrides, "Leagues")}
        ></Buttondefaultfalselink>
        <Buttondefaultfalselink
          display={loginBtnLabel == "Sign In" ? "none" : "inline-flex"}
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          label="Team"
          {...getOverrideProps(overrides, "Team")}
        ></Buttondefaultfalselink>
        <Buttondefaultfalselink
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          label="Players"
          {...getOverrideProps(overrides, "Players")}
        ></Buttondefaultfalselink>
        <Buttondefaultfalselink
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          label="Live Score"
          {...getOverrideProps(overrides, "Live Score")}
        ></Buttondefaultfalselink>
        <Buttondefaultfalselink
          display="flex"
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          label="Rules"
          {...getOverrideProps(overrides, "Rules")}
        ></Buttondefaultfalselink>
      </Flex>
      <View
        width="128px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "profileItems")}
      >
        <LoggedInUser
          display={displayLoggedInUserModal}
          gap="10px"
          direction="column"
          width="181px"
          height="136px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="5px"
          left="-56px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="10px"
          padding="10px 10px 10px 10px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "LoggedInUser")}
        ></LoggedInUser>
        <Buttondefaultfalselink
          display={displayLoginBtn}
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="4px"
          left="22px"
          padding="8px 16px 8px 16px"
          label={loginBtnLabel}
          {...getOverrideProps(overrides, "loginBtnName")}
        ></Buttondefaultfalselink>
      </View>
    </Flex>
  );
}
