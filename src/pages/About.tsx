import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Zap, Users, Target, Award } from 'lucide-react';
import StickyScroll from '../components/ui/sticky-scroll';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services',
    },
    {
      icon: Users,
      title: 'Innovation',
      description: 'Continuously pushing boundaries to create better solutions',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Operating with honesty, transparency, and ethical practices',
    }
  ];

  const sustainabilityPractices = [
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

  return (
    <>
      <Helmet>
        <title>About Us | ADSONS Group of Industries</title>
        <meta name="description" content="Learn about ADSONS, a leader in sustainable manufacturing, innovation, and certified preshrink elastic solutions. Discover our story, values, and commitment to quality." />
        <meta name="keywords" content="about adsons, sustainable manufacturing, innovation, certified elastic, company values, textile manufacturer, Faisalabad, Pakistan, global supplier" />
        <meta property="og:title" content="About Us | ADSONS Group of Industries" />
        <meta property="og:description" content="Learn about ADSONS, a leader in sustainable manufacturing, innovation, and certified preshrink elastic solutions. Discover our story, values, and commitment to quality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/about" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | ADSONS Group of Industries" />
        <meta name="twitter:description" content="Learn about ADSONS, a leader in sustainable manufacturing, innovation, and certified preshrink elastic solutions. Discover our story, values, and commitment to quality." />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>
      <StickyScroll>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
            <div className="relative z-10 text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                About Us
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Leading the way in sustainable manufacturing and innovation
              </motion.p>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                  <p className="text-gray-300 text-lg">
                    Founded with a vision to revolutionize the manufacturing industry, we have grown to become 
                    a leading supplier of high-quality products while maintaining our commitment to sustainability 
                    and innovation.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Our journey has been marked by continuous improvement, technological advancement, and a 
                    steadfast dedication to environmental responsibility.
                  </p>
                  <p className="text-gray-300 text-lg">
                  Sustainability is not just a principle for us—it's a responsibility. We integrate eco-friendly practices at every stage of production, from sourcing raw materials responsibly to minimizing waste and reducing our carbon footprint. By prioritizing green initiatives, we aim to set an example for the industry, proving that exceptional quality and environmental stewardship can go hand in hand.
                  </p>
                  <p className="text-gray-300 text-lg">
                  As we look ahead, we remain steadfast in our mission to innovate, inspire, and lead. Our story is still being written, and we invite you to be a part of it. Join us as we continue to redefine what's possible—delivering excellence today while paving the way for a smarter, more sustainable tomorrow.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="/about.jpeg"
                    alt="Our Company"
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  The principles that guide our decisions and actions
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-colors duration-300"
                  >
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-400">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Sustainability */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability Practices</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Committed to environmental responsibility through innovative practices
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sustainabilityPractices.map((practice, index) => (
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
            </div>
          </section>
        </div>
      </StickyScroll>
    </>
  );
};

export default About; 