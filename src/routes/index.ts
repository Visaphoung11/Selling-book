import { Router } from "express";
import bookRoute from "./bookRoute";
import authRoute from "./authroute";
import adminRoutes from "./adminRoutes";


const router = Router();


router.use("/books", bookRoute);
router.use("/auth", authRoute);

router.use("/admin", adminRoutes);
export default router;
