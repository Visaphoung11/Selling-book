import { createCategory } from "../services/categoryService";
import { Request, Response } from "express";
import { updateCategory } from "../services/categoryService";


export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await createCategory(req.body);
        return res.status(201).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const updateCategoryController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const categoryId = req.params.id;
        const updateData = req.body;
        const data = await updateCategory(categoryId, updateData);
        return res.status(data.status).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}               