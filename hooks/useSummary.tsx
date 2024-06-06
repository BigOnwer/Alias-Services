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
            const price = parseFloat(card.price);
            if (!isNaN(price)) {
                if (card.type === 'income') {
                    acc.income += price;
                    acc.total += price;
                } else {
                    acc.outcome += price;
                    acc.total -= price;
                }
            }

            return acc;
        },
        { income: 0, outcome: 0, total: 0 }
    );

    return summary;
}
