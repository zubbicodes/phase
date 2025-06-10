import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  {
    name: 'Walmart',
    logo: '/clients/walmart.png',
  },
  {
    name: 'Artistic Milliners',
    logo: '/clients/artistic-milliners.png',
  },
  // Add more clients as needed
];

const TrustedClientsSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Trusted Clients
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Partnering with industry leaders who trust our quality and reliability
          </p>
        </motion.div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 cursor-right-up"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-right-up"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl font-semibold text-white mb-4">
              "DELIVER COMPANY OF THE FUTURE"
            </p>
            <p className="text-gray-400">
              Recognized for our innovative approach and commitment to excellence
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClientsSection; 