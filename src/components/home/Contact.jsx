import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <div className="bg-white shadow-md rounded-md p-4 inline-block">
          <p className="mb-2 text-base">
            Phone: <a href="tel:+923214338245" className="text-blue-500 hover:text-blue-700">+923214338245</a>
          </p>
          <p className="text-base">
            Email: <a href="mailto:zayni.writes819@gmail.com" className="text-blue-500 hover:text-blue-700">zayni.writes819@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
