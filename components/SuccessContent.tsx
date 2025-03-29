'use client';

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import PaymentStatus from "./PaymentStatus";
import PaymentDetails from "./PaymentDetails";
import { Button } from "./ui/button";

const SuccessContent = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

        {/* Verifica se o pagamento foi processado com sucesso antes de exibir os detalhes */}
        <PaymentStatus onSuccess={() => setPaymentSuccess(true)} />
        {paymentSuccess && <PaymentDetails />}

        <CardFooter className="flex flex-col space-y-2">
          <Button asChild className="w-full">
            <Link href="/dashboard/home">Return To Dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SuccessContent;
