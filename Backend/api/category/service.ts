import { categoryDao } from "./dao";
import { ICategory } from "./types";

const { getCategory, getAllCategory, createCategory, editCategory, deleteCategory } = categoryDao

class CategoryService {
    async getCategory(id: string) {
      try {
        const category = await getCategory(id);
        return category;
      } catch (error) {
        throw Error((error as Error).message);
      }
    };
    async getAllCategories() {
      try {
        const categorys = await getAllCategory();
        return categorys;
      } catch (error) {
        throw Error((error as Error).message);
      }
    };
    async createCategory(category: string) {
      try {
        const newCategory = await createCategory(category);
        return newCategory;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
    async editCategory(category: string, categoryId: ICategory){
      try{
        const uptadeCategory = await editCategory(category, categoryId)
        return uptadeCategory;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
    async deleteCategory(categoryId: ICategory){
      try{
        const deletedCategory = await deleteCategory(categoryId)
        return deletedCategory
      } catch (error) {
        throw Error((error as Error).message);
      }
    }
}

export const categoryService = new CategoryService()