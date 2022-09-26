/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDojo = /* GraphQL */ `
  mutation CreateDojo(
    $input: CreateDojoInput!
    $condition: ModelDojoConditionInput
  ) {
    createDojo(input: $input, condition: $condition) {
      id
      name
      phone
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateDojo = /* GraphQL */ `
  mutation UpdateDojo(
    $input: UpdateDojoInput!
    $condition: ModelDojoConditionInput
  ) {
    updateDojo(input: $input, condition: $condition) {
      id
      name
      phone
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteDojo = /* GraphQL */ `
  mutation DeleteDojo(
    $input: DeleteDojoInput!
    $condition: ModelDojoConditionInput
  ) {
    deleteDojo(input: $input, condition: $condition) {
      id
      name
      phone
      email
      createdAt
      updatedAt
    }
  }
`;
