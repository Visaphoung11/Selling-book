import { bookModel } from "@/model/book";
import { CategoryModel, Category } from "@/model/category";
import e from "express";

type ServiceResponse<T> = {
  success: boolean;
  status: number;
  data?: T;
  message: string;
};

export const createCategory = async (
  categoryData: Category
): Promise<ServiceResponse<Category>> => {
  try {
    const newCategory = await CategoryModel.create(categoryData);
    return {
      success: true,
      status: 201,
      data: newCategory,
      message: "Category created successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: 500,
      message: "Something went wrong!",
    };
  }
};

export const deleteCategory = async (
  categoryId: string
): Promise<ServiceResponse<null>> => {
  try {
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return {
        success: false,
        status: 404,
        message: "Category not found!",
      };
    }

    const associatedBooks = await bookModel.find({ category: categoryId });
    if (associatedBooks.length > 0) {
      return {
        success: false,
        status: 400,
        message:
          "Cannot delete category with associated books. Please remove associated books first.",
      };
    }

    await CategoryModel.findByIdAndDelete(categoryId);
    return {
      success: true,
      status: 200,
      message: "Category deleted successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: 500,
      message: "Something went wrong!",
    };
  }
};

export const getCategoriseById = async (
  categoryId: string
): Promise<ServiceResponse<Category>> => {
  try {
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return {
        success: false,
        status: 404,
        message: "Category not found!",
      };
    }

    return {
      success: true,
      status: 200,
      data: category,
      message: "Category fetched successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: 500,
      message: "Something went wrong!",
    };
  }
};

export const updateCategory = async (
  categoryId: string,
  updateData: Partial<Category>
): Promise<ServiceResponse<Category>> => {
  try {
    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      updateData,
      { new: true }
    );

    if (!updatedCategory) {
      return {
        success: false,
        status: 404,
        message: "Category not found!",
      };
    }

    return {
      success: true,
      status: 200,
      data: updatedCategory,
      message: "Category updated successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      status: 500,
      message: "Something went wrong!",
    };
  }
};

export const getAllgetegorise = async (
  page: number = 1,
  limit: number = 10
) => {
  try {
    const skip = (page - 1) * limit;
    const total = await CategoryModel.countDocuments();
    const categories = await CategoryModel.find()
      .skip(skip)
      .limit(limit)
      .exec();

    return {
      success: true,
      data: categories,
      meta: {
        total,
        limit,
        totalPages: Math.ceil(total / limit),
        currentPage: page,
      },
      message: "Categories fetched successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      meta: null,
      message: "Something went wrong!",
    };
  }
};
