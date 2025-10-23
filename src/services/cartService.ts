import { CartModel } from "../model/cart";
import mongoose from "mongoose";

interface Cart {
  sucess: boolean;
  data: any;
  message: string;
}

export const createCartService = async (
  userId: string,
  bookId: string
): Promise<Cart> => {
  const existing = await CartModel.findOne({
    userId: new mongoose.Types.ObjectId(userId),
    bookId: new mongoose.Types.ObjectId(bookId),
  });
  if (existing) {
    return { sucess: false, data: null, message: "Cart item already exists" };
  }
  const cart = new CartModel({
    userId: new mongoose.Types.ObjectId(userId),
    bookId: new mongoose.Types.ObjectId(bookId),
  });

  await cart.save();
  return { sucess: true, data: cart, message: "Cart created successfully" };
};
