import { createCategory } from "../services/categoryService";
import { Request, Response } from "express";


export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = await createCategory(req.body);
        return res.status(201).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}