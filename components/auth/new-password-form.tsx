"use client"
import * as z from "zod"
import { useState } from "react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { NewPasswordSchema } from "@/schemas";
import { Button } from "../ui/button";
import { CardWrapper } from "./card-wraper"
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormField,
    FormMessage
} from "@/components/ui/form"
import { FormError } from "../form-error";
import { FormSuccess } from "../form-sucess";
import { newPassword } from "@/actions/new-password";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPassword(values, token)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);

                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Enter a new password?"
            backButtonLabel="Back to login?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                        />
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
                                        <Input
                                            {...field}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <Button 
                                    size="sm"
                                    variant="link"
                                    asChild
                                    className="px-0 font-normal"
                                    >
                                        <Link href="/auth/reset/">
                                            Forgot Password
                                        </Link> 
                                    </Button>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Reset Password
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}