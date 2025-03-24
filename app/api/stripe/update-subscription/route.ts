// app/api/update-subscription/route.ts

import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Assumindo que você tem o Prisma configurado na pasta lib

export async function POST(req: Request) {
  const { email, status } = await req.json();

  if (!email || !status) {
    return NextResponse.json({ error: "Email ou status não fornecido." }, { status: 400 });
  }

  try {
    // Atualiza o status de assinatura no banco de dados
    const updatedUser = await db.user.update({
      where: { email },
      data: { stripeSubscriptionStatus: status },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Erro ao atualizar assinatura:", error);
    return NextResponse.json({ error: "Erro ao atualizar assinatura." }, { status: 500 });
  }
}
