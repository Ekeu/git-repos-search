import { gql } from '@apollo/client';

export const GET_GITHUB_REPOS = gql`
  query GetRepos($query: String!) {
    search(query: $query, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            name
            url
            forkCount
            databaseId
            owner {
              avatarUrl
              login
            }
            issues(states: [OPEN]) {
              totalCount
            }
            watchers {
              totalCount
            }
            stargazers {
              totalCount
            }
            description
            languages(first: 3) {
              edges {
                node {
                  ... on Language {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
