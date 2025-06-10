import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Globe } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    
    { name: 'Products', href: '/products' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
  
  ];

  return (
    <nav className="bg-black/95 sticky top-0 z-50 border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="ADSONS Global"
                className="h-7 w-auto"
                style={{ maxWidth: '160px' }}
              />
            </div>
            {/* Nav links */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 font-medium text-base px-2 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side: Get Started button & Language */}
          <div className="flex items-center space-x-4">
            <a
              href="/get-started"
              className="hidden md:inline-block bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg text-base shadow-sm transition-all duration-200 hover:bg-gray-700 focus:outline-none"
            >
              Get Quote
            </a>
            <button className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded transition-colors duration-200 focus:outline-none">
              <Globe className="w-5 h-5" />
              <span className="font-medium">EN</span>
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/get-started"
              className="block w-full text-center bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg mt-2 transition-all duration-200 hover:bg-gray-700"
            >
              Get Started
            </a>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded transition-colors duration-200 mt-2">
              <Globe className="w-5 h-5" />
              <span className="font-medium">EN</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header; 