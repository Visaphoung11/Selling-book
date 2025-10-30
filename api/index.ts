import type { VercelRequest, VercelResponse } from "@vercel/node"
import express from "express"
import dotenv from "dotenv"
import connectDB from "../src/config/database"
import router from "../src/routes/index"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/v1", router)

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("[v0] Error:", err.stack)
  res.status(500).json({ success: false, message: "Server Error", error: err.message })
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("[v0] Incoming request:", req.method, req.url)

    // Ensure database is connected
    await connectDB()

    // Handle the request with Express
    return app(req as any, res as any)
  } catch (error: any) {
    console.error("[v0] Handler error:", error)
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    })
  }
}
