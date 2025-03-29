'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const SuccessPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  
  // Verifique se estamos no ambiente do cliente antes de acessar os parâmetros
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    setSessionId(searchParams.get("session_id")); 
  }, [searchParams]);

  useEffect(() => {
    if (status === "loading" || !sessionId) return;

    if (!session || !session.user?.email) {
      setError("Usuário não autenticado.");
      setLoading(false);
      return;
    }

    const updateSubscriptionStatus = async () => {
      try {
        const email = session.user?.email;
        
        const res = await fetch("/api/stripe/success", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        const data = await res.json();

        if (data.success) {
          await fetch("/api/stripe/update-subscription", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, status: "active" }),
          });

          setLoading(false);
        } else {
          setError("Falha ao verificar o pagamento.");
          setLoading(false);
        }
      } catch (error) {
        setError("Erro ao processar a assinatura.");
        console.error(error);
        setLoading(false);
      }
    };

    updateSubscriptionStatus();
  }, [session, status, sessionId]);

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
