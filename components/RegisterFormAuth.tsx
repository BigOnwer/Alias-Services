'use client'

import { useState } from 'react';
import {signIn} from 'next-auth/react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { Loader } from 'lucide-react';

interface User {
    name: string,
    email: string,
    password: string,
}

export function RegisterForm() {
    const [data, setData] = useState<User>({
        name: '',
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        const request = await fetch('api/users', {
            method: 'POST',
            headers: {
                "Content-type": "aplication/json"
            },
            body: JSON.stringify(data)
        })

        const response = await request.json()

        console.log('User Register Form', response)

        if(!request.ok){
            toast.error('Erro ao criar conta', {
                action: {
                    label: 'Tente Novamente',
                    onClick: () => router.refresh()
                }
            })
        }else{
            console.log(response)
            toast.success('Conta criada com sucesso')
            router.push('/login')
        }

        const res = await signIn<'credentials'>('credentials', {
            ...data,
            redirect: false
        })

        setData({
            name: '',
            email: '',
            password: '',
        })

        setIsLoading(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
    {/* JSON.stringify(data) */}
    <div className="rounded-md shadow-sm -space-y-px">
        <div>
            <label htmlFor="name" className="sr-only">
                Name
            </label>
            <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-neutral-900 focus:border-neutral-900 focus:z-10 sm:text-sm"
                placeholder="Name"
                disabled={isLoading}
                value={data.name}
                onChange={handleChange}
            />
        </div>
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-neutral-900 focus:border-neutral-900 focus:z-10 sm:text-sm"
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
                autoComplete="new-password"
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
            Cadastrar
            {isLoading && (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
            )}
        </Button>
        <p className='text-sm'>Already have an account? <a href='/login'><b>Enter</b></a></p>
    </div>
</form>

    );
};