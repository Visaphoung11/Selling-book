import mongoose, { Schema, model, Document } from "mongoose";

export interface ICart extends Document {
  userId: mongoose.Types.ObjectId;
  bookId: mongoose.Types.ObjectId;
}
const cartSchema = new Schema<ICart>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // references User model
      required: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      ref: "Book", // references Book model
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);
export const CartModel = model<ICart>("Cart", cartSchema);
