/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type IconloginOverridesProps = {
    Iconlogin?: PrimitiveOverrideProps<ViewProps>;
    Group102037977?: PrimitiveOverrideProps<ViewProps>;
    Vector102037978?: PrimitiveOverrideProps<IconProps>;
    Group102037979?: PrimitiveOverrideProps<ViewProps>;
    Vector102037980?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconloginProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconloginOverridesProps | undefined | null;
}>;
export default function Iconlogin(props: IconloginProps): React.ReactElement;
