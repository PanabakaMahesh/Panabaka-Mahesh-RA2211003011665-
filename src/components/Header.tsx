
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center mb-8 bg-gray-100 shadow-sm">
      <div>
        <h1 className="text-gray-800 text-2xl font-semibold">
          Average Calculator App
        </h1>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
