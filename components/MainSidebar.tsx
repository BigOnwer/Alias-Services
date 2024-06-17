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
import { Globe, HelpCircle, HomeIcon, LayoutDashboard, Menu, Settings } from 'lucide-react'
import { AvatarNav, UserNav } from './UserNav'
import { Session } from 'next-auth'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from './ui/avatar'

type MainSidebarProps = {
    user: Session['user']
}

export function MainSidebar({ user }: MainSidebarProps) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname();

    function handleCollapsible() {
        setIsOpen(!isOpen)
    }

    const isActive = (path: string) => {
        return pathname === path;
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            if (e.matches) {
                setIsOpen(true);
            }
        };

        if (mediaQuery.matches) {
            setIsOpen(true);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }, []);

    return (
        <DashboardSidebar className={`transition-all duration-300 ${isOpen ? 'w-[70px]' : 'w-60'}`}>
            <DashboardSidebarHeader className={`flex justify-between items-center p-4 ${isOpen ? 'flex justify-center' : ''}`}>
                <div className={isOpen ? 'hidden' : ''}>
                    <Logo />
                </div>
                <Button variant={'ghost'} onClick={handleCollapsible}>
                    <Menu className='w-5 h-5' />
                </Button>
            </DashboardSidebarHeader>
            <DashboardSidebarMain className="flex flex-col flex-grow">
                <DashboardSidebarNav>
                    <DashboardSidebarNavMain>
                        <DashboardSidebarNavLink href="/dashboard/home" active={isActive('/dashboard/home')}>
                            <span className='text-base flex items-center'>
                                <HomeIcon className="w-5 h-5" />
                                <p className={`ml-3 ${isOpen ? 'hidden' : ''}`}>Home</p>
                            </span>
                        </DashboardSidebarNavLink>

                        <DashboardSidebarNavLink href="/dashboard" active={isActive('/dashboard')}>
                            <span className='text-base flex items-center'>
                                <LayoutDashboard className="w-5 h-5" />
                                <p className={`ml-3 ${isOpen ? 'hidden' : ''}`}>Dashboard</p>
                            </span>
                        </DashboardSidebarNavLink>

                        <DashboardSidebarNavLink href="/dashboard/settings" active={isActive('/settings')}>
                            <span className='text-base flex items-center'>
                                <Settings className="w-5 h-5" />
                                <p className={`ml-3 ${isOpen ? 'hidden' : ''}`}>Settings</p>
                            </span>
                        </DashboardSidebarNavLink>
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>

                <DashboardSidebarNav className="mt-auto">
                    <DashboardSidebarNavHeader>
                        <DashboardSidebarNavHeaderTitle className={isOpen ? 'hidden' : ''}>
                            Links Extras
                        </DashboardSidebarNavHeaderTitle>
                    </DashboardSidebarNavHeader>
                    <DashboardSidebarNavMain>
                        {isOpen === false ? (
                            <div>
                                <DashboardSidebarNavLink href="/dashboard/support">
                                    Precisa de ajuda?
                                </DashboardSidebarNavLink>
                                <DashboardSidebarNavLink href="/">
                                    Site
                                </DashboardSidebarNavLink>
                            </div>
                        ) : (
                            <div className='space-y-3 flex flex-col items-center'>
                                <a href="/dashboard/support" title='Precisa de ajuda?'><HelpCircle className='w-5 h-5'/></a>
                                <a href="/" title='Site'><Globe className='w-5 h-5'/></a>
                            </div>
                        )}
                    </DashboardSidebarNavMain>
                </DashboardSidebarNav>
            </DashboardSidebarMain>
            <DashboardSidebarFooter className={`flex justify-center items-center p-1 mx-3 ${isOpen ? 'justify-center w-12' : ''}`}>
                {isOpen === false ? (
                    <UserNav user={user} />
                ) : (
                    <AvatarNav user={user}/>
                )}
            </DashboardSidebarFooter>
        </DashboardSidebar>
    );
}
