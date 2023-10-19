import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import useAuth from "../../../Hock/useAuth";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { BsSun } from 'react-icons/bs';
import { CiDark } from 'react-icons/ci';

const Navbar = ({darkMode, setDarkMode}) => {
    const {user, logout} = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        .then(()=>{
            navigate('/')
            Swal.fire(
                'Logout successful!',
                'Successfully logout',
                'success'
            )
        })
    }
    const navLink = 
    <>
        <li><NavLink  className={darkMode ? "hover:bg-white": ""} to={'/'}>Home</NavLink></li>
        <li><NavLink  className={darkMode ? "hover:bg-white": ""} to={'/add-product'}>Add Product</NavLink></li>
        <li><NavLink  className={darkMode ? "hover:bg-white": ""} to={'/cart'}>Cart</NavLink></li>
    </>
    return (
        <nav className={`navbar border-b-2 px-[5%] sm:px-[10%] sticky top-0 z-50 ${darkMode ? "bg-black": "bg-white"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${darkMode ? "bg-black": "bg-white"} rounded-box w-52`}>
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
                {
                    !user
                    ?
                    <Link to={'/login'} className="btn">Login</Link>
                    :
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2">
                            <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60  ${darkMode ? "bg-black": "bg-white"} `}>
                            <li ><a className={darkMode ? "hover:bg-white": ""}>{user?.displayName?.slice(0,35)}</a></li>
                            <li onClick={handleLogout}><a className={darkMode ? "hover:bg-white": ""}>Logout</a></li>
                        </ul>
                    </div>
                }
                <button onClick={()=>setDarkMode(!darkMode)} className="text-4xl ml-2">{darkMode ? <BsSun/> : <CiDark/>}</button>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    darkMode: PropTypes.bool,
    setDarkMode: PropTypes.func,
};

export default Navbar;