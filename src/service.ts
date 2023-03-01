import { ApolloServer } from "@apollo/server";
import type { GraphQLFormattedError } from "graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import depthLimit from "graphql-depth-limit";
import { typeDefs, resolvers } from "./resolvers";
import { graphQLCustomPlugin } from "./graphql-plugins";
import { Logger } from "./common";

const initializeApolloServer = (): ApolloServer =>
    new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        formatError: ({
            message,
            locations,
            path,
            extensions,
        }): GraphQLFormattedError => {
            Logger.warn({
                message,
                formattedError: {
                    locations,
                    path,
                    extensionsCode: extensions?.code,
                },
                callSite: {
                    function: "formatError in ApolloServer",
                },
            });
            return {
                message: "INTERNAL_SERVER_ERROR",
            };
        },
        validationRules: [depthLimit(10)],
        plugins: [graphQLCustomPlugin],
    });

export const startService = async (): Promise<{
    url: string;
    apolloServer: ApolloServer;
}> => {
    const apolloServer = initializeApolloServer();
    const { url } = await startStandaloneServer(apolloServer, {
        listen: { port: 3000 },
        // eslint-disable-next-line @typescript-eslint/require-await
        context: async () => ({
            // dataSources: getContext(),
        }),
    });
    Logger.info({ message: `🚀 Server ready at ${url}` });
    return {
        url,
        apolloServer,
    };
};
