'use client'

import { ContentDialog } from "@/components/Dashboard/ContentDialog";
import { Summary } from "@/components/Dashboard/Summary";
import { Button } from "@/components/ui/button";
import { CardProvider } from "@/Contexts/ChartsContext";
import { History } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LockIcon, UnlockIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import BuyButton from "@/components/BuyButton";

export default function Dashboard() {
    const [isSubscriptionActive, setIsSubscriptionActive] = useState<boolean | null>(null);
    const router = useRouter()
    useEffect(() => {
        const checkSubscriptionStatus = async () => {
            try {
                const response = await fetch("/api/stripe/check-subscription");
                const data = await response.json();

                if (response.ok && data.active) {
                    setIsSubscriptionActive(true);
                } else {
                    setIsSubscriptionActive(false);
                }
            } catch (error) {
                console.error("Erro ao verificar assinatura", error);
                toast.error("Erro ao verificar a assinatura.");
                setIsSubscriptionActive(false);
            }
        };

        checkSubscriptionStatus();
    }, []);

    if(!isSubscriptionActive){
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
                <div className="container mx-auto py-10 px-4 ">
                    <header className="mb-5">
                        <h1 className="text-3xl font-bold mb-2">Access For Subscribers Only</h1>
                        <p className="text-muted-foreground">Access exclusive content with a subscription</p>
                    </header>

                    <div className="grid gap-8 md:grid-cols-2 ">
                    <Card className="">
                        <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                            <CardTitle>Premium Content</CardTitle>
                            <CardDescription>Exclusive to subscribers</CardDescription>
                            </div>
                            <LockIcon className="h-5 w-5 text-neutral-500" />
                        </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                            <div className="mb-4 rounded-full bg-neutral-100 p-3 ">
                                <LockIcon className="h-6 w-6 text-neutral-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Premium Content Locked</h3>
                            <p className="text-muted-foreground mb-6 max-w-md">
                                Subscribe to unlock exclusive tutorials, resources, and priority support.
                            </p>
                            <BuyButton priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || ""}/>
                            <p className="text-xs text-muted-foreground mt-1">Starting at R$70.00/month. Cancel anytime.</p>
                            </div>
                        </CardContent>
                        <Separator />
                    </Card>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <CardProvider>
            <div className="flex h-screen overflow-hidden">
            <div className="flex-grow flex flex-col m-6 overflow-auto">
                <div className="flex justify-between mx-2 md:mt-0">
                    <ContentDialog />
                </div>
                    <Summary/>
                </div>
            </div>
        </CardProvider>
    );
}
