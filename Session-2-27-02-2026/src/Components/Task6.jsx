import { useState , useRef} from "react";

export default function Task6() {
    const Inputref = useRef(null);
    const [name , setName] = useState("");

    // function handleInputTrigger(){
    //     Inputref.current.focus();
    // }
    
    function printData(){
        setName(Inputref.current.value);
        console.log(Inputref.current.value);
    }
    return (
        <>
            <h1>Task - 6 </h1>

            <br />
            <br />
            
            <label htmlFor="nameInput" style={{fontSize : "20px"}}>Enter Your Name :  </label>
            <input type="text" ref={Inputref} id="nameInput" style={{height : "20px" , fontSize : "15px"}}/>
            <br />
            <br />
            <button onClick={()=> printData()}>Click to Print Name!!</button>
            <h3>{name}</h3>
        </>
    )
}