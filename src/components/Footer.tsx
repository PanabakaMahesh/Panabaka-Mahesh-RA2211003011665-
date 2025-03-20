
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 px-6 mt-8 text-sm text-gray-600 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="mb-2 font-medium">Afford Medical Technologies Private Limited</p>
          <p className="text-xs">
            # 203 2nd Main Road, Sadduguntepalya, Hyderabad 500034, Telangana, INDIA. Phone: 91-40-27770568/27755183,
            <br />
            Web: <a href="https://www.affordmed.com" className="text-blue-600 hover:underline">www.affordmed.com</a>, E-mail: <a href="mailto:contact@affordmed.com" className="text-blue-600 hover:underline">contact@affordmed.com</a>, CIN: U72200TG2018PTCOTP118807, UDYAM-TS-23-0019232
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
