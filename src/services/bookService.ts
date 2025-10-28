import { bookModel } from "@/model/book";
import { BookResult, CreateBookInput } from "@/types/book";
import { Request } from "express";

export const createBookService = async (
  req: Request,
  bookData: CreateBookInput
): Promise<BookResult> => {
  try {
    if (bookData.orderId === "") {
      delete bookData.orderId;
    }
    const newBook = new bookModel({
      ...bookData,
      userId: req.user?.id,
    });
    await newBook.save();
    return {
      success: true,
      data: newBook,
      message: "Book created successfully.",
    };
  } catch (error: any) {
    console.error("Error creating book:", error.message);
    return {
      success: false,
      data: null as any,
      message: "Failed to create book.",
    };
  }
};

export const getAllBooksService = async (
  page: number = 1,
  limit: number = 10
) => {
  try {
    const totalItems = await bookModel.countDocuments();

    const totalPages = Math.ceil(totalItems / limit);
    const skip = (page - 1) * limit;

    const books = await bookModel
      .find()
      .skip(skip)
      .limit(limit)
      .populate("userId"); // populate user details;

    return {
      success: true,
      data: books,
      meta: {
        totalItems,
        itemCount: books.length,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
      message: "Get all books successfully",
    };
  } catch (error) {
    console.error("Error getting all books:", error);
    return {
      success: false,
      data: null,
      meta: null,
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

export const updateBookByIdService = async (
  bookId: string,
  updateData: Partial<CreateBookInput>
) => {
  try {
    const updatedBook = await bookModel.findByIdAndUpdate(bookId, updateData, {
      new: true,
    });
    if (!updatedBook) {
      return {
        success: false,
        data: null as any,
        message: "Book not found",
      };
    }
    return {
      success: true,
      data: updatedBook,
      message: "Book updated successfully",
    };
  } catch (error) {
    console.error("Error updating book by id:", error);
    return {
      success: false,
      data: null as any,
      message: "Failed to update book by id",
    };
  }
};
