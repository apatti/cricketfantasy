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
export declare type FantasyTeamUpdateFormInputValues = {
    name?: string;
    manager?: string;
    slogan?: string;
};
export declare type FantasyTeamUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    manager?: ValidationFunction<string>;
    slogan?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FantasyTeamUpdateFormOverridesProps = {
    FantasyTeamUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    manager?: PrimitiveOverrideProps<TextFieldProps>;
    slogan?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FantasyTeamUpdateFormProps = React.PropsWithChildren<{
    overrides?: FantasyTeamUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fantasyTeam?: any;
    onSubmit?: (fields: FantasyTeamUpdateFormInputValues) => FantasyTeamUpdateFormInputValues;
    onSuccess?: (fields: FantasyTeamUpdateFormInputValues) => void;
    onError?: (fields: FantasyTeamUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FantasyTeamUpdateFormInputValues) => FantasyTeamUpdateFormInputValues;
    onValidate?: FantasyTeamUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FantasyTeamUpdateForm(props: FantasyTeamUpdateFormProps): React.ReactElement;
