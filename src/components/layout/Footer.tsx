import React from 'react';
import { Linkedin, Twitter, Circle } from 'lucide-react';

const mainMenu = [
  { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
  { name: 'Workflow', href: '/workflow' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

const productLinks = [
  { name: 'Elastics', href: '/products/elastics', isNew: true },
  { name: 'Cords', href: '/products/cords', isNew: false },
  { name: 'Tapes', href: '/products/tapes', isNew: true },
  { name: 'Buttons', href: '/products/buttons', isNew: true },
  { name: 'Fabric', href: '' },
  { name: 'Lables',},
  { name: 'Yarn',},
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Main Menu */}
          <div>
            <h4 className="text-xs text-gray-400 font-semibold mb-6 tracking-widest uppercase">Main Menu</h4>
            <ul className="space-y-3">
              {mainMenu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white text-lg font-light hover:underline transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Products */}
          <div>
            <h4 className="text-xs text-gray-400 font-semibold mb-6 tracking-widest uppercase">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <a
                    href={link.href}
                    className="text-white text-lg font-light hover:underline transition"
                  >
                    {link.name}
                  </a>
                  {link.isNew && (
                    <span className="ml-1 px-2 py-0.5 text-xs rounded bg-green-900 text-green-300 font-semibold">NEW</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-xs text-gray-400 font-semibold mb-6 tracking-widest uppercase">Contact</h4>
            <div className="space-y-3 text-white text-lg font-light">
            <div>Phone: <a href="tel:04-1-5482001" className="hover:underline">041-5482001</a></div>
            <div>Email: <a href="mailto:info@adsonsent.com" className="hover:underline">info@adsonsent.com</a></div>
              <div>
                <span className="block font-semibold text-sm text-gray-300">Head Office</span>
                <span className="block text-sm text-gray-400">193-VIP Block, Street No. 2, Canal Park, Faisalabad</span>
              </div>
              <div>
                <span className="block font-semibold text-sm text-gray-300">Master Unit</span>
                <span className="block text-sm text-gray-400">Street No. 2, Yaseen Chowk, Jaranwala Road, Faisalabad</span>
              </div>
              
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={22} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter size={22} /></a>
                <a href="#" className="text-gray-400 hover:text-white" title="Discord"><Circle size={22} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col items-center gap-1 mb-4">
            <span className="text-s text-gray-400">ADSONS GLOBAL PRIVATE LIMITED</span>
            <span className="text-s text-gray-400">ADSONS GLOBAL</span>
            <span className="text-s text-gray-400">ADSONS ENTERPRISES</span>
            <span className="text-s text-gray-400">AIMS INTERNATIONAL</span>
          </div>
          <span className="text-5xl font-bold text-white tracking-tight mb-8">ADSONS GROUP OF INDUSTRIES</span>
          
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-12 border-t border-gray-800 pt-8 gap-6">
          <span className="text-xs text-gray-500 mt-2 md:mt-0">© {new Date().getFullYear()} ADSONS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 