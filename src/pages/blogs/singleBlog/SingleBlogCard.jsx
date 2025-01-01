import React from 'react'
import { formatDate } from '../../../utils/formateDate';
// import EditorJSHTML from "editorjs-html/dist/index.js";


// const editorJSHTML = EditorJSHTML(); // Correct spelling

const SingleBlogCard = ({ blog }) => {
    const { title, description, content, coverImg, category, rating, author, createdAt } = blog || {};
    // const htmlContent = editorJSHTML.parse(content).join('');
    return (
        <div className='bg-white p-8'>
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
                <p className='mb-6'>{formatDate(createdAt)} by <span className='text-blue-400 cursor-pointer'>Admin 1</span></p>
            </div>
            <div>
                <img src={coverImg} alt="Cover Image" className='w-full md:h-[520px] bg-cover' />
            </div>
            {/* blog details */}
            <div>
                {/* <div dangerouslySetInnerHTML={{ _htm: htmlContent }}></div> */}
            </div>
        </div>
    )
}

export default SingleBlogCard