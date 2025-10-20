import { Schema, model, Document } from "mongoose";

export interface Category extends Document {
    name: string;
}

const categorySchema = new Schema<Category>({
    name: { type: String, required: true, unique: true },
});

export const CategoryModel = model("category", categorySchema);

