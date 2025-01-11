import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import EditorjsList from '@editorjs/list';
import Header from '@editorjs/header';

const AddPost = () => {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorjs',
            onReady: () => {
                editorRef.current = editor;
            },
            autofocus: true,
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                },
                list: {
                    class: EditorjsList,
                    inlineToolbar: true,
                },
            }
        })
        return () => {
            editor.destroy();
            editorRef.current = null;
        }
    }, [])
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
                    <div className='md:w-2/3 w-full'>
                        <p className='font-semibold text-xl mb-5'>Content Section</p>
                        <p className='text-xs italic'>Write your post below here...</p>
                        <div id='editorjs'></div>
                    </div>
                    {/* right side */}
                    <div className='md:w-1/3 w-full border p-5 space-y-5'>
                        <p className='text-xl font-semibold'>Choose Blog Format</p>

                        {/* images */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Blog Cover:</label>
                            <input type="text" value={coverImg} onChange={(e) => setCoverImg(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='https://unsplash.com/photos/cover-photo-of-blog1.png' required
                            />
                        </div>

                        {/* category  */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Category:</label>
                            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='Rooftop/Travel/Nature' required
                            />
                        </div>
                        {/* meta description */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Meta Description:</label>
                            <textarea type="text" cols={4} rows={4} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='Write your blog meta description' required
                            />
                        </div>
                        {/* rating */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Rating:</label>
                            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder='Write a Rating' required
                            />
                        </div>

                        {/* author */}
                        <div className='space-y-4'>
                            <label className='font-semibold'>Author:</label>
                            <input type="number" value={user.username}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
                                placeholder={`${user.username} (not editable)`} disabled
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPost