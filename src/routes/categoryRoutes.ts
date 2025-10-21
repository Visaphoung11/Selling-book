import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController";
export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware";
const router = express.Router();
router.post("/create-category", createCategoryController);
roleCheck(["admin"]);
router.delete(
  "/delete-category/:id",
  roleCheck(["admin"]),
  deleteCategoryController
);

export default router;
