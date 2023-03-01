import type { Resolvers } from "../types";
import { people } from "./test-data";
import { films } from "../films/test-data";

export const resolvers: Resolvers = {
    Query: {
        allPeople: async (_, { first, after }) => {
            const peopleIndex = after
                ? people.findIndex((p) => p.id === after)
                : -1;
            const pickData = (p: (typeof people)[number]) =>
                ({
                    id: p.id,
                    name: p.name,
                    films: p.films,
                } as const);
            const resultPeople =
                peopleIndex === -1
                    ? people.slice(0, first).map(pickData)
                    : people
                          .slice(peopleIndex + 1, peopleIndex + 1 + first)
                          .map(pickData);
            return {
                pageInfo: {
                    hasNextPage: first <= resultPeople.length,
                    endCursor: resultPeople[resultPeople.length - 1]?.id,
                },
                totalCount: people.length,
                edges: resultPeople.map((p) => ({
                    cursor: p.id,
                    node: p,
                })),
                nodes: resultPeople,
            };
        },
    },
    Person: {
        filmConnection: async (parent, args) => {
            const person = people.find((p) => p.id === parent.id);
            if (!person) {
                return {
                    pageInfo: {
                        hasNextPage: false,
                    },
                    totalCount: 0,
                    edges: [],
                    nodes: [],
                };
            }
            const isNotNullish = <T>(value: T): value is NonNullable<T> =>
                value != undefined;
            const res = person.films
                .map((personFilm) => films.find((f) => f.id === personFilm))
                .filter(isNotNullish);
            const filmsIndex = args.after
                ? res.findIndex((p) => p.id === args.after)
                : -1;
            const resultFilms =
                filmsIndex === -1
                    ? res.slice(0, args.first)
                    : res.slice(filmsIndex + 1, filmsIndex + 1 + args.first);

            return {
                pageInfo: {
                    hasNextPage: args.first <= resultFilms.length,
                    endCursor: resultFilms[resultFilms.length - 1]?.id,
                },
                totalCount: res.length,
                edges: resultFilms.map((f) => ({
                    node: f,
                    cursor: f.id,
                })),
                nodes: resultFilms,
            };
        },
    },
};
