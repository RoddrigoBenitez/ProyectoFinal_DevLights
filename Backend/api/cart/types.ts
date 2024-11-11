import { IUser } from "../user/types"

export interface ICart{
 user_id: IUser;
 products: {product_id: string; quantity: number}[];
 total_price: number;
}