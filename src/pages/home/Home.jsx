import React from 'react';
import Hero from './Hero';
import Categories from './Categories';
import FeaturedPosts from './FeaturedPosts';
import LatestPosts from './LatestPosts';
import AboutUs from './AboutUs';
import NewsletterSignup from './Newsletter';
import Blogs from '../blogs/Blogs';

const Home = () => {
    return (
        <div className="bg-white text-primary container mx-auto mt-8 p-8">
            <Hero />
            <FeaturedPosts />
            <Categories />
            {/* <LatestPosts /> */}
            <Blogs></Blogs>
            {/* <AboutUs />
            <NewsletterSignup /> */}
        </div>
    );
};

export default Home;