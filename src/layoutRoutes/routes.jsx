import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import NotFound from "./notFound";
import Aboute_me from "../pages/aboute_me";
const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/home",
                element: <Home />

            },
            {
                path: "/me",
                element: <Aboute_me />

            },
            {
                path: "*",
                element: <NotFound />

            },
        ]
    }
])

export default routes;
