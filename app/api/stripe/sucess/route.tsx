// app/api/stripe/verify-session/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(req: Request) {
  const { sessionId } = await req.json();

  try {
    // Verifica a sessão de pagamento
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Verifique se a sessão está completa
    if (session.payment_status === "paid") {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
