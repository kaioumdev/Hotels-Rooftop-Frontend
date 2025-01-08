import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
    return (
        <div className='container mx-auto flex flex-col md:flex-row gap-4 items-start justify-start'>
            <header className='lg:w-1/5 sm:2/5 w-full'>
                Admin Navigation
            </header>
            <main className='p-8 bg-white w-full'>
                <p>For Admin Content</p>
                <Outlet></Outlet>
            </main>
        </div>
    )
}

export default AdminLayout