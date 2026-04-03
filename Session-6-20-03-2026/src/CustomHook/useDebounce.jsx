import { useEffect, useState } from "react"

export const useDebounce = (initialValue)=>{
    const [finalValue , setFinalValue] = useState(initialValue);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setFinalValue(initialValue);
        },2000);

        return ()=>{
            clearTimeout(timerId);
        }
    },[initialValue]);

    return finalValue;
}