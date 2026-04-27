import {z} from "zod"

const email = z.string().email("Not a valid email").trim().toLowerCase()
const password = z.string().min(8, "Password must be at least 8 characters").max(32, "Password can't exceed 32 characters")

export const signUpSchema = z.object({
    name: z.string().min(1, "Name required"),
    email,
    password
})

export const loginSchema = z.object({
    email,
    password
})