import { Facebook, Instagram, Youtube } from "lucide-react";
import WhatsappLogo from '@/assets/WhatsappLogo.svg';
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-black text-white text-center p-6">
            <div className="mb-4 flex justify-center">
                <a href="#" className="mx-2"><Facebook /></a>
                <a href="#" className="mx-2"><Instagram/></a>
                <a href="#" className="mx-2"><Youtube/></a>
                <a href="https://api.whatsapp.com/send/?phone=5531990641303&text=!help&type=phone_number&app_absent=0" className="mx-2"><Image src={WhatsappLogo} alt="" className=""/></a>
            </div>
            <nav>
                <ul className="flex justify-center space-x-4 mb-4">
                    <li><a href="#" className="text-white">Home</a></li>
                    <li><a href="#" className="text-white">News</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Contact Us</a></li>
                    <li><a href="#" className="text-white">Our Team</a></li>
                </ul>
            </nav>
                <p>@2024 Designed by Gustavo Leal</p>
        </footer>
    );
};