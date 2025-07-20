import { ButtonProps } from '@/interfaces';
import React from 'react';


const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default Button;
