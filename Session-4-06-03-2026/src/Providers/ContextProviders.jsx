import { AuthProvider } from "../contexts/AuthContext";

export function ContextProviders({children}){
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}