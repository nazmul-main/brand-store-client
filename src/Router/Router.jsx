import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import Update from "../Components/Update/Update";
import OurProduct from "../Components/ourProduct/ourProduct";

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch('http://localhost:5001/phones')
            },
            {
                path: "/addprocudct",
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: "/mycart",
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/update",
                element: <Update></Update>
            },
            {
                path: "/allphones",
                element: <OurProduct></OurProduct>,
                loader:() => fetch('http://localhost:5001/phones')
                
            },
        ]
    }
])

export default myCreateRoute;