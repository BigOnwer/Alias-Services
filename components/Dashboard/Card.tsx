import { CardContext } from "@/Contexts/ChartsContext"
import { useContext } from "react"

interface CardProps {
    title: string
    value: string
    description: string
    icon: React.ElementType
    color: string
    index: number  // Nova propriedade para especificar o índice do array card
}

export function Card({ title, description, color, icon: Icon, index }: CardProps) {
    const { card } = useContext(CardContext)

    return (
        <div className={`border-4 rounded-2xl p-4 w-72 border-black m-3`}>
            <div className="flex justify-between w-full">
                <h2 className="text-xl font-bold">{title}</h2>
                <Icon className={`h-6 w-6 mb-2 ${color}`} />
            </div>
            {card && (
                <>
                    <p className="text-2xl my-2">{card[index]}</p> 
                    <span className="text-gray-500">{description}</span>
                </>
            )}
        </div>
    )
}
