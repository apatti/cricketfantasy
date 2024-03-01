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
export declare type TournamentCardOverridesProps = {
    TournamentCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Tournament Name"?: PrimitiveOverrideProps<TextProps>;
    "Information about this tournament"?: PrimitiveOverrideProps<TextProps>;
    "TournamentButton Group"?: PrimitiveOverrideProps<FlexProps>;
    "Create League"?: PrimitiveOverrideProps<ButtonProps>;
    "Join League"?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TournamentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TournamentCardOverridesProps | undefined | null;
}>;
export default function TournamentCard(props: TournamentCardProps): React.ReactElement;
