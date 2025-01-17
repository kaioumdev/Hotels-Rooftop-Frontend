import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-bold">Company Name</h2>
                        <p className="text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                        <a href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
