import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-white font-semibold">Ravindra Gudala</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Ravindra Gudala. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;