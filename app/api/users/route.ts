import { db as prisma } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { name, email, password } = data;
        
        console.log("ROUTE HANDLER", data);

        if (!name || !email || !password) {
            return NextResponse.json("Dados inválidos.", { status: 400 });
        }

        const isUserExists = await prisma.user.findUnique({
            where: { email: email }
        });

        if (isUserExists) {
            return NextResponse.json({ error: "E-mail já existente." }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        return NextResponse.json(user);
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
