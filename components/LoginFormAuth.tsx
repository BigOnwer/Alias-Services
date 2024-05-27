'use client'

import { useState } from 'react';
import {signIn} from 'next-auth/react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Loader } from 'lucide-react';

interface User {
    email: string,
    password: string,
}

export function LoginForm() {
    const [data, setData] = useState<User>({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()

        setIsLoading(true)

        const res = await signIn<'credentials'>('credentials', {
            ...data,
            redirect: false
        })

        setData({
            email: '',
            password: '',
        })

        setIsLoading(false)

        if(res?.error){
            toast.error("Erro ao tentar entrar na conta", {
                action: {
                    label: 'Tente Novamente',
                    onClick: () => router.refresh()
                }
            })
        }else{
            toast.success("Sucesso ao entrar na conta")
            router.push('/')
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setData((prev) => {
            return {...prev, [event.target.name]: event.target.value}
        })
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            {/* JSON.stringify(data) */}
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-neutral-900 focus:border-neutral-900 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        disabled={isLoading}
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-neutral-900 focus:border-neutral-900 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        disabled={isLoading}
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <Button
                    type="submit"
                    className='w-full'
                    disabled={isLoading}
                >
                    Login
                    {isLoading && (
                        <Loader className="mr-2 h-4 w-4 animate-spin" />
                    )}
                </Button>
                <p className='text-sm'>Do not have an account? <a href='/register'><b>Create Right Now</b></a></p>
            </div>
        </form>
    );
};

export default LoginForm;
