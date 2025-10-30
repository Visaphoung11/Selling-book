import type mongoose from "mongoose"
import { Schema, model, type Document } from "mongoose"

export interface ICart extends Document {
  userId: mongoose.Types.ObjectId
}
const cartSchema = new Schema<ICart>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // references User model
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  },
)
export const CartModel = model<ICart>("Cart", cartSchema)
export const Cart = CartModel
