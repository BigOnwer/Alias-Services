import { z } from 'zod';
import { db as prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/session';

const userSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().optional(),
});

export async function POST(request: NextRequest) {
    const User = await getCurrentUser();
    console.log("Authenticated User:", User);

    if (!User?.email) {
        return NextResponse.json({
            error: 'Not authenticated',
            data: null,
        }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: User.email,
        },
    });

    if (!user?.id) {
        return NextResponse.json({
            error: 'Not authorized',
            data: null,
        }, { status: 403 });
    }

    try {
        const data = await request.json();
        const {name, email} = data

        const updatedUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                name,
                email,
            },
        });

        console.log("User Updated:", updatedUser);

        return NextResponse.json({
            error: null,
            data: updatedUser,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.log("Validation Error:", error.errors);
            return NextResponse.json({
                error: error.errors,
                data: null,
            }, { status: 400 });
        }

        console.error("Unexpected Error:", error);

        return NextResponse.json({
            error: 'Internal Server Error',
            data: null,
        }, { status: 500 });
    }
}
