import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from '../components/ui/tilt';
import { Sparkles } from '../components/ui/sparkles';

const seriesData = [
  {
    name: 'BRD Braiding Series',
    image: '/products/cords/3.jpg',
    description: 'Patterns and textures, tactility, round or flat shape of braided drawcords can be customized.',
  },
  {
    name: 'SL001 Oval Series',
    image: '/products/cords/4.jpg',
    description: 'The classic oval lace has good tensile strength and excellent abrasion resistance.',
  },
  {
    name: 'IK Series',
    image: '/products/cords/5.jpg',
    description: 'IK flat shoelace is piece-dyed, soft, and with excellent loose-resistance.',
  },
  {
    name: 'SBR Rubber String Series',
    image: '/products/cords/6.jpg',
    description: 'High-quality rubber as the core for outstanding stretchability.',
  },
  {
    name: 'Jacquard Series',
    image: '/products/cords/7.jpg',
    description: 'Flat or round shoelace with delicate jacquard patterns.',
  },
  {
    name: 'Wide+Narrow Series',
    image: '/products/cords/8.jpg',
    description: 'One-piece wide & narrow drawcords. The dimensions can be customized.',
  },
  {
    name: 'Knit Cord Series',
    image: '/products/cords/9.jpg',
    description: 'Knit cord with multi-color space-dyed yarn and ultra-soft tactility.',
  },
  {
    name: 'Reflective Series',
    image: '/products/cords/10.jpg',
    description: 'Refined and thin multi-color reflective yarn to present reflective aesthetics and can reflect light coming from any angle.',
  },
  {
    name: 'Screen | Sublimation Print Series',
    image: '/products/cords/11.jpg',
    description: 'Delicate screen printed logos or sublimation printed pattern deliver the diversity of cord.',
  },
];

const Cords = () => {
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
            Cords
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            High-performance cords for every need, from fashion to industrial applications.
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
              <img src="/products/cords/1.jpg" alt="Connection" className="rounded-lg shadow-lg w-full h-full object-cover"/>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">CONNECTION</h2>
              <p className="text-gray-300">
              Adson offers precision weaving and knitting machines, along with a variety of yarns—including reflective yarn, radiant film, mono, Lurex, and spun polyester—to create diverse textile structures and textures. These innovations enable unique finishes such as suedette, jacquard woven patterns, narrow-wide designs, and reflective drawcords and shoelaces.
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
                <li>Diversified textile structures and textures with softness.</li>
                <li>PET recycled yarn is available for all shoelace and drawcord materials.</li>
                <li>Post-processes such as sublimation print, reflective film lamination, or screen printing...etc, are available as well.</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/products/cords/2.jpg" alt="Feature" className="rounded-lg shadow-lg w-full h-full object-cover" />
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

export default Cords; 