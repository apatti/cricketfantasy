/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeagueUpdateFormInputValues = {
    maxPlayers?: number;
    benchCount?: number;
    teamCount?: number;
    leagueKey?: string;
    commissioner?: string;
};
export declare type LeagueUpdateFormValidationValues = {
    maxPlayers?: ValidationFunction<number>;
    benchCount?: ValidationFunction<number>;
    teamCount?: ValidationFunction<number>;
    leagueKey?: ValidationFunction<string>;
    commissioner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeagueUpdateFormOverridesProps = {
    LeagueUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    maxPlayers?: PrimitiveOverrideProps<TextFieldProps>;
    benchCount?: PrimitiveOverrideProps<TextFieldProps>;
    teamCount?: PrimitiveOverrideProps<TextFieldProps>;
    leagueKey?: PrimitiveOverrideProps<TextFieldProps>;
    commissioner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LeagueUpdateFormProps = React.PropsWithChildren<{
    overrides?: LeagueUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    league?: any;
    onSubmit?: (fields: LeagueUpdateFormInputValues) => LeagueUpdateFormInputValues;
    onSuccess?: (fields: LeagueUpdateFormInputValues) => void;
    onError?: (fields: LeagueUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LeagueUpdateFormInputValues) => LeagueUpdateFormInputValues;
    onValidate?: LeagueUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LeagueUpdateForm(props: LeagueUpdateFormProps): React.ReactElement;
