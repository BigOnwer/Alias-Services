import Logout from "@/components/signout/page"
import UserInfo from "./UserInfo"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "./ui/dropdown-menu"

  export function UserNav() {
    return (
      <div className="m-4 sticky bottom-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="">
              <UserInfo/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                Settings{/*<Settings/>*/}
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <Logout/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
  }