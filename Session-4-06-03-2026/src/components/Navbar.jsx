import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function Navbar() {
  const { user, isAuthenticated,logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <nav>
      <NavLink to= "/">Home </NavLink>
      <NavLink to= "/about">About </NavLink>
      {isAuthenticated && (
        <>
          <NavLink to= "/dashboard">Dashboard </NavLink>
          <NavLink to= "/profile">Profile </NavLink>
        </>
      )}

      <NavLink to= "/admin">Admin </NavLink>
      
      {/* {isAuthenticated && user.role === "admin" && (
        <>
          <NavLink to= "/admin">Admin </NavLink>
        </>
      )} */}

      {!isAuthenticated ? (
        <NavLink to= "/login">Login </NavLink>
      ): (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
}
