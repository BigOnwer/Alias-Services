import { z } from 'zod';
import { db as prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/session';

const userSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    password: z.string().optional(),
})

export async function POST(request: NextRequest, response: NextResponse) {
    const User = await getCurrentUser();
    console.log(User);

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

        const formData = await request.formData();
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string | null,
        };

        const parsedData = userSchema.parse(data);

        const updatedUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                name: parsedData.name,
                email: parsedData.email,
            },
        });

        return NextResponse.json({
            error: null,
            data: updatedUser,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                error: error.errors,
                data: null,
            }, { status: 400 });
        }

        return NextResponse.json({
            error: 'Internal Server Error',
            data: null,
        }, { status: 500 });
    }
}
