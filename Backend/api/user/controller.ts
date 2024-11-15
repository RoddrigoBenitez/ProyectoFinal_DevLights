import { Request, Response } from "express";
import { userService } from "./service";


const { getUser, getUsers, createUser, loginUser, deleteUser, editUser, changeRole } = userService;

class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await getUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: "Users not found" });
    }
  }
  async getUser(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const user = await getUser(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  async createUser(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async loginUser(req: Request, res: Response) {
    try {
      const { token, userPayload } = await loginUser(req.body);

      return res.status(200).json(userPayload);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
  async editUser(req: Request, res: Response) {
    try {
      const user = await editUser(req.params.id, req.body)
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  async deleteUser(req: Request, res: Response) {
    try {
      const user = await deleteUser(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: "User not found" });
    }
  }
  async changeRole(req: Request, res: Response) {
    const userId = req.params.id;
    const { role } = req.body;
    try {
      const user = await changeRole(userId, role);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export const userController = new UserController();
