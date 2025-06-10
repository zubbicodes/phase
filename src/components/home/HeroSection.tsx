import React from 'react';
import { motion } from 'framer-motion';
import { SparklesText } from '../../components/ui/sparkles-text';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black py-16">
      <div className="w-full max-w-7xl mx-auto text-center px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 font-sans whitespace-nowrap"
          style={{ letterSpacing: '-0.03em' }}
        >
          Pre-Shrink <span className="inline-block"><SparklesText text="Elastic" className="inline text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold" /></span> Experts
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl text-gray-400 mb-10 font-medium font-sans"
        >
          Premium quality elastics, cords, and tapes for the most demanding applications
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg font-sans cursor-right-up"
          >
            Explore Our Products
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 