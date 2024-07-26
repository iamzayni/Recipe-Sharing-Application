import React from 'react';
import Award1 from '../../images/awards/Award1.png';
import Award2 from '../../images/awards/Award2.png';
import Award3 from '../../images/awards/Award3.png';
import Award4 from '../../images/awards/Award4.png';
import Award5 from '../../images/awards/Award5.png';
import Award6 from '../../images/awards/Award6.png';

// Award details data
const awards = [
  {
    id: 1,
    image: Award1,
    company: 'Company A',
    description: 'Awarded Best Innovation in 2023 for introducing groundbreaking technology that transformed the industry and set new standards for innovation.',
  },
  {
    id: 2,
    image: Award2,
    company: 'Company B',
    description: 'Recognized for Excellence in Customer Service due to outstanding support and dedication to delivering exceptional client experiences.',
  },
  {
    id: 3,
    image: Award3,
    company: 'Company C',
    description: 'Named Top Startup of the Year for remarkable growth, disruptive technology, and a significant impact on the market within a short period.',
  },
  {
    id: 4,
    image: Award4,
    company: 'Company D',
    description: 'Honored with Outstanding Achievement in Technology for innovative solutions that have revolutionized traditional practices and improved efficiency.',
  },
  {
    id: 5,
    image: Award5,
    company: 'Company E',
    description: 'Awarded Best Design for exceptional product design, emphasizing creativity, functionality, and user-centric approaches that enhance usability.',
  },
  {
    id: 6,
    image: Award6,
    company: 'Company F',
    description: 'Received Leadership Award for demonstrating exceptional leadership qualities, visionary thinking, and the ability to inspire and lead teams to success.',
  },
];

const Award = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-white">
      <h2 className="text-xl font-semibold mb-8">A Recognized Track-Record Of Excellence</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {awards.map((award) => (
          <div key={award.id} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md">
            <img src={award.image} alt={`Award ${award.id}`} className="h-16 mb-2" />
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">{award.company}</h3>
              <p className="text-gray-600 text-sm">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Award;
