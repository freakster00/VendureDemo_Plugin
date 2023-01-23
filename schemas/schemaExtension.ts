import gql from 'graphql-tag';
export const schemaExtension = gql`
    extend type Mutation {
        addRandomCat(id: ID!): Product!
    }
`;


