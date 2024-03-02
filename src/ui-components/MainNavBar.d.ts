/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtondefaultfalselinkProps } from "./Buttondefaultfalselink";
import { LoggedInUserProps } from "./LoggedInUser";
import { SyntheticEvent } from "react";
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
export declare type MainNavBarOverridesProps = {
    MainNavBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    dukeslogo?: PrimitiveOverrideProps<ImageProps>;
    navItems?: PrimitiveOverrideProps<FlexProps>;
    Home?: ButtondefaultfalselinkProps;
    Leagues?: ButtondefaultfalselinkProps;
    Team?: ButtondefaultfalselinkProps;
    Players?: ButtondefaultfalselinkProps;
    Rules?: ButtondefaultfalselinkProps;
    profileItems?: PrimitiveOverrideProps<ViewProps>;
    LoggedInUser?: LoggedInUserProps;
    loginBtnName?: ButtondefaultfalselinkProps;
} & EscapeHatchProps;
export declare type MainNavBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    userImg?: React.ReactNode;
    profileItems?: React.ReactNode;
    a?: String;
    loginBtnLabel?: String;
    showLoggedInUserModal?: Boolean;
    showLoginBtn?: Boolean;
    displayLoginBtn?: String;
    displayLoggedInUserModal?: String;
    loginBtnOnClick?: (event: SyntheticEvent) => void;
    src?: String;
    homeBtnOnClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: MainNavBarOverridesProps | undefined | null;
}>;
export default function MainNavBar(props: MainNavBarProps): React.ReactElement;
