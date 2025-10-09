import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import WebPImage from '../common/WebPImage';

interface Slide {
  id: number;
  image: string;
  preTitle: string;
  title: string;
  description: string;
}

interface WorkflowCarouselProps {
  slides: Slide[];
  interval?: number;
  autoloop?: boolean;
}

const WorkflowCarousel: React.FC<WorkflowCarouselProps> = ({ slides, interval = 5000, autoloop = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoloop) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval, autoloop]);

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
            {/* Left side with image */}
            <div className="hidden md:block md:w-1/2 h-full">
              <WebPImage src={currentSlide.image} alt={currentSlide.title} className="w-full h-full object-cover"/>
            </div>
            
            {/* Right side with text */}
            <div className="relative w-full md:w-1/2 h-full bg-black flex flex-col justify-center p-8 md:p-16 lg:p-24">
              {/* Background for mobile */}
              <div className="md:hidden absolute inset-0">
                <WebPImage src={currentSlide.image} alt={currentSlide.title} className="w-full h-full object-cover" />
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
                    to="/workflow"
                    className="bg-white text-black font-semibold px-8 py-3 rounded-lg text-base shadow-sm transition-all duration-200 hover:bg-gray-200 focus:outline-none flex items-center"
                  >
                    Learn More <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const workflowSlides = [
  {
    id: 1,
    preTitle: 'QUALITY FROM THE START',
    title: 'Raw Material\nSelection',
    description: 'Carefully selecting high-quality raw materials that meet our strict standards for excellence.',
    image: '/workflow/12.webp',
  },
  {
    id: 2,
    preTitle: 'PRODUCTION PROCESS',
    title: 'State-of-the-Art\nManufacturing',
    description: 'State-of-the-art manufacturing with precision and care using automated production lines.',
    image: '/workflow/20.webp',
  },
  {
    id: 8,
    preTitle: 'JACQUARD ELASTICS MACHINES',
    title: 'Precision\nin Every\nWeave',
    description: 'Advanced Jacquard machines producing high-quality elastics with intricate patterns and superior stretch.',
    image: '/workflow/18.webp',
  },
  {
    id: 9,
    preTitle: 'CORDS MACHINES',
    title: 'Strength\nand\nFlexibility',
    description: 'State-of-the-art cords machines delivering durable and versatile cords for various applications.',
    image: '/workflow/cords.webp',
  },
  {
    id: 10,
    preTitle: 'TAPES MACHINES',
    title: 'Versatile\nTape\nProduction',
    description: 'Modern tape machines ensuring consistent quality and a wide range of tape products.',
    image: '/workflow/7.webp',
  },
  {
    id: 3,
    preTitle: 'QUALITY ASSURANCE',
    title: 'Rigorous\nTesting and\nControl',
    description: 'Rigorous testing and quality control at every stage to ensure the highest standards.',
    image: '/workflow/16.webp',
  },
  {
    id: 4,
    preTitle: 'PACKAGING',
    title: 'Secure and\nSustainable\nPackaging',
    description: 'Secure and sustainable packaging solutions with eco-friendly materials and custom solutions.',
    image: '/workflow/14.webp',
  },
  {
    id: 5,
    preTitle: 'METAL DETECTION',
    title: 'Advanced\nMetal Detection\nTechnology',
    description: 'Advanced metal detection technology ensuring product safety with high-sensitivity systems.',
    image: '/workflow/md.webp',
  },
  {
    id: 6,
    preTitle: 'FINAL INSPECTION',
    title: 'Thorough\nFinal Check',
    description: 'Thorough final check before shipping with comprehensive quality verification.',
    image: '/workflow/18.webp',
  },
  {
    id: 7,
    preTitle: 'SHIPPING & DELIVERY',
    title: 'Efficient\nLogistics and\nReliable Delivery',
    description: 'Efficient logistics and reliable delivery with global shipping network and real-time tracking.',
    image: '/workflow/19.webp',
  },
];

const WorkflowSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section ref={ref} className="relative w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <WorkflowCarousel slides={workflowSlides} autoloop={inView} />
    </section>
  );
};

export default WorkflowSection; 