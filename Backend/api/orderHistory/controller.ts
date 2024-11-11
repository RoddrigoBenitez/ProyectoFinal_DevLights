import { Request, Response } from "express";
import { historialService } from "./service";

const { getHistorialByUserId ,createHistorial, getHistorialById } = historialService

class HistorialController{
  async getHistorialByUserId(req: Request, res:Response){
    try{
      const getHistorial = await getHistorialByUserId(req.params.id)
      return getHistorial
    } catch (error) {
      return res.status(400).json({ error: "Historial not found" });
    }
  }
  
    async createHistorial(req: Request, res: Response) {
        try {
          const historial = await createHistorial(req.body);
          return res.status(201).json(historial);
        } catch (error) {
          return res.status(400).json({ error: "Historial not found" });
        }
    }
    async getHistorialById(req: Request, res:Response){
        try{
          const getHistorial = await getHistorialById(req.params.id)
          return getHistorial
        } catch (error) {
          return res.status(400).json({ error: "Historial not found" });
        }
      }
    
}
export const historialController = new HistorialController()