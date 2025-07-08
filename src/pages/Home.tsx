import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import WorkflowSection from '../components/home/WorkflowSection';
import TargetSupplierSection from '../components/home/TargetSupplierSection';
import CertificationsSection from '../components/home/CertificationsSection';
import SustainabilitySection from '../components/home/SustainabilitySection';
import TrustedClientsSection from '../components/home/TrustedClientsSection';
import EventSection from '../components/home/EventSection';
import StickyScroll from '../components/ui/sticky-scroll';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ADSONS Group of Industries | Trusted By Top Brands</title>
        <meta name="description" content="Certified preshrink elastic manufacturer. Leading the way in sustainable manufacturing and innovation. Polyester knitted elastics, yarns, tapes, cords, and more." />
        <meta name="keywords" content="Adsons, Polyester Elastic, Knitted Elastic, Textile, Yarn, Tapes, Cords, Buttons, Fabrics, Workwear, Pakistan, Faisalabad, Manufacturer, Supplier, Durable, Flexible, Global" />
        {/* Open Graph tags */}
        <meta property="og:title" content="ADSONS Group of Industries" />
        <meta property="og:description" content="Certified preshrink elastic manufacturer. Leading the way in sustainable manufacturing and innovation. Polyester knitted elastics, yarns, tapes, cords, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adsons.net/" />
        <meta property="og:image" content="https://adsons.net/logo_no_bg.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ADSONS Group of Industries" />
        <meta name="twitter:description" content="Certified preshrink elastic manufacturer. Leading the way in sustainable manufacturing and innovation. Polyester knitted elastics, yarns, tapes, cords, and more." />
        <meta name="twitter:image" content="https://adsons.net/logo_no_bg.png" />
      </Helmet>
      <StickyScroll>
        <div className="min-h-screen bg-black">
          <HeroSection />
          <TargetSupplierSection />
          <TrustedClientsSection />
          <WorkflowSection />
          <CertificationsSection />
          <EventSection />
          <SustainabilitySection />
        </div>
      </StickyScroll>
    </>
  );
};

export default Home; 