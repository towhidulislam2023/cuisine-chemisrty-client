/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layouts/PrimaryLayout/PrimaryLayout";
import SecondaryLayout from "../Layouts/SecondaryLayout/SecondaryLayout";
import Home from "../components/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element:<PrimaryLayout></PrimaryLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch("https://cuisine-chemistry-server-towhidulislam2023.vercel.app/chefs")
            }
        ]
    },
    {
        path:'/recipe/:id',
        element:<SecondaryLayout></SecondaryLayout>,
    }
]);
export default router