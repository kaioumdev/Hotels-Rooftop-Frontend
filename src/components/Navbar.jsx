import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import avatorImg from "../assets/commentor.png";
import { useLogOutMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';

const navLists = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [logOut] = useLogOutMutation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogOut = async () => {
        try {
            await logOut().unwrap();
            dispatch(logout());
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <header className='bg-white py-6 border'>
            <nav className='container mx-auto flex justify-between px-5 items-center'>
                <Link to="/">
                    <img src="/logo.png" alt="Logo" className='h-12' />
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden sm:flex items-center gap-8'>
                    {navLists.map((item, index) => (
                        <li key={index}>
                            <NavLink to={item.path} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}

                    {/* Conditional User/Admin Buttons */}
                    {user ? (
                        <li className='flex items-center gap-3'>
                            <img src={avatorImg} alt="User Avatar" className='size-8 cursor-pointer' />
                            {user.role === 'admin' && (
                                <Link to="/dashboard">
                                    <button className='bg-blue-600 px-4 py-1.5 text-white rounded-sm'>Dashboard</button>
                                </Link>
                            )}
                            <button onClick={handleLogOut} className='bg-[#1E73BE] px-4 py-1.5 text-white rounded-sm'>LogOut</button>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/login" className="text-gray-700 hover:text-blue-500">Login</NavLink>
                        </li>
                    )}
                </ul>

                {/* Mobile Menu Toggle Button */}
                <div className='flex items-center sm:hidden'>
                    <button onClick={toggleMenu} className='px-3 py-2 bg-gray-200 rounded text-gray-700 hover:text-gray-900'>
                        {isMenuOpen ? <IoClose className='size-6' /> : <IoMenuSharp className='size-6' />}
                    </button>
                </div>
            </nav>

            {/* mobile menu items */}
            {
                isMenuOpen && (
                    <ul className='fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50'>
                        {
                            navLists.map((item, index) => (
                                <li key={index} className='mt-5 px-4'>
                                    <NavLink onClick={() => setIsMenuOpen(false)} to={`${item.path}`} className={({ isActive }) =>
                                        isActive
                                            ? "active"
                                            : ""
                                    }>{item.name}</NavLink>
                                </li>
                            ))
                        }
                        <li className='px-4 mt-5'>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                )
            }


        </header>
    );
};

export default Navbar;
