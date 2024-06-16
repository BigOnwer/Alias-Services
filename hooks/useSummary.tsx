import { CardContext } from "@/Contexts/ChartsContext";
import { useContext } from "react";

export function useSummary() {
    const { card } = useContext(CardContext);

    // Adicione uma verificação para garantir que card é um array antes de usar reduce
    if (!Array.isArray(card)) {
        return { income: 0, outcome: 0, total: 0 };
    }

    const summary = card.reduce(
        (acc, card) => {
            if (!isNaN(card.price)) {
                if (card.type === 'income') {
                    acc.income += card.price;
                    acc.total += card.price;
                } else {
                    acc.outcome += card.price;
                    acc.total -= card.price;
                }
            }

            return acc;
        },
        { income: 0, outcome: 0, total: 0 }
    );

    return summary;
}
