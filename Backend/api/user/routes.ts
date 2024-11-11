import express from "express";
import { userController } from "./controller";
import  isRole  from "../../middle/isRole";
import { authRoutes } from "../../middle/authentic";

const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser, changeRole } = userController;

userRouter.get("/", authRoutes, getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", isRole('admin'), deleteUser);
userRouter.put("/editUser/:id", editUser);
userRouter.put("/changeRole/:id", isRole('admin'), changeRole)

export default userRouter;
