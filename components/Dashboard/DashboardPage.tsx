'use client'

import { HeaderDash } from "@/components/Dashboard/Header";
import { UserNav } from "../UserNav";
import { useContext } from "react";
import { CardContext } from "@/Contexts/ChartsContext";
import { Summary } from "./Summary";
import { Buy } from "./Buy";
import { Sidebar } from "../SideBar";
import { ModeToggle } from "../ModelToggle";

export async function DashboardPage() {
    return(
        <div className="flex">
            <div>
                <Sidebar currentPage="home"/>
                <ModeToggle/>
            </div>
            <div className="flex-grow">
                <Buy/>
            </div>
        </div>
    )
}