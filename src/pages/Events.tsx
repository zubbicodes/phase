import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from '../components/ui/tilt';
import { Spotlight } from '../components/ui/spotlight';

const Events = () => {
  const events = [
    {
      title: "2024 FASHION EXPO",
      date: "October 18, 2024",
      image: "/events/event.jpeg",
      description: "A week of sustainable fashion innovation and networking. Industry leaders gathered to discuss cutting-edge sustainable practices and shape the future of fashion manufacturing.",
      location: "Taipei, Taiwan",
      type: "Exhibition",
      highlights: [
        "Sustainable fashion showcase",
        "Industry networking",
        "Innovation workshops",
        "Future trends discussion"
      ]
    },
    {
      title: "2024 TAISPO",
      date: "March 6-9, 2024",
      image: "/events/event.jpeg",
      description: "Taiwan's premier sports and outdoor equipment exhibition, showcasing the latest innovations in sports gear and outdoor equipment.",
      location: "Taipei, Taiwan",
      type: "Trade Show",
      highlights: [
        "Sports equipment showcase",
        "Outdoor gear exhibition",
        "Industry networking",
        "Product demonstrations"
      ]
    },
    {
      title: "2023 TITAS",
      date: "October 17-19, 2023",
      image: "/events/event.jpeg",
      description: "Taipei Innovative Textile Application Show - A leading platform for innovative textile solutions and sustainable fashion.",
      location: "Taipei, Taiwan",
      type: "Textile Exhibition",
      highlights: [
        "Innovative textile showcase",
        "Sustainable fashion focus",
        "Industry networking",
        "Technology demonstrations"
      ]
    },
    {
      title: "2022 FASHION EXPO",
      date: "November 10, 2022",
      image: "/events/event.jpeg",
      description: "Annual fashion exhibition showcasing the latest trends and innovations in the fashion industry.",
      location: "Taipei, Taiwan",
      type: "Fashion Show",
      highlights: [
        "Fashion trends showcase",
        "Designer collections",
        "Industry networking",
        "Fashion workshops"
      ]
    }
  ];

  return (
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
            Events & Exhibitions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Join us at industry-leading events and exhibitions
          </motion.p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Tilt
                  rotationFactor={6}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className='group relative rounded-lg overflow-hidden bg-gray-900'
                >
                  <Spotlight
                    className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
                    size={248}
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                  />
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[400px]">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded">
                        {event.type}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                      <div className="flex items-center text-gray-400 mb-4">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-400 mb-6">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {event.location}
                      </div>
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-400 mb-2">Highlights:</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {event.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full inline-flex items-center">
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              Stay Updated
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter to receive updates about upcoming events and exhibitions.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-red-500"
                />
                <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events; 