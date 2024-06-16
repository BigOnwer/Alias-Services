'use client'

import { ContentDialog } from "@/components/Dashboard/ContentDialog";
import { Summary } from "@/components/Dashboard/Summary";
import { Button } from "@/components/ui/button";
import { CardProvider } from "@/Contexts/ChartsContext";
import { History } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter()

    return (
        <CardProvider>
            <div className="flex h-screen overflow-hidden">
            <div className="flex-grow flex flex-col m-6 overflow-auto">
                <div className="flex justify-between mx-2 md:mt-0">
                    <ContentDialog />
                </div>
                    <Summary/>
                </div>
            </div>
        </CardProvider>
    );
}
