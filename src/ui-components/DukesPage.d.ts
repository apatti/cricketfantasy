/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MainNavBarProps } from "./MainNavBar";
import { DividerProps, FlexProps, HeadingProps } from "@aws-amplify/ui-react";
import { FooterProps } from "./Footer";
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
export declare type DukesPageOverridesProps = {
    DukesPage?: PrimitiveOverrideProps<FlexProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    MainNavBar?: MainNavBarProps;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Footer?: FooterProps;
} & EscapeHatchProps;
export declare type DukesPageProps = React.PropsWithChildren<Partial<FlexProps> & {
    body?: React.ReactNode;
} & {
    overrides?: DukesPageOverridesProps | undefined | null;
}>;
export default function DukesPage(props: DukesPageProps): React.ReactElement;
