/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../Layouts/PrimaryLayout/PrimaryLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element:<PrimaryLayout></PrimaryLayout>,
        children:[
            {
                
            }
        ]
    },
]);
export default router