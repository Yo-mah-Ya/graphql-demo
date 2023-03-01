import { typeDefs as commonTypeDefs } from "./common";
import {
    typeDefs as peopleTypeDefs,
    resolvers as peopleResolvers,
} from "./people";
import {
    typeDefs as filmsTypeDefs,
    resolvers as filmsResolvers,
} from "./films";

export const typeDefs = [commonTypeDefs, filmsTypeDefs, peopleTypeDefs];
export const resolvers = [peopleResolvers, filmsResolvers];
