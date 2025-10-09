import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StickyScroll from '../components/ui/sticky-scroll';
import { Helmet } from 'react-helmet-async';
import WebPImage from '../components/common/WebPImage';

const Products = () => {
  const productsList = [
    { name: 'Elastics', href: '/products/elastics', image: '/products/elastic/1.jpg', description: 'Durable and versatile elastics for various applications.' },
    { name: 'Cords', href: '/products/cords', image: '/products/cords/2.jpg', description: 'High-strength cords for apparel and industrial use.' },
    { name: 'Tapes', href: '/products/tapes', image: '/products/tapes/2.jpg', description: 'A wide range of woven and non-woven tapes.' },
    { name: 'Buttons', href: '/products/buttons', image: '/products/buttons/1.jpg', description: 'Stylish and functional buttons for all types of garments.' },
    { name: 'Fabrics', href: '#', image: '/hero/fabric_1.png', description: 'Premium fabrics for fashion and home textiles.' },
    { name: 'Labels', href: '#', image: '/hero/lables_1.png', description: 'Customizable labels for branding and product information.' },
    { name: 'Yarn', href: '#', image: '/hero/yarn.jpeg', description: 'High-quality yarn for knitting and weaving.' },
    { name: 'Zipper - Slider', href: '#', image: '/hero/slider.jpg', description: 'High-quality zips for shirts and bags.' },
    { name: 'Workwear Fabrics', href: '#', image: '/hero/workwear.png', description: 'Designed for durability and comfort in the toughest environments.' },
  ];

  return (
    <>
      <Helmet>
        <title>Products | ADSONS Group of Industries</title>
        <meta name="description" content="Explore our range of certified preshrink elastics, premium cords, tapes, buttons, and textile accessories. Sustainable, innovative, and trusted by global brands." />
        <meta name="keywords" content="elastics, cords, tapes, buttons, trims, textile accessories, sustainable, certified, manufacturer, Pakistan, Faisalabad, garment industry, B2B, ADSONS" />
        <meta property="og:title" content="Products | ADSONS Group of Industries" />
        <meta property="og:description" content="Explore our range of certified preshrink elastics, premium cords, tapes, buttons, and textile accessories. Sustainable, innovative, and trusted by global brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/products" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Products | ADSONS Group of Industries" />
        <meta name="twitter:description" content="Explore our range of certified preshrink elastics, premium cords, tapes, buttons, and textile accessories. Sustainable, innovative, and trusted by global brands." />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>
      <StickyScroll>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
            <div className="relative z-10 text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Products
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                Discover our comprehensive range of high-quality products, 
                manufactured with precision and care to meet international standards.
              </motion.p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productsList.map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link to={product.href} className="block bg-gray-900 rounded-2xl overflow-hidden shadow-xl group h-full flex flex-col">
                      <div className="relative h-64">
                        <WebPImage
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        />
                         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                        <p className="text-gray-300 flex-grow">{product.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality Assurance Section */}
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
                  Quality Assured
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Every product undergoes rigorous quality control processes to ensure 
                  they meet the highest standards of excellence and customer satisfaction.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </StickyScroll>
    </>
  );
};

export default Products; 