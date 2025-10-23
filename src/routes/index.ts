import { Router } from "express";
import bookRoute from "./bookRoute";
import authRoute from "./authroute";
import adminRoutes from "./adminRoutes";
import categoryRoute from "./categoryRoutes";
import cartRoute from "./cartRoutes";

const router = Router();

router.use("/books", bookRoute);
router.use("/auth", authRoute);

router.use("/admin", adminRoutes);
router.use("/category", categoryRoute);
router.use("/carts", cartRoute);
export default router;
