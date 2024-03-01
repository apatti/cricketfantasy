/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import MainNavBar from "./MainNavBar";
import {
  Divider,
  Flex,
  Heading,
  SearchField,
  View,
} from "@aws-amplify/ui-react";
import PlayerCard from "./PlayerCard";
import Footer from "./Footer";
export default function PlayersPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PlayersPage")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="1512px"
        height="982px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "DukesPage")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
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
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="24px 32px 24px 32px"
            backgroundColor="rgba(255,255,255,1)"
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
              {...getOverrideProps(overrides, "Body")}
            >
              <SearchField
                width="unset"
                height="unset"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SearchField")}
              ></SearchField>
              <Flex
                gap="24px"
                direction="row"
                width="unset"
                height="582px"
                justifyContent="flex-start"
                alignItems="flex-start"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="10px 10px 10px 10px"
                {...getOverrideProps(overrides, "PlayersList")}
              >
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29863897")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29863849")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29863861")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29863873")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29863885")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29864055")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29864079")}
                ></PlayerCard>
                <PlayerCard
                  display="flex"
                  gap="0"
                  direction="column"
                  width="320px"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="24px 24px 24px 24px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "PlayerCard29864091")}
                ></PlayerCard>
              </Flex>
            </Flex>
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
            {...getOverrideProps(overrides, "Footer")}
          ></Footer>
        </Flex>
      </Flex>
    </View>
  );
}
