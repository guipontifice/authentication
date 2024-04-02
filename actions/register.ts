"use server"
import { revalidatePath, revalidateTag } from "next/cache"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"
export const register = async (values: any) => {
    console.log(values)
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid Fields!" };
    }
    return { success: "Email sent!" };
}