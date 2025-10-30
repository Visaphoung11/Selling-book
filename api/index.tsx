import "tsconfig-paths/register"
import express from "express"
import dotenv from "dotenv"
import connectDB from "../src/config/database"
import router from "../src/routes/index"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Connect DB (will be cached in serverless)
connectDB()

// Routes
app.use("/api/v1", router)

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ success: false, message: "Server Error" })
})

// Export for Vercel serverless
export default app
</merged_code
