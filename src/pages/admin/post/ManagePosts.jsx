import React, { useState } from 'react'
import { useDeleteBlogMutation, useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';
import { formatDate } from '../../../utils/formateDate';
import { Link } from 'react-router-dom';
import { MdModeEdit } from 'react-icons/md'
import { toast } from 'react-toastify';

const ManagePosts = () => {
    const [query, setQuery] = useState({ search: "", category: "" });
    const { data: blogs = [], error, isLoading, refetch } = useFetchBlogsQuery(query);
    const [deleteBlog] = useDeleteBlogMutation();

    // delete a blog
    const handleDelete = async (id) => {
        try {
            const response = await deleteBlog(id).unwrap();
            toast.success(response.message);
            refetch();
        } catch (error) {
            console.error("Failed to delete blog", error);
        }
    }
    return (
        <>
            {
                isLoading && <div>Loading...</div>
            }
            <section className="py-1 bg-blueGray-50">
                <div className="w-full mb-12 xl:mb-0 px-4 mx-auto ">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">All Blogs</h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                                </div>
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            No.
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Blog Name
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Publishing Date
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Edit or Manage
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        blogs.map((blog, index) => (
                                            <tr key={index}>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                    {index + 1}
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    {blog.title}
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {formatDate(blog.createdAt)}
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                    <Link to={`/dashboard/update-items/${blog._id}`} className='hover:text-blue-700'>
                                                        <span className='flex gap-1 justify-center items-center'>
                                                            <MdModeEdit></MdModeEdit> Edit
                                                        </span>
                                                    </Link>
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                                    <button onClick={() => handleDelete(blog._id)} className='bg-red-600 text-white px-2 py-1'>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManagePosts