import Image from "next/image";
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/types/types";
import { useRouter } from "next/navigation";

export default function GetProductByApi() {
  const { data, loading, error } = useFetch<Product[]>(`${process.env.NEXT_PUBLIC_API_BACKEND}/products`);
 const router = useRouter();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

 
  return (
    <div className="flex flex-col gap-4">
      <h1>datos de la api</h1>
      {data && data.length > 0 ? (
        <div  className="flex flex-wrap justify-center gap-3">
          {data.map((product, index) => (
            <div
            onClick={() => router.push(`/products/${product.id}`)} 
            className="flex flex-col justify-between items-center border w-[400px] p-4 shadow-lg hover:bg-gray-200 " key={index}>
              <Image 
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="rounded-lg" 
              />
              <p><strong>Title:</strong> {product.title}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              {/* <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Category:</strong> {product.category}</p> */}
              
              <div className="flex justify-between gap-4">
              
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos</p>
      )}
    </div>
  );
}