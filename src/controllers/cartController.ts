import { Request, Response } from "express";
import { createCartService } from "../services/cartService";

export const createCart = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;
    const cart = await createCartService(userId, bookId);
    if (!cart.sucess) {
      return res.status(400).json({ message: cart.message });
    }
    return res.status(201).json({ data: cart.data, message: cart.message });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
