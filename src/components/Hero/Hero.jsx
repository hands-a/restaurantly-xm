// src/components/Hero/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#e5a536_1px,transparent_1px)] [background-size:50px_50px]"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200 rounded-full blur-xl opacity-30 animate-float-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Section */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                The best food
                <span className="block text-amber-600 mt-2">experience in California</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut drak atempus 
                sit euismod aliquet nec atyu mi a neque.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-3"
              >
                <span>ORDER ONLINE</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="/contact"
                className="group border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <span>BROWSE LOCATIONS</span>
                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">4.9</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">30min</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </div>
          </div>

          {/* Image/Video Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-amber-200 to-orange-300 rounded-3xl h-80 lg:h-96 xl:h-[500px] flex items-center justify-center shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 group overflow-hidden">
              
              {/* Video Play Button */}
              <button className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-amber-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </button>
              
              <div className="text-center text-white absolute bottom-6 left-6 right-6">
                <p className="text-lg font-semibold opacity-90">Watch our experience video</p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚚</span>
                </div>
                <div>
                  <div className="font-bold">30min</div>
                  <div className="text-xs opacity-90">Delivery</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;