import { Document } from "mongoose";
import mongoose from "mongoose";
export interface IBook extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  authorId: mongoose.Types.ObjectId; 
  basePrice?: number;
  sellPrice: number;
  categoryId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  orderId?: mongoose.Types.ObjectId | null;
  stock: number;
  image?: string;
  pages?: number;
  createdAt: Date;
  updatedAt: Date;
}


export interface CreateBookInput {
  title: string;
  isbn?: string;
  description?: string;
  author: string;
  sellPrice: number;
  publisher?: string;
  price: number;
  basePrice?: number;
  categoryId?: string;
  userId: string;
  orderId?: string;
  stock?: number;
  image?: string;
  pages?: number;
  language?: string;
  isFeatured?: boolean;
}

export interface BookResult {
  success: boolean;
  data: IBook;
  message?: string;
}

export interface getAllBooksService {
  title: string;
  author: string;
  price: number;
  sellPrice: number;
  basePrice: number;
  userId: string;
  orderId: string;
  categoryId: string;
  stock: number;
  image: string;
  pages: number;
} // this is the types of getting all books
