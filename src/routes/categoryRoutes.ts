import express from "express";
import {
  createCategoryController,
  updateCategoryController,
  getCategoryByIdController,
} from "../controllers/categoryController";

export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware";
const router = express.Router();
router.post("/create-category", createCategoryController);
roleCheck(["admin"]);
router.put(
  "/update-category/:id",
  roleCheck(["admin"]),
  updateCategoryController
);

router.post("/create-category", createCategoryController);
roleCheck(["admin"]);
router.get("/:id", getCategoryByIdController);

export default router;
