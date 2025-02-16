// import React, { useEffect, useRef, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom';
// import { useFetchBlogsByIdQuery, useUpdateBlogMutation } from '../../../redux/features/blogs/blogsApi';
// import { useSelector } from 'react-redux';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import EditorjsList from '@editorjs/list';
// import { toast } from 'react-toastify';

// const UpdatePost = () => {
//     const { id } = useParams();
//     const editorRef = useRef(null);
//     const [title, setTitle] = useState('');
//     const [coverImg, setCoverImg] = useState('');
//     const [metaDescription, setMetaDescription] = useState('');
//     const [category, setCategory] = useState('');
//     const [rating, setRating] = useState(0);
//     const [message, setMessage] = useState('');
//     const { data: blog = {}, error, isLoading, refetch } = useFetchBlogsByIdQuery(id);
//     const [updateBlog] = useUpdateBlogMutation();

//     const { user } = useSelector((state) => state.auth);

//     useEffect(() => {
//         if (blog.post) {
//             const editor = new EditorJS({
//                 holder: 'editorjs',
//                 onReady: () => {
//                     editorRef.current = editor;
//                 },
//                 autofocus: true,
//                 tools: {
//                     header: {
//                         class: Header,
//                         inlineToolbar: true,
//                     },
//                     list: {
//                         class: EditorjsList,
//                         inlineToolbar: true,
//                     },
//                 },
//                 data: blog.post.content
//             })
//             // return () => {
//             //     editor.destroy();
//             //     editorRef.current = null;
//             // }
//             return () => {
//                 if (editorRef.current && typeof editorRef.current.destroy === "function") {
//                     editorRef.current.destroy();
//                 }
//                 editorRef.current = null;
//             };
//         }
//     }, []);

//     const navigate = useNavigate();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const content = await editorRef.current.save();
//             const updatedPost = {
//                 title: title || blog.post.title,
//                 coverImg: coverImg || blog.post.coverImg,
//                 content,
//                 description: metaDescription || blog.post.description,
//                 author: user?._id,
//                 rating: rating || blog.post.rating,
//             }
//             const response = await updateBlog({ id, ...updatedPost }).unwrap();
//             toast.success("Blog is updated successfully");
//             refetch();
//             navigate('/dashboard');
//         } catch (error) {
//             console.log("Failed to submit post", error);
//             setMessage("Failed to submit post. Please try again later.");
//         }
//     }
//     return (
//         <div className='bg-white md:p-8 p-2'>
//             <h2 className='text-2xl font-semibold'>Edit or Update Post</h2>
//             <form onSubmit={handleSubmit} className='space-y-5 pt-8'>
//                 <div className='space-y-4'>
//                     <label className='font-semibold text-xl'>Blog Title:</label>
//                     <input type="text" defaultValue={blog?.post?.title} onChange={(e) => setTitle(e.target.value)}
//                         className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
//                         placeholder='Ex: Marina del Rey Marriott..' required
//                     />
//                 </div>
//                 {/* blogs details */}
//                 <div className='flex felex-col md:flex-row justify-between items-start gap-4'>
//                     {/* left side */}
//                     <div className='md:w-2/3 w-full'>
//                         <p className='font-semibold text-xl mb-5'>Content Section</p>
//                         <p className='text-xs italic'>Write your post below here...</p>
//                         <div id='editorjs'></div>
//                     </div>
//                     {/* right side */}
//                     <div className='md:w-1/3 w-full border p-5 space-y-5'>
//                         <p className='text-xl font-semibold'>Choose Blog Format</p>

//                         {/* images */}
//                         <div className='space-y-4'>
//                             <label className='font-semibold'>Blog Cover:</label>
//                             <input type="text" defaultValue={blog?.post?.coverImg} onChange={(e) => setCoverImg(e.target.value)}
//                                 className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
//                                 placeholder='Write a image link' required
//                             />
//                         </div>

//                         {/* category  */}
//                         <div className='space-y-4'>
//                             <label className='font-semibold'>Category:</label>
//                             <input type="text" value={blog?.post?.category} onChange={(e) => setCategory(e.target.value)}
//                                 className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
//                                 placeholder='Rooftop/Travel/Nature' required
//                             />
//                         </div>
//                         {/* meta description */}
//                         <div className='space-y-4'>
//                             <label className='font-semibold'>Meta Description:</label>
//                             <textarea type="text" cols={4} rows={4} defaultValue={blog?.post?.description} onChange={(e) => setMetaDescription(e.target.value)}
//                                 className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
//                                 placeholder='Write your blog meta description' required
//                             />
//                         </div>
//                         {/* rating */}
//                         <div className='space-y-4'>
//                             <label className='font-semibold'>Rating:</label>
//                             <input type="number" defaultValue={blog?.post?.rating} onChange={(e) => setRating(e.target.value)}
//                                 className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
//                                 placeholder='Write a Rating' required
//                             />
//                         </div>

