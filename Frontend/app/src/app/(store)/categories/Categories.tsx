'use client'
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";

export default function Categories() {
  const { data, loading, error } = useFetch<string[]>(`${process.env.NEXT_PUBLIC_API_BACKEND}/products/categories`);

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 p-6">
      {data?.map((category) => (
        <Link href={`/categories/${category}`} key={category}>
          <div className="block w-[300px] h-[300px] p-4 shadow-lg bg-white hover:bg-gray-200 rounded-lg text-center cursor-pointer">
            <h2 className="text-lg text-black">{category}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}