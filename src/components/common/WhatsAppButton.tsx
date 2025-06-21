import React, { useState } from 'react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <a
        href="https://wa.me/923008662025"
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-green-500 text-white rounded-full p-2 shadow-lg transform hover:scale-110 transition-transform duration-300 flex items-center justify-center">
          <img src={isHovered ? "/whatsapp.gif" : "/whatsapp.png"} alt="WhatsApp" className="w-8 h-8" />
        </div>
        <div className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
          1
        </div>
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 w-max bg-white text-gray-800 text-sm rounded-lg shadow-lg p-2 transition-opacity duration-300">
            Let's Talk!
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        )}
      </a>
    </div>
  );
};

export default WhatsAppButton; 