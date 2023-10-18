import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addprocudct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/mycart",
                element: <MyCart></MyCart>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
        ]
    }
])

export default myCreateRoute;