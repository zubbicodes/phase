import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tilt } from '../components/ui/tilt';
import StickyScroll from '../components/ui/sticky-scroll';

const features = [
  'This webbing was made with fine gloss color yarn. Various yarns can be woven/printed with various pattern types such as rainbow, grid, gradient, or reflective yarn to present enhanced multi-color, surface texture, and unique effects.',
  'ADSONS webbing produced by eco-friendly dyeing offers vibrant color for every method.',
  'Webbing with spring joint processes for softness & tenacious flexibility and suitable for footwear, garments, sportswear, underseat bag & accessories.'
];

const essentials = [
  {
    name: 'Woven Tape',
    image: '/products/tapes/2.jpg',
    description: 'Customization and integration of over 8 yarn types to create various textile & pattern and unique quality.'
  },
  {
    name: 'Thick & Thin Knit Tape',
    image: '/products/tapes/3.jpg',
    description: 'Soft, light, and flexible with various textile patterns and highly textile structure.'
  },
  {
    name: 'Braided Tape',
    image: '/products/tapes/4.jpg',
    description: 'Silky & cross piping structure utilized with several uniform yarns to present slight grip, resistance structure for piping and edge tape.'
  }
];

const Tapes = () => {
  return (
    <StickyScroll>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        
        <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Tapes & Webbing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Innovative, durable, and customizable cords and webbing for every application.
            </motion.p>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Feature</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <ul className="list-disc pl-6 space-y-3 flex-1">
              {features.map((f, i) => (
                <li key={i} className="text-lg text-gray-300">{f}</li>
              ))}
            </ul>
            <img src="/products/tapes/1.jpg" alt="Cords Feature" className="rounded-lg w-full max-w-xs md:max-w-sm" />
          </div>
        </div>

        {/* Essentials Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {essentials.map((item, idx) => (
              <Tilt className="h-full" key={item.name + idx}>
                <Card className="bg-black/50 border-gray-800 hover:border-gray-700 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">{item.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-xs md:text-sm">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video relative rounded-lg overflow-hidden mb-2">
                      <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </StickyScroll>
  );
};

export default Tapes; 