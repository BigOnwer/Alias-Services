import { Button } from "@/components/ui/button";
import {
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, DollarSign } from "lucide-react";

export function Options() {
    return (
        <Card>
            <RadioGroup defaultValue="card" className="">
                <div>
                    <RadioGroupItem value="card" id="card" className="peer sr-only" />
                    <Label
                    htmlFor="card"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <CreditCard/>
                        Card
                    </Label>
                </div>
                <div>
                    <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
                    <Label
                    htmlFor="apple"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                        <DollarSign className="mb-3 h-6 w-6" />
                        Apple
                    </Label>
                </div>
            </RadioGroup>
        </Card>
    )
}