import express from "express";
import { cartController } from "./controller";
import  isRole  from "../../middle/isRole";
import { authRoutes } from "../../middle/authentic";

const { addCart, getCarts, getCartById, editCart, deleteCart } = cartController;
const cartRouter = express.Router();

//cartRouter.use(authRoutes)


cartRouter.get("/getCarts/", getCarts);
cartRouter.get("/getCart/:id", isRole('admin'), getCartById);
cartRouter.post("/addCart", addCart);
//cartRouter.post("/confirmCart", confirmCart);
cartRouter.put("/editCart/:id", editCart); // es x si no expiro poder seguir add product al cart
cartRouter.post("/addCart/:id",  deleteCart);

export default cartRouter;
