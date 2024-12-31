import React, { useState } from 'react'
import SearchBlog from './SearchBlog'

const Blogs = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [query, seQuery] = useState({ search: "", category: "" });

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => seQuery({ search, query });
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