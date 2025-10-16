import { bookModel } from "@/model/book";
import { BookResult, CreateBookInput } from "@/types/book";

export const createBookService = async (
  bookData: CreateBookInput
): Promise<BookResult> => {
  try {
    const newBook = new bookModel(bookData);
    const savedBook = await newBook.save();
    return {
      success: true,
      data: savedBook,
      message: "Book created successfully.",
    };
  } catch (error) {
    console.error("Error creating book:", error);
    return {
      success: false,
      data: null as any,
      message: "Failed to create book.",
    };
  }
};

// The next endpoind is to get all books. First step is to write the logic to get all books then next go to src/controllers/bookController.ts
export const getAllBooksService = async () => {
  const books = await bookModel.find();
  try {
    return {
      success: true,
      data: books,
      message: "Get all books successfully",
    };
  } catch (error) {
    console.error("Error getting all book:", error);
    return {
      success: false,
      data: null as any,
      message: "Failed to get all books",
    };
  }
};

export const deleteBookByIdService = async (bookId: string) => {
  try {
    const deletedBook = await bookModel.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return {
        success: false,
        data: null as any,
        message: "Book not found",
      };
    }
    return {
      success: true,
      data: deletedBook,
      message: "Book deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting book by id:", error);
    return {
      success: false,
      data: null as any,
      message: "Failed to delete book by id",
    };
  }
};
