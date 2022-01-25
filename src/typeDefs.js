import { gql } from "apollo-server-core";

export const typeDefs = gql`
    type Query {
        testQuery(testString: String!): String
    }
`
