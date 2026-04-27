import { configDotenv } from "dotenv"
import express from "express"
import { errorHandler } from "./middlewares/errorMiddleware.js"
import authRoutes from "./routes/authRoutes.js"
import tasksRoutes from "./routes/tasksRoutes.js"
import { connectDB } from "./config/db.js"

configDotenv({ path: path.resolve(process.cwd(), '.env') })

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.use("/auth", authRoutes)

app.use("/tasks", tasksRoutes)

app.use(errorHandler)

connectDB();

app.listen(PORT)