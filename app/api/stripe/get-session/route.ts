import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Usuário não autenticado" }, { status: 401 });
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
    select: { stripeSessionId: true },
  });

  if (!user?.stripeSessionId) {
    return NextResponse.json({ error: "Nenhuma sessão encontrada" }, { status: 404 });
  }

  return NextResponse.json({ sessionId: user.stripeSessionId });
}
