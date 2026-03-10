import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    
    function login(role, userName) {
        setIsLoading(true);
        setTimeout(() => {
            if (role === "admin") {
                setUser({ role: "admin", name: userName });
            } else {
                setUser({ role: "user", name: userName });
            }

            setIsAuthenticated(true);
            setIsLoading(false);
            
        }, 1000);

    }

    function logout() {
        setUser(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}