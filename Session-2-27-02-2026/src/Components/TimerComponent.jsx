import { useState , useEffect } from "react";


function TimerComponent(){
    const[timer , setTimer] = useState(0);
    
    useEffect(()=>{
        
        const timeInterval = setInterval(()=>{
          setTimer(timer => timer + 1);
        },1000);
    
        
        return ()=>{
          clearInterval(timeInterval);
        }
      },[]);
    return (
        <>
            <h2>Timer : {timer}</h2>
        </>
    )
}

export default TimerComponent;