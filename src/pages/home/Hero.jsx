import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
            <div className='md:w-1/2 w-full text-center'>
                <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Hotels with Rooftop Pools Near Me</h1>
            </div>
            <div>
                Image
            </div>
        </div>
    )
}

export default Hero