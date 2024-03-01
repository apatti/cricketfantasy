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
import { getLeague } from "../graphql/queries";
import { updateLeague } from "../graphql/mutations";
const client = generateClient();
export default function LeagueUpdateForm(props) {
  const {
    id: idProp,
    league: leagueModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    maxPlayers: "",
    benchCount: "",
    teamCount: "",
    leagueKey: "",
    commissioner: "",
  };
  const [maxPlayers, setMaxPlayers] = React.useState(initialValues.maxPlayers);
  const [benchCount, setBenchCount] = React.useState(initialValues.benchCount);
  const [teamCount, setTeamCount] = React.useState(initialValues.teamCount);
  const [leagueKey, setLeagueKey] = React.useState(initialValues.leagueKey);
  const [commissioner, setCommissioner] = React.useState(
    initialValues.commissioner
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = leagueRecord
      ? { ...initialValues, ...leagueRecord }
      : initialValues;
    setMaxPlayers(cleanValues.maxPlayers);
    setBenchCount(cleanValues.benchCount);
    setTeamCount(cleanValues.teamCount);
    setLeagueKey(cleanValues.leagueKey);
    setCommissioner(cleanValues.commissioner);
    setErrors({});
  };
  const [leagueRecord, setLeagueRecord] = React.useState(leagueModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getLeague.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getLeague
        : leagueModelProp;
      setLeagueRecord(record);
    };
    queryData();
  }, [idProp, leagueModelProp]);
  React.useEffect(resetStateValues, [leagueRecord]);
  const validations = {
    maxPlayers: [{ type: "Required" }],
    benchCount: [{ type: "Required" }],
    teamCount: [{ type: "Required" }],
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
            query: updateLeague.replaceAll("__typename", ""),
            variables: {
              input: {
                id: leagueRecord.id,
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
      {...getOverrideProps(overrides, "LeagueUpdateForm")}
      {...rest}
    >
      <TextField
        label="Max players"
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
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={benchCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
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
        isRequired={true}
        isReadOnly={false}
        value={leagueKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
        isRequired={true}
        isReadOnly={false}
        value={commissioner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || leagueModelProp)}
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
              !(idProp || leagueModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
