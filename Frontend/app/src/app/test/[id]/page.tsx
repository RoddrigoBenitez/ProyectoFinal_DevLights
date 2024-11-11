// "use client";
// import { useFetch } from "@/hooks/useFetch";
// import Image from "next/image";
// import { Product } from "@/types/types";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";

// export default function ProductDetails({ params }: { params: { id: string } }) {
//   const { addToCart } = useCart();
//   const id = parseInt(params.id, 10);
//   const { data: product, loading, error } = useFetch<Product>(`${process.env.NEXT_PUBLIC_API_BACKEND}/products/${id}`);
//   const [quantity, setQuantity] = useState(1);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   if (!product) return <p>Producto no encontrado</p>;

//   const productForCart = {
//     id: product.id,
//     title: product.title,
//     image: product.image,
//     price: product.price,
//     quantity,
//   };

//   const handleAddToCart = () => {
//     addToCart(productForCart);
//   };

//   const incrementQuantity = () => {
//     setQuantity((prev) => prev + 1);
//   };

//   const decrementQuantity = () => {
//     setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
//   };

//   return (
//     <div className="flex justify-center items-center gap-4">
//       <div className="flex gap-10 justify-center border  p-4 shadow-lg">
//         <div className="flex justify-center items-center ">
//         <Image 
//           src={product.image}
//           alt={product.title}
//           width={400}
//           height={400}
//           className="rounded-lg" 
//         />
//         </div>
        
//         <div className="block w-[400px] gap-4">
//         <h1 className="text-2xl font-bold py-4">{product.title}</h1>
//         <p><strong>Precio:</strong> ${product.price}</p>
//         <p><strong>Descripción:</strong> {product.description}</p>
//         <p><strong>Categoría:</strong> {product.category}</p>

//         <div className="flex items-center mt-2">
//           <button
//             className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
//             onClick={decrementQuantity}
//           >
//             -
//           </button>
//           <span className="px-4">{quantity}</span>
//           <button
//             className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
//             onClick={incrementQuantity}
//           >
//             +
//           </button>
//         </div>

//         <button onClick={handleAddToCart} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
//           Agregar al carrito
//         </button>
//         </div>
      
//       </div>
//     </div>
//   );
// }
