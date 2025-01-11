import React, { useState } from 'react'

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    return (
        <div className='bg-white md:p-8 p-2'>
            <h2 className='text-2xl font-semibold'>Create A New Post</h2>
            <form className='space-y-5 pt-8'>
                <div className='space-y-4'>
                    <label className='font-semibold text-xl'>Blog Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                        placeholder='Ex: Marina del Rey Marriott..' required
                    />
                </div>
                {/* blogs details */}
                <div className='flex felex-col md:flex-row justify-between items-start gap-4'>
                    {/* left side */}
                    <div className='md:w-2/3 w-full'>Left Side</div>
                    {/* right side */}
                    <div className='md:w-1/3 w-full border p-5 space-y-5'>
                        <p className='text-xl font-semibold'>Choose Blog Format</p>
                        {/* images */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Blog Cover:</label>
                            <input type="text" value={coverImg} onChange={(e) => setTitle(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='https://unsplash.com/photos/cover-photo-of-blog1.png' required
                            />
                        </div>
                        {/* category  */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Category:</label>
                            <input type="text" value={coverImg} onChange={(e) => setTitle(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='Rooftop/Travel/Nature' required
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPost