import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    const navLink = 
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/add-product'}>Add Product</NavLink></li>
        <li><NavLink to={'/cart'}>Cart</NavLink></li>
    </>
    return (
        <nav className="navbar bg-base-100 border-b-2 px-[5%]">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLink}
                </ul>
                </div>
                <Link to={'/'}><Logo/></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'} className="btn">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;