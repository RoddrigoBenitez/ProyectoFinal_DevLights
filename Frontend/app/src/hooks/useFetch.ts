'use client'
import { useEffect, useState } from "react"

export function useFetch<T>(urlAPI: string){

        const [data, setData] = useState<T | null>(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState<Error | null>(null)
    
   
            const fetchData = async () =>{
                try {
                    const response = await fetch(urlAPI)
                    if(!response.ok){
                    throw new Error('sin obtencion de datos')
                    }
                    const result = await response.json()
                    setData(result)
                    
                } catch (error) {
                    setError(error as Error)
                } finally{
                    setLoading(false)
                }
            }
    
        useEffect(() =>{
            fetchData()
        },[urlAPI])
        
        return{data, loading, error}
    }
