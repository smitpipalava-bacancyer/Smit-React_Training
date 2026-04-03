import { useContext } from "react";
import { CartListContext } from "../GlobalContext/CartListContext";

export function useCartList(){
    const context = useContext(CartListContext);
    if(!context){
        throw new Error("NOT ADDED INSIDE THE CONTEXT PROVIDER!!");
    }

    return context;
}