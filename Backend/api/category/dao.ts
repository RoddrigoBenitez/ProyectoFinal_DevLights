import { ICategory } from "./types";
import Category from "./model";

class CategoryDao{
    async getAllCategory() {
        try {
          const category = await Category.find();
          return category;
        } catch (error) {
          throw Error((error as Error).message);
        }
      };
    async getCategory(categoryID: String) {
        try {
          const category = await Category.find(categoryID);
          return category;
        } catch (error) {
          throw Error((error as Error).message);
        }
      };
      async createCategory(category: string){
        try {
          const newCategory = await Category.create(category);
          return newCategory;
        } catch (error) {
          throw Error((error as Error).message);
        }
      };
      async editCategory(categoryId: string, category: ICategory) {
        try {
          const updatedCategory = await Category.findByIdAndUpdate(categoryId, category, {
            new: true,
          });
          return updatedCategory;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
      async deleteCategory(categoryID: ICategory){
      try {
        const deletedCategory = await Category.findByIdAndDelete(categoryID);
        return deletedCategory;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
}

export const categoryDao = new CategoryDao()