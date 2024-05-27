import { db as prisma } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getCurrentUser()

    if (!session?.email) {
        return NextResponse.json("Não autenticado.", { status: 401 })
    }

    const data = await request.json()
    let { price, type } = data

    if (!price) {
        return NextResponse.json("Dados inválidos.", { status: 400 })
    }

    if (!type) {
        return NextResponse.json("Dados inválidos.", { status: 400 })
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.email
        }
    })

    if (!user) {
        return NextResponse.json("Usuário não encontrado.", { status: 404 })
    }

    const post = await prisma.chartValue.create({
        data: {
            price,
            type,
            author: {
                connect: {
                    id: user.id
                }
            }
        }
    });

    return NextResponse.json(post)
}