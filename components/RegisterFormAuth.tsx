"use client";
import { cn } from "@/lib/utils";
import React, { useContext, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "@/Contexts/AuthContext";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const NewCardFormSchema = z.object({
  name: z.string(),
  email: z.string().email('Enter with a valid email'),
  password: z.string(),
});

type newCardFormInput = z.infer<typeof NewCardFormSchema>;

export function RegisterForm({ className, ...props }: UserAuthFormProps) {
  const { handleRegister } = useContext(AuthContext);
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit
  } = useForm<newCardFormInput>({
    resolver: zodResolver(NewCardFormSchema),
  });

  async function handleForm(data: newCardFormInput) {
    setIsLoading(true);
    try{
      const {name, email, password} = data
      handleRegister({name, email, password})
      toast.success('Success when trying to login')
      router.push('/')
    } catch (error) {
      console.log(error);
      toast.error('Error when trying to login', {
        action: {
          label: 'Try again',
          onClick: () => router.push('/')
        }
      })
    }
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Name
            </Label>
            <Input
              id="name"
              placeholder="name"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register('name')}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              {...register('password')}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Loader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            ALREADY HAVE AN ACCOUNT? <b><a href="/login">Enter Now</a> </b>
          </span>
        </div>
      </div>
    </div>
  );
}