import {z} from "zod"

const title = z.string().min(1, "Title is required").max(32, "Title cannot exceed 32 characters")
const description = z.string().min(1, "Description is required").max(64, "Description cannot exceed 64 characters")
const completed = z.boolean().optional()

export const createTaskSchema = z.object({
    title,
    description,
    completed
})

export const updateTaskSchema = createTaskSchema.partial()