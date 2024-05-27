"use client"

import { createContext, ReactNode, useState } from "react"
import { API } from "@/lib/axios"

interface Chart {
    id: string
    type: 'income' | 'outcome' | 'sale'
    price: string
    createdAt: string
}

interface CreateChartValueProps {
    price: string
    type: 'income' | 'outcome' | 'sale'
}

interface ChartContextType {
    card: Chart[]
    CreateCard: (data: CreateChartValueProps) => Promise<void>
}

interface ChartProviderProps {
    children: ReactNode
}

export const CardContext = createContext({} as ChartContextType)

export function CardProvider({ children }: ChartProviderProps) {
    const [card, setCard] = useState<Chart[]>([])

    async function CreateCard(data: CreateChartValueProps) {
        const { price, type } = data

        const response = await API.post('value', {
            price,
            type,
        })

        setCard(state => [response.data, ...state])
    }

    return (
        <CardContext.Provider
            value={{
                card,
                CreateCard
            }}
        >
            {children}
        </CardContext.Provider>
    )
}
