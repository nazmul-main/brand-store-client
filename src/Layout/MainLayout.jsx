import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import {Toaster } from 'react-hot-toast'
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;