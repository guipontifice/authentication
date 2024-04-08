import { PrismaAdapter } from "@auth/prisma-adapter"
import { User } from "@prisma/client"
import NextAuth from "next-auth"
import { db } from "./lib/db"
import { getUserById } from "./data/user"
import authConfig from "./auth.config"

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    callbacks: {
        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as User;
            }
            return session;
        },

        async jwt({ token }) {
            if (!token.sub) return token;

            const existingUser = await getUserById(Number(token.sub));

            if (!existingUser) return token;

            token.role = existingUser;
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig
})