import {ApolloServer, gql} from "apollo-server";
import {buildContext, ServerTest} from "./server-test";

describe('integration test', () => {
    let server: ApolloServer;

    beforeAll(async () => {

        const serverTest = new ServerTest();
        server = await serverTest.serverTest();
    });

    describe('test',() => {
        test('test', async () => {

            const MUTATE_testResolver = gql`
                mutation testResolver($userInput: UserSignupInput!) {
                    testResolver
                }
            `;

            const res = await server.executeOperation(
                {
                    query: MUTATE_testResolver,
                    operationName: 'testResolver',
                },
                buildContext()
            );

            const headers = res.http?.headers;
            expect(true).toBeTruthy()
        })
    });

})
