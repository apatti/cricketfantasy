/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FormCheckout")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 31318052656")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Info"
              {...getOverrideProps(overrides, "Info")}
            ></Text>
            <TextField
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextField18021895")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextField18052555")}
            ></TextField>
          </Flex>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18052618")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shipping"
              {...getOverrideProps(overrides, "Shipping18052565")}
            ></Text>
            <TextField
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextField18052560")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextField18052569")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 407")}
            >
              <TextField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                isMultiline={false}
                {...getOverrideProps(overrides, "TextField18052574")}
              ></TextField>
              <SelectField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField18052579")}
              ></SelectField>
            </Flex>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 408")}
            >
              <TextField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                isMultiline={false}
                {...getOverrideProps(overrides, "TextField18052591")}
              ></TextField>
              <SelectField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField18052596")}
              ></SelectField>
            </Flex>
          </Flex>
          <Divider
            width="unset"
            height="1px"
            shrink="0"
            alignSelf="stretch"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18052620")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 31318052655")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Card info"
              {...getOverrideProps(overrides, "Card info")}
            ></Text>
            <TextField
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextField18052624")}
            ></TextField>
            <TextField
              width="unset"
              height="unset"
              shrink="0"
              alignSelf="stretch"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextField18052629")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 410")}
            >
              <SelectField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField18052634")}
              ></SelectField>
              <SelectField
                width="unset"
                height="unset"
                grow="1"
                shrink="1"
                basis="0"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField18052642")}
              ></SelectField>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 412")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="469px"
          height="870px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 320")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="134px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="194px"
            left="32px"
            {...getOverrideProps(overrides, "Group 314")}
          >
            <Image
              width="21.98%"
              height="97.01%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="2.99%"
              left="0%"
              right="78.02%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "image18021851")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.49px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="83.58%"
              bottom="1.49%"
              left="29.88%"
              right="37.53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Order Summary"
              {...getOverrideProps(overrides, "Order Summary18021852")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="23.88%"
              bottom="58.21%"
              left="29.88%"
              right="59.75%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Black"
              {...getOverrideProps(overrides, "Black18021853")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="29.88%"
              right="51.85%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Basic Tee"
              {...getOverrideProps(overrides, "Basic Tee18021854")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="47.76%"
              bottom="34.33%"
              left="29.88%"
              right="59.26%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Large"
              {...getOverrideProps(overrides, "Large18021855")}
            ></Text>
            <Icon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="94.07%"
              right="0%"
              padding="0px 0px 0px 0px"
              type="delete"
              fontSize="24px"
              {...getOverrideProps(overrides, "Icon18021856")}
            ></Icon>
            <SelectField
              width="64px"
              height="unset"
              position="absolute"
              top="77.61%"
              bottom="0%"
              left="84.2%"
              right="0%"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "SelectField18021858")}
            ></SelectField>
          </View>
          <Divider
            width="469px"
            height="1px"
            position="absolute"
            top="41.61%"
            bottom="58.28%"
            left="0%"
            right="0%"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18021859")}
          ></Divider>
          <Divider
            width="469px"
            height="1px"
            position="absolute"
            top="18.51%"
            bottom="81.38%"
            left="0%"
            right="0%"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18021860")}
          ></Divider>
          <Divider
            width="469px"
            height="1px"
            position="absolute"
            top="8.28%"
            bottom="91.61%"
            left="0%"
            right="0%"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18021861")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="134px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="395px"
            left="32px"
            {...getOverrideProps(overrides, "Group 315")}
          >
            <Image
              width="21.98%"
              height="97.01%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="2.99%"
              left="0%"
              right="78.02%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "image18021862")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.49px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="83.58%"
              bottom="1.49%"
              left="29.88%"
              right="37.53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Order Summary"
              {...getOverrideProps(overrides, "Order Summary18021863")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="23.88%"
              bottom="58.21%"
              left="29.88%"
              right="59.75%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Black"
              {...getOverrideProps(overrides, "Black18021864")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="29.88%"
              right="51.85%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Basic Tee"
              {...getOverrideProps(overrides, "Basic Tee18021865")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="47.76%"
              bottom="34.33%"
              left="29.88%"
              right="59.26%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Large"
              {...getOverrideProps(overrides, "Large18021866")}
            ></Text>
            <Icon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="94.07%"
              right="0%"
              padding="0px 0px 0px 0px"
              type="delete"
              fontSize="24px"
              {...getOverrideProps(overrides, "Icon18021867")}
            ></Icon>
            <SelectField
              width="64px"
              height="unset"
              position="absolute"
              top="77.61%"
              bottom="0%"
              left="84.2%"
              right="0%"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "SelectField18021868")}
            ></SelectField>
          </View>
          <Divider
            width="469px"
            height="1px"
            position="absolute"
            top="64.71%"
            bottom="35.17%"
            left="0%"
            right="0%"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18021869")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="596px"
            left="32px"
            {...getOverrideProps(overrides, "Group 316")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="77.75px"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="80.8%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Subtotal"
              {...getOverrideProps(overrides, "Subtotal")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="83.95%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$320.00"
              {...getOverrideProps(overrides, "$320.00")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="636px"
            left="32px"
            {...getOverrideProps(overrides, "Group 317")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="80.14px"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="80.21%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shipping"
              {...getOverrideProps(overrides, "Shipping18021872")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="87.16%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$15.00"
              {...getOverrideProps(overrides, "$15.00")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="676px"
            left="32px"
            {...getOverrideProps(overrides, "Group 318")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="53.83px"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="86.71%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Taxes"
              {...getOverrideProps(overrides, "Taxes")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="86.42%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$26.80"
              {...getOverrideProps(overrides, "$26.80")}
            ></Text>
          </View>
          <Divider
            width="405px"
            height="1px"
            position="absolute"
            top="82.3%"
            bottom="17.59%"
            left="6.82%"
            right="6.82%"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18021876")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="733px"
            left="32px"
            {...getOverrideProps(overrides, "Group 319")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.49px"
              width="50.24px"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="87.6%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Total"
              {...getOverrideProps(overrides, "Total")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.49px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="82.96%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$361.80"
              {...getOverrideProps(overrides, "$361.80")}
            ></Text>
          </View>
          <Divider
            width="469px"
            height="1px"
            position="absolute"
            top="90.69%"
            bottom="9.2%"
            left="0%"
            right="0%"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider18021879")}
          ></Divider>
          <Button
            width="405px"
            height="unset"
            position="absolute"
            top="94.48%"
            bottom="0%"
            left="6.82%"
            right="6.82%"
            size="large"
            isDisabled={false}
            variation="primary"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="105px"
            left="32px"
            {...getOverrideProps(overrides, "Group 313")}
          >
            <Icon
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="94.07%"
              padding="0px 0px 0px 0px"
              type="shopping_bag"
              fontSize="24px"
              {...getOverrideProps(overrides, "Icon18021857")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="9.88%"
              right="74.81%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cart (2)"
              {...getOverrideProps(overrides, "Cart (2)")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="84.69%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$101.70"
              {...getOverrideProps(overrides, "$101.70")}
            ></Text>
          </View>
          <Badge
            width="405px"
            height="unset"
            position="absolute"
            top="0px"
            left="32px"
            size="default"
            variation="success"
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
      </Flex>
    </Flex>
  );
}
