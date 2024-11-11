import { Request, Response } from "express";
import { cartService } from "./service";

const { addCart, getCarts, getCartById, editCart, deleteCart } = cartService;

class CartController {
  async addCart(req: Request, res: Response) {
    const cart = req.body;
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async getCarts(req: Request, res:Response){
    try{
      const carts = await getCarts()
      return carts
    } catch (error) {
      return res.status(400).json({ error: "Cart not found" });
    }
  }
  
  async getCartById(req: Request, res:Response){
    try{
      const getCart = await getCartById(req.params.id)
      return getCart
    } catch (error) {
      return res.status(400).json({ error: "Cart not found" });
    }
  }
  async editCart(req: Request, res: Response){
    try{
      const cart = await editCart(req.params.id, req.body)
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(400).json({ error: "Cart not found" });
    }
  }
  async deleteCart(req: Request, res: Response){
    try{
      const deletedCart = await deleteCart(req.params.id)
      return deletedCart
    } catch (error) {
      return res.status(400).json({ error: "Cart not found" });
    }
  }
  // async confirmCart(req: Request, res: Response) {
  //   try {
  //     const cart = req.body;
  //     return res.status(200).json(cart);
  //   } catch (error) {
  //     return res.status(500).json({ error });
  //   }
  // }
}

export const cartController = new CartController();
