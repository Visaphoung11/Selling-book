import Router from "express";

import { createCart } from "../controllers/cartController";

const router = Router();

router.post("/create-cart", createCart);

export default router;
