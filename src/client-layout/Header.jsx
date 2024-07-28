import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo.png';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Recipe Logo" className="h-10" />
          <span className="ml-3 text-2xl font-bold">Recipe Sharing</span>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-500">About</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-yellow-500">Menu</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-500">Gallery</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-yellow-500">Blog</Link>
            </li>
            <li>
              <Link to="/login" className="bg-yellow-500 hover:bg-yellow-700 text-black py-2 px-4 rounded">UserLogin</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;