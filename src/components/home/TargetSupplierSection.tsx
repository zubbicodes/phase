import React from 'react';
import { motion } from 'framer-motion';

const TargetSupplierSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Target's Nominated Supplier
            </h2>
            <p className="text-gray-300 text-lg">
              Trusted for our unwavering commitment to quality, compliance, and ethical standards. 
              Our partnership with Target reflects our dedication to excellence in every product we deliver.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src="/target-logo2.png"
                  alt="Target Logo"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-6 -right-6 z-20"
            >
              <img
                src="/certified.png"
                alt="Certified Badge"
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetSupplierSection; 