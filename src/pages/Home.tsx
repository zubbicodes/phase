import React from 'react';
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
  );
};

export default Home; 