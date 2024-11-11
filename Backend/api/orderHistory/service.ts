import { IProduct } from "../product/types";
import { historialDao } from "./dao";
import { IHistorial, IHistorialProduct } from "./types";
import { productDao } from "../product/dao"

const { getHistorialByUserID, createHistorial, getHistorialByID } = historialDao
const { getProductById, editProduct } = productDao

class HistorialService {
  async getHistorialByUserId(userId: string) {
    try {
      const getHistorialOrd = await getHistorialByUserID(userId)
      return getHistorialOrd
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

  async createHistorial(historial: IHistorial) {
    //const { products } = historial;
    try {
      const newHistorial = await createHistorial(historial);
      
      // products.forEach(async (product: IHistorialProduct) => {
      //   const productData = await getProductById(product.product_id);
      //   if (!productData) {
      //     throw new Error('Product not found');
      //   }
      //   // @ts-ignore
      //   await editProduct(product.product_id._id!,
      //   {
      //     ...productData,
      //     stock: productData.stock! - product.quantity!,
      //   });
      // });
      // ORRRR
      // await editProduct(product.product_id!, {
      //   stock: productData.stock! - product.quantity!,
      // });
      return newHistorial;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async getHistorialById(HistorialId: string) {
    try {
      const getHistorial = await getHistorialByID(HistorialId)
      return getHistorial
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

}

export const historialService = new HistorialService()