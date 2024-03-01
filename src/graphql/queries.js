/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFantasyTeam = /* GraphQL */ `
  query GetFantasyTeam($id: ID!) {
    getFantasyTeam(id: $id) {
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
export const listFantasyTeams = /* GraphQL */ `
  query ListFantasyTeams(
    $filter: ModelFantasyTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFantasyTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getLeague = /* GraphQL */ `
  query GetLeague($id: ID!) {
    getLeague(id: $id) {
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
export const listLeagues = /* GraphQL */ `
  query ListLeagues(
    $filter: ModelLeagueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeagues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
