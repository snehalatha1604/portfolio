import React from 'react';
import { FaGoogle, FaMicrosoft, FaYoutube } from 'react-icons/fa';

const ExperienceCard = ({ experience }) => {
  // Function to get the correct icon
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'FaGoogle':
        return <FaGoogle className="text-red-500 text-2xl" />;
      case 'FaMicrosoft':
        return <FaMicrosoft className="text-blue-500 text-2xl" />;
      case 'FaYoutube':
        return <FaYoutube className="text-red-600 text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg">
      {/* Job Title and Date */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {getIcon(experience.icon)}
          <h3 className="text-xl font-bold">{experience.title}</h3>
        </div>
        <span className="text-gray-400 text-sm">{experience.date}</span>
      </div>

      {/* Description */}
      <p className="text-gray-300 mt-4 text-sm leading-relaxed">{experience.desc}</p>
    </div>
  );
};

export default ExperienceCard;
