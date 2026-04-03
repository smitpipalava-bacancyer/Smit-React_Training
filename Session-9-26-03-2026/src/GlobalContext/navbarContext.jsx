import {createContext, useState } from "react"

export const NavbarContext = createContext();

export function NavbarProvider({ children }) {
    const [data, setData] = useState({
        searchInput: "",
        sortBy: null,
        order: null,
        category : null
    })

    return (
        <>
            <NavbarContext.Provider value={{ data, setData }}>
                {children}
            </NavbarContext.Provider>
        </>
    )
} 