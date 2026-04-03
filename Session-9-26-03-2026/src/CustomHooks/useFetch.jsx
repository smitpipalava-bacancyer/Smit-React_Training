import { useEffect, useState } from "react";

export function useFetch(URL){
    const [data , setData] = useState([]);
    const [error, setError] = useState();

    useEffect(()=>{
        fetch(URL)
        .then((response)=>{
            return response.json();
        })
        .then((responseData)=>{
            const originalData = responseData;
            setData(originalData);
        })
        .catch((responseError)=>{
            console.log(responseError);
            setError(responseError);
        })
    },[URL]);

    return [data , error ];
}