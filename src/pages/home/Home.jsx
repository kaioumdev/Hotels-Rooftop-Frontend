import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedPosts from './FeaturedPosts';
import Blogs from '../blogs/Blogs';
import Newsletter from './Newsletter';

const Home = () => {
    return (
        <div className="bg-white text-primary container mx-auto mt-8 p-8">
            <Hero />
            <FeaturedPosts />
            <Categories />
            <Blogs></Blogs>
            <Newsletter />
        </div>
    );
};

export default Home;