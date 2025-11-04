"use client"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {useForm} from "react-hook-form"
import {toast} from "sonner";
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import {cn} from "@/lib/utils"
import { Eclipse } from "lucide-react"
import { authClient } from "@/lib/auth-client"
import { error } from "console"
import { CircuitBackground } from "@/components/ui/circuit-background"

const registerSchema=z.object({
    email:z.email("Please enter a valid email address."),
    password:z.string().min(8,"Password must be at least 8 characters"),
    confirmPassword:z.string().min(1,"Please confirm your password"),
}).refine((data)=>data.password===data.confirmPassword,{
    message:"Passwords do not match",
    path:["confirmPassword"]
})

type RegisterFormValues=z.infer<typeof registerSchema >

export const  RegisterForm=()=>{
    const router =useRouter();
    const form =useForm<RegisterFormValues>({
        resolver:zodResolver(registerSchema),
        defaultValues:{
            email:"",
            password:"",
            confirmPassword:""
        }
    });

    const onSubmit=async(values:RegisterFormValues)=>{
        console.log(values)
        await authClient.signUp.email({
            // name:values.email,
            // email:values.email,
            name:values.email,
            email:values.email,
            password:values.password,
            callbackURL:"/"
        },{
            onSuccess: ()=>{
                router.push("/")
            },
            onError:(error)=>{
                toast.message(error.error.message)
            }
        }
    
    )
    }

    const isPending=form.formState.isSubmitting;

    return(
        <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted relative overflow-hidden">
            <CircuitBackground />
            <Card className="w-full max-w-md shadow-lg relative z-10">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold">
                        Get Started 
                    </CardTitle>
                    <CardDescription>
                        Create your account to get started
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-3">
                                <Button
                                    variant="outline"
                                    className="w-full cursor-pointer"
                                    type="button"
                                    disabled={isPending}
                                >
                                    Continue With Github
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full cursor-pointer"
                                    type="button"
                                    disabled={isPending}
                                >
                                    Continue With Google
                                </Button>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        Or continue with
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="email"
                                                    placeholder="m@example.com"
                                                    disabled={isPending}
                                                    className="h-10"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="password"
                                                    placeholder="Create a password (min. 8   characters)"
                                                    disabled={isPending}
                                                    className="h-10"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({field})=>(
                                        <FormItem>
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type="password"
                                                    placeholder="Confirm your password"
                                                    disabled={isPending}
                                                    className="h-10"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full h-10 cursor-pointer"
                                    disabled={isPending}
                                    variant="destructive"
                                >
                                    {isPending ? "Signing up..." : "Sign up"}
                                </Button>
                            </div>

                            <div className="text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-primary underline underline-offset-4 hover:text-primary/80"
                                >
                                    Login
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )

}   