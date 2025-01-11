import React from 'react'
import { formatDate } from '../../../utils/formateDate'

const formatData = (blogs) => {
    return blogs.map(blog => ({
        name: formatDate(blog.createAt),
        post: blog.title.length,
        pv: blog.pageView || 0,
        amt: blog.amt || 0,
    }))
}

const BlogsCart = ({ blogs }) => {
    const data = formatData(blogs);
    return (
        <div className='p-6 bg-bgPrimary rounded-lg shadow-md'>
            <h2 text-xl font-semibold mb-4>Blog Chart!</h2>
            <div className='h-80'>
                <ResponsiveContaier></ResponsiveContaier>
            </div>
        </div>
    )
}

export default BlogsCart