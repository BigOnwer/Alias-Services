'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarSettings } from "./components/SidebarSettings";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { API } from "@/lib/axios"

const NewUpdateProfileFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),  // Ensure email format
    name: z.string().min(1, { message: "Name is required" }),  // Ensure name is not empty
    image: z.string().url({ message: "Invalid URL format for image" })  // Ensure valid URL format
})

type NewUpdateProfileFormInput = z.infer<typeof NewUpdateProfileFormSchema>

interface User {
    email: string
    name: string
    image: string
}

export default function Settings() {
    const [user, setUser] = useState<User[]>([])
    const router = useRouter()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        reset,
        control
    } = useForm<NewUpdateProfileFormInput>({
        resolver: zodResolver(NewUpdateProfileFormSchema),
    })

    async function handleUpdateUser(data: NewUpdateProfileFormInput) {
        setIsLoading(true)
        try{
            const { email, name, image } = data
            const response = await API.post('updateUser', {
                email,
                name,
                image
            })
            console.log("API response:", response.data)  // Log API response
            setUser((state) => [response.data, ...state])
            toast.success("Sucesso ao atualizar perfil ✅")
        } catch(error){
            console.error("Error updating user profile:", error)  // Log error
            toast.error("Erro ao tentar atualizar perfil", {
                action: {
                    label: "Tente Novamente",
                    onClick: () => router.refresh()
                }
            })
        } finally {
            setIsLoading(false)  // Ensure loading state is reset
        }
    }

    return (
        <div>
            <SidebarSettings currentPage="settings"/>
            <div className="flex justify-center items-center min-h-screen">
                <form className="w-full max-w-md border-2 rounded-lg" onSubmit={handleSubmit(handleUpdateUser)}>
                    <CardHeader>
                        <CardTitle>Update Profile</CardTitle>
                        <CardDescription>Manage your personal information and profile image.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" {...register('email')}/>
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" {...register('name')}/>
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="profile-image">Profile Image</Label>
                        <Input id="profile-image" type="text" {...register('image')}/>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="ml-auto" type="submit" disabled={isLoading}>
                            {isLoading ? "Saving..." : "Save Changes"}
                        </Button>
                    </CardFooter>
                </form>
            </div>
        </div>
    )
}
