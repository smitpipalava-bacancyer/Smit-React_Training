import { useContext } from "react";
import { Link , useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export function Unauthorized() {
  const {logout} = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <>
      <h1>Unauthorized Page</h1>
      <Link to="/home" replace>Home</Link>
      <br />
      <br />
      <button onClick={()=> {logout() , setTimeout(()=>{navigate("/login")},1000)}}>Log In with Another Account</button>
    </>
  );
}
