'use client'

import React from 'react';
import { Frown } from 'lucide-react';

function NotFoundPage() {
  return (
    // Main container for the 404 page, with a dark background and centered content
    <div className='flex flex-col items-center justify-center text-center p-8 font-sans min-h-[500px] md:min-h-[700px]'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* 404 icon */}
      <Frown size={48} className='text-red-500 mb-4' />
      
      {/* Error heading */}
      <h1 className='text-4xl md:text-5xl font-bold mb-2'>404 - Page Not Found</h1>
      
      {/* Error description */}
      <p className='text-gray-400 mb-8 max-w-lg'>
        The page you are looking for does not exist or has been moved.
      </p>
      
      {/* Back to Home button */}
      <a 
        href='/' 
        className='inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors'
      >
        <span>Go to Homepage</span>
      </a>
    </div>
  );
}

export default NotFoundPage;
