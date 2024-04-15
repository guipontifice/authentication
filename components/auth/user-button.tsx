"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { LogoutButton } from "./logout-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ExitIcon } from "@radix-ui/react-icons";
import { SessionProvider } from "next-auth/react";

export const UserButton = () => {
    const user = useCurrentUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <SessionProvider>
                        <AvatarImage src={user?.image || ""} />
                    </SessionProvider>
                    <AvatarFallback className="bg-sky-500">
                        <FaUser className="text-white" />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <LogoutButton>
                    <DropdownMenuItem>
                        <ExitIcon className="h-4 w-4 mr-2" />
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}