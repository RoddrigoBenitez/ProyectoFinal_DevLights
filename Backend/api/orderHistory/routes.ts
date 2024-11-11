import express from "express";
import { historialController } from "./controller";
import isRole from "../../middle/isRole"
import { authRoutes } from "../../middle/authentic";


const historialOrdRoutes = express.Router()

const { getHistorialByUserId, createHistorial, getHistorialById } = historialController

//historialOrdRoutes.use(authRoutes)

historialOrdRoutes.get("/ordersHistory/:id", getHistorialByUserId)
historialOrdRoutes.get("/:id", getHistorialById)
historialOrdRoutes.post("/createHistorial", createHistorial)

export default historialOrdRoutes;