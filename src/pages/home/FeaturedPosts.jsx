// FeaturedPosts.js
// import React from 'react';

// const FeaturedPosts = () => {
//     return (
//         <section className="py-16">
//             <div className="container mx-auto px-4">
//                 <h2 className="text-4xl font-bold mb-8 text-center">Featured Posts</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {/* Example of a featured post card */}
//                     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                         <img src="path/to/image.jpg" alt="Post" className="w-full h-48 object-cover" />
//                         <div className="p-6">
//                             <h3 className="text-2xl font-bold mb-2">Post Title</h3>
//                             <p className="text-gray-700 mb-4">A brief description of the post...</p>
//                             <a href="#" className="text-blue-500 hover:underline">Read More</a>
//                         </div>
//                     </div>
//                     {/* Repeat for more posts */}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FeaturedPosts;

import React from 'react';
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery({ search: '', category: '', location: '' });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading posts</div>;

    return (
        <div className='mt-16 container mx-auto'>
            <h2 className='text-3xl font-bold mb-8'>Featured Posts</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                {blogs.slice(0, 3).map((blog) => (
                    <Link to={`/blogs/${blog._id}`} key={blog._id} className='shadow-md rounded-lg overflow-hidden'>
                        <img src={blog.coverImg} alt={blog.title} className='w-full h-64 object-cover' />
                        <div className='p-4'>
                            <h3 className='text-xl font-semibold'>{blog.title}</h3>
                            <p className='text-gray-600'>{blog.description.substring(0, 100)}...</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedPosts;
