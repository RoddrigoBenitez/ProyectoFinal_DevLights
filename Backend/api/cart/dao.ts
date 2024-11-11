import Cart from "./model";
import { ICart } from "./types";

class CartDao {
  async addCart(cart: ICart) {
    try {
      const newCart = await Cart.create(cart);
      return newCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCarts(){
    try{
      const getCarts = await Cart.find()
      return getCarts
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCartByID(cartId: string){
    try{
      const getCart = await Cart.findById(cartId)
      return getCart
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async editCart(cartId: string, cart: ICart){
    try{
      const updateCart = await Cart.findByIdAndUpdate(cartId, cart, {
        new: true,
      });
      return updateCart
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCart(cartId: string){
    try{
      const deteledCart = await Cart.findByIdAndDelete(cartId)
      return deteledCart
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartDao = new CartDao();
