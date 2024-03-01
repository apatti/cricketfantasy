/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ButtondefaultfalselinkOverridesProps = {
    Buttondefaultfalselink?: PrimitiveOverrideProps<FlexProps>;
    "\u270F\uFE0F Button text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtondefaultfalselinkProps = React.PropsWithChildren<Partial<FlexProps> & {
    label?: String;
    btnOnClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: ButtondefaultfalselinkOverridesProps | undefined | null;
}>;
export default function Buttondefaultfalselink(props: ButtondefaultfalselinkProps): React.ReactElement;
