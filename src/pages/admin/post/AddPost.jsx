import React, { useState } from 'react'

const AddPost = () => {
    const [title, setTitle] = useState('');
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
            </form>
        </div>
    )
}

export default AddPost