//                         {/* author */}
//                         <div className='space-y-4'>
//                             <label className='font-semibold'>Author:</label>
//                             <input type="text" value={user.username}
//                                 className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3'
//                                 placeholder={`${user.username} (not editable)`} disabled
//                             />
//                         </div>

//                     </div>
//                 </div>

//                 {
//                     message && <p className='text-red-500'>{message}</p>
//                 }
//                 <button type='submit'
//                     disabled={isLoading}
//                     className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium p-3 rounded-md
//                     '
//                 >Update Blog</button>
//             </form>
//         </div>
//     )
// }

// export default UpdatePost;

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchBlogsByIdQuery, useUpdateBlogMutation } from '../../../redux/features/blogs/blogsApi';
import { useSelector } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import { toast } from 'react-toastify';

const UpdatePost = () => {
    const { id } = useParams();
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const { data: blog = {}, error, isLoading, refetch } = useFetchBlogsByIdQuery(id);
    const [updateBlog] = useUpdateBlogMutation();
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (blog?.post) {
            if (editorRef.current) {
                editorRef.current.destroy();
            }

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
                },
                data: blog?.post?.content || {},
            });

            return () => {
                if (editorRef.current) {
                    editorRef.current.destroy();
                    editorRef.current = null;
                }
            };
        }
    }, [blog]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!editorRef.current) {
            setMessage("Editor is not initialized. Please wait or reload the page.");
            return;
        }

        try {
            const content = await editorRef.current.save();
            const updatedPost = {
                title: title || blog?.post?.title,
                coverImg: coverImg || blog?.post?.coverImg,
                content,
                description: metaDescription || blog?.post?.description,
                author: user?._id,
                rating: rating || blog?.post?.rating,
            };

            console.log("Submitting updated post:", updatedPost);

            const response = await updateBlog({ id, data: updatedPost }).unwrap();
            toast.success("Blog is updated successfully");
            refetch();
            navigate('/dashboard');
        } catch (error) {
            console.log("Failed to submit post", error);
            setMessage("Failed to submit post. Please try again later.");
        }
    };

    return (
        <div className='bg-white md:p-8 p-2'>
            <h2 className='text-2xl font-semibold'>Edit or Update Post</h2>
            <form onSubmit={handleSubmit} className='space-y-5 pt-8'>
                <div className='space-y-4'>
                    <label className='font-semibold text-xl'>Blog Title:</label>
                    <input type="text" defaultValue={blog?.post?.title} onChange={(e) => setTitle(e.target.value)}
                        className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' placeholder='Ex: Marina del Rey Marriott..' required />
                </div>
                <div className='flex flex-col md:flex-row justify-between items-start gap-4'>
                    <div className='md:w-2/3 w-full'>
                        <p className='font-semibold text-xl mb-5'>Content Section</p>
                        <p className='text-xs italic'>Write your post below here...</p>
                        <div id='editorjs'></div>
                    </div>
                    <div className='md:w-1/3 w-full border p-5 space-y-5'>
                        <p className='text-xl font-semibold'>Choose Blog Format</p>
                        <div className='space-y-4'>
                            <label className='font-semibold'>Blog Cover:</label>
                            <input type="text" defaultValue={blog?.post?.coverImg} onChange={(e) => setCoverImg(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' placeholder='Write an image link' required />
                        </div>
                        <div className='space-y-4'>
                            <label className='font-semibold'>Category:</label>
                            <input type="text" defaultValue={blog?.post?.category} onChange={(e) => setCategory(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' placeholder='Rooftop/Travel/Nature' required />
                        </div>
                        <div className='space-y-4'>
                            <label className='font-semibold'>Meta Description:</label>
                            <textarea cols={4} rows={4} defaultValue={blog?.post?.description} onChange={(e) => setMetaDescription(e.target.value)}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' placeholder='Write your blog meta description' required />
                        </div>
                        <div className='space-y-4'>
                            <label className='font-semibold'>Rating:</label>
                            <input type="number" defaultValue={blog?.post?.rating} onChange={(e) => setRating(Number(e.target.value))}
                                className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' placeholder='Write a Rating' required />
                        </div>
                        <div className='space-y-4'>
                            <label className='font-semibold'>Author:</label>
                            <input type="text" value={user.username} className='w-full inline-block bg-bgPrimary focus:outline-none px-5 py-3' disabled />
                        </div>
                    </div>
                </div>
                {message && <p className='text-red-500'>{message}</p>}
                <button type='submit' disabled={isLoading} className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium p-3 rounded-md'>Update Blog</button>
            </form>
        </div>
    );
};

export default UpdatePost;
