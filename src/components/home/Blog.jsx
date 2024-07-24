import React from 'react';
import './Blog.css'; // Import the CSS file
import Rasmalai from '../../images/Rasmalai.png';
import Biryani from '../../images/Biryani.png';
import KashmiriChai from '../../images/KashmiriChai.png';

const blogPosts = [
  {
    id: 1,
    title: 'A Journey Through Rasmalai',
    date: 'July 20, 2024',
    category: 'Desserts',
    description: `Rasmalai, a classic Indian dessert, is a luscious treat that combines the richness of creamy milk with the delicate texture of soft paneer (cottage cheese) dumplings. Originating from the Indian subcontinent, this sweet delight is renowned for its elegant presentation and exquisite taste. The base of Rasmalai is made from chenna, which is prepared by curdling milk with an acidic agent. These soft, spongy dumplings are then soaked in a saffron-infused, cardamom-scented milk, creating a harmonious blend of flavors. Garnished with slivers of pistachios and almonds, Rasmalai is often enjoyed chilled, making it a perfect indulgence for any occasion. Its popularity spans across South Asia and the Indian diaspora, where it is often served during festivals, weddings, and special gatherings. With its rich, velvety texture and aromatic essence, Rasmalai continues to captivate dessert lovers and holds a special place in the world of sweets.`,
    imageUrl: Rasmalai,
  },
  {
    id: 2,
    title: 'Chicken Biryani',
    date: 'July 20, 2024',
    category: 'Rice',
    description: `Chicken Biryani is a sumptuous and aromatic rice dish cherished across the Indian subcontinent for its rich flavor and captivating fragrance. This beloved recipe features succulent chicken marinated in a blend of yogurt, spices, and herbs, then layered with fragrant basmati rice and cooked to perfection. The secret to its irresistible taste lies in the careful balance of spices like garam masala, turmeric, and red chili powder, complemented by fresh cilantro and mint. Often garnished with fried onions and accompanied by cooling raita or pickles, Chicken Biryani makes for an impressive and satisfying meal that brings warmth and joy to any dining occasion. Whether it's a festive celebration or a comforting family dinner, this dish never fails to impress with its vibrant flavors and hearty appeal.`,
    imageUrl: Biryani,
  },
  {
    id: 3,
    title: 'Kashmiri Chai',
    date: 'July 20, 2024',
    category: 'Tea',
    description: `Kashmiri Chai, also known as Noon Chai or Gulabi Chai, is a traditional tea from the picturesque region of Kashmir, renowned for its unique flavor and rich cultural significance. This exquisite beverage is distinguished by its vibrant pink hue, achieved through a meticulous brewing process involving green tea leaves, baking soda, and the slow simmering of milk. The result is a creamy, frothy tea with a subtle nutty flavor, often garnished with crushed almonds and cardamom. Traditionally served in a samovar during special occasions, Kashmiri Chai not only warms the body but also serves as a symbol of hospitality and the rich heritage of the Kashmir Valley. Its distinct taste and preparation method have made it a beloved part of the culinary landscape, inviting tea enthusiasts worldwide to savor a piece of Kashmiri culture.`,
    imageUrl: KashmiriChai,
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative" style={{ paddingTop: '75%' }}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
