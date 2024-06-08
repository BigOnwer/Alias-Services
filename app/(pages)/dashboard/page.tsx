'use client'

import { Sidebar } from "@/components/SideBar";
import { ContentDialog } from "@/components/Dashboard/ContentDialog";
import { Summary } from "@/components/Dashboard/Summary";
import { CardProvider } from "@/Contexts/ChartsContext";

export default function Dashboard() {

    return (
        <CardProvider>
            <div className="flex h-screen overflow-hidden">
            <Sidebar currentPage='dashboard'/>
            <div className="flex-grow flex flex-col m-6 overflow-auto">
                <div className="flex justify-start mx-2 md:mt-0">
                    <ContentDialog />
                </div>
                    <Summary/>
                </div>
            </div>
        </CardProvider>
    );
}
