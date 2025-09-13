'use client'

import { useAuth } from '@/context/AuthProvider';
import React from 'react';

// The Navbar component that uses the custom hook.
export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg p-4 rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your site logo or name */}
        <div className="text-xl font-bold text-gray-800">
          My App
        </div>

        {/* User status section */}
        <div className="flex items-center space-x-4">
          { user ? (
            <div className="flex items-center space-x-2">
              <span className="text-green-600 font-medium">OK</span>
              <span className="text-gray-700">Hi, {user.name}</span>
            </div>
          ) : (
            <span className="text-red-500">Not Logged In</span>
          )}
        </div>
      </div>
    </nav>
  );
}
