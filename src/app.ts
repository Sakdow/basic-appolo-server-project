import {IncomingMessage, OutgoingMessage} from "http";
import {ApolloServer} from "apollo-server";
import {buildSchema} from "type-graphql";
import {testResolvers} from "./testResolvers";

export type Context = {
    response: OutgoingMessage;
};

export const buildServer = async (): Promise<ApolloServer> => {
    const schema = await buildSchema({
        resolvers: [
            testResolvers,
        ],
    });

    return new ApolloServer({
        schema,
        context: async (incomingContext: { req: IncomingMessage; res: OutgoingMessage }): Promise<Context> => {
            return {
                response: incomingContext.res,
            };
        },
    });
};
