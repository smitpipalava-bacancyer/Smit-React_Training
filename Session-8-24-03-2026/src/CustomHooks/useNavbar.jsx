import { useContext } from "react";
import { NavbarContext } from "../GlobalContext/navbarContext";

export function useNavbar(){
    const context = useContext(NavbarContext);
    if(!context){
        throw new Error("NOT ADDED INSIDE THE CONTEXT PROVIDER!!");
    }

    return context;
}