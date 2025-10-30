import { Router } from "express";
import bookRoute from "./bookRoute";
import authRoute from "./authroute";
import adminRoutes from "./adminRoutes";
import categoryRoute from "./categoryRoutes";
import cartRoute from "./cartRoutes";
import { authorRouter } from "./authorRoute";
const router = Router();

router.use("/books", bookRoute);
router.use("/auth", authRoute);
router.use("/authors", authorRouter);
router.use("/admin", adminRoutes);
router.use("/category", categoryRoute);
router.use("/carts", cartRoute);
export default router;
