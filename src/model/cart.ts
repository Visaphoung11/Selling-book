import { Schema, model, Types } from "mongoose";

const CartItemSchema = new Schema({
  bookId: { type: Types.ObjectId, ref: "Book", required: true },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true }
});

const CartSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "User", required: true, unique: true },
  items: [CartItemSchema],
  totalAmount: { type: Number, default: 0 }
});

export const CartModel = model("Cart", CartSchema);
