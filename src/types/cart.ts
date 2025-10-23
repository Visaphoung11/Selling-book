export interface ICart {
  _id?: string;
  userId: string;
  bookId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateCartInput {
  userId: string;
  bookId: string;
}
