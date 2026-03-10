import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate , Outlet , useLocation} from "react-router-dom";

export function RoleRoute({allowedRoles}){
    const {user, isAuthenticated, isLoading} = useContext(AuthContext);

    const location = useLocation();

    if(isLoading){
        return <h2>Loading...</h2>;
    }

    if(!isAuthenticated){
        return <Navigate to="/login" state={{ from : location}} replace/>
    }
    
    if(!allowedRoles.includes(user?.role)){
        return <Navigate to="/unauthorized" replace />;
    }
    return <Outlet />
}