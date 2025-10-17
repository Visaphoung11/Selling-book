import {
  createBookService,
  getAllBooksService,
  deleteBookByIdService,
  updateBookByIdService,
} from "@/services/bookService"; // after creating the getAllBooksService, we need to create the controller for it
import { CreateBookInput } from "@/types/book";
import { Request, Response } from "express";

export const createBook = async (req: Request, res: Response) => {
  try {
    const bookData: CreateBookInput = req.body;
    const result = await createBookService(bookData);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to create book.",
    });
  }
};

export const getAllBooksController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = await getAllBooksService(page, limit);
  res.status(result.success ? 200 : 500).json(result);
};
// After creating the getAllBooks, we need to create the route for it

export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const result = await deleteBookByIdService(bookId);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const updateData = req.body;
    const result = await updateBookByIdService(bookId, updateData);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(404).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};
