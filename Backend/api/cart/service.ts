import { ICart } from "./types";
import { cartDao } from "./dao";

const { 
  addCart,
  getCarts, 
  getCartByID,
  editCart, 
  deleteCart} = cartDao;

class CartService {
  async addCart(cart: ICart) {
    try {
      const newCart = await addCart(cart);
      return newCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCarts(){
    try{
        const getCart = await getCarts()
        return getCart
      } catch (error) {
        throw Error((error as Error).message);
      }
  }
  async getCartById(cartId: string){
    try{
        const getCart = await getCartByID(cartId)
        return getCart
      } catch (error) {
        throw Error((error as Error).message);
      }
  }
  async editCart(cartId: string, cart: ICart){
    try{
      const updateCart = await editCart(cartId, cart)
      return updateCart
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCart(cartId: string){
    try {
      const deletedCart = await deleteCart(cartId)
      return deletedCart
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartService = new CartService();
