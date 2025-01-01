import React from 'react'

const SingleBlogCard = ({ blog }) => {
    const { title, description, content, coverImg, category, rating, author } = blog || {};

    const formatDate = (isDate) => {
        const date = new Date(isDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    return (
        <div>SingleBlogCard</div>
    )
}

export default SingleBlogCard