import { createContext, useState } from "react";

export const CartListContext = createContext();

export function CartListContextProvider({children}){
    const [ cartListArray , setCartListArray] = useState({});
    return (
        <>
            <CartListContext.Provider value={{ cartListArray , setCartListArray }}>
                {children}
            </CartListContext.Provider>
        </>
    )
}
