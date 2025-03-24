"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function BuyButton({ priceId }: { priceId: string }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redireciona para o Stripe
      } else {
        toast.error("Erro ao iniciar checkout");
        router.push('/register')
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao processar pagamento");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleCheckout} 
      disabled={loading}
      className="w-full"
    >
      {loading ? "Carregando..." : "Subscribe Now"}
    </Button>
  );
}
