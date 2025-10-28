export interface IBook {
  _id?: string;
  title: string;
  description?: string;
  author: string;

  publisher?: string;
  sellPrice: number;
  basePrice?: number;
  discountPrice?: number;
  category?: string;
  stock: number;
  image?: string;
  pages?: number;
  language?: string;
  isActive?: boolean;
  isFeatured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
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
