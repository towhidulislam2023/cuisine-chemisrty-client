/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layouts/PrimaryLayout/PrimaryLayout";
import SecondaryLayout from "../Layouts/SecondaryLayout/SecondaryLayout";
import Home from "../components/Home/Home";
import ChefDetails from "../Components/ChefDetails/ChefDetails";


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
        path:'/recipe',
        element:<SecondaryLayout></SecondaryLayout>,
        children:[
            {
                path: '/recipe/:id',
                element:<ChefDetails></ChefDetails>
            }
        ]
    }
]);
export default router