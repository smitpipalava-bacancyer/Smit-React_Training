import { useState } from "react";

export default function Task1() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleName = (e) => {
        setName(e.target.value);
    }
    
    return (
        <>
            <h1>Task - 1 </h1>

            <input type="text" value={name} onChange={handleName} />
            <br />
            <br />

            <button onClick={() => setAge(age => age + 1)}>Increment age</button>
            <h2>{name ? `Hello ${name}, your age is ${age}` : "Please enter your name"}</h2>
        </>
    )
}