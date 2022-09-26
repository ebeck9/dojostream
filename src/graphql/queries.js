/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDojo = /* GraphQL */ `
  query GetDojo($id: ID!) {
    getDojo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listDojos = /* GraphQL */ `
  query ListDojos(
    $filter: ModelDojoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDojos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
