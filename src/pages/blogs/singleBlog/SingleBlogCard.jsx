import React from 'react'
import { formatDate } from '../../../utils/formateDate';

const SingleBlogCard = ({ blog }) => {
    const { title, description, content, coverImg, category, rating, author, createdAt } = blog || {};
    return (
        <div className='bg-white p-8'>
            <div>
                <h1 className='md:text-4xl text-3xl font-medium mb-4'>{title}</h1>
                <p>{formatDate(createdAt)}</p>
            </div>
        </div>
    )
}

export default SingleBlogCard