import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url){
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                console.error('Erro ao carregar dados')
            }
        }

        fetchData()
    }, [url])

    return {data}

}