import React from 'react';

const ContactUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-4">We would love to hear from you! Please fill out the form below to get in touch.</p>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700" htmlFor="name">Name</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" required />
                </div>
                <div>
                    <label className="block text-gray-700" htmlFor="email">Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" required />
                </div>
                <div>
                    <label className="block text-gray-700" htmlFor="message">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded" id="message" rows="4" required></textarea>
                </div>
                <button className="bg-[#1E73BE] text-white px-4 py-2 rounded" type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactUs;
