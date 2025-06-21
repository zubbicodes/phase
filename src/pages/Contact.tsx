import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Get in touch with us for any queries, support, or business opportunities.
          </motion.p>
        </div>
      </section>
      {/* Contact Info & Map Section */}
      <section className="w-full bg-gray-900 py-12 px-4 md:px-16 lg:px-32 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Head Office</h3>
              <p className="text-gray-400 text-lg">Main Jaranwala Road,.<br />Faisalabad, Pakistan 38000</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Email</h3>
              <a href="mailto:info@adsonsent.com" className="text-accent-color hover:underline text-lg">info@adsonsent.com</a>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <a href="tel:041-5482001" className="text-accent-color hover:underline text-lg">041-5482001</a>
            </div>
            <div className="flex items-center space-x-4">
              <h3 className="text-2xl font-semibold">Whatsapp</h3>
              <a href="https://wa.me/923008662025" target="_blank" rel="noopener noreferrer" className="text-accent-color hover:underline text-lg">
                <FaWhatsapp size={32} />
              </a>
            </div>
          </motion.div>
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full h-80 md:h-[32rem] rounded-lg overflow-hidden shadow-lg border border-gray-800"
          >
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6629993092142!2d73.15069257536985!3d31.39585455328384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922670060e2c747%3A0x72dbd8b45ff23b16!2sADSONS%20Global!5e0!3m2!1sen!2s!4v1750452728001!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 