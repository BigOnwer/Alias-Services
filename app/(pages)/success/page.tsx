'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getSession } from "next-auth/react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");

  useEffect(() => {
    if (typeof window === "undefined") return; // Garante que o código só roda no cliente

    const updateSubscriptionStatus = async () => {
      try {
        const session = await getSession();
        if (!session || !session.user?.email) {
          setError("Usuário não autenticado.");
          return;
        }

        console.log("Usuário autenticado:", session.user.email);
        const email = session.user.email;

        const res = await fetch("/api/stripe/sucess", { // Corrigido o endpoint
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: session_id }),
        });

        const data = await res.json();
        console.log("Resposta da API do Stripe:", data);

        if (data.success) {
          console.log("Pagamento verificado com sucesso.");

          const updateResponse = await fetch("/api/stripe/update-subscription", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, status: "active" }),
          });

          const updateData = await updateResponse.json();
          console.log("Status de assinatura atualizado:", updateData);

          setLoading(false);
        } else {
          setError("Falha ao verificar o pagamento.");
        }
      } catch (error) {
        setError("Erro ao processar a assinatura.");
        console.error(error);
      }
    };

    if (session_id) {
      updateSubscriptionStatus();
    }
  }, [session_id]);

  if (loading) return <div>Processando seu pagamento...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>Thank you for your purchase. Your order has been confirmed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Order ID:</span>
              <span className="font-medium">#ORD-12345</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Payment Method:</span>
              <span className="font-medium">Credit Card</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-medium">R$70,00</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/dashboard/home">Return To Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SuccessPage;
