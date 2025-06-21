import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  image: string;
  preTitle: string;
  title: string;
  description: string;
}

interface ParallaxCarouselProps {
  slides: Slide[];
  interval?: number;
}

const ParallaxCarousel: React.FC<ParallaxCarouselProps> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const currentSlide = slides[currentIndex];

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide.id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="w-full h-full flex">
            {/* Left side with text */}
            <div className="relative w-full md:w-1/2 h-full bg-black flex flex-col justify-center p-8 md:p-16 lg:p-24">
              {/* Background for mobile */}
              <div className="md:hidden absolute inset-0">
                <img src={currentSlide.image} alt={currentSlide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black opacity-60" />
              </div>

              {/* Text content */}
              <div className="relative z-10">
                <motion.p 
                  key={`${currentSlide.id}-pretitle`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-400 font-sans mb-2"
                >
                  {currentSlide.preTitle}
                </motion.p>
                <motion.h2 
                  key={`${currentSlide.id}-title`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight whitespace-pre-line"
                >
                  {currentSlide.title}
                </motion.h2>
                <motion.p
                   key={`${currentSlide.id}-desc`}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.8, delay: 0.6 }}
                   className="text-gray-300 font-sans mt-4 max-w-md"
                >
                  {currentSlide.description}
                </motion.p>
                <motion.div
                  key={`${currentSlide.id}-button`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-8 w-fit"
                >
                  <Link
                    to="/products"
                    className="bg-white text-black font-semibold px-8 py-3 rounded-lg text-base shadow-sm transition-all duration-200 hover:bg-gray-200 focus:outline-none flex items-center"
                  >
                    Explore Products <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
            {/* Right side with image */}
            <div className="hidden md:block md:w-1/2 h-full">
              <img src={currentSlide.image} alt={currentSlide.title} className="w-full h-full object-cover"/>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ParallaxCarousel; 