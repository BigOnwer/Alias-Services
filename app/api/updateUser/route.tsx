import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
    const session = await getSession()

    if (!session) {
        return NextResponse.json({ message: "Usuário não autenticado." }, { status: 401 });
    }

    const data = await request.json();
    const { email, name, image } = data;

    // Verifica se os dados necessários estão presentes
    if (!email || !name || !image) {
        return NextResponse.json({ message: "Dados incompletos." }, { status: 400 });
    }

    try {
        const updatedUser = await prisma.user.update({
            where: {
                email: session.user?.email,
            },
            data: {
                email,
                name,
                image,
            },
        });
        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        return NextResponse.json({ message: "Usuário não encontrado." }, { status: 404 });
    }
}
