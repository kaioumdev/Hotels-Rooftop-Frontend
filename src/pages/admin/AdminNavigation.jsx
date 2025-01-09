import React from 'react';
import AdminImg from "../../assets/admin.png";

const AdminNavigation = () => {
    return (
        <div className='space-y-5 bg-white p-8 md:h-[calc(100vh-98px)] flex flex-col justify-center'>
            <div className='mb-5'>
                <img src={AdminImg} alt="AdminImg" className='size-14' />
                <p className='font-semibold'>Admin</p>
            </div>
        </div>
    )
}

export default AdminNavigation