// Import necessary components and assets
import React from 'react';
import Header from '../../client-layout/Header';
import Footer from '../../client-layout/Footer';
import backgroundImage from '../../images/Slide-5.jpg'; // Import your background image
import Menu1 from '../menu/Menu1';

// Define the Menu component
const Menu = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero section with background image and overlay */}
        <section
          className="relative bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image here
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Overlay text */}
          <div className="relative flex items-center justify-center h-full text-center">
            <h1 className="text-3xl font-bold text-white">Discover Our Menu</h1>
          </div>
        </section>
        {/* Main content section */}
        <section className="relative z-10 flex-grow">
          {/* Additional content or sections */}
          <Menu1 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;