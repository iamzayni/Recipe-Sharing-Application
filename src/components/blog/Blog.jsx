import React from 'react';
import Header from '../../client-layout/Header';
import Footer from '../../client-layout/Footer';
import VideoSrc from '../../video/Video.mp4';
import RecipeForm from '../blog/RecipeForm';

function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Delicious Recipes to Try at Home</h1>
              <p className="text-lg text-gray-700 mb-6">
                Our blog shares mouth-watering recipes that are easy to make and packed with flavor.
              </p>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Latest Recipes</h2>
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                <li>Spaghetti Bolognese with a Twist</li>
                <li>Roasted Vegetable Soup</li>
                <li>Decadent Chocolate Lava Cake</li>
              </ul>
              <p className="text-lg text-gray-700">
                Ready to make something delicious? Check out our recipes and impress your friends and family!
              </p>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <div className="w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-lg">
                <video className="w-full h-full object-cover" controls autoPlay loop>
                  <source src={VideoSrc} type="video/mp4" />
                  <img src="placeholder-image.jpg" alt="Video Placeholder" className="w-full h-full object-cover" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white py-8 shadow-md">
        <RecipeForm />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
