import React from 'react';
import ParallaxCarousel from '../../components/ui/ParallaxCarousel';

const slides = [
  {
    id: 1,
    preTitle: 'ADSONS INNOVATION',
    title: 'Engineered\nfor Peak\nPerformance',
    description: 'Discover our advanced textiles, crafted for durability, comfort, and unparalleled performance in any condition.',
    image: '/hero/fabric_1.png',
  },
  {
    id: 4,
    preTitle: 'QUALITY ASSURANCE',
    title: 'Excellence\nin Every\nThread',
    description: 'With a focus on quality, our jacquard fabrics offer superior feel and long-lasting durability for any application.',
    image: '/hero/fabric_4.jpg',
  },
  {
    id: 2,
    preTitle: 'SUSTAINABLE SOLUTIONS',
    title: 'Weaving a\nGreener\nTomorrow',
    description: 'Our commitment to sustainability is woven into every fiber, with eco-friendly materials and responsible manufacturing.',
    image: '/hero/fabric_2.jpg',
  },
 
  {
    id: 6,
    preTitle: 'VERSATILE ELASTICS',
    title: 'Superior\nStretch and\nRecovery',
    description: 'High-performance elastics that offer unmatched flexibility and durability for any application.',
    image: '/hero/ads_elastic.png',
  },
  {
    id: 7,
    preTitle: 'DURABLE CORDS',
    title: 'Strength\nin Every\nStrand',
    description: 'Our cords are engineered for maximum strength and resilience, perfect for demanding uses.',
    image: '/products/cords/2.jpg',
  },
  {
    id: 8,
    preTitle: 'CUSTOM LABELS',
    title: 'The Finishing\nTouch of\nBranding',
    description: 'High-quality labels that provide a premium finish and lasting brand identity.',
    image: '/hero/lables_1.png',
  },
  {
    id: 9,
    preTitle: 'RELIABLE ZIPS',
    title: 'Seamless\nand\nSecure',
    description: 'Smooth, durable zips designed for reliability and ease of use in any garment.',
    image: '/hero/ads_1.jpg',
  },
  {
    id: 10,
    preTitle: 'ELEGANT SLIDERS',
    title: 'Smooth\nFunctionality,\nElegant Design',
    description: 'Our sliders combine sleek design with flawless performance for a premium feel.',
    image: '/hero/slider.jpg',
  },
  {
    id: 11,
    preTitle: 'PREMIUM YARN',
    title: 'The               Foundation\nof\nQuality',
    description: 'High-quality yarn that provides the perfect base for creating exceptional textiles.',
    image: '/hero/thread_1.jpg',
  },
  {
    id: 12,
    preTitle: 'INNOVATIVE TAPES',
    title: 'Versatility\nin Every\nWeave',
    description: 'A wide range of tapes designed for strength, flexibility, and aesthetic appeal in any application.',
    image: '/products/tapes/6.jpg',
  },
  {
    id: 3,
    preTitle: 'CUTTING-EDGE DESIGN',
    title: 'Where Style\nMeets\nFunctionality',
    description: 'Explore our versatile range of tapes, trims, and elastics that provide strength, flexibility, and aesthetic appeal.',
    image: '/hero/fabric_3.png',
  },
  
  {
    id: 5,
    preTitle: 'ADVANCED TECHNOLOGY',
    title: 'The Future\nof\nFabric',
    description: 'We leverage the latest technology to create innovative textiles that are changing the future of the industry.',
    image: '/hero/fabric_5.jpg',
  },
  {
    id: 13,
    preTitle: 'WEATHER-PROOF TECHNOLOGY',
    title: 'Stay Dry\nStay\nComfortable',
    description: 'Our water-repellent fabrics are engineered to keep you dry without sacrificing breathability or comfort.',
    image: '/hero/ads_fabric.png',
  },
  {
    id: 14,
    preTitle: 'PERFECT FINISHES',
    title: 'The Tip\nof\nPerfection',
    description: 'Durable and stylish cord tips that provide the perfect finish to any drawcord or shoelace.',
    image: '/hero/tips.png',
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