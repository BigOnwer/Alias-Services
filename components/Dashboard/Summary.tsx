import { useSummary } from "@/hooks/useSummary";
import { ArrowUpCircle } from "lucide-react";
import { Card } from "../ui/card";
import { PieChart } from "./Chart";
import { priceFormatter } from "@/utils/priceFormatter";

export function Summary() {
    const summary = useSummary()
    return(
        <div className="flex justify-center">
            <div>
                <Card className="w-64 h-32 mx-5 flex justify-center items-center">
                    <div className="w-full m-4">
                        <header className="flex text-xl justify-between">
                            <span>Incomes</span>
                            <ArrowUpCircle color="#00b37e" size={32}/>
                        </header>
                        <br />
                        <strong className="text-lg">{priceFormatter.format(summary.income)}</strong>
                    </div>
                </Card>
                <PieChart value={0.8}/>
            </div>

            <div>
                <Card className="w-64 h-32 flex justify-center items-center">
                    <div className="w-full m-4">
                        <header className="flex text-xl justify-between">
                            <span>Outcomes</span>
                            <ArrowUpCircle color="#f75a68" size={32}/>
                        </header>
                        <br />
                        <strong>{priceFormatter.format(summary.outcome)}</strong>
                    </div>
                </Card>
                <PieChart value={7}/>
            </div>

            <div>
                <Card className="w-64 h-32 mx-5 flex justify-center items-center">
                    <div className="w-full m-4">
                        <header className="flex text-xl justify-between">
                            <span>Total</span>
                            <ArrowUpCircle color="#000000" size={32}/>
                        </header>
                        <br />
                        <strong>{priceFormatter.format(summary.total)}</strong>
                    </div>
                </Card>
                <PieChart value={3}/>
            </div>
        </div>
    )
}