import express from "express";
import mongoose from "mongoose";
import cartRoutes from "./routes/cartroutes";

const app = express();
app.use(express.json());

app.use("/api/cart", cartRoutes);

mongoose.connect("mongodb://localhost:27017/bookstore")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(3000, () => console.log("Server running on port 3000"));
