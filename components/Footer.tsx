import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black text-white text-center p-6">
            <div className="mb-4 flex justify-center">
                <a href="#" className="mx-2"><Facebook /></a>
                <a href="#" className="mx-2"><Instagram/></a>
                <a href="#" className="mx-2"><Youtube/></a>
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