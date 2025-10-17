import { Router } from "express";
import bookRoute from "./bookRoute";
import authRoute from "./authroute";
const router = Router();

router.use("/books", bookRoute);
router.use("/auth", authRoute);
export default router;
