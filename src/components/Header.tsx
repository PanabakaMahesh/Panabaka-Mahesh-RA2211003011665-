
import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="w-full py-6 px-6 flex justify-between items-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <div className="relative">
          <h1 className="text-affordmed-blue text-2xl md:text-3xl font-bold">
            AFFORDMED<span className="text-xs align-top">®</span>
          </h1>
          <p className="text-affordmed-green text-xs italic mt-1">
            Technology, Innovation & Affordability
          </p>
          <div className="absolute -right-6 top-0">
            <img 
              src="/public/lovable-uploads/8c806e74-7268-4947-83f6-d93d7201452d.png" 
              alt="Leaf" 
              className="w-8 h-auto"
            />
          </div>
        </div>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-affordmed-blue transition-colors">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-affordmed-blue transition-colors">Services</a></li>
          <li><a href="#" className="text-gray-700 hover:text-affordmed-blue transition-colors">About Us</a></li>
          <li><a href="#" className="text-gray-700 hover:text-affordmed-blue transition-colors">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
