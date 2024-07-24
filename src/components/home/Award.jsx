import React from 'react';

const Award = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h2 className="text-xl font-semibold mb-8">A Recognized Track-Record Of Excellence</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <img src="https://via.placeholder.com/64" alt="Soil Association Organic Food Awards 2013" className="h-16" />
        <img src="https://via.placeholder.com/64" alt="The Food Awards London 2016" className="h-16" />
        <img src="https://via.placeholder.com/64" alt="Great British Food Awards 2016" className="h-16" />
        <img src="https://via.placeholder.com/64" alt="Food Made Good" className="h-16" />
        <img src="https://via.placeholder.com/64" alt="Good Food Awards Gold Seal 2013" className="h-16" />
        <img src="https://via.placeholder.com/64" alt="Great Taste 2015" className="h-16" />
      </div>
    </div>
  );
};

export default Award;
