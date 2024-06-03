"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { API } from "@/lib/axios";

interface Chart {
    id: string;
    type: 'income' | 'outcome';
    price: string;
    createdAt: string;
}

interface CreateChartValueProps {
    price: number;
    type: 'income' | 'outcome';
}

interface ChartContextType {
    card: Chart[];
    FetchCard: () => Promise<void>;
    CreateCard: (data: CreateChartValueProps) => Promise<void>;
}

interface ChartProviderProps {
    children: ReactNode;
}

// Ensure createContext is imported correctly
export const CardContext = createContext<ChartContextType | undefined>(undefined);

export function CardProvider({ children }: ChartProviderProps) {
    const [card, setCard] = useState<Chart[]>([]);

    async function CreateCard(data: CreateChartValueProps) {
        const { price, type } = data;

        try {
            const response = await API.post('value', {
                price,
                type,
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
