// Auth Routes
import express from "express";
import { validate } from "../middlewares/validate.js";
import { loginSchema, signUpSchema } from "../validators/authValidator.js";
import { login, signUp } from "../controllers/authController.js";

const router = express.Router()

// Sign up route
router.post("/signup", validate(signUpSchema), signUp)

// Login route
router.post("/login", validate(loginSchema), login)

export default router