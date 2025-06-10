import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Phone: 04-1-5482001</p>
              <p className="text-gray-400">Email: info@adsonsent.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">ADSONS Global</h3>
            <p className="text-gray-400">
              Premium elastics, cords, and tapes manufacturer committed to quality and sustainability.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} ADSONS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 