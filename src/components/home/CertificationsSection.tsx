import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'OEKO-TEX STANDARD 100',
    description: 'Certified for safe and sustainable textile production',
    image: '/OEKO_TEX.jpg',
  },
  {
    name: 'Trim Supplier Qualification',
    description: 'Recognized for excellence in trim manufacturing',
    image: '/intertek.png',
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certified for Excellence
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our commitment to quality and sustainability is validated by internationally recognized certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-32 h-32 relative">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We maintain rigorous quality control processes and continuously invest in sustainable practices
            to ensure our products meet the highest industry standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection; 