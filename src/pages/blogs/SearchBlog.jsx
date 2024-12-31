import React from 'react'

const SearchBlog = ({ search, handleSearchChange, handleSearch }) => {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch()
        }
    }
    return (
        <div className='w-full flex'>
            <input type="text"
                value={search}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
            />
            <button className='bg-[#1E73BE] px-4 py-2 text-white'>Search</button>
        </div>
    )
}

export default SearchBlog