'use client'

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { updateProfileSchema } from '../schemas';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Session } from 'next-auth';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChangeEvent, useEffect, useState } from 'react';

type ProfileFormProps = {
    defaultValues: Session['user'];
};

export function UpdateForm({ defaultValues }: ProfileFormProps) {
    const { data: session } = useSession();
    const user = session?.user;

    const router = useRouter();

    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            name: defaultValues?.name ?? '',
            email: defaultValues?.email ?? '',
        },
    });

    const onSubmit = form.handleSubmit(async (data) => {
        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            if (data.password) {
                formData.append('password', data.password);
            }

            await axios.post('/api/updateProfile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });

            if (data.password) {
                await signIn('credentials', {
                    redirect: false,
                    email: data.email,
                    password: data.password,
                });
            }

            toast.success('Seu perfil foi atualizado com sucesso.');
            router.refresh();
        } catch (error) {
            toast.error('Ocorreu um erro ao atualizar seu perfil.');
        }
    });

    return (
        <Form {...form}>
            <div className='flex justify-center my-5'>
                <form onSubmit={onSubmit} className="space-y-8 w-1/2">
                    <Card>
                        <CardHeader>
                            <div className='flex justify-between'>
                                <div>
                                    <CardTitle>Update Profile</CardTitle>
                                    <CardDescription>
                                        Manage your personal information and profile image.
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your name" {...field} required/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" {...field} required/>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    <SheetFooter className="mt-auto">
                        <Button disabled={form.formState.isSubmitting} type="submit">
                            {form.formState.isSubmitting ? 'Salvando...' : 'Salvar alterações'}
                        </Button>
                    </SheetFooter>
                </form>
            </div>
        </Form>
    );
}
