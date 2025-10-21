import { CategoryModel, Category } from "@/model/category";

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

export const getCategoriseById = async (
  categoryId: string
): Promise<ServiceResponse<Category>> => {
  try {
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return {
        success: false,
        status: 404,
        message: "Category not found",
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
