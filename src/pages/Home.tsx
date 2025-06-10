import React from 'react';
import HeroSection from '../components/home/HeroSection';
import TargetSupplierSection from '../components/home/TargetSupplierSection';
import CertificationsSection from '../components/home/CertificationsSection';
import SustainabilitySection from '../components/home/SustainabilitySection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <TargetSupplierSection />
      <CertificationsSection />
      <SustainabilitySection />
    </div>
  );
};

export default Home; 