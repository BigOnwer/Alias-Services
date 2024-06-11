'use client'

import { signIn } from "next-auth/react";
import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface IUser {
    email: string;
    password: string;
}

interface ChartContextType {
    data: IUser[];
    handleLogin: (data: IUser) => Promise<void>;
}

export const AuthContext = createContext({} as ChartContextType);

export function AuthProviderContext({ children }: AuthProviderProps) {
    const [data, setData] = useState<IUser[]>([{
        email: "",
        password: "",
    }]);

    async function handleLogin(user: IUser) {
        await signIn<"credentials">("credentials", {
            ...user,
            redirect: false,
        });

        setData([{
            email: "",
            password: "",
        }]);
    }

    return (
        <AuthContext.Provider
            value={{
                data,
                handleLogin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}