'use client'

import { Card } from "@/components/Dashboard/Card";
import { HeaderDash } from "@/components/Dashboard/Header";
import { CreditCard, DollarSign } from "lucide-react";
import { PieChart } from "./Chart";
import { UserNav } from "../UserNav";

export function Dashboard() {
    return(
        <div>
            <HeaderDash currentPage="overview"/>
            <main className="flex flex-col items-center mt-6 w-full">
                <div className="flex flex-wrap justify-around w-full mb-6">
                    <div>
                        <Card index={0} title="Remuneration" value="R$45.000,89" description="+20.1% from last month" icon={DollarSign} color="text-lime-600"/>
                        <PieChart value={2.01}/>
                    </div>
                    <div>
                        <Card index={1} title="Sales" value="12.234" description="+19% from last month" icon={CreditCard} color="text-yellow-300"/>
                        <PieChart value={1.9}/>
                    </div>
                    <div>
                        <Card index={2} title="Saidas" value="R$-5.040,72" description="-15.8% from last month" icon={DollarSign} color="text-red-600"/>
                        <PieChart value={1.58}/>
                    </div>
                </div>

                <div className="flex flex-wrap justify-around w-full mb-6">
                </div>
            </main>
            <UserNav/>
        </div>
    )
}