'use client'

import HomeCarrousel from "@/components/carrusel";
//import GetProductByApi from "../test/prueba";
//import ProductCart from "@/components/product-cart";
import React from "react"
import Categories from "../(store)/categories/Categories";
import GetProducts from "../(store)/products";
import { auth } from "@/auth";


export default async function Home() {
  
  

  
  return (
    <main className="flex flex-col w-full items-center justify-center">

        <HomeCarrousel />
    
        <Categories />
      
        <GetProducts />


    </main>
  );
}
