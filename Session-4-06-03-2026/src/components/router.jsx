import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../pages/Home"
import { Login } from "../pages/Login";
import { About } from "../pages/About";
import { Profile } from "../pages/Profile";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";
import { Unauthorized } from "../pages/Unauthorized"
import { RoleRoute } from "./RoleRoute";
import { Admin } from "../pages/Admin";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "login", element: <Login /> },
            {
                element: <ProtectedRoute />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "profile", element: <Profile /> },
                ]
            }, 
            {
                element: <RoleRoute allowedRoles={["admin"]} />,
                children: [
                    { path: "/admin", element: <Admin /> }
                ]
            },
        ]
    },
    {
        path: "/unauthorized",
        element: <Unauthorized />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/login",
        element: <Login />
    }, {
        path: "*",
        element: <NotFound />
    }
]);

