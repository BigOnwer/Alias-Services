'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LockKeyhole, RocketIcon, Settings } from 'lucide-react'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type UserDropdownProps = {
  user: Session['user']
}

export function UserNav({ user }: UserDropdownProps) {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  if (!user) return null

  async function logout() {
    setLoggingOut(true)
    await signOut({ redirect: false })
    router.push('/login')
    setLoggingOut(false)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative h-12 flex items-center justify-between space-x-1 p-1 bg-neutral-200 dark:bg-neutral-700 border border-black dark:border-white"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            {user.name &&(
            <AvatarFallback>
              {user?.name[0]}
            </AvatarFallback>
            )}
          </Avatar>

          <div className="flex flex-col flex-1 space-y-1 text-left">
            {user.name && (
              <p className="text-xs font-medium leading-none">{user.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <a href="/dashboard/settings" className='flex items-center'>
          <DropdownMenuItem className='w-full cursor-pointer'>
              <Settings className="w-3 h-3 mr-3" />
              Settings
          </DropdownMenuItem>
          </a>
          <DropdownMenuItem>
            <RocketIcon className="w-3 h-3 mr-3" />
            Upgrade
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className='cursor-pointer'>
          <LockKeyhole className="w-3 h-3 mr-3" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export function AvatarNav({ user }: UserDropdownProps) {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  if (!user) return null

  async function logout() {
    setLoggingOut(true)
    await signOut({ redirect: false })
    router.push('/login')
    setLoggingOut(false)
  }

  return(
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
        variant="link"
        className="relative h-12 flex items-center justify-between space-x-1 p-1 border-black dark:border-white"
        >
          <Avatar className="flex items-center justify-center">
              <AvatarImage src={user.image as string} alt={user.name as string} className='rounded-full w-full h-full object-cover' />
            {user.name && (
              <AvatarFallback className='rounded-full w-full h-full flex items-center justify-center'>
                {user?.name[0]}
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
        <a href="/settings" className='flex items-center'>
          <DropdownMenuItem className='w-full cursor-pointer'>
              <Settings className="w-3 h-3 mr-3" />
              Settings
          </DropdownMenuItem>
          </a>
          <DropdownMenuItem>
            <RocketIcon className="w-3 h-3 mr-3" />
            Upgrade
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className='cursor-pointer'>
          <LockKeyhole className="w-3 h-3 mr-3" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}