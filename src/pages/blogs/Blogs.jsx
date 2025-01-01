import React, { useState } from 'react'
import SearchBlog from './SearchBlog'
import { useFetchBlogsQuery } from '../../redux/features/blogs/blogsApi';

const Blogs = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [query, seQuery] = useState({ search: "", category: "" });

    //get data using redux
    const { data: blogs = [] } = useFetchBlogsQuery(query);
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
            <div>
                Blog Card
            </div>
        </div>
    )
}

export default Blogs