"use client"

import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "@/lib/axios";

interface Chart {
    id: string
    name: string
    type: 'income' | 'outcome'
    price: string
    sales: number
    createdAt: string
}

interface CreateChartValueProps {
    name: string
    price: string
    type: 'income' | 'outcome'
    sales: number
}


interface ChartContextType {
    card: Chart[]
    FetchCard: () => Promise<void>
    CreateCard: (data: CreateChartValueProps) => Promise<void>
}

interface ChartProviderProps {
    children: ReactNode;
}

export const CardContext = createContext({} as ChartContextType)

export function CardProvider({ children }: ChartProviderProps) {
    const [card, setCard] = useState<Chart[]>([]);

    async function CreateCard(data: CreateChartValueProps) {
        const { price, type, name, sales } = data;

        try {
            const response = await API.post('value', {
                name,
                price,
                type,
                sales,
                createdAt: new Date()
            });
            setCard((state) => [response.data, ...state]);
        } catch (error) {
            console.error('Error creating card:', error);
        }
    }

    async function FetchCard() {
        try {
            const response = await API.get('value', {
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                },
            });
            setCard(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        FetchCard();
    }, []);

    return (
        <CardContext.Provider
            value={{
                card,
                FetchCard,
                CreateCard,
            }}
        >
            {children}
        </CardContext.Provider>
    );
}
