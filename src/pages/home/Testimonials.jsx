import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: 'John Doe', comment: 'Great blog! Very informative.', image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Jane Smith', comment: 'Loved the content. Keep it up!', image: 'https://via.placeholder.com/100' },
    ];

    return (
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center">Testimonials</h2>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-8"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="text-center p-6">
                            <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto" />
                            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                            <p className="mt-2 text-gray-600">{testimonial.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;