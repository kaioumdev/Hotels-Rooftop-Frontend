import React from 'react';
import { Link } from 'react-router-dom';

const PopularPosts = () => {
    const posts = [
        { id: 1, title: 'Popular Post 1', image: 'https://via.placeholder.com/300x200' },
        { id: 2, title: 'Popular Post 2', image: 'https://via.placeholder.com/300x200' },
        { id: 3, title: 'Popular Post 3', image: 'https://via.placeholder.com/300x200' },
    ];

    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center">Popular Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {posts.map((post) => (
                    <div key={post.id} className="shadow-lg rounded-lg overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{post.title}</h3>
                            <Link to={`/blogs/${post.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularPosts;