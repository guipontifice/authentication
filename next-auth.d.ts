import NextAuth, { type DefaultSession } from "next-auth"
import { User } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
    role: User;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
}
