import React from 'react';
import { motion } from 'framer-motion';
import { CircularTestimonials } from '../../components/ui/circular-testimonials';

const certificates = [
  {
    quote: 'Certified for safe and sustainable textile production',
    name: 'OEKO-TEX STANDARD 100',
    designation: 'Certification',
    src: '/certificates/3.png',
  },
  {
    quote: 'Recognized for excellence in trim manufacturing',
    name: 'Trim Supplier Qualification',
    designation: 'intertek Certification',
    src: '/certificates/4.png',
  },{
    quote: 'Certified for ethical and responsible business practices',
    name: 'SEDEX',
    designation: 'Certification',
    src: '/certificates/1.png', 
  },
  {
    quote: 'Certified for meeting the Global Recycle Standard',
    name: 'GLOBAL RECYCLE STANDARD',
    designation: 'Certification',
    src: '/certificates/5.png', 
  },
  {
    quote: 'Certified for sustainability with the OKEO-TEX',
    name: 'OKKO-TEX®',
    designation: 'Certification',
    src: '/certificates/madeingreen.png',
  },
  {
    quote: 'Certified for sustainability with the Higg Index',
    name: 'Higgs Index',
    designation: 'Certification',
    src: '/certificates/2.png', 
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

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <CircularTestimonials
              testimonials={certificates}
              autoplay={true}
              autoplayInterval={2000}
              transitionDuration={0.5}
              colors={{
                name: "#fff",
                designation: "#e1e1e1",
                testimony: "#f1f1f7",
                arrowBackground: "#0582CA",
                arrowForeground: "#141414",
                arrowHoverBackground: "#f7f7ff",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
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