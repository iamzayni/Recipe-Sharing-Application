import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Simple Recipes For Spring',
    date: 'Jan 20, 2020',
    category: 'Business Tips',
    description: 'My favorite form of cold-weather exercise is snow-shoeing, but by chance I haven’t been able to go this year. Busy working at the computer when fresh snow fell...',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Dinner Party For A Chef!',
    date: 'Oct 18, 2020',
    category: 'Chef Dinner',
    description: 'I began my career as a recipe tester for cookbooks, and I did that work for years. We loved cookbooks and loved browsing for them at thrift stores...',
    imageUrl: '/path/to/image2.jpg',
  },
  {
    id: 3,
    title: 'Cake With Cream Cheese',
    date: 'Jan 20, 2020',
    category: 'Food Cheese',
    description: 'I’ve been baking this cake for many years, and have experimented with making it into cupcakes, as a layer cake, serving it dusted with confectioner’s sugar...',
    imageUrl: '/path/to/image3.jpg',
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-600">{post.date}</p>
              <h2 className="text-xl font-bold my-2">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
