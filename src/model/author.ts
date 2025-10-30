import mongoose, { Document, Schema } from "mongoose";

import { IAuthor } from "../types/author.type";

const authorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
      sparse: true,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Author = mongoose.model<IAuthor>("Author", authorSchema);
