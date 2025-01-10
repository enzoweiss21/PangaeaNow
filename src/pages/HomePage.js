import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactCTA from '../components/ContactCTA';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactCTA />
    </div>
  );
};

export default HomePage;