import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedBlogs = () => {
    const blogs = [
        { id: 1, title: 'Blog 1', image: 'https://via.placeholder.com/300x200', description: 'This is a short description of blog 1.' },
        { id: 2, title: 'Blog 2', image: 'https://via.placeholder.com/300x200', description: 'This is a short description of blog 2.' },
        { id: 3, title: 'Blog 3', image: 'https://via.placeholder.com/300x200', description: 'This is a short description of blog 3.' },
    ];

    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center">Featured Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="shadow-lg rounded-lg overflow-hidden">
                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{blog.title}</h3>
                            <p className="mt-2 text-gray-600">{blog.description}</p>
                            <Link to={`/blogs/${blog.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBlogs;