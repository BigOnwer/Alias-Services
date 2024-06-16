'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/SideBar'
import { CreditCard, SunMoon, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function HistorySidebar() {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <aside>
            <DashboardSidebarNav>
                <DashboardSidebarNavMain>
                <DashboardSidebarNavLink
                    href="/settings"
                    active={isActive('/settings')}
                    className='text-sm'
                >
                    <User className='w-4 h-4 mr-2'/>
                    Incomes
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink
                    href="/settings/theme"
                    active={isActive('/settings/theme')}
                    className='text-sm'
                >
                    <SunMoon className='w-4 h-4 mr-2'/>
                    Outcomes
                </DashboardSidebarNavLink>
                <DashboardSidebarNavLink
                    href="/settings/billing"
                    active={isActive('/settings/billing')}
                    className='text-sm'
                >
                    <CreditCard className='w-4 h-4 mr-2'/>
                    All Products
                </DashboardSidebarNavLink>
                </DashboardSidebarNavMain>
            </DashboardSidebarNav>
        </aside>
    )
}