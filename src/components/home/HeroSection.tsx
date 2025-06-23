import React from 'react';
import ParallaxCarousel from '../../components/ui/ParallaxCarousel';

const slides = [
  {
    id: 16,
    preTitle: 'POLYESTER KNITTED ELASTIC',
    title: 'Flexible\nand\nDurable',
    description: 'Our polyester knitted elastics offer superior flexibility and durability for a wide range of applications.',
    image: '/hero/elastic_.png',
  },
  {
    id: 6,
    preTitle: 'JEQUARD ELASTICS',
    title: 'Superior\nStretch and\nRecovery',
    description: 'High-performance elastics that offer unmatched flexibility and durability for any application.',
    image: '/hero/ads_elastic.png',
  },
  {
    id: 12,
    preTitle: 'INNOVATIVE TAPES',
    title: 'Versatility\nin Every\nWeave',
    description: 'A wide range of tapes designed for strength, flexibility, and aesthetic appeal in any application.',
    image: '/hero/webbing.jpg',
  },
  {
    id: 7,
    preTitle: 'DURABLE CORDS',
    title: 'Strength\nin Every\nStrand',
    description: 'Our cords are engineered for maximum strength and resilience, perfect for demanding uses.',
    image: '/products/cords/2.jpg',
  },
  {
    id: 14,
    preTitle: 'PERFECT FINISHES',
    title: 'The Tip\nof\nPerfection',
    description: 'Durable and stylish cord tips that provide the perfect finish to any drawcord or shoelace.',
    image: '/hero/tips.png',
  },
  {
    id: 8,
    preTitle: 'CUSTOM LABELS',
    title: 'The Finishing\nTouch of\nBranding',
    description: 'High-quality labels that provide a premium finish and lasting brand identity.',
    image: '/hero/lables_2.png',
  },
  {
    id: 11,
    preTitle: 'SEWING THREAD ',
    title: 'The               Foundation\nof\nQuality',
    description: 'High-quality yarn that provides the perfect base for creating exceptional textiles.',
    image: '/hero/thread_1.jpg',
  },
    // New slide for High Quality DTY Yarns
    {
      id: 23,
      preTitle: 'HIGH QUALITY DTY YARNS',
      title: 'Premium\nDTY Yarns',
      description: 'Our DTY (Draw Textured Yarn) offers superior strength, softness, and versatility for a wide range of textile applications.',
      image: '/hero/dty_yarn.png',
    },
  {
    id: 15,
    preTitle: 'EXQUISITE BUTTONS',
    title: 'The Perfect\nFinishing\nTouch',
    description: 'Beautifully crafted buttons that add a touch of elegance to any garment.',
    image: '/products/buttons/4.jpg',
  },
  {
    id: 17,
    preTitle: 'COCONUT BUTTONS',
    title: 'Natural\nand\nStylish',
    description: 'Choose our coconut buttons for an eco-friendly and stylish finish to your garments.',
    image: '/hero/coconut.png',
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
    id: 18,
    preTitle: 'HOOKS AND LOOPS',
    title: 'Secure\nand\nReliable',
    description: 'High-quality hooks and loops for secure and reliable fastening solutions.',
    image: '/hero/hooks.png',
  },
  {
    id: 19,
    preTitle: 'DURABLE WORKWEAR FABRICS',
    title: 'Built\nto\nLast',
    description: 'Our workwear fabrics are designed for durability and comfort in the toughest environments.',
    image: '/hero/workwear_1.png',
  },
  {
    id: 21,
    preTitle: 'CAMOUFLAGE FABRICS',
    title: 'Blend\nin with\nStyle',
    description: 'High-performance camouflage fabrics for tactical and fashion applications.',
    image: '/hero/camo.jpg',
  },
  {
    id: 20,
    preTitle: 'VERSATILE POLYESTER FABRICS',
    title: 'Performance\nand\nStyle',
    description: 'Discover our range of polyester fabrics, combining performance, durability, and style.',
    image: '/hero/fabric_1.png',
  },
  
  {
    id: 22,
    preTitle: 'SPECIAL FINISHES',
    title: 'Advanced\nFabric\nTreatments',
    description: 'Featuring HeiQ Pure, our silver-based antimicrobial odor control treatment for ultimate freshness and hygiene.',
    image: '/hero/fabric_6.jpg',
  },
  {
    id: 4,
    preTitle: 'QUALITY ASSURANCE',
    title: 'Excellence\nin Every\nThread',
    description: 'With a focus on quality, our jacquard fabrics offer superior feel and long-lasting durability for any application.',
    image: '/hero/fabric_4.jpg',
  },
  {
    id: 13,
    preTitle: 'WEATHER-PROOF TECHNOLOGY',
    title: 'Stay Dry\nStay\nComfortable',
    description: 'Our water-repellent fabrics are engineered to keep you dry without sacrificing breathability or comfort.',
    image: '/hero/ads_fabric.png',
  },
  {
    id: 2,
    preTitle: 'SUSTAINABLE SOLUTIONS',
    title: 'Weaving a\nGreener\nTomorrow',
    description: 'Our commitment to sustainability is woven into every fiber, with eco-friendly materials and responsible manufacturing.',
    image: '/hero/fabric_2.jpg',
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