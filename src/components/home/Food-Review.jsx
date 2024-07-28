import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Ahmed Khan',
    review: 'Rasmalai was incredibly delicious! The texture and sweetness were perfect. Highly recommend it.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Ali',
    review: 'The Chicken Biryani was a delight! The spices were just right, and the chicken was tender. A must-try!',
    rating: 4,
  },
  {
    id: 3,
    name: 'Zainab Malik',
    review: 'The Kashmiri Chai was aromatic and soothing. The perfect blend of spices made it a great experience.',
    rating: 4,
  },
];

const FoodReview = () => {
  return (
    <div className="container mx-auto p-6 md:p-12 lg:p-24">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Food Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">{review.name}</h3>
              <div className="ml-2 flex items-center">
                {[...Array(review.rating).keys()].map((index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-lg">{review.review}</p>
            <div className="flex justify-end mt-4">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodReview;
