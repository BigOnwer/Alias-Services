'use client'

import logo from '@/assets/logo.png'
import { Search, User } from 'lucide-react'
import Image from 'next/image'

interface HeaderProps {
    currentPage: 'home' | 'about' | 'services' | 'faq';
}

export function Header({ currentPage }: HeaderProps) : JSX.Element {
    return(
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-3 bg-white shadow-md">
            <a href='/' className="flex items-center">
                <Image src={logo} alt="prisma com degrade e fundo escuro" width={130}/>
            </a>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/" className={`text-gray-800 ${currentPage === 'home' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Home</a></li>
                    <li><a href="/services" className={`text-gray-800 ${currentPage === 'services' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Services</a></li>
                    <li><a href="#" className={`text-gray-800 ${currentPage === 'about' ? 'font-bold underline' : 'hover:text-gray-600'}`}>About</a></li>
                    <li><a href="#" className={`text-gray-800 ${currentPage === 'faq' ? 'font-bold underline' : 'hover:text-gray-600'}`}>FAQ</a></li>
                </ul>
            </nav>
            <div className="flex items-center">
                <input type="text" placeholder="Search..." className="border p-1 rounded" />
                <button className="bg-blue-500 text-white p-2 ml-2 rounded-full"> <Search /> </button>

                <div className='cursor-pointer ml-5 border-2 p-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300'>
                    <a href="#"><User/></a>
                </div>
            </div>
        </header>
    )
}