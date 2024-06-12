import { useState } from 'react';
import { CreditCard, Home, LayoutDashboard, SunMoon, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import UserNav from '@/components/UserNav';

interface SideProps {
  currentPage: 'settings' | 'theme' | 'billing';
}

export function SidebarSettings({ currentPage }: SideProps) {
  return (
    <div>
      <div>
        <div className={`flex flex-col h-screen p-2 bg-white dark:bg-black text-black dark:text-white fixed top-0 left-0 z-30 transition-transform transform`}>
          <div className="flex items-center justify-center">
            <span className='text-xl font-bold'>Settings</span>
          </div>
          <div className="mt-8">
            <ul>
              <a href="/settings">
                <li className={`flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:text-gray-700 cursor-pointer rounded-lg my-2 ${currentPage === 'settings' ? 'font-bold bg-neutral-300 dark:bg-neutral-800' : ''}`}>
                  <User className="mr-4" />
                  <span>My Profile</span>
                </li>
              </a>
              <a href="/settings/theme">
                <li className={`flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:text-gray-700 cursor-pointer rounded-lg ${currentPage === 'theme' ? 'font-bold bg-neutral-300 dark:bg-neutral-800' : ''}`}>
                  <SunMoon className="mr-4" />
                  <span>Theme</span>
                </li>
              </a>
              <a href="/settings/billing">
                <li className={`flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:text-gray-700 cursor-pointer rounded-lg ${currentPage === 'billing' ? 'font-bold bg-neutral-300 dark:bg-neutral-800' : ''}`}>
                  <CreditCard className="mr-4" />
                  <span>Billing</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="mt-auto">
            <ul>
            <a href="/">
                <li className={`flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300 hover:text-gray-700 cursor-pointer rounded-lg my-2 `}>
                  <Home className="mr-4" />
                  <span>Home</span>
                </li>
              </a>
              <a href="/dashboard">
                <li className={`flex items-center p-2 hover:bg-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-300  hover:text-gray-700 cursor-pointer rounded-lg `}>
                  <LayoutDashboard className="mr-4" />
                  <span>Dashboard</span>
                </li>
              </a>

              <li>
                <UserNav/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Separator orientation='vertical'/>
      </div>
    </div>
  );
}
