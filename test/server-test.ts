
import { ApolloServer } from 'apollo-server';

import { IncomingMessage, OutgoingMessage } from 'http';
import { Socket } from 'net';
import {buildServer} from "../src/app";

class ServerTest {
    async serverTest() {
        const server: ApolloServer = await buildServer();

        return server;
    }
}

export const buildContext = () => {
    const incomingRequest: IncomingMessage = new IncomingMessage(new Socket());
    const outgoingMessage: OutgoingMessage = new OutgoingMessage();

    return {
        req: incomingRequest,
        res: outgoingMessage,
    };
};

export { ServerTest };
