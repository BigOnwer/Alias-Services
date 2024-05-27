import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middlewere(req: NextRequest) {
    const session = await getToken({
        req,
        secret: process.env.SECRET
    })

    if(!session) {
        return new Response('Auth required', {
            status: 401,
            headers: {
                'WWW-Authenticated': 'Basic realm="Secure Area"'
            }
        })
    }

    return NextResponse.next()
}