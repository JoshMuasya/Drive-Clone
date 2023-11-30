import NextAuth from "next-auth";
import { GithubAuth } from "@/app/interface";

// import { authOptions } from "@/server/auth";

import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GithubProvider(<GithubAuth>{
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        })
    ]
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
