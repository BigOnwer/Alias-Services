'use client'

import { HeaderDash } from "@/components/Dashboard/Header";
import { CreditCard, DollarSign } from "lucide-react";
import { PieChart } from "./Chart";
import { UserNav } from "../UserNav";
import { useContext } from "react";
import { CardContext } from "@/Contexts/ChartsContext";
import { Summary } from "./Summary";

export function Dashboard() {
    const { card } = useContext(CardContext)
    return(
        <div>
            <HeaderDash currentPage="overview"/>
            <Summary/>
            <UserNav/>
        </div>
    )
}