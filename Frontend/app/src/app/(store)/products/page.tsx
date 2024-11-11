'use client'
//import ProductCart from "@/components/product-cart"
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/types/types";
import GetProducts from ".";
import CategoryItems from "../categories";



export default function Page(){
    const { data: products, loading, error} = useFetch<Product[]>(`${process.env.NEXT_PUBLIC_API_BACKEND}/products`)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return(

            <div className="w-full flex border border-spacing-1 ">
                <div className="w-1/4">
                    <h2 className="text-center m-4 text-4xl">Categories</h2>
                    <CategoryItems />
                    <div>
                        <h4 className="text-center m-4 text-2xl">Sub-Categories</h4>
                    </div>
                </div>
                <div className="w-3/4">
                    <h1 className="text-center m-4 text-4xl">Products</h1>
                    <GetProducts />
                </div>
            {/* {products && <ProductCart products={products} />} */}
            </div>

    )
}