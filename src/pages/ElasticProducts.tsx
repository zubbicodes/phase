import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from '../components/ui/tilt';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Sparkles } from '../components/ui/sparkles';
import { Sun, ShieldHalf, SunMedium, Recycle, ArrowLeftRight, Droplets } from 'lucide-react';
import StickyScroll from '../components/ui/sticky-scroll';

const attributes = [
  {
    label: 'Abrasion-resistant',
    icon: <ShieldHalf className="w-10 h-10 mx-auto" />,
  },
  {
    label: 'Yellowing-resistant (Phenolic)',
    icon: <Sun className="w-10 h-10 mx-auto" />,
  },
  {
    label: 'UV-resistant',
    icon: <SunMedium className="w-10 h-10 mx-auto" />,
  },
  {
    label: 'Pilling-resistant',
    icon: (
      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 40 40" stroke="currentColor">
        <circle cx="20" cy="20" r="16" strokeWidth="3" />
        <line x1="10" y1="30" x2="30" y2="10" strokeWidth="3" />
        <circle cx="15" cy="15" r="2" fill="currentColor" />
        <circle cx="25" cy="25" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Washing-resistant',
    icon: (
      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 40 40" stroke="currentColor">
        <rect x="8" y="18" width="24" height="14" rx="3" strokeWidth="3" />
        <path d="M8 18c4 4 20 4 24 0" strokeWidth="3" />
      </svg>
    ),
  },
  {
    label: 'Stretchability',
    icon: <ArrowLeftRight className="w-10 h-10 mx-auto" />,
  },
  {
    label: 'Air-ventilation',
    icon: (
      <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 40 40" stroke="currentColor">
        <path d="M10 30c5-10 15-10 20 0" strokeWidth="3" />
        <path d="M15 25c2-4 8-4 10 0" strokeWidth="3" />
        <Droplets className="w-6 h-6 mx-auto mt-2" />
      </svg>
    ),
  },
  {
    label: 'ECO-friendly Yarn',
    icon: <Recycle className="w-10 h-10 mx-auto" />,
  },
];

// --- Product Data from Image ---
const essentials = [
  {
    name: 'Special Adjustable Elastic',
    image: '/products/elastic/1.jpg',
    description: '87/13 Polyester+Polyester/Spandex',
    specs: 'T10211, T10217',
  },
  {
    name: 'Stretchy Knitting Tape',
    image: '/products/elastic/2.jpg',
    description: 'Polyester/Spandex',
    specs: 'T10237, T10238, T10240, T10249',
  },
  {
    name: 'Nylon Collar Band',
    image: '/products/elastic/3.jpg',
    description: 'Nylon',
    specs: 'T1028',
  },
  {
    name: 'Translucent Light Binding Tape',
    image: '/products/elastic/4.jpg',
    description: 'Nylon/Spandex',
    specs: 'T1049',
  },
  {
    name: 'Dual-color Binding Tape',
    image: '/products/elastic/5.jpg',
    description: 'Nylon/Spandex (PET Recycle Yarn)/Spandex',
    specs: 'E12746, E12748, E12749',
  },
  {
    name: 'Lightweight Hollow Knit Band',
    image: '/products/elastic/6.jpg',
    description: 'Nylon/Spandex',
    specs: 'N10461, N10462, N10463, N10440',
  },
  {
    name: 'Knit Binding Tape',
    image: '/products/elastic/7.jpg',
    description: 'Polyester/Rubber',
    specs: 'T1046-14',
  },
  {
    name: 'Jacquard Single-velour Band',
    image: '/products/elastic/8.jpg',
    description: 'Nylon/Wooly/Spandex',
    specs: 'C10776, C10778, C10780',
  },
  {
    name: 'Nylon Woolly Woven Band',
    image: '/products/elastic/9.jpg',
    description: 'Nylon/Wooly/Polyester/Rubber',
    specs: 'G10760, G10761, G10759',
  },
];

const wovenElastic = [
  {
    name: 'Y shape Jacquard Waistband',
    image: '/products/elastic/10.jpg',
    description: 'PAHO original Y shape jacquard waistband matches trousers perfectly.',
  },
  {
    name: 'Embroidery Jacquard Elastic Tape',
    image: '/products/elastic/11.jpg',
    description: 'Embroidery jacquard double tape. Work with Europe icons to present embroidery effect patterns all at once.',
  },
  {
    name: 'Airy Double-Sided Loop Tape',
    image: '/products/elastic/12.jpg',
    description: 'Special airy double structure with conventional woven elastic enhances quickness and softness for elasticity and ensures the comfortability.',
  },
  {
    name: 'Mélange Slub Fancy Elastic',
    image: '/products/elastic/13.jpg',
    description: 'PAHO introduces slub yarns to create fine-tone colour and pique textured appearance after dyeing.',
  },
 
];

const knitElastic = [
  {
    name: 'S Shape Resistant Elastic',
    image: '/products/elastic/16.png',
    description: 'S shape rubber thread enables its slippery resistant elastic and the elastic is applicable for interlinings and sports accessories.',
  },
  {
    name: 'Knit Jacquard Elastic',
    image: '/products/elastic/17.jpg',
    description: 'Shake-made multi-color jacquard structure revises mesh holes while stretching.',
  },
  {
    name: '4-way Stretch Grid Elastic',
    image: '/products/elastic/18.jpg',
    description: 'Elastic with unique grid-mesh structure and 4-way elasticity while stretching.',
  },
  {
    name: 'Silicone 4-way stretch Tassels Tape',
    image: '/products/elastic/19.jpg',
    description: 'Finished with silicone spreading tassels at the edge, and 4-way stretchability.',
  },
  {
    name: 'Multi-color Knit Mesh Elastic',
    image: '/products/elastic/20.jpg',
    description: 'Multi-color knit elastic with tenacious stretchability, unique grid mesh textile structure, and space-dyed yarn colors.',
  },
  {
    name: 'Fancy Knit Waistband',
    image: '/products/elastic/21.jpg',
    description: 'The combination of well-selected materials and personalized multi-functional applications.',
  },
];

const ElasticProducts = () => {
  return (
    <StickyScroll>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Sparkles
              className="w-full h-full"
              color="#8350e8"
              background="transparent"
              density={100}
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Pre-Shrink Elastic Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Premium quality elastic solutions for your manufacturing needs
            </motion.p>
          </div>
        </div>

        {/* Why Choose Our Elastics Section (moved up) */}
        <div className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Elastic Products?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We provide the highest quality elastic solutions with unmatched durability and performance
              </p>
            </motion.div>

            {/* Attribute Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
              {attributes.map((attr, idx) => (
                <motion.div
                  key={attr.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3 text-white">{attr.icon}</div>
                  <span className="font-medium text-base md:text-lg text-white">
                    {attr.label}
                  </span>
                </motion.div>
              ))}
            </div>

           
          </div>
        </div>

     

        {/* --- Essentials Section --- */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">The Essentials</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {essentials.map((item, idx) => (
              <Card key={item.name + idx} className="bg-black/50 border-gray-800 hover:border-gray-700 transition-colors">
                <Tilt className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-xs md:text-sm">
                    {item.specs && <span className="block font-semibold">{item.specs}</span>}
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-2">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                  </div>
                </CardContent>
                </Tilt>
              </Card>
            ))}
          </div>
        </div>

        {/* --- Woven Elastic Section --- */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Woven Elastic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {wovenElastic.map((item, idx) => (
              <Card key={item.name + idx} className="bg-black/50 border-gray-800 hover:border-gray-700 transition-colors">
                <Tilt className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-xs md:text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-2">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                  </div>
                </CardContent>
                </Tilt>
              </Card>
            ))}
          </div>
        </div>

        {/* --- Knit Elastic Section --- */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Knit Elastic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {knitElastic.map((item, idx) => (
              <Card key={item.name + idx} className="bg-black/50 border-gray-800 hover:border-gray-700 transition-colors">
                <Tilt className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">{item.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-xs md:text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-2">
                    <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                  </div>
                </CardContent>
                </Tilt>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </StickyScroll>
  );
};

export default ElasticProducts; 