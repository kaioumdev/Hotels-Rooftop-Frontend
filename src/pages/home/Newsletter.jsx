// import React from 'react';

// const Newsletter = () => {
//     return (
//         <div className="mt-16 bg-blue-50 p-8 rounded-lg">
//             <h2 className="text-3xl font-bold text-center">Subscribe to Our Newsletter</h2>
//             <p className="mt-4 text-center text-gray-600">Get the latest updates and news directly in your inbox.</p>
//             <form className="mt-8 flex justify-center">
//                 <input type="email" placeholder="Enter your email" className="px-4 py-2 w-64 rounded-l-lg focus:outline-none" />
//                 <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-r-lg">Subscribe</button>
//             </form>
//         </div>
//     );
// };

// export default Newsletter;

import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter signup logic here
        console.log('Email submitted:', email);
    };

    return (
        <div className='mt-16 container mx-auto text-center bg-gray-100 p-8 rounded-lg'>
            <h2 className='text-3xl font-bold mb-8'>Stay Updated</h2>
            <p className='text-gray-600 mb-4'>Subscribe to our newsletter to receive the latest updates and exclusive content.</p>
            <form onSubmit={handleSubmit} className='flex justify-center'>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none'
                    required
                />
                <button type='submit' className='px-4 py-2 bg-primary text-white rounded-r-md'>Subscribe</button>
            </form>
        </div>
    );
};

export default Newsletter;
