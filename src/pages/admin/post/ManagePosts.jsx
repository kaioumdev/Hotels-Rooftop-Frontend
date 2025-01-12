import React, { useState } from 'react'
import { useFetchBlogsQuery } from '../../../redux/features/blogs/blogsApi';

const ManagePosts = () => {
    const [query, setQuery] = useState({ search: "", category: "" });
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
    return (
        <>
            {
                isLoading && <div>Loading...</div>
            }
        </>
    )
}

export default ManagePosts