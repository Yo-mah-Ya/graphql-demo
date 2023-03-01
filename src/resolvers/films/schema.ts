import { gql } from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        allFilms(after: String, first: Int!): FilmsConnection
        film(id: ID, filmID: ID): Film
    }

    type FilmsConnection {
        pageInfo: PageInfo!
        edges: [FilmsEdge]
        totalCount: Int
        nodes: [Film]
    }
    type FilmsEdge {
        node: Film
        cursor: String!
    }

    type Film implements Node {
        id: ID!
        title: String!
        episodeId: Int!
        director: String!
        characterConnection(
            after: String
            first: Int!
        ): FilmCharactersConnection
    }

    type FilmCharactersConnection {
        pageInfo: PageInfo!
        edges: [FilmCharactersEdge]
        totalCount: Int
        nodes: [Person]
    }
    type FilmCharactersEdge {
        node: Person
        cursor: String!
    }
`;
