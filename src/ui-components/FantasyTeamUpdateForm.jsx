/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFantasyTeam } from "../graphql/queries";
import { updateFantasyTeam } from "../graphql/mutations";
const client = generateClient();
export default function FantasyTeamUpdateForm(props) {
  const {
    id: idProp,
    fantasyTeam: fantasyTeamModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    manager: "",
    slogan: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [manager, setManager] = React.useState(initialValues.manager);
  const [slogan, setSlogan] = React.useState(initialValues.slogan);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fantasyTeamRecord
      ? { ...initialValues, ...fantasyTeamRecord }
      : initialValues;
    setName(cleanValues.name);
    setManager(cleanValues.manager);
    setSlogan(cleanValues.slogan);
    setErrors({});
  };
  const [fantasyTeamRecord, setFantasyTeamRecord] =
    React.useState(fantasyTeamModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFantasyTeam.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFantasyTeam
        : fantasyTeamModelProp;
      setFantasyTeamRecord(record);
    };
    queryData();
  }, [idProp, fantasyTeamModelProp]);
  React.useEffect(resetStateValues, [fantasyTeamRecord]);
  const validations = {
    name: [{ type: "Required" }],
    manager: [{ type: "Required" }],
    slogan: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          manager,
          slogan: slogan ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateFantasyTeam.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fantasyTeamRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FantasyTeamUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              manager,
              slogan,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Manager"
        isRequired={true}
        isReadOnly={false}
        value={manager}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              manager: value,
              slogan,
            };
            const result = onChange(modelFields);
            value = result?.manager ?? value;
          }
          if (errors.manager?.hasError) {
            runValidationTasks("manager", value);
          }
          setManager(value);
        }}
        onBlur={() => runValidationTasks("manager", manager)}
        errorMessage={errors.manager?.errorMessage}
        hasError={errors.manager?.hasError}
        {...getOverrideProps(overrides, "manager")}
      ></TextField>
      <TextField
        label="Slogan"
        isRequired={false}
        isReadOnly={false}
        value={slogan}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              manager,
              slogan: value,
            };
            const result = onChange(modelFields);
            value = result?.slogan ?? value;
          }
          if (errors.slogan?.hasError) {
            runValidationTasks("slogan", value);
          }
          setSlogan(value);
        }}
        onBlur={() => runValidationTasks("slogan", slogan)}
        errorMessage={errors.slogan?.errorMessage}
        hasError={errors.slogan?.hasError}
        {...getOverrideProps(overrides, "slogan")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fantasyTeamModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fantasyTeamModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
