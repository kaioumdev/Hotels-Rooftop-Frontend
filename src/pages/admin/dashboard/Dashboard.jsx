import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FiUsers } from 'react-icons/fi';
import { FaBlog, FaRegComment } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import { useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { useGetCommentsQuery } from '../../../redux/features/comments/commentApi';
import { useGetUserQuery } from '../../../redux/features/auth/authApi';
import BlogsCart from './BlogsCart';

const Dashboard = () => {
    const [query, setQuery] = useState({ search: "", category: "" });
    const { user } = useSelector((state) => state.auth);
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
    const { data: comments = [] } = useGetCommentsQuery();
    const { data: users = {} } = useGetUserQuery();
    const adminCounts = users?.users?.filter((user) => user.role === "admin").length;
    return (
        <>
            {isLoading && (<div>Loading...</div>)}
            <div className='space-y-6'>
                <div className='bg-bgPrimary p-5'>
                    <h1>Hi, {user?.username}!</h1>
                    <p>Welcome to the admin dashboard</p>
                    <p>Here you can manage your hotel's posts, manage rooms, and other administrative tasks.</p>
                </div>

                {/* cards grid */}
                <div className='flex flex-col md:flex-row justify-center gap-8 pt-8'>
                    <div className='bg-indigo-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <FiUsers className='size-8 text-indigo-600'></FiUsers>
                        <p>{users?.users?.length} Users</p>
                    </div>
                    <div className='bg-red-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <FaBlog className='size-8 text-red-600'>
                        </FaBlog>
                        <p>{blogs.length} Blogs</p>
                    </div>
                    <div className='bg-lime-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <FaRegComment className='size-8 text-lime-600'>
                        </FaRegComment>
                        <p>{adminCounts} Admin {adminCounts !== 1 ? 's' : ''}</p>
                    </div>
                    <div className='bg-orange-100 py-6 w-full rounded-sm space-y-2 flex flex-col items-center'>
                        <RiAdminLine className='size-8 text-orange-600'>
                        </RiAdminLine>
                        <p>{comments?.totalComments} comments</p>
                    </div>
                </div>

                {/* graph & chart */}
                <div className='pt-5 pb-5'>
                    <BlogsCart blogs={blogs}></BlogsCart>
                </div>
            </div>
        </>
    )
}

export default Dashboard