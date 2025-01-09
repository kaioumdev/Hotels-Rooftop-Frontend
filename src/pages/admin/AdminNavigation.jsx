import React from 'react';
import AdminImg from "../../assets/admin.png";
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <div className='space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between'>
            <div className='mb-5'>
                <img src={AdminImg} alt="AdminImg" className='size-14' />
                <p className='font-semibold'>Admin</p>
            </div>
            <hr />
            <ul>
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/add-new-post" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Add New Post</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manage-items" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Manage Items</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AdminNavigation