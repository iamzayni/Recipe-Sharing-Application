// FAQs.jsx
import React from 'react';

const faqs = [
  { question: 'How do I submit a recipe?', answer: 'To submit a recipe, click on the "Submit Recipe" button on the homepage and fill out the required details in the form.' },
  { question: 'Can I edit my submitted recipes?', answer: 'Yes, you can edit your submitted recipes by navigating to your profile and selecting the recipe you want to update.' },
  { question: 'How can I rate a recipe?', answer: 'To rate a recipe, go to the recipe page and use the rating stars provided below the recipe details.' },
  { question: 'Do I need an account to view recipes?', answer: 'No, you can view recipes without an account. However, to submit, rate, or comment on recipes, you need to create an account.' },
  { question: 'Is there a way to save my favorite recipes?', answer: 'Yes, you can save your favorite recipes by clicking the "Save" button on each recipe page. Your saved recipes can be accessed from your profile.' },
  // Add more FAQs as needed
];

const FAQs = () => {
  return (
    <div className="flex flex-col items-center mb-8 p-4 bg-white shadow-sm rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{faq.question}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
