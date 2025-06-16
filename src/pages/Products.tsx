import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const productCategories = [
    {
      title: "Apparel & Textiles",
      description: "High-quality clothing and textile products meeting international standards",
      image: "/products/apparel.jpg"
    },
    {
      title: "Home Goods",
      description: "Premium home decor and household items",
      image: "/products/home.jpg"
    },
    {
      title: "Electronics",
      description: "Innovative electronic products and accessories",
      image: "/products/electronics.jpg"
    },
    {
      title: "Accessories",
      description: "Stylish and functional accessories for everyday use",
      image: "/products/accessories.jpg"
    }
  ];

  return (
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
            Our Products
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                  <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
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
  );
};

export default Products; 