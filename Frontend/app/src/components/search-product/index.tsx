import { Search } from "lucide-react";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";

interface Product {
  id: number;
  name: string;
}

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useFetch<Product[]>(
    query.length >= 3 ? `${process.env.NEXT_PUBLIC_API_BACKEND}/products?search=${query}` : null
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="relative">
      <form className="flex items-center w-80 border border-gray-200 rounded-md p-2 gap-2">
        <Search className="w-6 h-6 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Buscar productos..."
          className="rounded-md w-full focus:outline-none"
        />
      </form>

      {query.length >= 3 && (
        <div className="absolute bg-white border rounded w-full mt-2">
          {loading && <p className="p-2 text-gray-500">Cargando...</p>}
          {error && <p className="p-2 text-red-500">Error al buscar productos</p>}
          {data && data.length > 0 ? (
            <ul>
              {data.map((product) => (
                <li key={product.id} className="p-2 hover:bg-gray-200">
                  {product.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 text-gray-500">No se encontraron productos</p>
          )}
        </div>
      )}
    </div>
  );
}
