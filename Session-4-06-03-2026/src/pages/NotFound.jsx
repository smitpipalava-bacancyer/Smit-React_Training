import {Link} from "react-router-dom";


export function NotFound() {
  return (
    <>
      <h1>404 - Page</h1>
      <h2>Page not Found!!</h2>

      <Link to="/"  replace>Home</Link>      
    </>
  );
}
