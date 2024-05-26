'use client'

import { useSession } from "next-auth/react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function UserInfo() {
    const { data: session } = useSession()
    const user = session?.user

    return(
        <div className="flex bg-white p-2 rounded-xl">
            <div>
                <Avatar>
                    {user?.image && <AvatarImage src={user?.image} />}
                    {user?.name && <AvatarFallback>{user?.name[0]}</AvatarFallback>}
                </Avatar>
            </div>

            <div>
                <p className="text-sm flex"><b>{user?.name}</b></p>
                <p className="text-xs">{user?.email}</p>
            </div>
        </div>
    )
}
