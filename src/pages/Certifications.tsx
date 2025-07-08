import React from 'react';
import { motion } from 'framer-motion';
import StickyScroll from '../components/ui/sticky-scroll';
import { Helmet } from 'react-helmet-async';

const Certifications = () => {
  const certifications = [
    {
      title: 'OEKO-TEX STANDARD 100',
      description: 'Certified for safe and sustainable textile production',
      image: '/certificates/3.png',
      details: 'This certification ensures that our textile products are free from harmful substances and meet the highest standards of human-ecological safety.',
      benefits: [
        'Product safety assurance',
        'Sustainable production practices',
        'Regular testing and monitoring',
        'International recognition'
      ]
    },
    {
      title: 'Trim Supplier Qualification',
      description: 'Recognized for excellence in trim manufacturing',
      image: '/certificates/4.png',
      details: 'Our trim manufacturing processes meet the highest industry standards, ensuring quality and consistency in every product.',
      benefits: [
        'Quality assurance',
        'Process standardization',
        'Industry recognition',
        'Customer confidence'
      ]
    },
    {
      title: 'SEDEX',
      description: 'Certified for ethical and responsible business practices',
      image: '/certificates/1.png',
      details: 'SEDEX certification demonstrates our commitment to ethical business practices, labor rights, and environmental responsibility.',
      benefits: [
        'Ethical business practices',
        'Labor rights protection',
        'Environmental responsibility',
        'Supply chain transparency'
      ]
    },
    {
      title: 'GLOBAL RECYCLE STANDARD',
      description: 'Certified for meeting the Global Recycle Standard',
      image: '/certificates/5.png',
      details: 'This certification verifies our commitment to recycling and sustainable material usage in our production processes.',
      benefits: [
        'Recycling verification',
        'Sustainable materials',
        'Environmental impact reduction',
        'Circular economy support'
      ]
    },
    {
      title: 'OKKO-TEX®',
      description: 'Certified for sustainability with the OKEO-TEX',
      image: '/certificates/madeingreen.png',
      details: 'Our OKKO-TEX® certification ensures sustainable and environmentally friendly production processes.',
      benefits: [
        'Sustainable production',
        'Environmental protection',
        'Resource efficiency',
        'Green manufacturing'
      ]
    },
    {
      title: 'Higgs Index',
      description: 'Certified for sustainability with the Higg Index',
      image: '/certificates/2.png',
      details: 'The Higg Index certification measures and evaluates our environmental and social sustainability performance.',
      benefits: [
        'Sustainability measurement',
        'Performance tracking',
        'Continuous improvement',
        'Industry benchmarking'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Certifications | ADSONS Group of Industries</title>
        <meta name="description" content="View ADSONS' certifications including OEKO-TEX, Target nominated supplier, and more. Commitment to quality, compliance, and sustainable manufacturing." />
        <meta name="keywords" content="certifications, OEKO-TEX, Target nominated supplier, quality, compliance, sustainable manufacturing, textile certifications, ADSONS" />
        <meta property="og:title" content="Certifications | ADSONS Group of Industries" />
        <meta property="og:description" content="View ADSONS' certifications including OEKO-TEX, Target nominated supplier, and more. Commitment to quality, compliance, and sustainable manufacturing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/certifications" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certifications | ADSONS Group of Industries" />
        <meta name="twitter:description" content="View ADSONS' certifications including OEKO-TEX, Target nominated supplier, and more. Commitment to quality, compliance, and sustainable manufacturing." />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>
      <StickyScroll>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
            <div className="relative z-10 text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Our Certifications
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Validating our commitment to quality, sustainability, and ethical practices
              </motion.p>
            </div>
          </section>

          {/* Certifications Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-16">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
                  >
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div className="flex items-center justify-center">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="max-w-full h-auto max-h-48 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
                        <p className="text-gray-300 mb-4">{cert.description}</p>
                        <p className="text-gray-400 mb-6">{cert.details}</p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-blue-400">Key Benefits:</h4>
                          <ul className="list-disc list-inside text-gray-300">
                            {cert.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Commitment to Excellence
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  We continuously strive to maintain and improve our standards, ensuring that our products 
                  and processes meet the highest industry requirements while promoting sustainable and 
                  ethical practices throughout our operations.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </StickyScroll>
    </>
  );
};

export default Certifications; 