import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
        ]
    }
])

export default Route;