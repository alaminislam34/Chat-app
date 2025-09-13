'use client'

import React from 'react';

function PageLoader() {
  return (
    // Main container to center the loader on the screen
    <div className='flex items-center justify-center bg-gray-50 min-h-[300px] md:min-h-[600px]'>
      {/* Container for the pulsing dots */}
      <div className='flex space-x-2'>
        {/*
          Each dot is a small, rounded div.
          The `animate-pulse` class provides the pulsing effect,
          and `animation-delay` creates a staggered animation for each dot.
        */}
        <div className='w-4 h-4 rounded-full bg-blue-500 animate-pulse'></div>
        <div className='w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-100'></div>
        <div className='w-4 h-4 rounded-full bg-blue-500 animate-pulse delay-200'></div>
      </div>
    </div>
  );
}

export default PageLoader;
