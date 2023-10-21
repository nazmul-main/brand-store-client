import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";


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
    {/* <li><NavLink to="/update" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#e54040] font-semibold underline" : "hover:text-[#e54040] font-semibold text-[#2C3659]"}> Updated</NavLink>
    </li> */}


</>
const Navbar = () => {
    const { user, logout } = useAuth()

    return (
        <div className=" navbar max-w-screen-xl mx-auto my-4 felx items-center justify-between ">
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
                    <h2 className="text-[8px] md:text-[18px]  font-bold">
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
            <div className="navbar-end">
                {
                    user?.email ? <div className="navbar-end flex items-center">
                        <div className="dropdown dropdown-end mr-4">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-7 md:w-10 rounded-full">
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
                        
                        
                        <Link onClick={logout} className=" text-[10px] md:text-[18px] px-4 py-1 rounded-md bg-[#e54040] text-[#000000] font-bold ">Sign Out</Link>
                    </div> : <div className="navbar-end">
                        <Link to='/signin' className="text-[12px] md:text-[18px] px-4 py-1 rounded-md bg-[#e54040] text-[#000000] font-bold ">Sign In</Link>
                    </div>
                }
            </div>


        </div>
    );
};

export default Navbar;
