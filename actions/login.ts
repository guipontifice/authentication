"use server"
import { revalidatePath, revalidateTag } from "next/cache"
import * as z from "zod"
import { LoginSchema } from "@/schemas"
export const login = async (values: any) => {
    console.log(values)
    const validatedFields = LoginSchema.safeParse(values);
    if (!validatedFields.success) {

        return { error: "Invalid Fields!" };
    }
    return { success: "Email sent!" };
}