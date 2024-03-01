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
import { createLeague } from "../graphql/mutations";
const client = generateClient();
export default function LeagueCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    maxPlayers: "",
    benchCount: "",
    teamCount: "",
    leagueKey: "",
    commissioner: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [maxPlayers, setMaxPlayers] = React.useState(initialValues.maxPlayers);
  const [benchCount, setBenchCount] = React.useState(initialValues.benchCount);
  const [teamCount, setTeamCount] = React.useState(initialValues.teamCount);
  const [leagueKey, setLeagueKey] = React.useState(initialValues.leagueKey);
  const [commissioner, setCommissioner] = React.useState(
    initialValues.commissioner
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setMaxPlayers(initialValues.maxPlayers);
    setBenchCount(initialValues.benchCount);
    setTeamCount(initialValues.teamCount);
    setLeagueKey(initialValues.leagueKey);
    setCommissioner(initialValues.commissioner);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    maxPlayers: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [3],
        validationMessage: "The value must be greater than 3",
      },
    ],
    benchCount: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [-1],
        validationMessage: "The value must be greater than -1",
      },
    ],
    teamCount: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [0],
        validationMessage: "The value must be greater than 0",
      },
    ],
    leagueKey: [{ type: "Required" }],
    commissioner: [{ type: "Required" }, { type: "Email" }],
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
          maxPlayers,
          benchCount,
          teamCount,
          leagueKey,
          commissioner,
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
            query: createLeague.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LeagueCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        descriptiveText="League name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              maxPlayers,
              benchCount,
              teamCount,
              leagueKey,
              commissioner,
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
        label="Max players"
        descriptiveText="Total number of players per team"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxPlayers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              maxPlayers: value,
              benchCount,
              teamCount,
              leagueKey,
              commissioner,
            };
            const result = onChange(modelFields);
            value = result?.maxPlayers ?? value;
          }
          if (errors.maxPlayers?.hasError) {
            runValidationTasks("maxPlayers", value);
          }
          setMaxPlayers(value);
        }}
        onBlur={() => runValidationTasks("maxPlayers", maxPlayers)}
        errorMessage={errors.maxPlayers?.errorMessage}
        hasError={errors.maxPlayers?.hasError}
        {...getOverrideProps(overrides, "maxPlayers")}
      ></TextField>
      <TextField
        label="Bench count"
        descriptiveText="Total number of bench players"
        isRequired={true}
        isReadOnly={false}
        placeholder="0"
        type="number"
        step="any"
        value={benchCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              maxPlayers,
              benchCount: value,
              teamCount,
              leagueKey,
              commissioner,
            };
            const result = onChange(modelFields);
            value = result?.benchCount ?? value;
          }
          if (errors.benchCount?.hasError) {
            runValidationTasks("benchCount", value);
          }
          setBenchCount(value);
        }}
        onBlur={() => runValidationTasks("benchCount", benchCount)}
        errorMessage={errors.benchCount?.errorMessage}
        hasError={errors.benchCount?.hasError}
        {...getOverrideProps(overrides, "benchCount")}
      ></TextField>
      <TextField
        label="Team count"
        descriptiveText="Total number of teams playing fantasy"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={teamCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              maxPlayers,
              benchCount,
              teamCount: value,
              leagueKey,
              commissioner,
            };
            const result = onChange(modelFields);
            value = result?.teamCount ?? value;
          }
          if (errors.teamCount?.hasError) {
            runValidationTasks("teamCount", value);
          }
          setTeamCount(value);
        }}
        onBlur={() => runValidationTasks("teamCount", teamCount)}
        errorMessage={errors.teamCount?.errorMessage}
        hasError={errors.teamCount?.hasError}
        {...getOverrideProps(overrides, "teamCount")}
      ></TextField>
      <TextField
        label="League key"
        descriptiveText="Unique key used by users to join the league"
        isRequired={true}
        isReadOnly={false}
        value={leagueKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              maxPlayers,
              benchCount,
              teamCount,
              leagueKey: value,
              commissioner,
            };
            const result = onChange(modelFields);
            value = result?.leagueKey ?? value;
          }
          if (errors.leagueKey?.hasError) {
            runValidationTasks("leagueKey", value);
          }
          setLeagueKey(value);
        }}
        onBlur={() => runValidationTasks("leagueKey", leagueKey)}
        errorMessage={errors.leagueKey?.errorMessage}
        hasError={errors.leagueKey?.hasError}
        {...getOverrideProps(overrides, "leagueKey")}
      ></TextField>
      <TextField
        label="Commissioner"
        descriptiveText="League commissioner email id"
        isRequired={true}
        isReadOnly={false}
        value={commissioner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              maxPlayers,
              benchCount,
              teamCount,
              leagueKey,
              commissioner: value,
            };
            const result = onChange(modelFields);
            value = result?.commissioner ?? value;
          }
          if (errors.commissioner?.hasError) {
            runValidationTasks("commissioner", value);
          }
          setCommissioner(value);
        }}
        onBlur={() => runValidationTasks("commissioner", commissioner)}
        errorMessage={errors.commissioner?.errorMessage}
        hasError={errors.commissioner?.hasError}
        {...getOverrideProps(overrides, "commissioner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Create"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
