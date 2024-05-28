"use client"

import { createContext, ReactNode, useEffect, useState } from "react"
import { API } from "@/lib/axios"

interface Chart {
    id: string
    type: 'income' | 'outcome' | 'sale'
    price: any
    createdAt: string
}

interface CreateChartValueProps {
    price: any
    type: 'income' | 'outcome' | 'sale'
}

interface ChartContextType {
    card: Chart[]
    FetchCard: () => Promise<void>
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

    async function FetchCard() {
        try {
            const response = await fetch('/api/value')
            const totalsByAuthor = await response.json()

            const prices = Object.values(totalsByAuthor)
            setCard(prices)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        FetchCard()
    }, [])

    return (
        <CardContext.Provider
            value={{
                card,
                FetchCard,
                CreateCard
            }}
        >
            {children}
        </CardContext.Provider>
    )
}