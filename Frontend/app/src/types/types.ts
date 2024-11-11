import type { DefaultSession } from "@auth/core/types";


export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string
}

export interface Category{
    id: number,
    name: string
}


type UserRole = "admin" | "comprador" | "vendedor" | undefined;
export interface User {
  _id: string | undefined;
  firts_name: string;
  last_name: string;
  user_name: string;
  email: string;
  password: string;
  role: UserRole;
  avatar: string | undefined;
}

declare module "next-auth" {
    interface Session {
      user: {
        userId: string;
        role: string;
        email: string;
        username: string;
      } & DefaultSession["user"];
    }
  
    interface User {
      role: string;
      username: string;
    }
  }
  
  declare module "next-auth" {
    interface JWT {
      id: string;
      role: string;
      username: string;
    }
  }