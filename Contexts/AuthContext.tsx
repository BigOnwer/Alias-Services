'use client'

import { API } from "@/lib/axios";
import { signIn, signOut } from "next-auth/react";
import { createContext, ReactNode, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface AuthProviderProps {
    children: ReactNode;
}

interface IUser {
    name?: string;
    email?: string;
    password?: string;
}

interface ChartContextType {
    data: IUser[];
    handleLogin: (data: IUser) => Promise<void>;
    handleRegister: (data: IUser) => Promise<void>;
    handleUpdate: (data: IUser) => Promise<void>;
}

export const AuthContext = createContext({} as ChartContextType);

export function AuthProviderContext({ children }: AuthProviderProps) {
    const [data, setData] = useState<IUser[]>([{
        name: "",
        email: "",
        password: "",
    }]);
    const [password, setPassword] = useState<any>()
    const router = useRouter()

    async function handleLogin(user: IUser) {
        const result = await signIn<"credentials">("credentials", {
            ...user,
            redirect: false,
        });

        if (result?.error) {
            console.error("Login failed:", result.error);
            return;
        }

        setData([{
            email: user.email || "",
            password: "",
        }]);
        setPassword(user.password)
    }

    async function handleRegister(user: IUser) {
        console.log(password)
        try {
            const { name, email, password } = user;

            const response = await API.post('users', {
                name,
                email,
                password
            });

            const result = await signIn<"credentials">("credentials", {
                ...user,
                redirect: false,
            })

            if (result?.error) {
                console.error("Registration login failed:", result.error);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    async function handleUpdate(user: IUser) {
        try {
            const { name, email } = user;

            const response = await API.post('updateProfile', {
                name,
                email,
            });

            console.log("Update Response:", response.data);

            toast.success('Entre novamente para ver as configuracoes feitas')
            router.push('/login')
        } catch (error) {
            console.error("Update Error:", error);
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    return (
        <AuthContext.Provider
            value={{
                data,
                handleLogin,
                handleRegister,
                handleUpdate,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
