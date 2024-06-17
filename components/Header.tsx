'use client'

import logo from '@/assets/logo.png'
import { Search, User, Menu } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button';
import { useState } from 'react';

interface HeaderProps {
    currentPage: 'home' | 'about' | 'services' | 'faq'
}

export function Header({ currentPage }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center p-3 bg-white dark:bg-black shadow-md dark:shadow-neutral-800 fixed top-0 left-0 right-0">
            <a href='/' className="flex items-center">
                <Image src={logo} alt="prisma com degrade e fundo escuro" width={130}/>
            </a>
            <nav className="hidden md:flex space-x-4">
                <ul className="flex space-x-4">
                    <li><a href="/" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'home' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Home</a></li>
                    <li><a href="/services" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'services' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Services</a></li>
                    <li><a href="/about" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'about' ? 'font-bold underline' : 'hover:text-gray-600'}`}>About</a></li>
                    <li><a href="#" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'faq' ? 'font-bold underline' : 'hover:text-gray-600'}`}>FAQ</a></li>
                </ul>
            </nav>
            <div className="hidden md:flex items-center">
                <input type="text" placeholder="Search..." className="border p-1 rounded" />
                <Button className="p-2 ml-2 rounded-full hover:bg-neutral-700"> <Search /> </Button>
                <div className='cursor-pointer ml-5 border-2 p-2 border-black rounded-full hover:bg-black hover:text-white transition duration-300'>
                    <a href='/login'><User/></a>
                </div>
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700">
                    <Menu />
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-black shadow-md flex flex-col items-center space-y-4 py-4">
                    <a href="/" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'home' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Home</a>
                    <a href="/services" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'services' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Services</a>
                    <a href="#" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'about' ? 'font-bold underline' : 'hover:text-gray-600'}`}>About</a>
                    <a href="#" className={`text-gray-800 dark:text-gray-300 ${currentPage === 'faq' ? 'font-bold underline' : 'hover:text-gray-600'}`}>FAQ</a>
                    <input type="text" placeholder="Search..." className="border p-1 rounded w-11/12" />
                    <Button className="p-2 rounded-full hover:bg-neutral-700 w-11/12"> <Search /> </Button>
                    <div className='cursor-pointer border-2 p-2 border-black rounded-full hover:bg-black hover:text-white transition duration-300'>
                        <a href='/login'><User/></a>
                    </div>
                </div>
            )}
        </header>
    )
}
