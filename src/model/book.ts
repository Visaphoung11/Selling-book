import mongoose, { Document, Schema } from "mongoose";
import { IBook } from "@/types/book";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    description: {
      type: String,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    basePrice: {
      type: Number,
      trim: true,
    },
    sellPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId, // store category ID
      ref: "Category", // reference to Category model
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: false,
      default: null,
    },

    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      default: "",
    },
    pages: {
      type: Number,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const bookModel = mongoose.model<IBook & Document>("Book", bookSchema);
