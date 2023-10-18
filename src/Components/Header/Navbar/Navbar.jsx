import { Link, NavLink } from "react-router-dom";


const navLink = <>


    <li><NavLink to="/" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#03d5b4] font-semibold underline" : "hover:text-[#03d5b4] font-semibold text-[#2C3659]"}> Home</NavLink>
    </li>
    <li><NavLink to="/addprocudct" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#03d5b4] font-semibold underline" : "hover:text-[#03d5b4] font-semibold text-[#2C3659]"}> Add Procuct</NavLink>
    </li>
    <li><NavLink to="/mycart" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#03d5b4] font-semibold underline" : "hover:text-[#03d5b4] font-semibold text-[#2C3659]"}> My Cart</NavLink>
    </li>
    {/* <li><NavLink to="/contact" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#03d5b4] font-semibold underline" : "hover:text-[#03d5b4] font-semibold text-[#2C3659]"}> Concant</NavLink>
    </li>
    <li><NavLink to="/about" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#03d5b4] font-semibold underline" : "hover:text-[#03d5b4] font-semibold text-[#2C3659]"}> About us</NavLink>
    </li> */}


</>
const Navbar = () => {
    // const { user, logout } = UseAuth()

    return (
        <div className=" navbar max-w-screen-xl mx-auto my-4 felx ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-sm lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul className="  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#858b9f] w-32 rounded-md">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="normal-case text-xl">
                    <img className=" w-32 md:w-40" src="https://colmooc.eu/wp-content/uploads/2019/12/Letstudy_Logo_Light_Horizontal@2x.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex items-start">
                <ul className=" gap-10 menu-horizontal px-1">
                    {navLink}

                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/signin'}>
                    <button className="btn">Login</button>
                </Link>
            </div>


        </div>
    );
};

export default Navbar;
