import { ICategory } from "../category/types";

export interface IProduct {
  _id: string | undefined;
  name: string;
  description: string;
  stock: Number;
  price: Number;
  category: ICategory;
  image: string | undefined;
}

type filterByPrice = "lower" | "higher";

export interface ISearchParams {
  category?: string;
  salersId?: string;
  filterByPrice?: filterByPrice;
  priceRange?: string;
  page?: string;
  limit?: string;
}