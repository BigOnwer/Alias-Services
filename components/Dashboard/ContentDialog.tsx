import { AlertDialogDescription, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogCancel, AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { DollarSign, X } from "lucide-react";
import { Button } from "../ui/button";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CardContext } from "@/Contexts/ChartsContext";


const NewCardFormSchema = z.object({
    name: z.string().nonempty("Name is required"),
    price: z.number(),
    sales: z.number(),
    type: z.enum(['income', 'outcome']),
})

type newCardFormInput = z.infer<typeof NewCardFormSchema>

export function ContentDialog() {
    const router = useRouter();
    const { CreateCard } = useContext(CardContext);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm<newCardFormInput>({
        resolver: zodResolver(NewCardFormSchema),
    });

    async function handleRegister(data: newCardFormInput) {
        /*if (!isSubscriptionActive) {
            toast.error("Sua assinatura não está ativa. Ative a assinatura para registrar novos valores.");
            return;
        }*/

        setIsLoading(true);
        try {
            const { price, type, name, sales } = data;
            await CreateCard({ price, type, name, sales });
            toast.success("Sucesso ao criar novo valor");
            reset();
        } catch (error) {
            toast.error("Erro ao tentar criar novo valor", {
                action: {
                    label: 'Tente Novamente',
                    onClick: () => router.refresh()
                }
            });
            console.log(error);
        }
        setIsLoading(false);
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className='h-10 mx-2'>New Value +</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-96 z-50">
                <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                        <AlertDialogTitle>New Value</AlertDialogTitle>
                        <AlertDialogCancel className="border-0 "><X /></AlertDialogCancel>
                    </div>
                    <AlertDialogDescription>
                        Create new value for chart analysis
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogOverlay>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <Input
                            placeholder="Name"
                            disabled={isLoading}
                            {...register('name')}
                            required
                        />
                        <br />
                        <Input
                            type="string"
                            placeholder="Price"
                            {...register('price', { valueAsNumber: true })}
                            disabled={isLoading}
                            required
                        />
                        <br />
                        <Input
                            type="number"
                            placeholder="Quantity Of Products"
                            {...register('sales', { valueAsNumber: true })}
                            disabled={isLoading}
                            required
                        />
                        <br />
                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => {
                                return (
                                    <RadioGroup defaultValue="card" onValueChange={field.onChange} value={field.value}>
                                        <div>
                                            <RadioGroupItem value="income" id="card" className="peer sr-only" required disabled={isLoading} />
                                            <Label
                                                htmlFor="card"
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                                <DollarSign className="mb-3 h-6 w-6 text-green-600" />
                                                Income
                                            </Label>
                                        </div>
                                        <div>
                                            <RadioGroupItem value="outcome" id="apple" className="peer sr-only" required disabled={isLoading} />
                                            <Label
                                                htmlFor="apple"
                                                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                                <DollarSign className="mb-3 h-6 w-6 text-red-500" />
                                                Outcome
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                )
                            }}
                        />
                        <br />
                        <Button type="submit" className="w-full" disabled={isLoading}>Register</Button>
                    </form>
                </AlertDialogOverlay>
            </AlertDialogContent>
        </AlertDialog>
    )
}
