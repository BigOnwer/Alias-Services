'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/SideBar'
import { CreditCard, SunMoon, User } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebarNav>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink
            href="/dashboard/settings"
            active={isActive('/dashboard/settings')}
            className='text-sm'
          >
            <User className='w-4 h-4 mr-2'/>
            My Profile
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/dashboard/settings/theme"
            active={isActive('/dashboard/settings/theme')}
            className='text-sm'
          >
            <SunMoon className='w-4 h-4 mr-2'/>
            Theme
          </DashboardSidebarNavLink>
          <DashboardSidebarNavLink
            href="/dashboard/settings/billing"
            active={isActive('/dashboard/settings/billing')}
            className='text-sm'
          >
            <CreditCard className='w-4 h-4 mr-2'/>
            Billing
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
    </aside>
  )
}