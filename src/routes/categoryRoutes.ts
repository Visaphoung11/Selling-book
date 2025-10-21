import express from "express";
import {
  createCategoryController,
  getCategoryByIdController,
} from "../controllers/categoryController";
export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware";
const router = express.Router();
router.post("/create-category", createCategoryController);
roleCheck(["admin"]);
router.get("/:id", getCategoryByIdController);

export default router;
