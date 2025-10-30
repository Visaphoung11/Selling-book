import mongoose from "mongoose"
import { environment } from "../config/environment"
import dotenv from "dotenv"

dotenv.config()

let cachedConnection: typeof mongoose | null = null

const connectDB = async (): Promise<void> => {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    console.log("Using cached MongoDB connection")
    return
  }

  const MONGODB_URI = process.env.MONGODB_URI as string
  try {
    const conn = await mongoose.connect(environment.MONGODB_URI)
    cachedConnection = conn
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("Database connection error:", error)
    process.exit(1)
  }
}

export default connectDB
