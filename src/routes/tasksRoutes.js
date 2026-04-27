import express from "express"
import { protect } from "../middlewares/authMiddleware.js"
import { validate } from "../middlewares/validate.js"
import { createTaskSchema, updateTaskSchema } from "../validators/tasksValidator.js"
import { create, edit, get, remove } from "../controllers/tasksController.js"

const router = express.Router()

router.use(protect)

// Create task route
router.post("/", validate(createTaskSchema), create)

// Get all tasks route
router.get("/", get)

// Delete task route
router.delete("/:id", remove)

// Patch task route
router.patch("/:id", validate(updateTaskSchema), edit)


export default router