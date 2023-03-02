import { ApolloServer } from "@apollo/server";
import { ApolloServerErrorCode } from "@apollo/server/errors";
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
        introspection: process.env.NODE_ENV !== "production",
        formatError: ({
            message,
            locations,
            path,
            extensions,
        }): GraphQLFormattedError => {
            Logger.warn({
                message,
                formattedError: {
                    locations: locations
                        ?.map((l) => JSON.stringify(l))
                        .join(", "),
                    path,
                    extensionsCode: extensions?.code,
                },
                callSite: {
                    function: "formatError in ApolloServer",
                },
            });
            return typeof extensions?.code === "string" &&
                [
                    ApolloServerErrorCode.GRAPHQL_PARSE_FAILED,
                    ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED,
                    ApolloServerErrorCode.PERSISTED_QUERY_NOT_FOUND,
                    ApolloServerErrorCode.PERSISTED_QUERY_NOT_SUPPORTED,
                    ApolloServerErrorCode.BAD_USER_INPUT,
                    ApolloServerErrorCode.OPERATION_RESOLUTION_FAILURE,
                    ApolloServerErrorCode.BAD_REQUEST,
                ].includes(extensions.code as ApolloServerErrorCode)
                ? {
                      message: ApolloServerErrorCode.BAD_REQUEST,
                  }
                : {
                      message: ApolloServerErrorCode.INTERNAL_SERVER_ERROR,
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
