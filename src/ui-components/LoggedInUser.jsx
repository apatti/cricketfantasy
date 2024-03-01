/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import Iconclose from "./Iconclose";
export default function LoggedInUser(props) {
  const { userName, userEmail, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoggedInUser")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="2px 2px 2px 2px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(23,125,95,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="130px"
          height="22px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={userName}
          {...getOverrideProps(overrides, "User Name")}
        ></Text>
        <Iconclose
          width="18px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon/close")}
        ></Iconclose>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="162px"
        height="26px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={userEmail}
        {...getOverrideProps(overrides, "User email")}
      ></Text>
      <Flex
        gap="5px"
        direction="row"
        width="156px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          width="unset"
          height="34px"
          backgroundColor="rgba(102,0,0,1)"
          grow="1"
          shrink="1"
          basis="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="SIGN OUT"
          {...getOverrideProps(overrides, "SignOut")}
        ></Button>
      </Flex>
    </Flex>
  );
}
