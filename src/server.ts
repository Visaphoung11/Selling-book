import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/database"
import router from "./routes/index"

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use("/api/v1", router)

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ success: false, message: "Server Error" })
})

if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  const PORT = process.env.PORT || 4000

  // Connect to database and start server
  connectDB()
    .then(() => {
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    })
    .catch((error) => {
      console.error("Failed to start server:", error)
      process.exit(1)
    })
}

export default app
