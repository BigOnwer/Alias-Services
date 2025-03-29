'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";

const SuccessPage = () => {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();

  // Evita problemas ao acessar searchParams diretamente no render inicial
  useEffect(() => {
    setSessionId(searchParams.get("session_id"));
  }, [searchParams]);

  useEffect(() => {
    if (status === "loading" || !sessionId) return;
    
    if (!session || !session.user?.email) {
      setError("Usuário não autenticado.");
      return;
    }

    const updateSubscriptionStatus = async () => {
      try {
        const email = session.user?.email;
        
        const res = await fetch("/api/stripe/sucess", {
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
        }
      } catch (error) {
        setError("Erro ao processar a assinatura.");
        console.error(error);
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
          <CardTitle className="text-2xl">Pagamento bem-sucedido!</CardTitle>
          <CardDescription>Obrigado pela sua compra. Seu pedido foi confirmado.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">ID do Pedido:</span>
              <span className="font-medium">#ORD-12345</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Data:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Método de Pagamento:</span>
              <span className="font-medium">Cartão de Crédito</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Valor:</span>
              <span className="font-medium">R$70,00</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/dashboard/home">Retornar ao Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SuccessPage;
