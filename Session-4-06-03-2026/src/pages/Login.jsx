import { useContext, useState } from "react"

import { AuthContext } from "../contexts/AuthContext";
import { Navigate, replace, useNavigate , useLocation } from "react-router-dom";

export  function Login() {
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [userRole , setUserRole] = useState(null);
  
  const { isAuthenticated , login } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/dashboard";

  if(isAuthenticated){
    return <Navigate to="/dashboard" replace />
  }

  return (
    <>
        <h1>Login Page</h1>
        
        <input type="text" onChange={(e)=> setUserName(e.target.value)}/>
        
        <br />
        
        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
        
        <br />
        
        <input type="radio" id="admin" name="user_type" onClick={(e)=> setUserRole(e.target.id)}/>
        <label htmlFor="admin">Admin</label>
        
        <input type="radio" id="user" name="user_type" onClick={(e)=> setUserRole(e.target.id)}/>
        <label htmlFor="user">User</label>
        
        <h1>{userRole}</h1>
    
        <button onClick={()=>{login(userRole , userName),navigate(from , {replace : true})}}>Login </button>        
    </>
  );
}
