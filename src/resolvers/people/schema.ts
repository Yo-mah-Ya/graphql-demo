import { gql } from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        allPeople(after: String, first: Int!): PeopleConnection
        person(id: ID, personID: ID): Person
    }

    type PeopleConnection {
        pageInfo: PageInfo!
        edges: [PeopleEdge]
        totalCount: Int
        nodes: [Person]
    }

    type PeopleEdge {
        node: Person
        cursor: String!
    }

    type Person implements Node {
        id: ID!
        name: String!
        filmConnection(after: String, first: Int!): PersonFilmsConnection
    }

    type PersonFilmsConnection {
        pageInfo: PageInfo!
        edges: [PersonFilmsEdge]
        totalCount: Int
        nodes: [Film]
    }

    type PersonFilmsEdge {
        node: Film
        cursor: String!
    }
`;
