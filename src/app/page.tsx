'use client'

import React from 'react';
import { MessageCircle, Users, Image, Send, ArrowRight } from 'lucide-react';

function ChatLandingPage() {
  return (
    // Main container for the landing page, with a dark background and responsive padding
    <div className="min-h-screen font-sans">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px] text-center p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-4">
            Connect with friends, effortlessly.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            A simple, fast, and secure way to chat with the people who matter most.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            <span>Start Chatting</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <MessageCircle size={48} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Messaging</h3>
              <p className="text-gray-400 text-sm">
                Experience lightning-fast message delivery and seamless conversation flow.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <Users size={48} className="text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Group Chats</h3>
              <p className="text-gray-400 text-sm">
                Create and join group chats to connect with multiple friends at once.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
              <Image size={48} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Media Sharing</h3>
              <p className="text-gray-400 text-sm">
                Share photos, videos, and files with your contacts easily and securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start chatting?</h2>
          <p className="text-lg text-gray-400 mb-8">
            Join thousands of users who have found their new favorite way to connect.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            <span>Sign Up Now</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        <p>&copy; 2024 Chat App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ChatLandingPage;
