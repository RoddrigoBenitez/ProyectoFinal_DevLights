'use client'
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/types/types";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CategoryProductsPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const { data, loading, error } = useFetch<Product[]>(
    `${process.env.NEXT_PUBLIC_API_BACKEND}/products/category/${category}`
  );
  const router = useRouter();

  if (loading) return <p>Cargando productos de {category}...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center m-4 text-4xl">{category}</h1>
      {data && data.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-3">
          {data.map((product) => (
            <div
              onClick={() => router.push(`/products/${product.id}`)}
              className="flex flex-col items-center border w-[400px] p-4 shadow-lg"
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="rounded-lg"
              />
              <p><strong>Title:</strong> {product.title}</p>
              <p><strong>Price:</strong> ${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos en esta categoría</p>
      )}
    </div>
  );
}