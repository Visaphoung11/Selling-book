import express from "express";
import {UserRole} from "../enum/user-enum";
import { createCategoryController, getCategoryByIdController, updateCategoryController, deleteCategoryController } from "../controllers/categoryController";
export const rouer = express.Router();
import { roleCheck } from "../middlewares/roleMiddleware";
const router = express.Router();
router.post("/create-category", roleCheck([UserRole.ADMIN]), createCategoryController); 
router.put("/update-category/:id", roleCheck([UserRole.ADMIN]), updateCategoryController);
router.delete("/delete-category/:id", roleCheck([UserRole.ADMIN]), deleteCategoryController);
router.get("/:id", getCategoryByIdController);

export default router;
