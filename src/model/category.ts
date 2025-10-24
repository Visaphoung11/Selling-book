import { Schema, model, Document, Types} from "mongoose";

export interface Category extends Document {
    name: string;
    description?:string;
    userId: Types.ObjectId;
}

const categorySchema = new Schema<Category>({
    name: { type: String, required: true, unique: true },
    description: { type: String},
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    
});

export const CategoryModel = model("category", categorySchema);