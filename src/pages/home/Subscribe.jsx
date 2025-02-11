// Subscribe.js
import React from 'react';

const Subscribe = () => {
    return (
        <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-8">Get the latest updates and news directly in your inbox.</p>
                <form className="flex justify-center">
                    <input type="email" placeholder="Enter your email" className="p-3 rounded-l-lg" />
                    <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-r-lg">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
