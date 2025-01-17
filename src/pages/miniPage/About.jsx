import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
            <p className="text-gray-700 text-lg mb-4">
                Welcome to our project! We are dedicated to providing the best experience for our users.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
            <p className="text-gray-600 mb-4">
                Our mission is to create a platform that connects users with the best hotel options available.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>Easy booking process</li>
                <li>Wide range of hotel options</li>
                <li>User-friendly interface</li>
                <li>24/7 customer support</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
            <p className="text-gray-600">
                If you have any questions, feel free to reach out to us!
            </p>
        </div>
    );
};

export default About;
