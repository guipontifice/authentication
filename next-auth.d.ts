import NextAuth, { type DefaultSession } from "next-auth"
import { UserRole } from "@prisma/client";
import { User } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser
    }
    interface NextAuthOptions {
        session: {
            user: ExtendedUser
        }
    }
}

