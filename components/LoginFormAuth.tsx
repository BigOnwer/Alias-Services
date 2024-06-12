"use client";
import { cn } from "@/lib/utils";
import React, { useContext, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { AuthContext } from "@/Contexts/AuthContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const NewCardFormSchema = z.object({
  email: z.string().email('Enter with a valid email'),
  password: z.string(),
});

type newCardFormInput = z.infer<typeof NewCardFormSchema>;

export default function LoginForm({ className, ...props }: UserAuthFormProps) {
  const { handleLogin } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit
  } = useForm<newCardFormInput>({
    resolver: zodResolver(NewCardFormSchema),
  });

  async function handleForm(data: newCardFormInput) {
    setIsLoading(true);
    try {
      await handleLogin(data)
      router.push('/')
      toast.success('Success when trying to login')
    } catch (error) {
      console.log(error);
      toast.error('Error when trying to login', {
        action: {
          label: 'Try again',
          onClick: () => router.push('/')
        }
      })
    }
    setIsLoading(false)
  }

  return (
    <div className={cn("grid gap-6", className, {...props})}>
      <form onSubmit={handleSubmit(handleForm)}>
        <div className="grid gap-2">
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
            Enter
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
          DO YOU NOT HAVE AN ACCOUNT?  <b><a href="/register">CREATE NOW</a> </b>
          </span>
        </div>
        </div>
    </div>
  );
}