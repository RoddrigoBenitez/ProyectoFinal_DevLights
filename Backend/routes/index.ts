import express from "express";

import userRouter from "../api/user/routes";
import productRouter from "../api/product/routes";
import categoriesRouter from "../api/category/routes";
import cartRouter from "../api/cart/routes";
import historialOrdRoutes from "../api/orderHistory/routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/categories", categoriesRouter)
router.use("/cart", cartRouter)
router.use("/historialOrd", historialOrdRoutes)

export default router;
