import { useEffect, useState } from "react"

export default function WindowWidth (){
    const [width , setWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    useEffect(()=>{
        function handleResize(){
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize" , handleResize);
    
        return ()=>{
            window.removeEventListener("resize" , handleResize);
        }
    },[]);


    return(
        <>
            <p>Window width: <strong>{width}px</strong></p>
            <small>Resize the window to see it update. Unmount to remove the listener.</small>
        </>
    )
}