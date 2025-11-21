// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Restaurantly X</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are passionate about creating exceptional dining experiences with the finest ingredients and innovative culinary techniques.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">2015</div>
            <div className="text-gray-600">Founded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Menu Items</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9★</div>
            <div className="text-gray-600">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;