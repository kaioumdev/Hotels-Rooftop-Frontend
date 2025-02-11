import React from 'react';

const About = () => {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">About Hotels Rooftop</h2>
                    <p className="text-gray-700 leading-7">
                        Welcome to Hotels Rooftop, your ultimate guide to discovering hotels with stunning rooftop pools.
                        We are passionate about curating unique and luxurious travel experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-7 mb-4">
                            Our mission is to help you find the perfect hotel with breathtaking views, relaxing atmospheres,
                            and unforgettable rooftop amenities. Whether you're planning a romantic escape, a family vacation,
                            or a solo adventure, we've got you covered.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Services</h3>
                        <ul className="list-disc list-inside text-gray-700 leading-7">
                            <li>Curated hotel recommendations with stunning rooftop pools</li>
                            <li>Insightful articles and travel tips</li>
                            <li>Exclusive offers and promotions</li>
                            <li>A community of travel enthusiasts</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-center mb-4">Explore Our Blog Categories</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                            Travel
                        </button>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                            Technology
                        </button>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                            Food
                        </button>
                        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                            Lifestyle
                        </button>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-700 leading-7 mb-4">
                        Join our community and share your own rooftop pool experiences.
                    </p>
                    <p className="text-gray-700 leading-7 mb-4">
                        After logging in, you can create new blogs and share your travel stories with the world.
                    </p>
                    <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
