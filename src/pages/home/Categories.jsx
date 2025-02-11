import React from 'react';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Travel', icon: '✈️' },
        { id: 2, name: 'Technology', icon: '💻' },
        { id: 3, name: 'Food', icon: '🍔' },
        { id: 4, name: 'Lifestyle', icon: '🏖️' },
    ];

    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                {categories.map((category) => (
                    <div key={category.id} className="text-center p-6 shadow-lg rounded-lg">
                        <span className="text-4xl">{category.icon}</span>
                        <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;

// import React from 'react';

// const Categories = () => {
//     const categories = ['Travel', 'Nature', 'Rooftop', 'Lifestyle'];

//     return (
//         <div className='mt-16 container mx-auto'>
//             <h2 className='text-3xl font-bold mb-8'>Categories</h2>
//             <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8'>
//                 {categories.map((category, index) => (
//                     <div key={index} className='bg-gray-100 p-4 rounded-lg text-center'>
//                         <h3 className='text-xl font-semibold'>{category}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Categories;
