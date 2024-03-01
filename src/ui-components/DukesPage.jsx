/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MainNavBar from "./MainNavBar";
import { Divider, Flex, Heading } from "@aws-amplify/ui-react";
import Footer from "./Footer";
export default function DukesPage(props) {
  const { body, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="auto"
      height="auto"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DukesPage")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="auto"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 0px 10px 0px"
        {...getOverrideProps(overrides, "Container")}
      >
        <MainNavBar
          display="flex"
          gap="50px"
          direction="row"
          width="unset"
          height="101px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="24px 32px 24px 32px"
          backgroundColor="rgba(245,78,78,1)"
          {...getOverrideProps(overrides, "MainNavBar")}
        ></MainNavBar>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="1"
            {...getOverrideProps(overrides, "Title")}
          ></Heading>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="10px 10px 10px 10px"
            children={body}
            {...getOverrideProps(overrides, "Body")}
          ></Flex>
        </Flex>
        <Footer
          width="unset"
          height="72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(191,64,64,1)"
          {...getOverrideProps(overrides, "Footer")}
        ></Footer>
      </Flex>
    </Flex>
  );
}
