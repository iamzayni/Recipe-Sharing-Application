import React from 'react';
import Header from '../../client-layout/Header';
import Footer from '../../client-layout/Footer';
import backgroundImage from '../../images/Slide-5.jpg'; // Import the image
import Team from '../about/Team'
import Partners from '../about/Partners'
import Faq from '../about/Faq'

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto">
        <div className="relative bg-cover bg-center p-8 mb-8 h-96 flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 bg-white bg-opacity-75 text-black p-8 rounded-lg text-center max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">About Recipe Sharing Application</h1>
            <p className="mb-4">
              Welcome to the Recipe Sharing Application! Our platform allows users to share their favorite recipes with the world. 
              You can post new recipes, view recipes posted by others, and interact with the community through ratings and comments. 
              Our goal is to create a vibrant community where cooking enthusiasts can exchange ideas and inspire each other.
            </p>
          </div>
        </div>
      </main>
      <Partners />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};

export default About;