'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { AuthContext } from "@/Contexts/AuthContext";
import { toast } from "sonner";

const NewCardFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email('Enter with a valid email'),
});

type newCardFormInput = z.infer<typeof NewCardFormSchema>;

export function UpdateForm() {
    const { handleUpdate } = useContext(AuthContext);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { register, handleSubmit } = useForm<newCardFormInput>({
        resolver: zodResolver(NewCardFormSchema),
    });

    async function handleForm(data: newCardFormInput) {
        setIsLoading(true);
        try {
            const { name, email } = data;
            console.log("Form Data:", data);
            await handleUpdate({ name, email });
        } catch (error) {
            console.log(error);
            toast.error('Error when trying to update profile', {
                action: {
                    label: 'Try again',
                    onClick: () => router.push('/'),
                },
            });
        }
        setIsLoading(false);
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Update Profile</CardTitle>
                    <CardDescription>Manage your personal information and profile image.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit(handleForm)}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" {...register('name')} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="ml-auto" type="submit" disabled={isLoading}>
                            {isLoading ? "Saving..." : "Save Changes"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}
