import { startService } from "../../service";
import type { ApolloServer } from "@apollo/server";
import request from "supertest";

describe("people.resolver", () => {
    let apolloServer: ApolloServer;
    let url: string;
    beforeAll(async () => {
        ({ apolloServer, url } = await startService());
    });
    afterAll(async () => {
        await apolloServer.stop();
    });

    test("example", async () => {
        const queryData = {
            query: `
            query allPeople($first: Int!, $filmConnectionFirst: Int!, $after: String) {
                allPeople(first: $first, after: $after){
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                    totalCount
                    edges {
                    cursor
                        node {
                            ...PrimitivesOfPerson
                            filmConnection(first: $filmConnectionFirst) {
                                pageInfo {
                                    hasNextPage
                                    endCursor
                                }
                                totalCount
                                edges {
                                    node {
                                        ...PrimitivesOfFilm
                                    }
                                    cursor
                                }
                                nodes {
                                    ...PrimitivesOfFilm
                                }
                            }
                        }
                    }
                    nodes {
                        ...PrimitivesOfPerson
                        filmConnection(first: $filmConnectionFirst) {
                            pageInfo {
                                hasNextPage
                                endCursor
                            }
                            totalCount
                            edges {
                            cursor
                                node {
                                    ...PrimitivesOfFilm
                                }
                            }
                            nodes {
                                ...PrimitivesOfFilm
                            }
                        }
                    }
                }
            }
            fragment PrimitivesOfPerson on Person {
                id
                name
            }
            fragment PrimitivesOfFilm on Film {
                id
                title
                episodeId
                director
            }`,
            operationName: "allPeople",
            variables: {
                first: 3,
                filmConnectionFirst: 10,
                after: "9",
            },
        };
        const { body } = (await request(url).post("/").send(queryData)) as {
            body: { data?: { allPeople?: { edges: unknown[] } } | null };
        };
        expect(body?.data?.allPeople).toStrictEqual({
            pageInfo: {
                hasNextPage: true,
                endCursor: "12",
            },
            totalCount: 82,
            edges: [
                {
                    cursor: "10",
                    node: {
                        id: "10",
                        name: "Obi-Wan Kenobi",
                        filmConnection: {
                            pageInfo: {
                                hasNextPage: false,
                                endCursor: "6",
                            },
                            totalCount: 6,
                            edges: [
                                {
                                    node: {
                                        id: "1",
                                        title: "A New Hope",
                                        episodeId: 4,
                                        director: "George Lucas",
                                    },
                                    cursor: "1",
                                },
                                {
                                    node: {
                                        id: "2",
                                        title: "The Empire Strikes Back",
                                        episodeId: 5,
                                        director: "Irvin Kershner",
                                    },
                                    cursor: "2",
                                },
                                {
                                    node: {
                                        id: "3",
                                        title: "Return of the Jedi",
                                        episodeId: 6,
                                        director: "Richard Marquand",
                                    },
                                    cursor: "3",
                                },
                                {
                                    node: {
                                        id: "4",
                                        title: "The Phantom Menace",
                                        episodeId: 1,
                                        director: "George Lucas",
                                    },
                                    cursor: "4",
                                },
                                {
                                    node: {
                                        id: "5",
                                        title: "Attack of the Clones",
                                        episodeId: 2,
                                        director: "George Lucas",
                                    },
                                    cursor: "5",
                                },
                                {
                                    node: {
                                        id: "6",
                                        title: "Revenge of the Sith",
                                        episodeId: 3,
                                        director: "George Lucas",
                                    },
                                    cursor: "6",
                                },
                            ],
                            nodes: [
                                {
                                    id: "1",
                                    title: "A New Hope",
                                    episodeId: 4,
                                    director: "George Lucas",
                                },
                                {
                                    id: "2",
                                    title: "The Empire Strikes Back",
                                    episodeId: 5,
                                    director: "Irvin Kershner",
                                },
                                {
                                    id: "3",
                                    title: "Return of the Jedi",
                                    episodeId: 6,
                                    director: "Richard Marquand",
                                },
                                {
                                    id: "4",
                                    title: "The Phantom Menace",
                                    episodeId: 1,
                                    director: "George Lucas",
                                },
                                {
                                    id: "5",
                                    title: "Attack of the Clones",
                                    episodeId: 2,
                                    director: "George Lucas",
                                },
                                {
                                    id: "6",
                                    title: "Revenge of the Sith",
                                    episodeId: 3,
                                    director: "George Lucas",
                                },
                            ],
                        },
                    },
                },
                {
                    cursor: "11",
                    node: {
                        id: "11",
                        name: "Anakin Skywalker",
                        filmConnection: {
                            pageInfo: {
                                hasNextPage: false,
                                endCursor: "6",
                            },
                            totalCount: 3,
                            edges: [
                                {
                                    node: {
                                        id: "4",
                                        title: "The Phantom Menace",
                                        episodeId: 1,
                                        director: "George Lucas",
                                    },
                                    cursor: "4",
                                },
                                {
                                    node: {
                                        id: "5",
                                        title: "Attack of the Clones",
                                        episodeId: 2,
                                        director: "George Lucas",
                                    },
                                    cursor: "5",
                                },
                                {
                                    node: {
                                        id: "6",
                                        title: "Revenge of the Sith",
                                        episodeId: 3,
                                        director: "George Lucas",
                                    },
                                    cursor: "6",
                                },
                            ],
                            nodes: [
                                {
                                    id: "4",
                                    title: "The Phantom Menace",
                                    episodeId: 1,
                                    director: "George Lucas",
                                },
                                {
                                    id: "5",
                                    title: "Attack of the Clones",
                                    episodeId: 2,
                                    director: "George Lucas",
                                },
                                {
                                    id: "6",
                                    title: "Revenge of the Sith",
                                    episodeId: 3,
                                    director: "George Lucas",
                                },
                            ],
                        },
                    },
                },
                {
                    cursor: "12",
                    node: {
                        id: "12",
                        name: "Wilhuff Tarkin",
                        filmConnection: {
                            pageInfo: {
                                hasNextPage: false,
                                endCursor: "6",
                            },
                            totalCount: 2,
                            edges: [
                                {
                                    node: {
                                        id: "1",
                                        title: "A New Hope",
                                        episodeId: 4,
                                        director: "George Lucas",
                                    },
                                    cursor: "1",
                                },
                                {
                                    node: {
                                        id: "6",
                                        title: "Revenge of the Sith",
                                        episodeId: 3,
                                        director: "George Lucas",
                                    },
                                    cursor: "6",
                                },
                            ],
                            nodes: [
                                {
                                    id: "1",
                                    title: "A New Hope",
                                    episodeId: 4,
                                    director: "George Lucas",
                                },
                                {
                                    id: "6",
                                    title: "Revenge of the Sith",
                                    episodeId: 3,
                                    director: "George Lucas",
                                },
                            ],
                        },
                    },
                },
            ],
            nodes: [
                {
                    id: "10",
                    name: "Obi-Wan Kenobi",
                    filmConnection: {
                        pageInfo: {
                            hasNextPage: false,
                            endCursor: "6",
                        },
                        totalCount: 6,
                        edges: [
                            {
                                cursor: "1",
                                node: {
                                    id: "1",
                                    title: "A New Hope",
                                    episodeId: 4,
                                    director: "George Lucas",
                                },
                            },
                            {
                                cursor: "2",
                                node: {
                                    id: "2",
                                    title: "The Empire Strikes Back",
                                    episodeId: 5,
                                    director: "Irvin Kershner",
                                },
                            },
                            {
                                cursor: "3",
                                node: {
                                    id: "3",
                                    title: "Return of the Jedi",
                                    episodeId: 6,
                                    director: "Richard Marquand",
                                },
                            },
                            {
                                cursor: "4",
                                node: {
                                    id: "4",
                                    title: "The Phantom Menace",
                                    episodeId: 1,
                                    director: "George Lucas",
                                },
                            },
                            {
                                cursor: "5",
                                node: {
                                    id: "5",
                                    title: "Attack of the Clones",
                                    episodeId: 2,
                                    director: "George Lucas",
                                },
                            },
                            {
                                cursor: "6",
                                node: {
                                    id: "6",
                                    title: "Revenge of the Sith",
                                    episodeId: 3,
                                    director: "George Lucas",
                                },
                            },
                        ],
                        nodes: [
                            {
                                id: "1",
                                title: "A New Hope",
                                episodeId: 4,
                                director: "George Lucas",
                            },
                            {
                                id: "2",
                                title: "The Empire Strikes Back",
                                episodeId: 5,
                                director: "Irvin Kershner",
                            },
                            {
                                id: "3",
                                title: "Return of the Jedi",
                                episodeId: 6,
                                director: "Richard Marquand",
                            },
                            {
                                id: "4",
                                title: "The Phantom Menace",
                                episodeId: 1,
                                director: "George Lucas",
                            },
                            {
                                id: "5",
                                title: "Attack of the Clones",
                                episodeId: 2,
                                director: "George Lucas",
                            },
                            {
                                id: "6",
                                title: "Revenge of the Sith",
                                episodeId: 3,
                                director: "George Lucas",
                            },
                        ],
                    },
                },
                {
                    id: "11",
                    name: "Anakin Skywalker",
                    filmConnection: {
                        pageInfo: {
                            hasNextPage: false,
                            endCursor: "6",
                        },
                        totalCount: 3,
                        edges: [
                            {
                                cursor: "4",
                                node: {
                                    id: "4",
                                    title: "The Phantom Menace",
                                    episodeId: 1,
                                    director: "George Lucas",
                                },
                            },
                            {
                                cursor: "5",
                                node: {
                                    id: "5",
                                    title: "Attack of the Clones",
                                    episodeId: 2,
                                    director: "George Lucas",
                                },
                            },
                            {
                                cursor: "6",
                                node: {
                                    id: "6",
                                    title: "Revenge of the Sith",
                                    episodeId: 3,
                                    director: "George Lucas",
                                },
                            },
                        ],
                        nodes: [
                            {
                                id: "4",
                                title: "The Phantom Menace",
                                episodeId: 1,
                                director: "George Lucas",
                            },
                            {
                                id: "5",
                                title: "Attack of the Clones",
                                episodeId: 2,
                                director: "George Lucas",
                            },
                            {
                                id: "6",
                                title: "Revenge of the Sith",
                                episodeId: 3,
                                director: "George Lucas",
                            },
                        ],
                    },
                },
                {
                    id: "12",
                    name: "Wilhuff Tarkin",
                    filmConnection: {
                        pageInfo: {
                            hasNextPage: false,
                            endCursor: "6",
                        },
                        totalCount: 2,
                        edges: [
                            {
                                cursor: "1",
                                node: {
                                    id: "1",
                                    title: "A New Hope",
                                    episodeId: 4,
                                    director: "George Lucas",
                                },
                            },
                            {
                                cursor: "6",
                                node: {
                                    id: "6",
                                    title: "Revenge of the Sith",
                                    episodeId: 3,
                                    director: "George Lucas",
                                },
                            },
                        ],
                        nodes: [
                            {
                                id: "1",
                                title: "A New Hope",
                                episodeId: 4,
                                director: "George Lucas",
                            },
                            {
                                id: "6",
                                title: "Revenge of the Sith",
                                episodeId: 3,
                                director: "George Lucas",
                            },
                        ],
                    },
                },
            ],
        });
    });
});
