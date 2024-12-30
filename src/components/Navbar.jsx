import React from 'react'

const Navbar = () => {
    return (
        <header className='bg-white p-6 border'>
            <nav className='container mx-auto flex justify-between px-5'>
                <a href="">
                    <img src="/logo.png" alt="" className='h-12' />
                </a>
            </nav>
        </header>
    )
}

export default Navbar