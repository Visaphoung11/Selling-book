import { createBookService } from "@/services/bookService";
import { CreateBookInput } from "@/types/book";
import { Request, Response } from "express";
import { getAllBooksService } from "@/services/bookService"; // after creating the getAllBooksService, we need to create the controller for it
import { deleteBookByIdService } from "@/services/bookService";

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

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await getAllBooksService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "seever error" });
  }
}; // After creating the getAllBooks, we need to create the route for it

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
