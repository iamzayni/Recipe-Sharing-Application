import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  { question: 'How do I submit a recipe?', answer: 'To submit a recipe, click on the "Submit Recipe" button on the homepage and fill out the required details in the form.' },
  { question: 'Can I edit my submitted recipes?', answer: 'Yes, you can edit your submitted recipes by navigating to your profile and selecting the recipe you want to update.' },
  { question: 'How can I rate a recipe?', answer: 'To rate a recipe, go to the recipe page and use the rating stars provided below the recipe details.' },
  { question: 'Do I need an account to view recipes?', answer: 'No, you can view recipes without an account. However, to submit, rate, or comment on recipes, you need to create an account.' },
  { question: 'Is there a way to save my favorite recipes?', answer: 'Yes, you can save your favorite recipes by clicking the "Save" button on each recipe page. Your saved recipes can be accessed from your profile.' },
  // Add more FAQs as needed
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center mb-6 p-2 bg-white shadow-sm rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
      <div className="w-full flex flex-wrap">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-3 bg-gray-100 rounded-lg shadow-sm p-3 w-full md:w-1/2 lg:w-1/3"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-md font-semibold text-gray-700">{faq.question}</h3>
              <span className="text-gray-700">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
