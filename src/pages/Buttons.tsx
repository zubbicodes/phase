import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from '../components/ui/tilt';
import { Sparkles } from '../components/ui/sparkles';

const seriesData = [
  {
    name: 'Metal Buttons',
    image: '/products/buttons/3.jpg',
    description: 'Durable and stylish metal buttons for a classic look.',
  },
  {
    name: 'Plastic Buttons',
    image: '/products/buttons/4.jpg',
    description: 'Versatile and lightweight plastic buttons in various colors and shapes.',
  },
  {
    name: 'Wooden Buttons',
    image: '/products/buttons/5.jpeg',
    description: 'Eco-friendly wooden buttons for a natural and rustic aesthetic.',
  },
  {
    name: 'Shell Buttons',
    image: '/products/buttons/6.jpg',
    description: 'Elegant shell buttons with a unique, iridescent finish.',
  },
  {
    name: 'Coconut  Buttons',
    image: '/products/buttons/0.jpeg',
    description: 'Premium horn buttons for a sophisticated and luxurious touch.',
  },
  {
    name: 'Fabric-Covered Buttons',
    image: '/products/buttons/7.jpg',
    description: 'Customizable fabric-covered buttons to perfectly match your garments.',
  },
];

const Buttons = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Sparkles
            className="w-full h-full"
            color="#FFFFFF"
            background="transparent"
            density={80}
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Buttons
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Exquisite buttons that provide the perfect finishing touch to any garment.
          </motion.p>
        </div>
      </div>

      {/* Feature Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/products/buttons/1.jpg" alt="Connection" className="rounded-lg shadow-lg w-full h-full object-cover"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">CONNECTION</h2>
              <p className="text-gray-300">
                Our buttons are crafted using state-of-the-art technology and a wide range of materials to ensure durability and style. From classic metal to eco-friendly wood, we offer a diverse selection to meet any design need.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">FEATURE</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
                <li>Wide variety of materials, including metal, plastic, wood, and shell.</li>
                <li>Customizable designs and finishes to match any aesthetic.</li>
                <li>Durable and long-lasting, designed to withstand regular use.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/products/buttons/2.jpg" alt="Feature" className="rounded-lg shadow-lg w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Series Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Series</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            {seriesData.map((item, idx) => (
                <motion.div 
                    key={item.name + idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Tilt>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-gray-800 group hover:border-blue-500 transition-all duration-300">
                                <img src={item.image} alt={item.name} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                            <p className="text-gray-400 px-4">{item.description}</p>
                        </div>
                    </Tilt>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Buttons; 