import { Request, Response } from "express";
import {
  deleteCategory,
  updateCategory,
  getCategoriseById,
  createCategory,
  getAllgetegorise,
} from "../services/categoryService";
import {  AuthRequest } from "@/middlewares/roleMiddleware";



export const createCategoryController = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const userId = req.user?.id; 
    const { name, description } = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }


    const data = await createCategory({ name, userId, description })

    // return res.status(201).json(data); // This is the reason why postman always 201 even errors
    return res.status(data.status).json(data);

  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({
      message: "Error while creating category",
    });
  }
};
export const getCategoryByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const categoryId = req.params.id;
    const data = await getCategoriseById(categoryId);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const categoryId = req.params.id;
    const updateData = req.body;
    const data = await updateCategory(categoryId, updateData);
    return res.status(data.status).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const categoryId = req.params.id;
    const data = await deleteCategory(categoryId);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllcategoriesController = async (
  req: Request,
  res: Response
) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = await getAllgetegorise(page, limit);
  res.status(result.success ? 200 : 500).json(result);
};
