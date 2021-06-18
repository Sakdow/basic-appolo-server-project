import {Ctx, Mutation, Query, Resolver} from "type-graphql";
import {Context} from "./app";
import cookie from 'cookie';
import "reflect-metadata";

@Resolver()
export class testResolvers {

    @Query(() => Boolean)
    async me(@Ctx() { response }: Context): Promise<boolean> {
        response.setHeader(
            'Set-Cookie',
            cookie.serialize('refreshToken', "refreshToken", {
                httpOnly: true,
                maxAge: 15*60,
                secure: true,
            })
        );
        return true;
    }

    @Mutation(() => Boolean)
    async testResolver(@Ctx() { response }: Context): Promise<boolean> {
        response.setHeader(
            'Set-Cookie',
            cookie.serialize('refreshToken', "refreshToken", {
                httpOnly: true,
                maxAge: 15*60,
                secure: true,
            })
        );
        return true;
    }
}
