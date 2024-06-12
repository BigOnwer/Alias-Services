'use client'

import {
    DashboardSidebar,
    DashboardSidebarHeader,
    DashboardSidebarMain,
    DashboardSidebarNav,
    DashboardSidebarNavMain,
    DashboardSidebarNavLink,
    DashboardSidebarNavHeader,
    DashboardSidebarNavHeaderTitle,
    DashboardSidebarFooter,
} from '@/components/SideBar'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/Logo'
import { HomeIcon, LayoutDashboard, Settings } from 'lucide-react'
import { UserNav } from './UserNav'
import { Session } from 'next-auth'

type MainSidebarProps = {
    user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <DashboardSidebar className='w-60'>
            <DashboardSidebarHeader>
                <Logo />
            </DashboardSidebarHeader>
            <DashboardSidebarMain className="flex flex-col flex-grow">
                <DashboardSidebarNav>
                    <DashboardSidebarNavMain>
                    <DashboardSidebarNavLink href="/home" active={isActive('/')}>
                            <span className='text-base flex'>
                                <HomeIcon className="w-5 h-5 mr-3" />
                                Home
                            </span>
                    </DashboardSidebarNavLink>

                    <DashboardSidebarNavLink href="/dashboard" active={isActive('/dashboard')}>
                        <span className='text-base flex'>
                            <LayoutDashboard className="w-5 h-5 mr-3" />
                            Dashboard
                        </span>
                    </DashboardSidebarNavLink>

                    <DashboardSidebarNavLink
                        href="/settings"
                            active={isActive('/settings')}
                    >
                        <span className='text-base flex'>
                            <Settings className="w-5 h-5 mr-3" />
                            Configurações
                        </span>
                        
                    </DashboardSidebarNavLink>
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>

                <DashboardSidebarNav className="mt-auto">
                <DashboardSidebarNavHeader>
                    <DashboardSidebarNavHeaderTitle>
                    Links extras
                    </DashboardSidebarNavHeaderTitle>
                </DashboardSidebarNavHeader>
                <DashboardSidebarNavMain>
                    <DashboardSidebarNavLink href="/">
                    Precisa de ajuda?
                    </DashboardSidebarNavLink>
                    <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
                </DashboardSidebarNavMain>
                </DashboardSidebarNav>
            </DashboardSidebarMain>
            <DashboardSidebarFooter className='flex justify-center'>
                <UserNav user={user}/>
            </DashboardSidebarFooter>
        </DashboardSidebar>
    )
}