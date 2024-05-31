import { AlertDialogDescription, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogCancel, AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import { CreditCard, DollarSign, X } from "lucide-react";
import { Button } from "../ui/button";
import { AlertDialogOverlay } from "@radix-ui/react-alert-dialog";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { CardContext } from "@/Contexts/ChartsContext";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const NewCardFormSchema = z.object({
    price: z.number(),
    type: z.enum(['income', 'outcome']),
})

type newCardFormInput = z.infer<typeof NewCardFormSchema>

export function ContentDialog() {
    const router = useRouter()
    const {CreateCard} = useContext(CardContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm<newCardFormInput>({
        resolver: zodResolver(NewCardFormSchema),
    })

    async function handleRegister(data: newCardFormInput) {
        setIsLoading(true)
        try{
            const {price, type} = data

            await CreateCard({
                price,
                type
            })
            toast.success("Sucesso ao criar novo valor")
            router.refresh()
        }catch(error){
            toast.error("Erro ao tentar criar novo valor", {
                action: {
                    label: 'Tente Novamente',
                    onClick: () => router.refresh()
                }
            })
            console.log(error)
        }
        setIsLoading(false)
    }

    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                    <Button className='h-10'>New Value +</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-96">
                <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                        <AlertDialogTitle>New Value</AlertDialogTitle>
                        <AlertDialogCancel className="border-0 "> <X/> </AlertDialogCancel>
                    </div>
                    <AlertDialogDescription>
                    Create new value for chart analysis
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogOverlay>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <Input
                            type="number"
                            placeholder="Price"
                            {...register('price')}
                            disabled={isLoading}
                        />
                        <br />

                        <Controller
                        control={control}
                        name="type"
                        render={({field}) => {
                            return(
                                <RadioGroup defaultValue="card" onValueChange={field.onChange} value={field.value}>
                                    <div>
                                        <RadioGroupItem value="income" id="card" className="peer sr-only" required disabled={isLoading}/>
                                            <Label
                                            htmlFor="card"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                                <DollarSign className="mb-3 h-6 w-6 text-green-600"/>
                                                Income
                                            </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="outcome" id="apple" className="peer sr-only" required disabled={isLoading}/>
                                        <Label
                                        htmlFor="apple"
                                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <DollarSign className="mb-3 h-6 w-6 text-red-500" />
                                            Outcome
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="sale" id="sales" className="peer sr-only" required/>
                                            <Label
                                            htmlFor="sales"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                            >
                                                <DollarSign className="mb-3 h-6 w-6 text-yellow-400"/>
                                                Sale
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
