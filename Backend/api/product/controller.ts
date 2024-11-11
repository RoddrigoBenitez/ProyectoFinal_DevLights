import { Request, Response } from "express";
import { productService } from "./service";
import { ISearchParams } from "./types";

const { getProduct, getProducts, createProduct, editProduct, deleteProduct, } = productService;

class ProductController {
  async getProducts(req: Request, res: Response) {
    try {
      const searchParams: ISearchParams = req.query;
      const products = await getProducts(searchParams);
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error: "Products not found" });
    }
  }
  async getProduct(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const product = await getProduct(id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }
  async createProduct(req: Request, res: Response) {
    try {
      const product = await createProduct(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
 
  async deleteProduct(req: Request, res: Response) {
    try {
      const product = await deleteProduct(req.params.id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }
  async editProduct(req: Request, res: Response) {
    try {
      const product = await editProduct(req.params.id, req.body);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error: "Product not found" });
    }
  }
}

export const productController = new ProductController();
