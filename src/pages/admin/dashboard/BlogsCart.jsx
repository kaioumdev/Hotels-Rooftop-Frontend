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
    return (
        <div>BlogsCart</div>
    )
}

export default BlogsCart