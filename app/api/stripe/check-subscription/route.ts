import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Prisma Client importado corretamente do servidor
import { getSession } from "next-auth/react";
import { getCurrentUser } from "@/lib/session";

export async function GET() {
    const session = await getCurrentUser();

    // Verifique se o usuário está autenticado
    if (!session?.email) {
        return NextResponse.json({ error: "Usuário não autenticado" }, { status: 403 });
    }

    try {
        // Busque o usuário no banco de dados
        const user = await db.user.findUnique({
            where: { email: session.email },
        });

        // Verifique se o usuário tem uma assinatura ativa
        if (user && user.stripeSubscriptionStatus === 'active') {
            return NextResponse.json({ active: true });
        }

        return NextResponse.json({ active: false });
    } catch (error) {
        console.error("Erro ao verificar assinatura", error);
        return NextResponse.json({ error: "Erro ao verificar assinatura" }, { status: 500 });
    }
}
