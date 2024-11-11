import express from "express";
import { categoryController } from "./controller";
import  isRole  from "../../middle/isRole";

const categoriesRouter = express.Router()

const { getCategory, getAllCategories, createCategory, editCategory, deleteCategory} = categoryController

categoriesRouter.get('/', isRole('admin'), getCategory)
categoriesRouter.get('/', getAllCategories)

categoriesRouter.post('/new-category', createCategory)
categoriesRouter.put('/edit-category', isRole('admin'), editCategory)
categoriesRouter.delete('/delete-category', isRole('admin'), deleteCategory)

export default categoriesRouter