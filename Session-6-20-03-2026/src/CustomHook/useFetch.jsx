import { useEffect, useState } from "react"

export function useFetch(URL) {
    const [URLData, setURLData] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setURLData(data))
            .catch(err => err);
    }, [URL]);

    return URLData;
}