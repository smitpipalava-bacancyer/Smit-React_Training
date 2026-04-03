import { useEffect,useState } from "react";

export function useDebounced(initialValue , delay) {
    const [finalValue, setFinalValue] = useState(initialValue);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setFinalValue(initialValue);
        }, delay);

        return () => {
            clearTimeout(timerId);
        }
    }, [initialValue , delay]);

    return finalValue;
}