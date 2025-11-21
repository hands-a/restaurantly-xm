// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home V1', path: '/' },
    { name: 'Home V2', path: '/home-v2' },
    { name: 'Home V3', path: '/home-v3' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Blog Post CMS', path: '/blog-post' },
    { name: 'Team', path: '/team' },
    { name: 'Team Member CMS', path: '/team-member' },
    { name: 'Events', path: '/events' },
    { name: 'Services', path: '/services' }
  ];

  const menuPages = [
    { name: 'Menu V1', path: '/menu' },
    { name: 'Menu V2', path: '/menu-v2' },
    { name: 'Menu V3', path: '/menu-v3' },
    { name: 'Menu Single CMS', path: '/menu-single' },
    { name: 'Delivery', path: '/delivery' },
    { name: 'Coming Soon', path: '/coming-soon' }
  ];

  const contactPages = [
    { name: 'Contact V1', path: '/contact' },
    { name: 'Contact V2', path: '/contact-v2' },
    { name: 'Contact V3', path: '/contact-v3' }
  ];

  const utilityPages = [
    { name: 'Start Here', path: '/start-here' },
    { name: 'Style Guide', path: '/style-guide' },
    { name: 'Password Protected', path: '/password' },
    { name: '404 Not Found', path: '/404' },
    { name: 'Licenses', path: '/licenses' },
    { name: 'Changelog', path: '/changelog' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Brand & Contact Section */}
          <div className="space-y-8">
            {/* Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="text-2xl font-bold">RESTAURANTLY</div>
                <div className="text-amber-600 text-sm -mt-1">X</div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Experience the finest culinary journey in California with our exceptional dishes and premium service.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Call us</div>
                  <a href="tel:9179427243" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                    (917) 942 – 7243
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center group-hover:bg-amber-700 transition-colors duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email us</div>
                  <a href="mailto:reservation@restaurantly.com" className="text-white hover:text-amber-400 transition-colors duration-300 font-medium">
                    reservation@restaurantly.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social}
                >
                  <span className="text-sm font-semibold">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Product Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-400">PRODUCT</h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Menu & Contact Links */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-4 text-amber-400">MENU</h3>
                <div className="space-y-2">
                  {menuPages.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-amber-400">CONTACT</h3>
                <div className="space-y-2">
                  {contactPages.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm py-1"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Utility Pages */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-amber-400">UTILITY PAGES</h3>
              <div className="space-y-2">
                {utilityPages.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm py-1"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <button className="text-amber-400 hover:text-amber-300 font-medium text-sm flex items-center space-x-1">
                    <span>Browse More Templates</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="border-t border-gray-800 pt-12">
          <h3 className="font-bold text-2xl mb-8 text-center text-amber-400">OUR LOCATIONS</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2"> Cairo </h4>
              <p className="text-gray-300 text-sm">4600 Rodeo Ln</p>
              <p className="text-gray-300 text-sm">Cairo, Egypt</p>
              <button className="mt-4 text-amber-400 hover:text-amber-300 text-sm font-medium">
                Get Directions →
              </button>
            </div>

            <div className="text-center p-6 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-colors duration-300">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-2"> Alexandria </h4>
              <p className="text-gray-300 text-sm">2736 Worden St.</p>
              <p className="text-gray-300 text-sm">Alexandria, Egypt</p>
              <button className="mt-4 text-amber-400 hover:text-amber-300 text-sm font-medium">
                Get Directions →
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="text-amber-400 hover:text-amber-300 font-medium flex items-center justify-center space-x-2 mx-auto">
              <span>More locations</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Restaurantly X. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <button
                  key={link}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex space-x-2">
                {['💳', '🅿️', '📱', '🔗'].map((method, index) => (
                  <span key={index} className="text-lg opacity-70">{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;