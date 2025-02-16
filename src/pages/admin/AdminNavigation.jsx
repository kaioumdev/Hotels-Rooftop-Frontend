// import React from 'react';
// import AdminImg from "../../assets/admin.png";
// import { NavLink } from 'react-router-dom';
// import { useLogOutMutation } from '../../redux/features/auth/authApi';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../redux/features/auth/authSlice';

// const AdminNavigation = () => {
//     const [logOut] = useLogOutMutation();
//     const dispatch = useDispatch();
//     const handleLogOut = async () => {
//         try {
//             await logOut().unwrap();
//             dispatch(logout())
//         } catch (error) {
//         }
//     }
//     return (
//         <div className='space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between'>
//             <div>
//                 <div className='mb-5'>
//                     <img src={AdminImg} alt="AdminImg" className='size-14' />
//                     <p className='font-semibold'>Admin</p>
//                 </div>
//                 <hr />
//                 <ul className='space-y-5 pt-5'>
//                     <li>
//                         <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Dashboard</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/add-new-post" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Add New Post</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/manage-items" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Manage Items</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Users</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             <div className='mb-3'>
//                 <hr className='mb-3' />
//                 <button onClick={handleLogOut} className='text-white bg-red-500 font-medium px-5 py-1 rounded-sm'>LogOut</button>
//             </div>
//         </div>
//     )
// }

// export default AdminNavigation

import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLogOutMutation } from '../../redux/features/auth/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import AdminImg from "../../assets/admin.png";

const AdminNavigation = () => {
    const [logOut] = useLogOutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Get user info from Redux
    const { user } = useSelector((state) => state.auth);
    const isAdmin = user?.role === "admin";

    // Restricted routes for non-admin users
    const restrictedRoutes = ["/dashboard/add-new-post", "/dashboard/manage-items"];

    // Redirect non-admin users if they access restricted routes
    useEffect(() => {
        if (!isAdmin && restrictedRoutes.includes(location.pathname)) {
            toast.error("Only Admin access this page.Change user role to Admin please");
            navigate("/dashboard/users");
        }
    }, [location.pathname, isAdmin, navigate]);

    // Handle logout
    const handleLogOut = async () => {
        try {
            await logOut().unwrap();
            dispatch(logout());
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    };

    return (
        <div className='space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-between'>
            <div>
                <div className='mb-5'>
                    <img src={AdminImg} alt="AdminImg" className='size-14' />
                    <p className='font-semibold'>{isAdmin ? "Admin" : "User"}</p>
                </div>
                <hr />
                <ul className='space-y-5 pt-5'>
                    <li>
                        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Dashboard</NavLink>
                    </li>
                    {/* {isAdmin && (
                        <>
                           
                        </>
                    )} */}
                    <li>
                        <NavLink to="/dashboard/add-new-post" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Add New Post</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manage-items" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users" className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"}>Users</NavLink>
                    </li>
                </ul>
            </div>
            <div className='mb-3'>
                <hr className='mb-3' />
                <button onClick={handleLogOut} className='text-white bg-red-500 font-medium px-5 py-1 rounded-sm'>LogOut</button>
            </div>
        </div>
    );
};

export default AdminNavigation;
