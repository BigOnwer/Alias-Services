import { AlertDialog, AlertDialogContent, AlertDialogPortal, AlertDialogTrigger } from "../ui/alert-dialog"
import { Button } from "../ui/button"
import { ContentDialog } from "./ContentDialog"

interface HeaderProps {
    currentPage: 'overview' | 'analytics' | 'notifications' | 'settings'
}

export function HeaderDash({ currentPage }: HeaderProps) : JSX.Element {
    return(
        <header className="flex justify-between items-center w-full p-4">
            <h1 className="text-3xl font-bold w-10">Dashboard</h1>
            <nav>
                <ul className="flex space-x-4 bg-gray-100 border-b border-gray-300 p-2 rounded-xl">
                    <li><a href="/" className={`text-gray-800 ${currentPage === 'overview' ? 'font-bold bg-gray-200 underline px-1 rounded-sm' : 'hover:text-gray-600'}`}>Overview</a></li>
                    <li><a href="#" className={`text-gray-800 ${currentPage === 'settings' ? 'font-bold underline' : 'hover:text-gray-600'}`}>Settings</a></li>
                </ul>
            </nav>
            <ContentDialog/>
        </header>
    )
}