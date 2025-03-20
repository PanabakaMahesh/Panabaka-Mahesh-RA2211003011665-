
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 px-6 mt-8 text-sm text-gray-600 border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="mb-2">© 2023 Average Calculator App</p>
          <p className="text-xs">
            This is a demonstration project created for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
