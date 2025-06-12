import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TargetSupplierSection from '../components/home/TargetSupplierSection';
import CertificationsSection from '../components/home/CertificationsSection';
import SustainabilitySection from '../components/home/SustainabilitySection';
import TrustedClientsSection from '../components/home/TrustedClientsSection';
import EventSection from '../components/home/EventSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <TargetSupplierSection />
      <TrustedClientsSection />
      <CertificationsSection />
      <EventSection />
      <SustainabilitySection />
      
    </div>
  );
};

export default Home; 