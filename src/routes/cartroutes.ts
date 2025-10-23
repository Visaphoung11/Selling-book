import express from "express";
import { addToCart, getUserCart } from "../controllers/cartcontroller";

const router = express.Router();


// GET /api/cart/:userId
router.get("/User/:userId", getUserCart);

export default router;
