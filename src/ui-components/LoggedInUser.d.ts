/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { IconcloseProps } from "./Iconclose";
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
export declare type LoggedInUserOverridesProps = {
    LoggedInUser?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "User Name"?: PrimitiveOverrideProps<TextProps>;
    "Icon/close"?: IconcloseProps;
    "User email"?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    SignOut?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoggedInUserProps = React.PropsWithChildren<Partial<FlexProps> & {
    userName?: String;
    userEmail?: String;
} & {
    overrides?: LoggedInUserOverridesProps | undefined | null;
}>;
export default function LoggedInUser(props: LoggedInUserProps): React.ReactElement;
