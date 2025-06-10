import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Zap } from 'lucide-react';

const practices = [
  {
    icon: Leaf,
    title: 'Eco-Friendly Materials',
    description: 'Using sustainable and biodegradable materials in our production processes',
  },
  {
    icon: Recycle,
    title: 'Waste Reduction',
    description: 'Implementing comprehensive recycling and waste management systems',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Optimizing energy consumption through modern manufacturing practices',
  },
];

const SustainabilitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sustainability Practices
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Committed to environmental responsibility through innovative practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <practice.icon className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-gray-400">
                    {practice.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Eco Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[url('/eco-pattern.png')] bg-repeat" />
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection; 