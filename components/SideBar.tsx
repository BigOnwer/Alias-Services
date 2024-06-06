import { useState } from 'react';
import { Bell, CircleHelp, Home, LayoutDashboard, Settings, Menu } from 'lucide-react';
import { UserNav } from './UserNav';

interface SideProps {
  currentPage: 'home' | 'dashboard' | 'notification' | 'support';
}

export function Sidebar({ currentPage }: SideProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className={`md:hidden p-4 bg-transparent fixed top-0 left-0 z-40 ${isSidebarOpen ? 'text-black' : 'text-black'}`}
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      <div className={`flex flex-col h-screen p-4 bg-white text-black fixed top-0 left-0 z-30 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>
        <div className="flex items-center justify-center">
          <span className='text-xl font-bold'>Dashboard</span>
        </div>
        <div className="mt-8">
          <ul>
            <a href="/">
              <li className={`flex items-center p-2 hover:bg-gray-300 hover:text-gray-700 cursor-pointer rounded-lg my-2 ${currentPage === 'home' ? 'font-bold bg-neutral-300' : ''}`}>
                <Home className="mr-4" />
                <span>Home</span>
              </li>
            </a>
            <a href="/dashboard">
              <li className={`flex items-center p-2 hover:bg-gray-300 hover:text-gray-700 cursor-pointer rounded-lg ${currentPage === 'dashboard' ? 'font-bold bg-neutral-300' : ''}`}>
                <LayoutDashboard className="mr-4" />
                <span>Dashboard</span>
              </li>
            </a>
          </ul>
        </div>
        <div className="mt-auto">
          <ul>
            <a href="#">
              <li className={`flex items-center p-2 hover:bg-gray-300 hover:text-gray-700 cursor-pointer rounded-lg ${currentPage === 'notification' ? 'font-bold bg-neutral-300' : ''}`}>
                <Bell className="mr-4" />
                <span>Notification</span>
              </li>
            </a>
            <a href="#">
              <li className={`flex items-center p-2 hover:bg-gray-300 hover:text-gray-700 cursor-pointer rounded-lg ${currentPage === 'support' ? 'font-bold bg-neutral-300' : ''}`}>
                <CircleHelp className="mr-4" />
                <span>Support</span>
              </li>
            </a>
            <a href="/settings">
              <li className="flex items-center p-2 hover:bg-gray-300 hover:text-neutral-700 cursor-pointer rounded-lg">
                <Settings className="mr-4" />
                <span>Settings</span>
              </li>
            </a>
            <li className="mt-8">
              <UserNav/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
