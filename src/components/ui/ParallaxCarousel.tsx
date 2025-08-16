import React, { useState, useEffect, useRef } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle slide change
  const goToNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      
      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    if (!isTransitioning) {
      timerRef.current = setTimeout(() => {
        goToNextSlide();
      }, interval);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, interval, isTransitioning]);

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
                <img 
                  src={currentSlide.image} 
                  alt={currentSlide.title} 
                  className="w-full h-full object-cover"
                />
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
              <img 
                src={currentSlide.image} 
                alt={currentSlide.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Manual navigation buttons */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={() => {
            if (!isTransitioning) {
              const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
              setCurrentIndex(prevIndex);
            }
          }}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 disabled:opacity-50"
          disabled={isTransitioning}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={() => {
            if (!isTransitioning) {
              goToNextSlide();
            }
          }}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 disabled:opacity-50"
          disabled={isTransitioning}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ParallaxCarousel; 