import React from 'react';

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="relative w-full h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center text-stone-800 z-20">
        <button className="text-base font-light hover:text-stone-700">Menu</button>
        <div className="text-base font-light">AI·BI</div>
        <div className="flex gap-4 items-center">
         {/*  <button className="text-base font-light hover:text-stone-700">Cart (0)</button>*/}
          <button className="text-base font-light hover:text-stone-700">About</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="relative z-10 text-center px-4 mt-[-5vh]"> {/* Added negative margin to move up */}
          <h1 className="text-7xl md:text-7xl lg:text-7xl font-serif mb-6 text-stone-800 drop-shadow-xl tracking-wide">
            Pangaea.Now
          </h1>
          <p className="text-lg md:text-xl font-light text-stone-700 mb-10 drop-shadow-lg max-w-2xl mx-auto tracking-wider">
            Advancing Human-AI Collaboration
          </p>
          <button 
            onClick={scrollToServices}
            className="bg-stone-800 text-stone-100 px-7 py-2.5 rounded-full text-base 
                     font-light hover:bg-stone-700 transition-colors duration-300 
                     shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;