'use client'
import { useEffect, useState } from "react"

export function useFetch<T>(urlAPI: string | null){

        const [data, setData] = useState<T | null>(null)
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState<Error | null>(null)
    
   
        useEffect(() => {
            if (!urlAPI) return; // No hacer nada si el URL es null
    
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await fetch(urlAPI);
                    if (!response.ok) {
                        throw new Error("Error al obtener los datos");
                    }
                    const result = await response.json();
                    setData(result);
                } catch (error) {
                    setError(error as Error);
                } finally {
                    setLoading(false);
                }
            };
    
            fetchData();
        }, [urlAPI]);
    
        return { data, loading, error };
    }
