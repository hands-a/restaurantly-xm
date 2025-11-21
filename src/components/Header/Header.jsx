// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      path: '/', 
      label: 'HOME', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      path: '/about', 
      label: 'ABOUT', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      path: '/menu', 
      label: 'MENU', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    },
    { 
      path: '/pages', 
      label: 'PAGES', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    { 
      path: '/delivery', 
      label: 'DELIVERY', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' 
        : 'bg-white shadow-lg py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with improved design */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center group-hover:from-amber-700 group-hover:to-orange-700 transition-all duration-300 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                RESTAURANTLY
              </span>
              <span className="text-xs text-gray-500 -mt-1">PREMIUM DINING</span>
            </div>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-all duration-300 px-4 py-3 rounded-xl group flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'text-amber-600 bg-amber-50 font-semibold shadow-md'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                <div className={`transition-colors duration-300 ${
                  isActivePath(item.path) ? 'text-amber-600' : 'text-gray-400 group-hover:text-amber-600'
                }`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
                {/* Animated underline for active state */}
                {isActivePath(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-amber-600 rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Enhanced Order Online Button */}
            <div className="ml-4 relative">
              <Link
                to="/menu"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>ORDER ONLINE</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              {/* Quick badge */}
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse shadow-lg">
                <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Fast!
              </div>
            </div>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group bg-amber-50 rounded-xl hover:bg-amber-100 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-amber-600 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-amber-600 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-amber-600 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl shadow-2xl p-6 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center space-x-4 ${
                    isActivePath(item.path)
                      ? 'text-amber-600 bg-gradient-to-r from-amber-50 to-orange-50 border-r-4 border-amber-600 shadow-md'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    isActivePath(item.path) ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-600'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="font-semibold">{item.label}</span>
                </Link>
              ))}
              
              {/* Mobile Order Online Button with enhanced style */}
              <div className="pt-4 border-t border-amber-200 mt-2">
                <Link
                  to="/menu"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-medium text-center flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-semibold">ORDER ONLINE</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <div className="text-center mt-3">
                  <span className="text-xs text-green-600 bg-green-50 px-3 py-2 rounded-full flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Delivery in 30min</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;