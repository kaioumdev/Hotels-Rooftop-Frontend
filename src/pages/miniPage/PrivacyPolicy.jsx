import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900">Privacy Policy</h1>
                <p className="text-center text-gray-500 text-sm mt-1">Last updated: January 20, 2024</p>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800">Information We Collect</h2>
                    <p className="text-gray-600 mt-2">We collect information you provide directly to us when you:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                        <li>Create an account or subscribe to our newsletter</li>
                        <li>Make a purchase or post content</li>
                        <li>Contact us for support or feedback</li>
                        <li>Participate in surveys or contests</li>
                    </ul>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800">How We Use Your Information</h2>
                    <p className="text-gray-600 mt-2">We use the information we collect to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-2">
                            <span className="text-blue-500 text-xl">&#10004;</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">Provide Services</h3>
                                <p className="text-gray-600 text-sm">Deliver the content and services you request</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-2">
                            <span className="text-blue-500 text-xl">&#128276;</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">Send Updates</h3>
                                <p className="text-gray-600 text-sm">Keep you informed about relevant content</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-2">
                            <span className="text-blue-500 text-xl">&#128202;</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">Improve Services</h3>
                                <p className="text-gray-600 text-sm">Analyze and enhance our platform</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-2">
                            <span className="text-blue-500 text-xl">&#128274;</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">Security</h3>
                                <p className="text-gray-600 text-sm">Protect and secure your data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
