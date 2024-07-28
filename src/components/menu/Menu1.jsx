// Menu1.js
import React from 'react';
import R1 from '../../images/menu/R1.jpg';
import R2 from '../../images/menu/R2.jpg';
import R3 from '../../images/menu/R3.jpg';
import R4 from '../../images/menu/R4.jpg';
import R5 from '../../images/menu/R5.jpg';
import R6 from '../../images/menu/R6.jpg';
import R7 from '../../images/menu/R7.jpg';
import R8 from '../../images/menu/R8.jpg';
import R9 from '../../images/menu/R9.jpg';
import R10 from '../../images/menu/R10.jpg';

const recipes = [
  { name: 'Kimbula Banis with Tea', image: R1 },
  { name: 'Dark Chocolate Cake', image: R2 },
  { name: 'Momos', image: R3 },
  { name: 'Tikka Masala', image: R4 },
  { name: 'Pani Puri', image: R5 },
  { name: 'Club Sandwich', image: R6 },
  { name: 'Aloo Gosht', image: R7 },
  { name: 'Achari Keema', image: R8 },
  { name: 'Potato Stuffed Paratha', image: R9 },
  { name: 'Keema Pulao', image: R10 }
];

const Menu1 = () => {
  return (
    <div className="py-12 px-4 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <div className="w-full h-80"> 
              <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6"> 
              <h3 className="text-2xl font-semibold text-gray-800">{recipe.name}</h3> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu1;
