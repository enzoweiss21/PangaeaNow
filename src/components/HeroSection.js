import React from 'react';
import { Globe } from 'lucide-react';

const HeroSection = () => (
  <div className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center">
        <Globe className="w-20 h-20 mx-auto text-blue-600 animate-spin-slow" />
        <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          PangeaNow
        </h1>
        <p className="mt-3 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-5 md:max-w-3xl">
          Unifying Business & Technology Through Expert Consulting
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;