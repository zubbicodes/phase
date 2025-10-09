import React, { useState, useEffect } from 'react';
import ParallaxCarousel from '../../components/ui/ParallaxCarousel';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import WebPImage from '../common/WebPImage';

const slides = [
  {
    id: 16,
    preTitle: 'Flexible\nand\nDurable',
    title: 'POLYESTER KNITTED ELASTIC',
    description: 'Our polyester knitted elastics offer superior flexibility and durability for a wide range of applications.',
    image: '/hero/elastic_.webp',
  },
  {
    id: 6,
    preTitle: 'Superior\nStretch and\nRecovery',
    title: 'JEQUARD ELASTICS',
    description: 'High-performance elastics that offer unmatched flexibility and durability for any application.',
    image: '/hero/ads_elastic.webp',
  },
  {
    id: 12,
    preTitle: 'Versatility\nin Every\nWeave',
    title: 'INNOVATIVE TAPES',
    description: 'A wide range of tapes designed for strength, flexibility, and aesthetic appeal in any application.',
    image: '/hero/webbing.webp',
  },
  {
    id: 7,
    preTitle: 'Strength\nin Every\nStrand',
    title: 'DURABLE CORDS',
    description: 'Our cords are engineered for maximum strength and resilience, perfect for demanding uses.',
    image: '/products/cords/2.webp',
  },
  {
    id: 14,
    preTitle: 'The Tip\nof\nPerfection',
    title: 'PERFECT FINISHES',
    description: 'Durable and stylish cord tips that provide the perfect finish to any drawcord or shoelace.',
    image: '/hero/tips.webp',
  },
  {
    id: 8,
    preTitle: 'The Finishing\nTouch of\nBranding',
    title: 'CUSTOM LABELS',
    description: 'High-quality labels that provide a premium finish and lasting brand identity.',
    image: '/hero/lables_2.webp',
  },
  {
    id: 11,
    preTitle: 'The               Foundation\nof\nQuality',
    title: 'SEWING THREAD ',
    description: 'High-quality yarn that provides the perfect base for creating exceptional textiles.',
    image: '/hero/thread_1.webp',
  },
    // New slide for High Quality DTY Yarns
    {
      id: 23,
      preTitle: 'Premium\nDTY Yarns',
      title: 'HIGH QUALITY DTY YARNS',
      description: 'Our DTY (Draw Textured Yarn) offers superior strength, softness, and versatility for a wide range of textile applications.',
      image: '/hero/dty_yarn.webp',
    },
  {
    id: 15,
    preTitle: 'The Perfect\nFinishing\nTouch',
    title: 'EXQUISITE BUTTONS',
    description: 'Beautifully crafted buttons that add a touch of elegance to any garment.',
    image: '/products/buttons/4.webp',
  },
  {
    id: 17,
    preTitle: 'Natural\nand\nStylish',
    title: 'COCONUT BUTTONS',
    description: 'Choose our coconut buttons for an eco-friendly and stylish finish to your garments.',
    image: '/hero/coconut.webp',
  },

  {
    id: 9,
    preTitle: 'Seamless\nand\nSecure',
    title: 'RELIABLE ZIPS',
    description: 'Smooth, durable zips designed for reliability and ease of use in any garment.',
    image: '/hero/ads_1.webp',
  },
  {
    id: 10,
    preTitle: 'Smooth\nFunctionality,\nElegant Design',
    title: 'ELEGANT SLIDERS',
    description: 'Our sliders combine sleek design with flawless performance for a premium feel.',
    image: '/hero/slider.webp',
  },
  {
    id: 18,
    preTitle: 'Secure\nand\nReliable',
    title: 'HOOKS AND LOOPS',
    description: 'High-quality hooks and loops for secure and reliable fastening solutions.',
    image: '/hero/hooks.webp',
  },
  {
    id: 19,
    preTitle: 'Built\nto\nLast',
    title: 'DURABLE WORKWEAR FABRICS',
    description: 'Our workwear fabrics are designed for durability and comfort in the toughest environments.',
    image: '/hero/workwear_1.webp',
  },
  {
    id: 21,
    preTitle: 'Blend\nin with\nStyle',
    title: 'CAMOUFLAGE FABRICS',
    description: 'High-performance camouflage fabrics for tactical and fashion applications.',
    image: '/hero/camo.webp',
  },
  {
    id: 20,
    preTitle: 'Performance\nand\nStyle',
    title: 'VERSATILE POLYESTER FABRICS',
    description: 'Discover our range of polyester fabrics, combining performance, durability, and style.',
    image: '/hero/fabric_1.webp',
  },
  
  {
    id: 22,
    preTitle: 'Advanced\nFabric\nTreatments',
    title: 'SPECIAL FINISHES',
    description: 'Featuring HeiQ Pure, our silver-based antimicrobial odor control treatment for ultimate freshness and hygiene.',
    image: '/hero/fabric_6.webp',
  },
  {
    id: 4,
    preTitle: 'Excellence\nin Every\nThread',
    title: 'QUALITY ASSURANCE',
    description: 'With a focus on quality, our jacquard fabrics offer superior feel and long-lasting durability for any application.',
    image: '/hero/fabric_4.webp',
  },
  {
    id: 13,
    preTitle: 'Stay Dry\nStay\nComfortable',
    title: 'WEATHER-PROOF TECHNOLOGY',
    description: 'Our water-repellent fabrics are engineered to keep you dry without sacrificing breathability or comfort.',
    image: '/hero/ads_fabric.webp',
  },
  {
    id: 2,
    preTitle: 'Weaving a\nGreener\nTomorrow',
    title: 'SUSTAINABLE SOLUTIONS',
    description: 'Our commitment to sustainability is woven into every fiber, with eco-friendly materials and responsible manufacturing.',
    image: '/hero/fabric_2.webp',
  },
];

const HeroSection = () => {
  // Get all image URLs for preloading
  const imageUrls = slides.map(slide => slide.image);
  
  // Use the enhanced image preloader hook
  const { preloadImages, loadingProgress, isLoading, getImageUrl } = useImagePreloader(imageUrls);

  // Preload images in the background without blocking the UI
  useEffect(() => {
    const timer = setTimeout(() => {
      preloadImages();
    }, 100);
    return () => clearTimeout(timer);
  }, [preloadImages]);

  // Convert slides to use WebP images
  const optimizedSlides = slides.map(slide => ({
    ...slide,
    image: getImageUrl(slide.image)
  }));

  return (
    <section className="relative w-full h-[calc(100vh-4rem)]">
      
      <ParallaxCarousel slides={optimizedSlides} />
    </section>
  );
};

export default HeroSection; 