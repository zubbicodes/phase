import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from '../components/ui/tilt';
import { Spotlight } from '../components/ui/spotlight';
import { Sparkles } from '../components/ui/sparkles';
import WebPImage from '../components/common/WebPImage';
import { 
  Package, 
  Truck, 
  Factory, 
  Box, 
  CheckCircle2, 
  ClipboardCheck,
  ArrowRight,
  Search
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import StickyScroll from '../components/ui/sticky-scroll';
import { Helmet } from 'react-helmet-async';

const Workflow = () => {
  const workflowSteps = [
    {   
      title: "Raw Material Selection",
      description: "Carefully selecting high-quality raw materials that meet our strict standards",
      icon: Package,
      image: "/workflow/12.JPG",
      details: [
        "Quality inspection of incoming materials",
        "Material testing and verification",
        "Storage in controlled environment",
        "Documentation and tracking"
      ]
    },
    {
      title: "Production Process",
      description: "State-of-the-art manufacturing with precision and care",
      icon: Factory,
      image: ["/workflow/20.png","/workflow/cords.png", "/workflow/18.jpg", "/workflow/7.jpeg",  "/workflow/20.jpeg"],
      details: [
        "Automated production lines",
        "Quality control checkpoints",
        "Real-time monitoring",
        "Efficiency optimization"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage",
      icon: CheckCircle2,
      image: "/workflow/16.JPG",
      details: [
        "Comprehensive testing procedures",
        "Quality standards verification",
        "Performance testing",
        "Durability assessment"
      ]
    },
    {
      title: "Packaging",
      description: "Secure and sustainable packaging solutions",
      icon: Box,
      image: "/workflow/14.JPG",
      details: [
        "Eco-friendly packaging materials",
        "Custom packaging solutions",
        "Product protection",
        "Labeling and documentation"
      ]
    },
    {
      title: "Metal Detection",
      description: "Advanced metal detection technology ensuring product safety",
      icon: Search,
      image: "/workflow/md.jpeg",
      details: [
        "High-sensitivity metal detection systems",
        "Multi-frequency scanning technology",
        "Automatic rejection of contaminated products",
        "Comprehensive safety compliance"
      ]
    },
    {
      title: "Final Inspection",
      description: "Thorough final check before shipping",
      icon: ClipboardCheck,
      image: "/workflow/final_inspection.png",
      details: [
        "Quality Check & Documentation review",
        "Order accuracy verification",
        "Packaging integrity inspection",
        "Final safety assessment"
      ]
    },
    {
      title: "Shipping & Delivery",
      description: "Efficient logistics and reliable delivery",
      icon: Truck,
      image: "/workflow/19.png",
      details: [
        "Global shipping network",
        "Real-time tracking",
        "Secure transportation",
        "On-time delivery guarantee"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Workflow | ADSONS Group of Industries</title>
        <meta name="description" content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance. Discover our commitment to precision, efficiency, and sustainability." />
        <meta name="keywords" content="workflow, manufacturing process, quality assurance, raw materials, production, sustainable manufacturing, ADSONS, textile industry" />
        <meta property="og:title" content="Workflow | ADSONS Group of Industries" />
        <meta property="og:description" content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance. Discover our commitment to precision, efficiency, and sustainability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/workflow" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Workflow | ADSONS Group of Industries" />
        <meta name="twitter:description" content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance. Discover our commitment to precision, efficiency, and sustainability." />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>
      <StickyScroll>
        <div className="min-h-screen bg-black text-white">
          {/* Hero Section */}
          <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Sparkles className="w-full h-full" color="#3b82f6" background="transparent" density={80} />
            </div>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/workflow/9.JPG')",
                filter: "brightness(0.6)"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
            <div className="relative z-10 text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                Our Workflow 
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                From raw materials to final delivery - our commitment to excellence at every step
              </motion.p>
            </div>
          </section>

          {/* Workflow Timeline */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="space-y-32">
                {workflowSteps.map((step, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}
                    >
                      {/* Timeline Line */}
                      {index < workflowSteps.length - 1 && (
                        <div className={`hidden md:block absolute ${isEven ? 'left-1/2' : 'right-1/2'} top-1/2 w-0.5 h-full bg-gray-800 z-0`}></div>
                      )}
                      {/* Image Side */}
                      <div className="md:w-1/2 flex justify-center items-center relative z-10">
                        <Tilt rotationFactor={10} springOptions={{ stiffness: 30, damping: 8, mass: 0.4 }} className="w-full max-w-xl">
                          <div className="relative group">
                          {Array.isArray(step.image) ? (
                              <Carousel 
                              plugins={[
                                Autoplay({
                                  delay: 3000,
                                }),
                              ]}
                              
                              className="w-full max-w-xl">
                              <CarouselContent>
                                {step.image.map((imgSrc, i) => (
                                  <CarouselItem key={i}>
                                    <WebPImage
                                      src={imgSrc}
                                      alt={`${step.title} ${i + 1}`}
                                      className="w-full h-[420px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-blue-700/30 group-hover:scale-105 transition-transform duration-500"
                                    />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                            ) : (
                              <WebPImage
                                src={step.image}
                                alt={step.title}
                                className="w-full h-[420px] md:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-blue-700/30 group-hover:scale-105 transition-transform duration-500"
                              />
                            )}
                            <Spotlight className="z-20 from-blue-400/40 via-blue-200/10 to-transparent blur-2xl" size={320} />
                          </div>
                        </Tilt>
                      </div>
                      {/* Text Side */}
                      <div className="md:w-1/2 flex flex-col justify-center items-start px-0 md:px-12 mt-10 md:mt-0">
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="mb-6 flex items-center space-x-6"
                        >
                          <div className="relative">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center">
                              <step.icon className="w-8 h-8 text-blue-500" />
                            </div>
                            <div className="absolute -right-3 -top-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-lg">{step.description}</p>
                          </div>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 w-full shadow-lg"
                        >
                          <ul className="space-y-4">
                            {step.details.map((detail, i) => (
                              <li key={i} className="flex items-start space-x-3">
                                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-300 text-lg">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Quality Commitment Section */}
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
                  Our Quality Commitment
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Every step in our workflow is designed to ensure the highest quality standards. 
                  From the selection of raw materials to the final delivery, we maintain rigorous 
                  quality control processes to guarantee excellence in every product.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Statistics Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { number: "99.9%", label: "Quality Assurance Rate" },
                  { number: "24/7", label: "Production Monitoring" },
                  { number: "48h", label: "Average Delivery Time" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center"
                  >
                    <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </StickyScroll>
    </>
  );
};

export default Workflow; 