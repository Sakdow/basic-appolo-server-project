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

            const QUERY_me = gql`
                mutation me($userInput: UserSignupInput!) {
                    testResolver
                }
            `;

            const res = await server.executeOperation(
                {
                    query: QUERY_me,
                    operationName: 'me',
                },
                buildContext()
            );

            const headers = res.http?.headers;
            expect(true).toBeTruthy()
        })
    });

})
