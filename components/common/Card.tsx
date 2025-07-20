import { CardProps } from '@/interfaces';
import React from 'react';


const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
