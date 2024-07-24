import React from 'react';
import Header from '../../client-layout/Header';
import Footer from '../../client-layout/Footer';
import backgroundImage from '../../images/Slide-5.jpg'; // Import your background image

const Menu = () => {
  return (
    <div>
      <Header />
      <main className="relative min-h-screen flex flex-col">
        {/* Container for background image and overlay */}
        <div className="relative bg-cover bg-center" style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image here
            height: '500px' // Set your desired height here
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay text */}
          <div className="relative flex items-center justify-center h-full text-center">
            <h1 className="text-3xl font-bold text-white">Discover Our Menu</h1>
          </div>
        </div>
        {/* Main content here */}
        <div className="relative z-10 flex-grow">
          {/* Additional content or sections */}
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Menu;
