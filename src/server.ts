import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database";
import router from "./routes/index";
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// Connect DB
connectDB();



// Routes
app.use("/api/v1", router); // existing routes

// Error handling
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: "Server Error" });
  }
);




// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
