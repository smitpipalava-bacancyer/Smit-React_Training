import { useContext } from "react";
import {firstContainer} from "./Task4"

export default function Profile(){
    const user = useContext(firstContainer);
    return(
        <>
            <h1>WELCOME {user.name} </h1>
        </>
    )
}