'use client'
import Link from "next/link";
import { useFetch } from "@/hooks/useFetch";

export default function CategoryItems() {
  const { data, loading, error } = useFetch<string[]>(`${process.env.NEXT_PUBLIC_API_BACKEND}/products/categories`);

  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">
      {data?.map((category) => (
        <Link href={`/categories/${category}`} key={category}>
          <div className="flex justify-center items-center w-[220px] h-[40px] m-2 p-4 shadow-lg bg-white hover:bg-gray-200 rounded-lg text-center cursor-pointer">
            <p className="text-lg text-black">{category}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}