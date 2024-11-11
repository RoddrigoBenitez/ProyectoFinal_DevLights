// 'use client'
// import { useFetch } from "@/hooks/useFetch"
// import { useRouter } from "next/navigation"
// import { useState } from "react"
// import { Product } from "@/types/types"
// import Image from "next/image"

// export interface ProductCartProps {
//     products: Product[]
// }

// export default function ProductCart({products}: ProductCartProps){
//     //esta linea maneja el state del carrusel
//     const [index, setIndex] = useState(0)
    
//     const { data, loading, error } = useFetch<ProductCartProps>(`${process.env.NEXT_PUBLIC_API_HOST}/products/`);

//     if (loading) return <p>Cargando...</p>;
//     if (error) return <p>Error: {error.message}</p>;


//     const totalItems = products.length
//     const totalView = 5


//     function handleNext(){
//         setIndex((prev)=> (prev + 1) % totalItems)
//     }

//     function handlePrev(){
//         setIndex((prev)=> (prev - 1 + totalItems) % totalItems)
//     }

//     const visibleProducts = [
//         ...products.slice(index, Math.min(index + totalView, totalItems)),
//         ...products.slice(0, Math.max(0, index + totalView - totalItems))
//     ];

//     const router = useRouter()
//     return(
//        <div className="relative my-7">
//             <div className="flex flex-wrap gap-4 mt-20 justify-center ">
//             {visibleProducts.map((product) => (
//                     <div
//                         key={product.id}
//                         className="w-[200px] h-[200px] bg-white flex flex-col justify-center items-center p-4 rounded-xl"
//                         onClick={() => router.push(`/products/${product.id}`)}
//                     >
//                         <div>
//                             <Image 
//                             src={product.image}
//                             alt={product.title}
//                             width={80}
//                             height={80}
//                             objectFit='container'
//                             />
//                         </div>
//                         <h2 className="text-gray-600 text-xs p-2">{product.title}</h2>
//                         <p className="text-red-500 text-x">${product.price}</p>
//                     </div>
//                 ))}
//             </div>

//             <button className="text4-1 font-semibold border border-spacing-1 absolute top-[55%]" onClick={handlePrev}>
//                 {"<"}
//             </button>
//             <button className="text4-1 font-semibold absolute top-[56%] -right-1" onClick={handleNext}>
//                 {">"}
//             </button>
//        </div>
        
//     )
// }