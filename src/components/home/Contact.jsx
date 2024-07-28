import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <div className="bg-white shadow-md rounded-md p-6 inline-block">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center mb-4">
              <FiPhone className="text-blue-500 mr-2" size={24} />
              <p className="text-base">
                <span className="font-bold">Phone:</span>{' '}
                <a href="tel:+923214338245" className="text-blue-500 hover:text-blue-700">
                  +923214338245
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <FiMail className="text-blue-500 mr-2" size={24} />
              <p className="text-base">
                <span className="font-bold">Email:</span>{' '}
                <a href="mailto:zayni.writes819@gmail.com" className="text-blue-500 hover:text-blue-700">
                  zayni.writes819@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
