import { Request, Response } from "express";
import { Types } from "mongoose";
import { cartService } from "../services/cartservice";

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { userId, bookId, quantity } = req.body;
    const cart = await cartService.addToCart(userId, bookId, quantity);
    res.status(200).json({ success: true, cart });
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
  }
};
export const getUserCart = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userObjectId = new Types.ObjectId(userId);
    const cart = await cartService.getUserCart(userObjectId);
    res.status(200).json({ success: true, cart });
  } catch (err: any) {
    res.status(404).json({ success: false, message: err.message });
  }
};

