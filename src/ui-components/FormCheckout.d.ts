/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FormCheckoutOverridesProps = {
    FormCheckout?: PrimitiveOverrideProps<FlexProps>;
    "Frame 411"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31318052656"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<TextProps>;
    TextField18021895?: PrimitiveOverrideProps<TextFieldProps>;
    TextField18052555?: PrimitiveOverrideProps<TextFieldProps>;
    Divider18052618?: PrimitiveOverrideProps<DividerProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    Shipping18052565?: PrimitiveOverrideProps<TextProps>;
    TextField18052560?: PrimitiveOverrideProps<TextFieldProps>;
    TextField18052569?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 407"?: PrimitiveOverrideProps<FlexProps>;
    TextField18052574?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField18052579?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 408"?: PrimitiveOverrideProps<FlexProps>;
    TextField18052591?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField18052596?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider18052620?: PrimitiveOverrideProps<DividerProps>;
    "Frame 31318052655"?: PrimitiveOverrideProps<FlexProps>;
    "Card info"?: PrimitiveOverrideProps<TextProps>;
    TextField18052624?: PrimitiveOverrideProps<TextFieldProps>;
    TextField18052629?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 410"?: PrimitiveOverrideProps<FlexProps>;
    SelectField18052634?: PrimitiveOverrideProps<SelectFieldProps>;
    SelectField18052642?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 412"?: PrimitiveOverrideProps<FlexProps>;
    "Group 320"?: PrimitiveOverrideProps<FlexProps>;
    "Group 314"?: PrimitiveOverrideProps<ViewProps>;
    image18021851?: PrimitiveOverrideProps<ImageProps>;
    "Order Summary18021852"?: PrimitiveOverrideProps<TextProps>;
    Black18021853?: PrimitiveOverrideProps<TextProps>;
    "Basic Tee18021854"?: PrimitiveOverrideProps<TextProps>;
    Large18021855?: PrimitiveOverrideProps<TextProps>;
    Icon18021856?: PrimitiveOverrideProps<IconProps>;
    SelectField18021858?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider18021859?: PrimitiveOverrideProps<DividerProps>;
    Divider18021860?: PrimitiveOverrideProps<DividerProps>;
    Divider18021861?: PrimitiveOverrideProps<DividerProps>;
    "Group 315"?: PrimitiveOverrideProps<ViewProps>;
    image18021862?: PrimitiveOverrideProps<ImageProps>;
    "Order Summary18021863"?: PrimitiveOverrideProps<TextProps>;
    Black18021864?: PrimitiveOverrideProps<TextProps>;
    "Basic Tee18021865"?: PrimitiveOverrideProps<TextProps>;
    Large18021866?: PrimitiveOverrideProps<TextProps>;
    Icon18021867?: PrimitiveOverrideProps<IconProps>;
    SelectField18021868?: PrimitiveOverrideProps<SelectFieldProps>;
    Divider18021869?: PrimitiveOverrideProps<DividerProps>;
    "Group 316"?: PrimitiveOverrideProps<ViewProps>;
    Subtotal?: PrimitiveOverrideProps<TextProps>;
    "$320.00"?: PrimitiveOverrideProps<TextProps>;
    "Group 317"?: PrimitiveOverrideProps<ViewProps>;
    Shipping18021872?: PrimitiveOverrideProps<TextProps>;
    "$15.00"?: PrimitiveOverrideProps<TextProps>;
    "Group 318"?: PrimitiveOverrideProps<ViewProps>;
    Taxes?: PrimitiveOverrideProps<TextProps>;
    "$26.80"?: PrimitiveOverrideProps<TextProps>;
    Divider18021876?: PrimitiveOverrideProps<DividerProps>;
    "Group 319"?: PrimitiveOverrideProps<ViewProps>;
    Total?: PrimitiveOverrideProps<TextProps>;
    "$361.80"?: PrimitiveOverrideProps<TextProps>;
    Divider18021879?: PrimitiveOverrideProps<DividerProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Group 313"?: PrimitiveOverrideProps<ViewProps>;
    Icon18021857?: PrimitiveOverrideProps<IconProps>;
    "Cart (2)"?: PrimitiveOverrideProps<TextProps>;
    "$101.70"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type FormCheckoutProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FormCheckoutOverridesProps | undefined | null;
}>;
export default function FormCheckout(props: FormCheckoutProps): React.ReactElement;
