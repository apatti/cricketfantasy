/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MainNavBarProps } from "./MainNavBar";
import { DividerProps, FlexProps, HeadingProps, SearchFieldProps, ViewProps } from "@aws-amplify/ui-react";
import { PlayerCardProps } from "./PlayerCard";
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
export declare type PlayersPageOverridesProps = {
    PlayersPage?: PrimitiveOverrideProps<ViewProps>;
    DukesPage?: PrimitiveOverrideProps<FlexProps>;
    Container?: PrimitiveOverrideProps<FlexProps>;
    MainNavBar?: MainNavBarProps;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<HeadingProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    SearchField?: PrimitiveOverrideProps<SearchFieldProps>;
    PlayersList?: PrimitiveOverrideProps<FlexProps>;
    PlayerCard29863897?: PlayerCardProps;
    PlayerCard29863849?: PlayerCardProps;
    PlayerCard29863861?: PlayerCardProps;
    PlayerCard29863873?: PlayerCardProps;
    PlayerCard29863885?: PlayerCardProps;
    PlayerCard29864055?: PlayerCardProps;
    PlayerCard29864079?: PlayerCardProps;
    PlayerCard29864091?: PlayerCardProps;
    Footer?: FooterProps;
} & EscapeHatchProps;
export declare type PlayersPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PlayersPageOverridesProps | undefined | null;
}>;
export default function PlayersPage(props: PlayersPageProps): React.ReactElement;
