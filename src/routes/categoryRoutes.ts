import express from "express";
import { UserRole } from "../enum/user-enum";
import {
  createCategoryController,
  getCategoryByIdController,
  updateCategoryController,
  deleteCategoryController,
  getAllcategoriesController,
} from "../controllers/categoryController";
export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware";
import { get } from "http";
const router = express.Router();
router.post(
  "/create-category",
  roleCheck([UserRole.ADMIN]),
  createCategoryController
);
router.put(
  "/update-category/:id",
  roleCheck([UserRole.ADMIN]),
  updateCategoryController
);
router.delete(
  "/delete-category/:id",
  roleCheck([UserRole.ADMIN]),
  deleteCategoryController
);
router.get("/:id", getCategoryByIdController);
router.get("/", getAllcategoriesController);
export default router;
