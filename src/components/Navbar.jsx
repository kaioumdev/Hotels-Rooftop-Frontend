import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { IoClose, IoMenuSharp } from "react-icons/io5";

const navLists = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState();
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className='bg-white py-6 border'>
            <nav className='container mx-auto flex justify-between px-5'>
                <a href="">
                    <img src="/logo.png" alt="" className='h-12' />
                </a>
                <ul className='sm:flex hidden items-center gap-8'>
                    {
                        navLists.map((item, index) => (
                            <li>
                                <NavLink to={`${item.path}`} className={({ isActive }) =>
                                    isActive
                                        ? "active"
                                        : ""
                                }>{item.name}</NavLink>
                            </li>
                        ))
                    }
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
                <div className='flex items-center sm:hidden'>
                    <button onClick={toggleMenu} className='flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900'>
                        {
                            isMenuOpen ? <IoClose className='size-6' /> : <IoMenuSharp className='size-6' />
                        }
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;