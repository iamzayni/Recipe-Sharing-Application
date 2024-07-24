import React from 'react';
import Header from '../../client-layout/Header';
import Footer from '../../client-layout/Footer';
import Slider from '../home/Slider';
import FoodReview from '../home/Food-Review';
import About from '../about/About';
import Award from '../home/Award'
import Blog from '../home/Blog'
import Contact from '../home/Contact'
import AboutUs from '../home/AboutUs'
// import Gallery from '../home/Gallery'

const Index = () => {
    return (
        <>
            <Header />
            <div className='home-container'>
                <Slider />
                <AboutUs />
                <Blog />
                <Award />
                <FoodReview />
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Index;
