import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactCTA from '../components/ContactCTA';
import HumanRobotImage from '../assets/images/Human_Robot.jpg';

const HomePage = () => {
  const [scrollBlur, setScrollBlur] = useState(0.3); // Reduced initial blur

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxBlur = 8; // Reduced max blur from 15
      const initialBlur = 0.3; // Reduced initial blur

      if (scrollPosition === 0) {
        setScrollBlur(initialBlur);
        return;
      }

      const scrollFactor = Math.min(scrollPosition / 1100, 1);
      setScrollBlur(initialBlur + scrollFactor * maxBlur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Main background image with dynamic blur and overlay */}
      <div className="fixed inset-0 w-full h-full z-0">
        <img
          src={HumanRobotImage}
          alt="Background"
          className="w-full h-full object-cover object-center opacity-95"
          style={{
            filter: `blur(${scrollBlur}px) brightness(0.85)`, // Slightly darker
            transition: 'filter 0.2s ease-out',
            transform: 'scale(1.05)',
          }}
        />
        {/* Changed from white to stone-200 with adjusted opacity */}
        <div className="absolute inset-0 bg-stone-200/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <div className="relative">
          <ServicesSection />
          <AboutSection />
          <ContactCTA />
        </div>
      </div>
    </div>
  );
};

export default HomePage;