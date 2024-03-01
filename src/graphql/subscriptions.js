/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFantasyTeam = /* GraphQL */ `
  subscription OnCreateFantasyTeam(
    $filter: ModelSubscriptionFantasyTeamFilterInput
    $owner: String
  ) {
    onCreateFantasyTeam(filter: $filter, owner: $owner) {
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
export const onUpdateFantasyTeam = /* GraphQL */ `
  subscription OnUpdateFantasyTeam(
    $filter: ModelSubscriptionFantasyTeamFilterInput
    $owner: String
  ) {
    onUpdateFantasyTeam(filter: $filter, owner: $owner) {
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
export const onDeleteFantasyTeam = /* GraphQL */ `
  subscription OnDeleteFantasyTeam(
    $filter: ModelSubscriptionFantasyTeamFilterInput
    $owner: String
  ) {
    onDeleteFantasyTeam(filter: $filter, owner: $owner) {
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
export const onCreateLeague = /* GraphQL */ `
  subscription OnCreateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onCreateLeague(filter: $filter) {
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
export const onUpdateLeague = /* GraphQL */ `
  subscription OnUpdateLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onUpdateLeague(filter: $filter) {
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
export const onDeleteLeague = /* GraphQL */ `
  subscription OnDeleteLeague($filter: ModelSubscriptionLeagueFilterInput) {
    onDeleteLeague(filter: $filter) {
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
