import { useSummary } from "@/hooks/useSummary";
import { ArrowUpCircle } from "lucide-react";
import { Card } from "../ui/card";

export function Summary() {
    const summary = useSummary()
    return(
        <div className="flex justify-center">
            <Card className="w-64 h-32 mx-5 flex justify-center items-center">
                <div className="w-full m-4">
                    <header className="flex text-xl justify-between">
                        <span>Incomes</span>
                        <ArrowUpCircle color="#00b37e" size={32}/>
                    </header>
                    <br />
                    <strong className="text-lg">R$ {summary.income}</strong>
                </div>
            </Card>

            <Card className="w-64 h-32">
                <header>
                    <span>Incomes</span>
                    <ArrowUpCircle color="#f75a68" size={32}/>
                </header>
                <strong>{summary.outcome}</strong>
            </Card>

            <Card className="w-64 h-32 mx-5">
                <header>
                    <span>Incomes</span>
                    <ArrowUpCircle color="#000000" size={32}/>
                </header>
                <strong>{summary.total}</strong>
            </Card>
        </div>
    )
}