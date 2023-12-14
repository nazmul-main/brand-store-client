import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
import { useEffect, useState } from "react";


const navLink = <>


    <li><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#e54040] font-semibold underline" : "hover:text-[#e54040] font-semibold text-[#2C3659]"}> Home</NavLink>
    </li>
    <li><NavLink to="/addprocudct" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#e54040] font-semibold underline" : "hover:text-[#e54040] font-semibold text-[#2C3659]"}> Add Procuct</NavLink>
    </li>
    <li><NavLink to="/mycart" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#e54040] font-semibold underline" : "hover:text-[#e54040] font-semibold text-[#2C3659]"}> My Cart</NavLink>
    </li>
    <li><NavLink to="/allphones" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#e54040] font-semibold underline" : "hover:text-[#e54040] font-semibold text-[#2C3659]"}> All Phones </NavLink>
    </li>
    <li><NavLink to="/about" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#e54040] font-semibold underline" : "hover:text-[#e54040] font-semibold text-[#2C3659]"}> About </NavLink>
    </li>


</>
const Navbar = () => {
    const { user, logout } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }








    return (
        <div className=" navbar max-w-screen-xl mx-auto my-4 felx items-center justify-between {backgroundColor === 'light' ? 'bg-primary-color' : 'bg-secondary-color'}">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#858b9f] w-32 rounded-md">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="normal-case text-xl flex items-center md:2]">
                    <img className="w-5 md:w-9" src="https://i.ibb.co/nzzvDKv/download-removebg-preview-2.png" alt="" />
                    <h2 className="text-[10px] md:text-[18px]  font-bold">
                        <span>PHONE </span>
                        <span className="text-red-500">STORE</span>
                    </h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex items-start">
                <ul className=" gap-10 menu-horizontal px-1">
                    {navLink}

                </ul>
            </div>
            <div className='navbar-end flex justify-center items-center'>

                {
                    user?.email ?
                        <div className="navbar-end w-full flex  items-center">
                            <label className="swap swap-rotate md:mr-4">

                                {/* this hidden checkbox controls the state */}
                                <input onChange={handleToggle} type="checkbox" />

                                {/* sun icon */}
                                <svg className="swap-on fill-current w-5 md:w-9 h-5 md:h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current w-5 md:w-9 h-5 md:h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>
                            <div className="dropdown dropdown-end ">

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                                    <div className="w-7 md:w-10 rounded-full md:mr-4">

                                        <img src={user.photoURL ? user.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyhj1gUUYu1c8817GfPwApJbYzW9lJdjSXQ&usqp=CAU"} alt={user.displayName} />
                                    </div>

                                </label>
                                <ul tabIndex={0} className=":  dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-b-full rounded-l-full py-2 px-4">
                                    <li>
                                        <h3 className=" font-semibold "> {user.displayName
                                        }</h3>

                                    </li>
                                    <li>
                                        <h3 className="font-semibold  ">{user.email
                                        }</h3>

                                    </li>
                                </ul>

                            </div>


                            <div className="navbar-end">


                                <Link onClick={logout} className=" text-[10px] md:text-[18px] md:px-4 px-1 py-1 rounded-md bg-[#e54040] text-[#000000] font-bold ">Sign Out</Link>
                            </div>
                        </div>
                        :
                        <div className="navbar-end  flex items-center ">
                            <label className="swap swap-rotate md:mr-4">

                                {/* this hidden checkbox controls the state */}
                                <input onChange={handleToggle} type="checkbox" />

                                {/* sun icon */}
                                <svg className="swap-on fill-current w-5 md:w-9 h-5 md:h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                {/* moon icon */}
                                <svg className="swap-off fill-current w-5 md:w-9 h-5 md:h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                            </label>


                            <Link to='/signin' className="text-[12px] md:text-[18px] px-1 md:px-4 py-1 rounded-md bg-[#e54040] text-[#000000] font-bold ">Sign In</Link>
                        </div>
                }
            </div>


        </div>
    );
};

export default Navbar;
