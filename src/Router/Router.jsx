import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import SignIn from "../pages/Signin/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import OurProduct from "../Components/ourProduct/ourProduct";
import AllBrands from "../AllBrands/AllBrands";
import Phone from "../Phone/Phone";
import Update from "../Components/Update/Update";
import Error from "../pages/Error/Error";
import Details from "../Components/Details/Details";
import AllPhones from "../Components/All Phones/AllPhones";

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:() => fetch('https://phone-store-eight.vercel.app/brand')
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
                </PrivateRoute>,
                loader:() => fetch('https://phone-store-eight.vercel.app/mycart')
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/update/:_id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://phone-store-eight.vercel.app/phones/${params._id}`)
                
            },
            {
                path: "/details/:_id",
                element: <Details></Details>,
                loader:() => fetch('https://phone-store-eight.vercel.app/phones')
                
            },
            {
                path: "/newproduct",
                element: <OurProduct></OurProduct>,
            },
            {
                path: "/phonedetails",
                element: <OurProduct></OurProduct>,
            },
            {
                path: "/allbrand/brand",
                element: <PrivateRoute>
                    <AllBrands/>
                </PrivateRoute>
                
               
            },
            {
                path: "/allphones",
                element: <PrivateRoute>
                    <AllPhones/>
                </PrivateRoute>
                
               
            },
            {
                path: "/phone/:brand",
                element: <PrivateRoute>
                    <Phone/>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://phone-store-eight.vercel.app/phon/${params.brand}`)

               
            },
        ]
    }
])

export default myCreateRoute;