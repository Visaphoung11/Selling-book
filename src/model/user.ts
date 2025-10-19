import mongoose, { Schema, Document, model } from "mongoose";
import { IUser } from "../types/userType";

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    phone: { type: String, required: true, unique: true },
    
  },
  { timestamps: true }
);

export const UserModel = model<IUser & Document>("User", userSchema);
