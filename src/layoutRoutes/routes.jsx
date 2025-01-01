import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import NotFound from "./notFound";
import Skills from '../pages/Skills'
const routes = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home page_open={0} />

            },
            {
                path: "/home",
                element: <Home page_open={0} />

            },
            {
                path: "/projects",
                element: <Home page_open={2}  />

            },
            {
                path: "/me",
                element: <Home page_open={3} />

            },
            {
                path: "/skills",
                element: <Home page_open={1}  />

            },
            {
                path: "/skills2",
                element: <Skills  />

            },
            {
                path: "/contact",
                element: <Home page_open={4}  />

            },
            {
                path: "*",
                element: <NotFound />

            },
        ]
    }
])

export default routes;
