import express from "express";
import { createCategoryController } from "../controllers/categoryController";
export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware"
const router = express.Router();
router.post("/create-category", createCategoryController); roleCheck(["admin"]);



export default router;
