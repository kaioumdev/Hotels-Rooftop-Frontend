import React, { useState } from 'react'
import SearchBlog from './SearchBlog'
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [query, seQuery] = useState({ search: "", category: "" });

    //get data using redux
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
    console.log("blogs", blogs);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => seQuery({ search, category });
    return (
        <div className='mt-16 container mx-auto'>
            <SearchBlog
                search={search}
                handleSearchChange={handleSearchChange}
                handleSearch={handleSearch}
            ></SearchBlog>
            {isLoading && <div>Loading....</div>}
            {error && <div>{error.toString()}</div>}
            <div>
                {
                    blogs.map((blog) => (
                        <Link key={blog._id}>
                            <img src={blog.coverImg} alt="" />
                            <h2>{blog.title}</h2>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs