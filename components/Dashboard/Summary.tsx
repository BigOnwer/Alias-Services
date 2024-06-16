import { useSummary } from "@/hooks/useSummary";
import { ArrowUpCircle } from "lucide-react";
import { Card,} from "../ui/card";
import { priceFormatter } from "@/utils/formattersBRL";
import { BarChart } from "./BarChart";
import { Product } from './Products';

export function Summary() {
    const summary = useSummary()

    return (
        <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <Card className="w-full h-32 flex justify-center items-center">
                        <div className="w-full m-4">
                            <header className="flex text-xl justify-between">
                                <span>Incomes</span>
                                <ArrowUpCircle color="#00b37e" size={32} />
                            </header>
                            <br />
                            <strong className="text-lg">{priceFormatter.format(summary.income)}</strong>
                        </div>
                    </Card>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                    <Card className="w-full h-32 flex justify-center items-center">
                        <div className="w-full m-4">
                            <header className="flex text-xl justify-between">
                                <span>Outcomes</span>
                                <ArrowUpCircle color="#f75a68" size={32} />
                            </header>
                            <br />
                            <strong>{priceFormatter.format(summary.outcome)}</strong>
                        </div>
                    </Card>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 p-2 mb-5">
                    <Card className="w-full h-32 flex justify-center items-center">
                        <div className="w-full m-4">
                            <header className="flex text-xl justify-between">
                                <span>Total</span>
                                <ArrowUpCircle color="#000000" size={32} />
                            </header>
                            <br />
                            <strong>{priceFormatter.format(summary.total)}</strong>
                        </div>
                    </Card>
                </div>

                <div className="w-2/3 mb-24"><BarChart income={summary.income} outcome={summary.outcome} total={summary.total}/></div>

                <Product/>
        </div>
    );
}
