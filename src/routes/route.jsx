/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layouts/PrimaryLayout/PrimaryLayout";
import SecondaryLayout from "../Layouts/SecondaryLayout/SecondaryLayout";
import Home from "../components/Home/Home";
import ChefDetails from "../Components/ChefDetails/ChefDetails";
import Errorpage from "../Components/ErrorPage/Errorpage";
import Login from "../Layouts/LoginLayout/Login";
import Registar from "../Layouts/RegistarLayout/Registar";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element:<PrimaryLayout></PrimaryLayout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch("https://cuisine-chemistry-server-towhidulislam2023.vercel.app/chefs")
            }
        ]
    },
    {
        path:'/recipe',
        element: <PrivateRoute><SecondaryLayout></SecondaryLayout></PrivateRoute>,
        errorElement: <Errorpage></Errorpage>,
        children:[
            {
                path: '/recipe/:id',
                element:<ChefDetails></ChefDetails> ,
                loader: ({params}) => fetch(`https://cuisine-chemistry-server-towhidulislam2023.vercel.app/recipe/${params.id}`)
            }
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/registar",
        element:<Registar></Registar>
    }
]);
export default router