import { configDotenv } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import tasksRoutes from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
configDotenv({ path: path.resolve(__dirname, '../.env') })

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use("/auth", authRoutes)

app.use("/tasks", tasksRoutes)

app.use(errorHandler)

connectDB();

app.listen(PORT)