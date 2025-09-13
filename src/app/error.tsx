'use client';

import React from 'react';
import { TriangleAlert } from 'lucide-react';

function ErrorPage() {
  return (
    // Main container with dynamic min-height and centered content
    <div className='flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[300px] md:min-h-[600px]'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Error icon */}
      <TriangleAlert size={48} className='text-red-500 mb-4' />
      
      {/* Error heading */}
      <h1 className='text-3xl font-bold mb-2'>Oops! Something went wrong.</h1>
      
      {/* Error description */}
      <p className='text-gray-600 dark:text-gray-400 mb-8 max-w-lg'>
        We're sorry, but an unexpected error occurred. Please try again later or return to the home page.
      </p>
      
      {/* Back to Home button */}
      <a 
        href='/' 
        className='bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
      >
        Go to Homepage
      </a>
    </div>
  );
}

export default ErrorPage;
