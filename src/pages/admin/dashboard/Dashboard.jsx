import React from 'react'
import { useSelector } from 'react-redux';
import { FiUsers } from 'react-icons/fi';
import { FaBlog, FaRegComment } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';

const Dashboard = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <>
            <div className='space-y-6'>
                <div className='bg-bgPrimary p-5'>
                    <h1>Hi, {user?.username}!</h1>
                    <p>Welcome to the admin dashboard</p>
                    <p>Here you can manage your hotel's posts, manage rooms, and other administrative tasks.</p>
                </div>

                {/* cards grid */}
                <div>
                    <div className='bg-indigo-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <FiUsers className='size-8 text-indigo-600'>
                            <p>2 Users</p>
                        </FiUsers>
                    </div>
                    <div className='bg-red-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <FaBlog className='size-8 text-red-600'>
                            <p>5 Blogs</p>
                        </FaBlog>
                    </div>
                    <div className='bg-lime-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <FaRegComment className='size-8 text-lime-600'>
                            <p>2 Admin</p>
                        </FaRegComment>
                    </div>
                    <div className='bg-indigo-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <RiAdminLine className='size-8 text-indigo-600'></RiAdminLine>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard