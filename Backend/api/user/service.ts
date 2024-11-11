import { IUser } from "../../types";
import { UserRole } from "./types";
import { userDao } from "./dao";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";



const {
  getAllUsers,
  getUserById,
  getUserByMail,
  createUser,
  editUser,
  deleteUser,
  changeRole
} = userDao;

class UserService {
  async getUser(id: string) {
    try {
      const user = await getUserById(id);
      return user;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getUsers() {
    try {
      const users = await getAllUsers();
      return users;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createUser(user: IUser) {
    try {
      const newUser = await createUser(user);
      return newUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async loginUser(user: { email: string; password: string }) {
    try {
      const { email, password } = user;
      const existingUser = await getUserByMail(email);
      if (!existingUser) {
        throw new Error("Invalid email");
      }
      const isPasswordValid = await compare(password, existingUser.password!);
      if (!isPasswordValid) {
        throw new Error("Invalid password");
      }
      const userPayload = {
        id: existingUser._id,
        name: existingUser.username,
        email: existingUser.email,
      };
      const token = sign(userPayload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      return { userPayload, token };
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async editUser(userID: string, user: IUser) {
    try{
      const updateUser = await editUser(userID, user)
      return updateUser
    }catch (error) {
      throw Error((error as Error).message);
    }
  }

  async deleteUser(userID: string){
    try{
      const deletedUser = await deleteUser(userID)
      return deletedUser
    }catch(error){
      throw Error((error as Error).message);
    }
  }
  async changeRole(id: string, role: UserRole) {
    try {
      const updatedUser = await changeRole(id, role);
      return updatedUser;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

}


export const userService = new UserService();
