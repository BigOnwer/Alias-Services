'use client'

import { HeaderDash } from "@/components/Dashboard/Header";
import { UserNav } from "../UserNav";
import { useContext } from "react";
import { CardContext } from "@/Contexts/ChartsContext";
import { Summary } from "./Summary";
import { Buy } from "./Buy";

export function Dashboard() {
    return(
        <div>
            <HeaderDash currentPage="overview"/>
            <Buy/>
            <br /><br />
            <UserNav/>
        </div>
    )
}