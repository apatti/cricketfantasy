/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayerCardOverridesProps = {
    PlayerCard?: PrimitiveOverrideProps<FlexProps>;
    playerPic?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    ManagerName?: PrimitiveOverrideProps<TextProps>;
    Role?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    AddDropBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PlayerCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    playerName?: String;
    teamName?: String;
    role?: String;
    status?: String;
    profilePic?: String;
    profileLink?: String;
    addBtnLabel?: String;
    addBtnVisible?: String;
} & {
    overrides?: PlayerCardOverridesProps | undefined | null;
}>;
export default function PlayerCard(props: PlayerCardProps): React.ReactElement;
