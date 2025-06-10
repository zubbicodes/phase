import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Products', href: '/products' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
  ];

  const productsList = [
    { name: 'Elastics', href: '/products/elastics' },
    { name: 'Cords', href: '/products/cords' },
    { name: 'Tapes', href: '/products/tapes' },
    { name: 'Buttons', href: '/products/buttons' },
  ];

  return (
    <nav className="bg-black/95 sticky top-0 z-50 border-b border-transparent mt-4">
      <div className="w-full px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img
                src="/ad_logo.png"
                alt="ADSONS Logo"
                className="h-7 w-7"
                style={{ maxWidth: '32px' }}
              />
              <span className="text-white font-bold text-2xl tracking-tight font-sans select-none">adsons</span>
            </div>
            {/* Nav links */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) =>
                item.name === 'Products' ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      className="flex items-center text-gray-200 font-medium text-base px-2 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white cursor-right-up"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {/* Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-40 bg-gray-900 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                        {productsList.map((prod) => (
                          <a
                            key={prod.name}
                            href={prod.href}
                            className="block px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white rounded transition-colors duration-150 text-base cursor-right-up"
                          >
                            {prod.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-200 font-medium text-base px-2 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white cursor-right-up"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right side: Get Quote button & Language */}
          <div className="flex items-center space-x-4">
            <a
              href="/get-quote"
              className="hidden md:inline-block bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg text-base shadow-sm transition-all duration-200 hover:bg-gray-700 focus:outline-none cursor-right-up"
            >
              Contact Us
            </a>
            <button className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded transition-colors duration-200 focus:outline-none cursor-right-up">
              <Globe className="w-5 h-5" />
              <span className="font-medium">EN</span>
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none cursor-right-up"
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
            {/* Products dropdown for mobile */}
            <div className="relative">
              <button
                onClick={() => setProductsDropdownOpen((open) => !open)}
                className="flex items-center w-full text-gray-200 font-medium text-base px-2 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white cursor-right-up"
              >
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {productsDropdownOpen && (
                <div className="mt-1 ml-4 w-40 bg-gray-900 rounded-xl shadow-lg py-2 z-50 animate-fade-in">
                  {productsList.map((prod) => (
                    <a
                      key={prod.name}
                      href={prod.href}
                      className="block px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white rounded transition-colors duration-150 text-base cursor-right-up"
                    >
                      {prod.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Other nav links */}
            {navigation.filter((item) => item.name !== 'Products').map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-right-up"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/get-quote"
              className="block w-full text-center bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg mt-2 transition-all duration-200 hover:bg-gray-700 cursor-right-up"
            >
              Get Quote
            </a>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded transition-colors duration-200 mt-2 cursor-right-up">
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