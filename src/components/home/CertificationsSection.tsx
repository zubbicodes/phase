import React from 'react';
import { motion } from 'framer-motion';
import { CircularTestimonials } from '../../components/ui/circular-testimonials';

const certificates = [
  {
    quote: 'Certified for safe and sustainable textile production',
    name: 'OEKO-TEX STANDARD 100',
    designation: 'Textile Safety Certification',
    src: '/certificates/new2026/oeko_tex_100.webp',
  },
  {
    quote: 'Traceable label for sustainable and ethical production',
    name: 'OEKO-TEX® MADE IN GREEN',
    designation: 'Sustainable Production Label',
    src: '/certificates/new2026/madeingreen.webp',
  },
  {
    quote: 'Internationally recognized quality management certification',
    name: 'ISO 9001',
    designation: 'Quality Management System',
    src: '/certificates/new2026/iso_9001.webp',
  },
  {
    quote: 'Dedicated to minimizing environmental impact and promoting sustainability',
    name: 'ISO 14001',
    designation: 'Environmental Management System',
    src: '/certificates/new2026/iso_14001.webp',
  },
  {
    quote: 'Ensuring the well-being and safety of every employee',
    name: 'ISO 45001',
    designation: 'Occupational Health & Safety',
    src: '/certificates/new2026/iso_45001.webp',
  },
  {
    quote: 'Verified commitment to recycled content and sustainable practices',
    name: 'GLOBAL RECYCLED STANDARD',
    designation: 'GRS Certification',
    src: '/certificates/new2026/grs_white_bg.webp',
  },
  {
    quote: 'Commitment to ethical trade and responsible supply chains',
    name: 'SEDEX',
    designation: 'Ethical Trade & Supply Chain',
    src: '/Sedex_logo.webp',
  },
  {
    quote: 'Sustainability performance benchmarked against industry standards',
    name: 'HIGG INDEX',
    designation: 'Sustainability Performance',
    src: '/certificates/new2026/higg-index.webp',
  },
  {
    quote: 'Recognized for excellence in trim manufacturing globally',
    name: 'INTERTEK TQP',
    designation: 'Trim Quality Program',
    src: '/certificates/tqp.webp',
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
