import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">🏡 LuxStay</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Rooms
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Mansions
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Countryside
          </a>
        </nav>
        <div className="space-x-2">
          <button className="text-gray-600 hover:text-gray-900">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
