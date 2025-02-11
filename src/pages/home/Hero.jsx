// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';

// import Img1 from "../../assets/hero-carousel/img1.jpg";
// import Img2 from "../../assets/hero-carousel/img2.jpg";
// import Img3 from "../../assets/hero-carousel/img3.jpg";
// import Img4 from "../../assets/hero-carousel/img4.jpg";


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import required modules
// import { Autoplay, Pagination } from 'swiper/modules';

// const Hero = () => {
//     return (
//         <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
//             <div className='md:w-1/2 w-full text-center'>
//                 <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Hotels with Rooftop Pools Near Me</h1>
//                 <p className='py-4'>Discovering hotels with rooftop pools near you! Whether you are planning a luxurious staycation or a weekend getaway, our curated selection of hotels with rooftop pools will help you beat the heat and elevate your travel experience.</p>
//             </div>
//             <div className='md:w-1/2 w-full mx-auto'>
//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={10}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     autoplay={{
//                         delay: 1500,
//                         disableOnInteraction: false,
//                     }}
//                     breakpoints={{
//                         640: {
//                             slidesPerView: 1,
//                             spaceBetween: 20,
//                         },
//                         768: {
//                             slidesPerView: 1,
//                             spaceBetween: 40,
//                         },
//                         1024: {
//                             slidesPerView: 1,
//                             spaceBetween: 50,
//                         },
//                     }}
//                     modules={[Pagination, Autoplay]}
//                     className="mySwiper"
//                 >
//                     <SwiperSlide>
//                         <img src={Img1} alt="Slide 1" className='w-full lg:h-[420px] sm:h-96 h-80' />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={Img2} alt="Slide 1" className='w-full lg:h-[420px] sm:h-96 h-80' />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={Img3} alt="Slide 1" className='w-full lg:h-[420px] sm:h-96 h-80' />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <img src={Img4} alt="Slide 1" className='w-full lg:h-[420px] sm:h-96 h-80' />
//                     </SwiperSlide>
//                 </Swiper>
//             </div>
//         </div>
//     )
// }

// export default Hero
// // Hero.js
// // import React from 'react';

// // const Hero = () => {
// //     return (
// //         <section className="hero-section bg-cover bg-center h-screen" style={{ backgroundImage: "url('path/to/your/hero-image.jpg')" }}>
// //             <div className="hero-overlay bg-black bg-opacity-50 flex items-center justify-center h-full">
// //                 <div className="text-center text-white">
// //                     <h1 className="text-6xl font-bold mb-4">Welcome to My Blog!</h1>
// //                     <p className="text-xl mb-8">Exploring the latest trends in web development, design, and more.</p>
// //                     <a href="#" className="bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-gray-200">Read More</a>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Hero;
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';

// const Hero = () => {
//     return (
//         <div className="relative h-[500px]">
//             <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Autoplay, Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <img src="https://via.placeholder.com/1200x500" alt="Slide 1" className="w-full h-[500px] object-cover" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://via.placeholder.com/1200x500" alt="Slide 2" className="w-full h-[500px] object-cover" />
//                 </SwiperSlide>
//             </Swiper>
//             <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="text-center text-white">
//                     <h1 className="text-5xl font-bold">Welcome to Our Blog</h1>
//                     <p className="mt-4 text-xl">Discover the latest trends and insights</p>
//                     <button className="mt-8 bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold">Explore More</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import HeroImg1 from '../../assets/hero-carousel/img1.jpg';
import HeroImg2 from '../../assets/hero-carousel/img2.jpg';
import HeroImg3 from '../../assets/hero-carousel/img3.jpg';
import HeroImg4 from '../../assets/hero-carousel/img4.jpg';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
            <div className='md:w-1/2 w-full text-center'>
                <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>Hotels with Rooftop Pools Near Me</h1>
                <p className='py-4'>Discovering hotels with rooftop pools near you! Whether you are planning a luxurious staycation or a weekend getaway, our curated selection of hotels with rooftop pools will help you beat the heat and elevate your travel experience.</p>
                <button className='bg-primary text-white px-4 py-2 rounded-md mt-4'>Explore Now</button>
            </div>
            <div className='md:w-1/2 w-full mx-auto'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={HeroImg1} alt="Slide 1" className='w-full lg:h-[420px] sm:h-96 h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HeroImg2} alt="Slide 2" className='w-full lg:h-[420px] sm:h-96 h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HeroImg3} alt="Slide 3" className='w-full lg:h-[420px] sm:h-96 h-80' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HeroImg4} alt="Slide 4" className='w-full lg:h-[420px] sm:h-96 h-80' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Hero;
