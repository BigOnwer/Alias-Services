'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const PaymentStatus = ({ onSuccess }: { onSuccess: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
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
          onSuccess();
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

  return null; // Retorna nulo para não renderizar nada quando o pagamento for bem-sucedido
};

export default PaymentStatus;
