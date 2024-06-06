'use client'

import { Sidebar } from "@/components/SideBar";
import { ContentDialog } from "@/components/Dashboard/ContentDialog";
import { Summary } from "@/components/Dashboard/Summary";

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar currentPage='dashboard' />
            <div className="flex-grow flex flex-col my-5 overflow-auto">
                <div className="flex justify-start mx-2 md:mt-0">
                    <ContentDialog />
                </div>
                <Summary />
            </div>
        </div>
    );
}
