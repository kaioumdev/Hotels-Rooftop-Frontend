import React from 'react'

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
    return (
        <div className='w-full flex'>
            <input type="text"
            />
            <button className='bg-[#1E73BE] px-4 py-2 text-white'>Search</button>
        </div>
    )
}

export default SearchBlog