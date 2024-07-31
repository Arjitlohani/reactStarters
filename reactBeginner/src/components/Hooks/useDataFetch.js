import { useState,useEffect } from "react"

export const useDataFetch = (url) => {
    const [data,setData]= useState(undefined);

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
       
        setData(data);
    }
    useEffect(()=>{
        fetchData();
    },[])

    return [data];

}

