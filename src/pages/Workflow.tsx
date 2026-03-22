import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WebPImage from '../components/common/WebPImage';
import {
  Package,
  Truck,
  Factory,
  Box,
  CheckCircle2,
  ClipboardCheck,
  Search,
  ChevronRight,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import StickyScroll from '../components/ui/sticky-scroll';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string | string[];
  details: string[];
  accent: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Raw Material Selection',
    description:
      'Carefully selecting high-quality raw materials that meet our strict standards for excellence and sustainability.',
    icon: Package,
    image: '/workflow/12.webp',
    accent: '#3b82f6',
    details: [
      'Quality inspection of incoming materials',
      'Material testing and verification',
      'Storage in controlled environment',
      'Documentation and tracking',
    ],
  },
  {
    title: 'Production Process',
    description:
      'State-of-the-art manufacturing with precision, automated production lines, and real-time monitoring.',
    icon: Factory,
    image: [
      '/workflow/20.webp',
      '/workflow/cords.webp',
      '/workflow/18.webp',
      '/workflow/7.webp',
    ],
    accent: '#8b5cf6',
    details: [
      'Automated production lines',
      'Quality control checkpoints',
      'Real-time monitoring systems',
      'Efficiency optimization',
    ],
  },
  {
    title: 'Quality Assurance',
    description:
      'Rigorous testing and quality control at every stage ensures the highest industry standards.',
    icon: CheckCircle2,
    image: '/workflow/16.webp',
    accent: '#10b981',
    details: [
      'Comprehensive testing procedures',
      'Quality standards verification',
      'Performance testing',
      'Durability assessment',
    ],
  },
  {
    title: 'Packaging',
    description:
      'Secure and sustainable packaging solutions with eco-friendly materials and custom options.',
    icon: Box,
    image: '/workflow/14.webp',
    accent: '#f59e0b',
    details: [
      'Eco-friendly packaging materials',
      'Custom packaging solutions',
      'Product protection assurance',
      'Labeling and documentation',
    ],
  },
  {
    title: 'Metal Detection',
    description:
      'Advanced multi-frequency metal detection technology ensuring complete product safety and compliance.',
    icon: Search,
    image: '/workflow/md.webp',
    accent: '#ef4444',
    details: [
      'High-sensitivity detection systems',
      'Multi-frequency scanning technology',
      'Automatic rejection of contaminants',
      'Comprehensive safety compliance',
    ],
  },
  {
    title: 'Final Inspection',
    description:
      'Thorough final quality check, documentation review, and packaging integrity verification before shipping.',
    icon: ClipboardCheck,
    image: '/workflow/9.webp',
    accent: '#06b6d4',
    details: [
      'Quality check & documentation review',
      'Order accuracy verification',
      'Packaging integrity inspection',
      'Final safety assessment',
    ],
  },
  {
    title: 'Shipping & Delivery',
    description:
      'Efficient global logistics network with real-time tracking and on-time delivery guarantee.',
    icon: Truck,
    image: '/workflow/19.webp',
    accent: '#22c55e',
    details: [
      'Global shipping network',
      'Real-time tracking',
      'Secure transportation',
      'On-time delivery guarantee',
    ],
  },
];

// ── Parallax Hero ──────────────────────────────────────────────
const WorkflowHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y, scale: imgScale }} className="absolute inset-0">
        <WebPImage
          src="/workflow/9.webp"
          alt="Manufacturing"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
        >
          <Factory className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300 tracking-wide uppercase">
            From Raw Materials to Delivery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
            Our Workflow
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Every product goes through a meticulous 7-step process, ensuring
          uncompromising quality from the first thread to the final shipment
        </motion.p>

        {/* Step count indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex justify-center gap-3"
        >
          {workflowSteps.map((step, i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-semibold text-white/60 hover:bg-white/10 transition-colors"
            >
              {i + 1}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

// ── Single workflow step ───────────────────────────────────────
const WorkflowStepCard = ({
  step,
  index,
  total,
}: {
  step: WorkflowStep;
  index: number;
  total: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const isEven = index % 2 === 0;
  const x = useTransform(scrollYProgress, [0, 1], [isEven ? -40 : 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const Icon = step.icon;
  const isCarousel = Array.isArray(step.image);

  return (
    <motion.div ref={ref} style={{ x, opacity }} className="relative">
      {/* Connector line to next step */}
      {index < total - 1 && (
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full w-px h-20 md:h-28">
          <div className="w-full h-full bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      )}

      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-8 lg:gap-16 items-center`}
      >
        {/* ── Image side ── */}
        <div className="w-full lg:w-1/2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative group rounded-2xl overflow-hidden"
          >
            {/* Accent glow */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
              style={{ background: `${step.accent}25` }}
            />

            {isCarousel ? (
              <Carousel
                plugins={[Autoplay({ delay: 3500 })]}
                className="w-full"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  {(step.image as string[]).map((imgSrc, i) => (
                    <CarouselItem key={i}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                        <WebPImage
                          src={imgSrc}
                          alt={`${step.title} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Subtle inner shadow */}
                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <WebPImage
                  src={step.image as string}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            )}
          </motion.div>
        </div>

        {/* ── Text side ── */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Step number + icon row */}
          <div className="flex items-center gap-4">
            <div
              className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${step.accent}15` }}
            >
              <Icon size={24} style={{ color: step.accent }} />
              <div
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: step.accent }}
              >
                {index + 1}
              </div>
            </div>
            <div
              className="h-px flex-1 opacity-20"
              style={{ backgroundColor: step.accent }}
            />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {step.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {step.description}
            </p>
          </div>

          {/* Details list */}
          <div className="space-y-3 pt-2">
            {step.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 group/item"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ backgroundColor: `${step.accent}10` }}
                >
                  <ChevronRight
                    size={14}
                    style={{ color: step.accent }}
                  />
                </div>
                <span className="text-gray-300 text-base">{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── CTA Section ────────────────────────────────────────────────
const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-16 h-16 mx-auto mb-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
        >
          <CheckCircle2 className="w-8 h-8 text-blue-400" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Quality at Every Step
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Our workflow is designed to ensure that every product leaving our facility
          meets the highest industry standards. From raw materials to final delivery,
          excellence is non-negotiable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:bg-gray-200"
          >
            Explore Products <ChevronRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-all duration-200 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

// ── Main Page ──────────────────────────────────────────────────
const Workflow = () => {
  return (
    <>
      <Helmet>
        <title>Workflow | ADSONS Group of Industries</title>
        <meta
          name="description"
          content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance. Discover our commitment to precision, efficiency, and sustainability."
        />
        <meta
          name="keywords"
          content="workflow, manufacturing process, quality assurance, raw materials, production, sustainable manufacturing, ADSONS, textile industry"
        />
        <meta property="og:title" content="Workflow | ADSONS Group of Industries" />
        <meta
          property="og:description"
          content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/workflow" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Workflow | ADSONS Group of Industries" />
        <meta
          name="twitter:description"
          content="Explore ADSONS' manufacturing workflow: from raw material selection to quality assurance."
        />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>

      <StickyScroll>
        <div className="min-h-screen bg-black text-white">
          <WorkflowHero />

          {/* Timeline steps */}
          <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="space-y-24 md:space-y-32">
                {workflowSteps.map((step, index) => (
                  <WorkflowStepCard
                    key={step.title}
                    step={step}
                    index={index}
                    total={workflowSteps.length}
                  />
                ))}
              </div>
            </div>
          </section>

          <CTASection />
        </div>
      </StickyScroll>
    </>
  );
};

export default Workflow;
