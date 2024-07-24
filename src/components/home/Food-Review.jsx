import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'The food was absolutely wonderful, from preparation to presentation, very pleasing.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'We enjoyed the atmosphere and the friendly staff.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Mark Wilson',
    review: 'A bit overpriced for the quality, but overall a decent experience.',
    rating: 3,
  },
];

const FoodReview = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Food Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodReview;
