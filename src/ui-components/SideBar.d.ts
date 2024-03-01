/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32118053359"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32118053570"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1162"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    ORGANIZATION18054244?: PrimitiveOverrideProps<TextProps>;
    "Frame 32118053308"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053230?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053229"?: PrimitiveOverrideProps<TextProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053310?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053311"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32118053501"?: PrimitiveOverrideProps<FlexProps>;
    ORGANIZATION18053227?: PrimitiveOverrideProps<TextProps>;
    "Frame 413"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 323"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053315?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053316"?: PrimitiveOverrideProps<TextProps>;
    "Frame 324"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053318?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053319"?: PrimitiveOverrideProps<TextProps>;
    "Frame 325"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053326?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053327"?: PrimitiveOverrideProps<TextProps>;
    "Frame 326"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053329?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053330"?: PrimitiveOverrideProps<TextProps>;
    "Frame 327"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053336?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053337"?: PrimitiveOverrideProps<TextProps>;
    "Frame 328"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053339?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053340"?: PrimitiveOverrideProps<TextProps>;
    "Frame 329"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053342?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053343"?: PrimitiveOverrideProps<TextProps>;
    "Frame 330"?: PrimitiveOverrideProps<FlexProps>;
    Icon18053345?: PrimitiveOverrideProps<IconProps>;
    "Lorem Ipsum18053346"?: PrimitiveOverrideProps<TextProps>;
    "Frame 32118053976"?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    "Rectangle 1163"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 32118053356"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem Ipsum18053299"?: PrimitiveOverrideProps<TextProps>;
    "Lorem Ipsum18053300"?: PrimitiveOverrideProps<TextProps>;
    Icon18053301?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
