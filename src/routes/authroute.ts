// src/routes/auth.route.ts
import { Router } from "express";
import { registerController } from "../controllers/authcontroller";
import { loginController } from "../controllers/authcontroller";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
export default router;
