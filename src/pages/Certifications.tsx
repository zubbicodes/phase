import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import StickyScroll from '../components/ui/sticky-scroll';
import WebPImage from '../components/common/WebPImage';
import { Shield, CheckCircle, Award, Leaf, Globe, Users, Heart, Recycle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Certification {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  icon?: React.ElementType;
  color: string;
  benefits: string[];
  category: 'quality' | 'sustainability' | 'safety' | 'ethical';
}

const certifications: Certification[] = [
  {
    title: 'OEKO-TEX STANDARD 100',
    subtitle: 'Textile Safety Certification',
    description: 'Our products are tested and verified to be free from harmful substances, meeting the highest standards of human-ecological safety across every stage of production.',
    image: '/certificates/new2026/oeko_tex_100.webp',
    color: '#22c55e',
    category: 'quality',
    benefits: [
      'Products tested for harmful substances',
      'Covers all processing stages',
      'Internationally recognized standard',
      'Annual renewal and audits',
    ],
  },
  {
    title: 'OEKO-TEX® MADE IN GREEN',
    subtitle: 'Sustainable Production Label',
    description: 'A traceable consumer label for products made with environmentally friendly processes under socially responsible working conditions.',
    image: '/certificates/new2026/madeingreen.webp',
    color: '#10b981',
    category: 'sustainability',
    benefits: [
      'Full product traceability',
      'Environmentally friendly processes',
      'Socially responsible conditions',
      'Transparent supply chain',
    ],
  },
  {
    title: 'ISO 9001',
    subtitle: 'Quality Management System',
    description: 'Internationally recognized certification demonstrating our commitment to consistent quality management systems, customer satisfaction, and continuous process improvement.',
    image: '/certificates/new2026/iso_9001.webp',
    color: '#3b82f6',
    category: 'quality',
    benefits: [
      'Consistent quality management',
      'Customer satisfaction focus',
      'Continuous improvement',
      'Process standardization',
    ],
  },
  // {
  //   title: 'ISO 14001',
  //   subtitle: 'Environmental Management System',
  //   description: 'Certifies our environmental management system, demonstrating our dedication to minimizing environmental impact, reducing waste, and promoting sustainable resource use.',
  //   image: '/certificates/new2026/iso_14001.webp',
  //   color: '#22c55e',
  //   category: 'sustainability',
  //   benefits: [
  //     'Environmental impact reduction',
  //     'Waste minimization protocols',
  //     'Sustainable resource management',
  //     'Regulatory compliance',
  //   ],
  // },
  // {
  //   title: 'ISO 45001',
  //   subtitle: 'Occupational Health & Safety',
  //   description: 'Our workplace health and safety management system ensures the well-being of every employee, preventing work-related injuries and promoting a safe working environment.',
  //   image: '/certificates/new2026/iso_45001.webp',
  //   color: '#06b6d4',
  //   category: 'safety',
  //   benefits: [
  //     'Worker safety assurance',
  //     'Risk prevention protocols',
  //     'Health monitoring systems',
  //     'Safe working environment',
  //   ],
  // },
  {
    title: 'GLOBAL RECYCLED STANDARD',
    subtitle: 'GRS Certification',
    description: 'Verifies our commitment to recycled content, chain of custody, social and environmental practices, and chemical restrictions in our manufacturing processes.',
    image: '/certificates/new2026/grs_white_bg.webp',
    color: '#a855f7',
    category: 'sustainability',
    benefits: [
      'Verified recycled content',
      'Chain of custody tracking',
      'Chemical restriction compliance',
      'Circular economy contribution',
    ],
  },
  // {
  //   title: 'SEDEX',
  //   subtitle: 'Ethical Trade & Supply Chain',
  //   description: 'Member of the Supplier Ethical Data Exchange, demonstrating our commitment to ethical business practices, labor standards, health & safety, and environmental responsibility.',
  //   image: '/Sedex_logo.webp',
  //   color: '#f59e0b',
  //   category: 'ethical',
  //   benefits: [
  //     'Ethical labor practices',
  //     'Transparent supply chain',
  //     'Health & safety standards',
  //     'Environmental responsibility',
  //   ],
  // },
  {
    title: 'HIGG INDEX',
    subtitle: 'Sustainability Performance',
    description: 'Measured and evaluated through the Higg Index, our sustainability performance is benchmarked against industry standards for environmental and social impact.',
    image: '/certificates/new2026/higg-index.webp',
    color: '#14b8a6',
    category: 'sustainability',
    benefits: [
      'Sustainability benchmarking',
      'Performance measurement',
      'Industry-standard assessment',
      'Continuous improvement tracking',
    ],
  },
  {
    title: 'INTERTEK TQP',
    subtitle: 'Trim Quality Program',
    description: 'Recognized by Intertek for excellence in trim manufacturing, ensuring our trims and accessories meet the highest quality and performance standards globally.',
    image: '/certificates/tqp.webp',
    color: '#ef4444',
    category: 'quality',
    benefits: [
      'Quality assurance program',
      'Global performance standards',
      'Manufacturing excellence',
      'Customer confidence',
    ],
  },
];

const categoryLabels: Record<string, { label: string; icon: React.ElementType }> = {
  quality: { label: 'Quality', icon: Award },
  sustainability: { label: 'Sustainability', icon: Recycle },
  safety: { label: 'Safety', icon: Shield },
  ethical: { label: 'Ethical', icon: Users },
};

// Parallax hero section
const ParallaxHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      {/* Floating certification badges in background */}
      <div className="absolute inset-0 overflow-hidden">
        {[Shield, Award, Leaf, Globe, CheckCircle, Recycle].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/[0.03]"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Icon size={60 + i * 10} />
          </motion.div>
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8"
        >
          <Shield className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300 tracking-wide uppercase">Internationally Certified</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Our Certifications
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Validated by the world's leading certification bodies for quality,
          sustainability, safety, and ethical manufacturing practices
        </motion.p>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { number: '6+', label: 'Certifications' },
            { number: '100%', label: 'Compliance' },
            { number: '50+', label: 'Brands Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
              <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// Individual certification card with parallax scroll effect
const CertCard = ({ cert, index }: { cert: Certification; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -60 : 60, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const isEven = index % 2 === 0;
  const CategoryIcon = categoryLabels[cert.category].icon;

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity, scale }}
      className="relative"
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
        {/* Image / Icon side */}
        <div className="w-full md:w-5/12 flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative group"
          >
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{ background: `${cert.color}20` }}
            />
            <div className="relative bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[240px] shadow-lg overflow-hidden">
              {/* Subtle gradient accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 opacity-60"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)` }}
              />
              {cert.image ? (
                <WebPImage
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-40 w-auto object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-4">
                  {cert.icon && (
                    <cert.icon
                      size={80}
                      style={{ color: cert.color }}
                    />
                  )}
                  <span
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: cert.color }}
                  >
                    {cert.title}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Text side */}
        <div className="w-full md:w-7/12 space-y-5">
          {/* Category badge */}
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                color: cert.color,
                backgroundColor: `${cert.color}15`,
                border: `1px solid ${cert.color}30`,
              }}
            >
              <CategoryIcon size={12} />
              {categoryLabels[cert.category].label}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {cert.title}
          </h3>
          <p className="text-base text-gray-500 font-medium uppercase tracking-wide">
            {cert.subtitle}
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            {cert.description}
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {cert.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-2"
              >
                <CheckCircle
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: cert.color }}
                />
                <span className="text-sm text-gray-400">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Bottom CTA section
const CommitmentSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-16 h-16 mx-auto mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
        >
          <Globe className="w-8 h-8 text-blue-400" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Committed to Global Excellence
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Our certifications are not just badges — they represent our unwavering dedication to quality,
          safety, sustainability, and ethical practices across every facet of our operations.
          We continuously invest in maintaining and exceeding these international standards.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-lg text-base shadow-sm transition-all duration-200 hover:bg-gray-200"
        >
          Partner With Us <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>Certifications | ADSONS Group of Industries</title>
        <meta name="description" content="View ADSONS' certifications including OEKO-TEX, ISO 9001, ISO 14001, ISO 45001, Sedex, GRS, Higg Index, and more. Commitment to quality, compliance, and sustainable manufacturing." />
        <meta name="keywords" content="certifications, OEKO-TEX, ISO 9001, ISO 14001, ISO 45001, Sedex, GRS, Higg Index, Target nominated supplier, quality, compliance, sustainable manufacturing, textile certifications, ADSONS" />
        <meta property="og:title" content="Certifications | ADSONS Group of Industries" />
        <meta property="og:description" content="View ADSONS' certifications including OEKO-TEX, ISO 9001, ISO 14001, ISO 45001, Sedex, GRS, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/certifications" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Certifications | ADSONS Group of Industries" />
        <meta name="twitter:description" content="View ADSONS' certifications including OEKO-TEX, ISO 9001, ISO 14001, ISO 45001, Sedex, GRS, and more." />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>
      <StickyScroll>
        <div className="min-h-screen bg-black text-white">
          <ParallaxHero />

          {/* Certifications list */}
          <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-20 md:space-y-28">
                {certifications.map((cert, index) => (
                  <CertCard key={cert.title} cert={cert} index={index} />
                ))}
              </div>
            </div>
          </section>

          <CommitmentSection />
        </div>
      </StickyScroll>
    </>
  );
};

export default Certifications;
