import React, { useState, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Workflow', href: '/workflow' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
  ];

  const productsList = [
    { name: 'Elastics', href: '/products/elastics' },
    { name: 'Cords', href: '/products/cords' },
    { name: 'Tapes', href: '/products/tapes' },
    { name: 'Buttons', href: '/products/buttons' },
    { name: 'Fabrics', href: '' },
    { name: 'Labels', href: '' },
    { name: 'Yarn', href: '' },
    { name: 'Zipper', href: '' },
  ];

  // Dropdown handlers with delay
  const handleProductsMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setProductsDropdownOpen(true);
  };
  const handleProductsMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 200); // 200ms delay
  };
  const handleDropdownMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setProductsDropdownOpen(true);
  };
  const handleDropdownMouseLeave = () => {
    setProductsDropdownOpen(false);
  };

  return (
    <nav className="bg-black/70 fixed top-0 left-0 w-full z-[50] border-b border-transparent">
      <div className="w-full px-4 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <img
                src="/logo_no_bg.png"
                alt="ADSONS Logo"
                className="h-7 w-7"
                style={{ maxWidth: '32px' }}
              />
              <span className="text-white font-bold text-2xl tracking-tight font-sans select-none">adsons</span>
            </Link>
            {/* Nav links */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) =>
                item.name === 'Products' ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleProductsMouseEnter}
                    onMouseLeave={handleProductsMouseLeave}
                  >
                    <button
                      className="flex items-center text-gray-200 font-medium text-base px-2 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white cursor-right-up"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {/* Dropdown */}
                    {productsDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 w-40 bg-gray-900 rounded-xl shadow-lg py-2 z-50 animate-fade-in"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        {productsList.map((prod) => (
                          <Link
                            key={prod.name}
                            to={prod.href}
                            className="block px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white rounded transition-colors duration-150 text-base cursor-right-up"
                          >
                            {prod.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-200 font-medium text-base px-2 py-2 rounded transition-colors duration-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:text-white cursor-right-up"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right side: Get Quote button & Language */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:inline-block bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg text-base shadow-sm transition-all duration-200 hover:bg-gray-700 focus:outline-none cursor-right-up"
            >
              Contact Us
            </Link>
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
                    <Link
                      key={prod.name}
                      to={prod.href}
                      className="block px-3 py-2 text-gray-200 hover:bg-gray-800 hover:text-white rounded transition-colors duration-150 text-base cursor-right-up"
                    >
                      {prod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Other nav links */}
            {navigation.filter((item) => item.name !== 'Products').map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300 cursor-right-up"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg mt-2 transition-all duration-200 hover:bg-gray-700 cursor-right-up"
            >
              Contact Us
            </Link>
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