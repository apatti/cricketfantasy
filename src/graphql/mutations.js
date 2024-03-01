/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFantasyTeam = /* GraphQL */ `
  mutation CreateFantasyTeam(
    $input: CreateFantasyTeamInput!
    $condition: ModelFantasyTeamConditionInput
  ) {
    createFantasyTeam(input: $input, condition: $condition) {
      id
      name
      manager
      slogan
      League {
        id
        name
        maxPlayers
        benchCount
        teamCount
        leagueKey
        commissioner
        createdAt
        updatedAt
        leagueFantasyTeamId
        __typename
      }
      createdAt
      updatedAt
      fantasyTeamLeagueId
      owner
      __typename
    }
  }
`;
export const updateFantasyTeam = /* GraphQL */ `
  mutation UpdateFantasyTeam(
    $input: UpdateFantasyTeamInput!
    $condition: ModelFantasyTeamConditionInput
  ) {
    updateFantasyTeam(input: $input, condition: $condition) {
      id
      name
      manager
      slogan
      League {
        id
        name
        maxPlayers
        benchCount
        teamCount
        leagueKey
        commissioner
        createdAt
        updatedAt
        leagueFantasyTeamId
        __typename
      }
      createdAt
      updatedAt
      fantasyTeamLeagueId
      owner
      __typename
    }
  }
`;
export const deleteFantasyTeam = /* GraphQL */ `
  mutation DeleteFantasyTeam(
    $input: DeleteFantasyTeamInput!
    $condition: ModelFantasyTeamConditionInput
  ) {
    deleteFantasyTeam(input: $input, condition: $condition) {
      id
      name
      manager
      slogan
      League {
        id
        name
        maxPlayers
        benchCount
        teamCount
        leagueKey
        commissioner
        createdAt
        updatedAt
        leagueFantasyTeamId
        __typename
      }
      createdAt
      updatedAt
      fantasyTeamLeagueId
      owner
      __typename
    }
  }
`;
export const createLeague = /* GraphQL */ `
  mutation CreateLeague(
    $input: CreateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    createLeague(input: $input, condition: $condition) {
      id
      name
      maxPlayers
      benchCount
      teamCount
      leagueKey
      commissioner
      FantasyTeam {
        id
        name
        manager
        slogan
        createdAt
        updatedAt
        fantasyTeamLeagueId
        owner
        __typename
      }
      createdAt
      updatedAt
      leagueFantasyTeamId
      __typename
    }
  }
`;
export const updateLeague = /* GraphQL */ `
  mutation UpdateLeague(
    $input: UpdateLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    updateLeague(input: $input, condition: $condition) {
      id
      name
      maxPlayers
      benchCount
      teamCount
      leagueKey
      commissioner
      FantasyTeam {
        id
        name
        manager
        slogan
        createdAt
        updatedAt
        fantasyTeamLeagueId
        owner
        __typename
      }
      createdAt
      updatedAt
      leagueFantasyTeamId
      __typename
    }
  }
`;
export const deleteLeague = /* GraphQL */ `
  mutation DeleteLeague(
    $input: DeleteLeagueInput!
    $condition: ModelLeagueConditionInput
  ) {
    deleteLeague(input: $input, condition: $condition) {
      id
      name
      maxPlayers
      benchCount
      teamCount
      leagueKey
      commissioner
      FantasyTeam {
        id
        name
        manager
        slogan
        createdAt
        updatedAt
        fantasyTeamLeagueId
        owner
        __typename
      }
      createdAt
      updatedAt
      leagueFantasyTeamId
      __typename
    }
  }
`;
