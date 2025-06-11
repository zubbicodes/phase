import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string; // Main background image
  title: string;
  description: string;
  cardImage: string; // Image for the product card
  cardTitle: string; // Title for the product card
  cardDescription: string; // Description for the product card
}

interface ParallaxCarouselProps {
  slides: Slide[];
  interval?: number; // Time in ms to switch slides
}

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        return slides.length - 1;
      } else if (newIndex >= slides.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const currentSlide = slides[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex items-center justify-between px-8 sm:px-16 lg:px-24"
        >
          {/* Image with parallax effect */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />

          {/* Overlay to darken image and make text more readable */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full flex justify-between items-center">
            {/* Text content - Left Aligned */}
            <div className="text-left text-white p-4 max-w-2xl bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{currentSlide.title}</h2>
              <p className="text-lg md:text-xl">{currentSlide.description}</p>
              <a
                href="#"
                className="mt-6 inline-block text-white border border-white px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black shadow-lg"
              >
                READ MORE
              </a>
            </div>

            {/* Navigation Arrows above Product Card */}
            <div className="absolute top-0 right-0 z-20 flex space-x-2 mr-6 mt-[-40px]">
              <button
                onClick={() => paginate(-1)}
                className="p-1 text-red-500 hover:text-red-400 transition-colors duration-300 text-3xl"
              >
                &#x2190; {/* Left arrow icon */}
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-1 text-red-500 hover:text-red-400 transition-colors duration-300 text-3xl"
              >
                &#x2192; {/* Right arrow icon */}
              </button>
            </div>

            {/* Product Card - Right Aligned */}
            <div className="relative p-6 bg-neutral-800 bg-opacity-80 rounded-lg shadow-xl max-w-sm w-full md:w-1/3 flex flex-col justify-between items-center text-center md:text-left">
              <img src={currentSlide.cardImage} alt={currentSlide.cardTitle} className="w-full h-48 object-cover rounded-md mb-4" />
              <div className="flex-grow w-full">
                <h3 className="text-white text-2xl font-bold mb-2">{currentSlide.cardTitle}</h3>
                <p className="text-gray-300 text-base mb-4">{currentSlide.cardDescription}</p>
              </div>
              <a href="#" className="text-white text-lg font-semibold flex items-center justify-between w-full mt-4">
                VIEW MORE
                <span className="ml-2 text-2xl">+</span>
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ParallaxCarousel; 