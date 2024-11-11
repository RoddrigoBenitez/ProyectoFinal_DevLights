
import { IUser } from "../user/types";

export interface IHistorialProduct {
    product_id: string;
    quantity: Number;  
    sub_total: number;
  }

export interface IHistorial {
    user_id: IUser;
    products: IHistorialProduct[];
    total_price: Number;
    createdAt?: Date;
    updatedAt?: Date;
}