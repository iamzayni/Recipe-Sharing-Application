import React from 'react';
import Image1 from '../../images/aboutUs/Image-1.png'

const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Welcome to Recipe Sharing</h1>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Welcome to Recipe Sharing! We're a community of food enthusiasts dedicated to sharing and discovering recipes from around the world. Our mission is to inspire culinary creativity and connect people through the joy of cooking. Join us and explore new recipes, share your favorites, and connect with fellow food lovers. Happy cooking!
            </p>
            <p className="text-gray-500 italic mb-4">
              — Zain Ul Abideen, Founder
            </p>
          </div>
          <div className="relative">
            <img
              src={Image1}
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;