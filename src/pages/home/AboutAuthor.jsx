// AboutAuthor.js
import React from 'react';

const AboutAuthor = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">About the Author</h2>
                <p className="text-lg mb-4">A brief bio about the author...</p>
                <img src="path/to/author-image.jpg" alt="Author" className="w-32 h-32 rounded-full mx-auto" />
            </div>
        </section>
    );
};

export default AboutAuthor;
