// /components/UserNav.tsx

'use client'

import Logout from "@/components/signout/page";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useSession } from "next-auth/react";

export function UserNav() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="sticky bottom-4 p-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-600">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex rounded-xl cursor-pointer items-center">
            <div className="mx-1">
              <Avatar className="border border-black dark:border-white">
                {user?.image && <AvatarImage src={user?.image} />}
                {user?.name && (
                  <AvatarFallback className="">
                    {user?.name[0]}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-black dark:text-white">{user?.name}</p>
              <p className="text-xs text-gray-800 dark:text-gray-300">{user?.email}</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Logout />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserNav;
