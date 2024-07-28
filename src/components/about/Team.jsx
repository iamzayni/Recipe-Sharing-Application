import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Zain from '../../images/team/Zain.png';
import Umair from '../../images/team/Umair.png';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Zain',
    role: 'Co-Founder',
    image: Zain,
    description: 'Leading the company with a vision to innovate and disrupt the industry.',
    socialLinks: [
      { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/zain' },
      { icon: <FaTwitter />, link: 'https://twitter.com/zain' },
    ],
  },
  {
    id: 2,
    name: 'Umair',
    role: 'Lead Developer',
    image: Umair,
    description: 'Building scalable and efficient solutions to drive business growth.',
    socialLinks: [
      { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/umair' },
      { icon: <FaTwitter />, link: 'https://twitter.com/umair' },
    ],
  },
  // Add more team members if needed
];

// Team component
const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-800">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

// Team member component
const TeamMember = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex flex-col items-center p-2 max-w-xs">
      <div className="flex items-center justify-center mb-2">
        <img
          src={member.image}
          alt={member.name}
          className="object-contain"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="text-center">
        <h3 className="text-md font-semibold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.role}</p>
        <p className="text-gray-600 mb-2">{member.description}</p>
        <div className="flex justify-center mt-2">
          {member.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition duration-300 mr-2"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
