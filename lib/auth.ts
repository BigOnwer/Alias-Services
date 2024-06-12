// next-auth.ts
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials, req): Promise<any> {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Dados de Login necessarios");
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user || !user.hashedPassword) {
                    throw new Error("Usuários não registrado através de credenciais");
                }

                const matchPassword = await bcrypt.compare(credentials.password, user.hashedPassword);
                if (!matchPassword) {
                    throw new Error("Senha incorreta");
                }

                // Generate a JWT token
                const token = jwt.sign({ email: user.email, id: user.id }, process.env.SECRET as string, {
                    expiresIn: '1h',
                });

                return { ...user, token }; // Include the token in the returned user object
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.SECRET,
    debug: process.env.NODE_ENV === "development",
    pages: {
        signIn: "/login",
    },
};
