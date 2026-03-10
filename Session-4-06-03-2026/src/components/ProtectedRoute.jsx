import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, Outlet, useLocation } from "react-router-dom";

export function ProtectedRoute(){
    const { isLoading ,isAuthenticated } = useContext(AuthContext);
    const location = useLocation();
    
    if(isLoading){
        return <h2>Loading ...</h2>
    }

    if(!isAuthenticated){
        return <Navigate to="/login" state={{from : location}} replace/>
    }
    
    return <Outlet />
}