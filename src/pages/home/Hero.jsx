import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
            <div className='md:w-1/2 w-full text-center'>
                <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Hotels with Rooftop Pools Near Me</h1>
                <p className='py-4'>Discovering hotels with rooftop pools near you! Whether youre planning a luxurious staycation or a weekend getaway, our curated selection of hotels with rooftop pools will help you beat the heat and elevate your travel experience.</p>
            </div>
            <div className='md:w-1/2 w-full mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero