import { IHistorial } from "./types";
import OrderHistory from "./model"

class HistorialDao {
  async getHistorialByUserID(userId: string){
    try{
      const getHistorialOrd = await OrderHistory.find({ userId })
      return getHistorialOrd
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

    async createHistorial(historial: IHistorial) {
        try {
          const newHistorial = await OrderHistory.create(historial);
          return newHistorial;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

      async getHistorialByID(id: string){
        try{
          const getHistorial = await OrderHistory.findById(id)
          return getHistorial
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
}

export const historialDao = new HistorialDao();