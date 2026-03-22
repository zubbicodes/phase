import React from 'react';
import { motion } from 'framer-motion';
import WebPImage from '../common/WebPImage';

const TargetSupplierSection = () => {
  const partners = [
    {
      name: 'Target',
      logo: '/target-logo2.webp',
      label: "Target's Nominated Supplier",
      description:
        'Recognized and nominated by Target for our unwavering commitment to quality, compliance, and ethical manufacturing standards.',
      accent: '#E8A87C',
      accentGlow: 'rgba(232, 168, 124, 0.08)',
      accentBorder: 'rgba(232, 168, 124, 0.25)',
    },
    {
      name: 'Tesco',
      logo: '/Tesco_logo.webp',
      label: "Tesco's Trusted Supplier",
      description:
        "Proudly supplying to one of the world's largest retailers, meeting Tesco's rigorous quality benchmarks and sustainability goals.",
      accent: '#00539F',
      accentGlow: 'rgba(0, 83, 159, 0.15)',
      accentBorder: 'rgba(0, 83, 159, 0.3)',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300 tracking-wide uppercase font-medium">
              Official Partnerships
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Nominated by{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Industry Giants
            </span>
          </h2>
          <p className="mt-5 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Our excellence in manufacturing has earned us direct nominations from
            the world's most demanding retailers.
          </p>
        </motion.div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card glow on hover */}
              <div
                className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${partner.accentBorder}, transparent, ${partner.accentBorder})`,
                }}
              />

              {/* Card */}
              <div
                className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-sm p-8 md:p-10 h-full flex flex-col transition-all duration-500 group-hover:border-white/[0.15]"
                style={{
                  background: `linear-gradient(135deg, ${partner.accentGlow}, rgba(0,0,0,0.4))`,
                }}
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                    style={{
                      backgroundColor: `${partner.accent}20`,
                      color: partner.accent,
                      border: `1px solid ${partner.accent}40`,
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Nominated Supplier
                  </div>

                  {/* Floating certified badge */}
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    <WebPImage
                      src="/certified.png"
                      alt="Certified"
                      className="w-12 h-12 object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                {/* Logo area */}
                <div className="flex-1 flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-full max-w-[280px] bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <WebPImage
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      className="w-full h-24 md:h-28 object-contain"
                    />
                  </motion.div>
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {partner.label}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                  <div
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: partner.accent }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                    Verified Partnership
                  </div>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-500 text-sm">
                    Quality Assured
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetSupplierSection;
