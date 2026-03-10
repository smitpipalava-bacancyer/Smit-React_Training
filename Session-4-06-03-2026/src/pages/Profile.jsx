import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function Profile(){
    const {user} = useContext(AuthContext);
    return(
        <>
            <h1>Profile Page</h1>
            <h1>{user?.name}</h1>
            <h1>{user?.role}</h1>
        </>
    )
}
