import React from 'react';
import { Globe } from 'lucide-react';

const HeroSection = () => (
  <div className="relative overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center">
        <Globe className="w-24 h-24 mx-auto text-blue-600 animate-float" />
        <h1 className="mt-8 text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            PangeaNow
          </span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-8 md:max-w-3xl">
          Unifying Business & Technology Through Expert Consulting
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;