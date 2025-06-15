import React from 'react';
import ParallaxCarousel from '../../components/ui/ParallaxCarousel';

const slides = [

  {
    id: 3,
    image: '/hero/ads_fabric.png', // Using ads_fabric.png
    title: 'HIGH-PERFORMANCE FABRICS',
    description: 'Innovative fabrics designed for durability, comfort, and exceptional performance in all conditions.',
    cardImage: '/hero/ads_fabric.png', // Example: Use the same image for card
    cardTitle: 'Fabric Applications',
    cardDescription: 'Elevated wash durability, long-lasting performance for various fabric uses.',
  },
  
  {
    id: 2,
    image: '/hero/ads_3.jpg', // Using ads_3.jpg
    title: 'ADVANCED MOISTURE WICKING',
    description: 'Engineered fabrics that draw moisture away from the skin, keeping you dry and comfortable during intense activities.',
    cardImage: '/hero/ads_3.jpg', // Example: Another image for card
    cardTitle: 'Moisture Wicking Uses',
    cardDescription: 'Ideal for athletic wear and garments requiring high breathability.',
  },
  
  {
    id: 4,
    image: '/hero/ads_tape.png', // Using ads_tape.png
    title: 'VERSATILE TAPES & TRIMS',
    description: 'A wide range of tapes and trims for various applications, offering strength, flexibility, and aesthetic appeal.',
    cardImage: '/hero/ads_tape.png', // Example: Use the same image for card
    cardTitle: 'Tape Applications',
    cardDescription: 'Strength, flexibility, and aesthetic appeal for various applications.',
  },
  {
    id: 1,
    image: '/hero/ads_1.jpg', // Using ads_1.jpg
    title: 'WATER REPELLENT JACQUARD FABRIC',
    description: 'Durable water repellent treatments for delicate jacquard woven fabric to prevent the fabric from becoming saturated with water.',
    cardImage: '/hero/ads_2.png', // Example: Use the same image for card
    cardTitle: 'Fabric Applications',
    cardDescription: 'Elevated wash durability, long-lasting performance for various fabric uses.',
  },
  {
    id: 5,
    image: '/hero/ads_elastic.png', // Using ads_elastic.png
    title: 'PREMIUM QUALITY ELSASTIC',
    description: 'Elastic materials providing superior stretch and recovery, ideal for demanding applications requiring flexibility.',
    cardImage: '/hero/ads_elastic.png', // Example: Use the same image for card
    cardTitle: 'Elastic Applications',
    cardDescription: 'Superior stretch and recovery, ideal for demanding applications requiring flexibility.',
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <ParallaxCarousel slides={slides} />
    </section>
  );
};

export default HeroSection; 