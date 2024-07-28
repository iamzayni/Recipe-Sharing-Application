import React from 'react';
import Desi from '../../images/Desi.png';
import Chinese from '../../images/Chinese.png';
import Continental from '../../images/Continental.png';

const categories = [
  {
    name: 'Desi',
    image: Desi
  },
  {
    name: 'Chinese',
    image: Chinese
  },
  {
    name: 'Continental',
    image: Continental
  }
];

const RecipeCategories = () => {
  return (
    <div className="py-12 px-4 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Recipe Categories</h2>
      <div className="flex flex-col items-center gap-12 w-full">
        {categories.map((category, index) => (
          <div key={index} className="w-full flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-6 text-center text-gray-700">{category.name}</h3>
            <div className="w-full transform transition duration-500 hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCategories;
