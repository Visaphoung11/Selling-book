import mongoose from "mongoose";
export interface IAuthor extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  phone?: string;
  dob?: Date;
}
