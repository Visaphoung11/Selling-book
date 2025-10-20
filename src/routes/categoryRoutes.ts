import express from "express";
import { createCategoryController,updateCategoryController } from "../controllers/categoryController";

export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware"
const router = express.Router();
router.post("/create-category", createCategoryController); roleCheck(["admin"]);
router.put("/update-category/:id", roleCheck(["admin"]), updateCategoryController);


export default router;
