import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Delivery = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [areaName, setAreaName] = useState('');

  const deliveryAreas = [
    { area: 'Nasr City', time: '25-30 minutes', fee: '20 EGP' },
    { area: 'Mohandessin', time: '30-35 minutes', fee: '25 EGP' },
    { area: 'Heliopolis', time: '20-25 minutes', fee: '20 EGP' },
    { area: 'Zamalek', time: '35-40 minutes', fee: '30 EGP' },
    { area: 'Sheikh Zayed', time: '45-50 minutes', fee: '35 EGP' },
    { area: 'New Cairo', time: '40-45 minutes', fee: '30 EGP' },
    { area: 'Maadi', time: '30-35 minutes', fee: '25 EGP' },
    { area: 'Downtown', time: '25-30 minutes', fee: '20 EGP' }
  ];

  const checkDelivery = () => {
    if (areaName.trim()) {
      alert(`🚚 Delivery available in ${areaName}! Estimated time: 25-35 minutes`);
    } else {
      alert('Please enter your area name');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Delivery & Pickup
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Get your favorite dishes delivered fast or pick them up fresh and ready
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                activeTab === 'delivery'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-amber-50'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Delivery</span>
            </button>
            <button
              onClick={() => setActiveTab('pickup')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                activeTab === 'pickup'
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-amber-50'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Pickup</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'delivery' ? (
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  ) : (
                    <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  )}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {activeTab === 'delivery' ? 'Fast Delivery' : 'Quick Pickup'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {activeTab === 'delivery' 
                    ? '30 minutes or less to your doorstep' 
                    : 'Ready in 15-20 minutes'
                  }
                </p>
              </div>

              {activeTab === 'delivery' && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Check delivery availability in your area
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Enter your area name"
                      value={areaName}
                      onChange={(e) => setAreaName(e.target.value)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                    <button
                      onClick={checkDelivery}
                      className="bg-amber-600 text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition-colors font-semibold"
                    >
                      Check
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <Link
                  to="/menu"
                  className="block w-full bg-amber-600 text-white py-4 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg text-center"
                >
                  {activeTab === 'delivery' ? 'Order for Delivery' : 'Order for Pickup'}
                </Link>
                <Link
                  to="/menu"
                  className="block w-full border-2 border-amber-600 text-amber-600 py-4 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold text-lg text-center"
                >
                  Browse Menu First
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contactless Delivery</h3>
                <p className="text-gray-600 text-sm">Safe and hygienic delivery options</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Tracking</h3>
                <p className="text-gray-600 text-sm">Track your order in real-time</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1a2 2 0 01-2-2v-1a2 2 0 01-2-2V6a2 2 0 012-2h2V3a1 1 0 011-1h6a1 1 0 011 1v1z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">We're here to help anytime</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Delivery Areas in Cairo</span>
              </h3>
              
              <div className="space-y-3">
                {deliveryAreas.map((area, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 hover:bg-amber-50 rounded-lg px-2 transition-colors">
                    <div>
                      <div className="font-semibold text-gray-900">{area.area}</div>
                      <div className="text-sm text-gray-500">{area.time}</div>
                    </div>
                    <div className="text-amber-600 font-semibold">{area.fee}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl">🎉</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">First Order?</h3>
                  <p className="text-amber-100">Get 20% off + free delivery</p>
                </div>
              </div>
              <div className="text-sm bg-white/10 px-3 py-2 rounded-lg font-mono">
                Use code: <span className="font-bold">FIRST20</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Operating Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Saturday - Thursday</span>
                  <span className="font-semibold">9 AM - 12 AM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Friday</span>
                  <span className="font-semibold">10 AM - 1 AM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-gray-600">Ramadan Hours</span>
                  <span className="font-semibold">Iftar - 2 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Deliveries in Cairo</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">4.8★</div>
              <div className="text-gray-600">Delivery Rating</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">28min</div>
              <div className="text-gray-600">Avg. Delivery Time</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-gray-600">Areas Covered</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Accepted Payment Methods</h3>
          <div className="flex justify-center items-center space-x-6 flex-wrap">
            <div className="flex flex-col items-center group transform hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">Cash</span>
            </div>

            <div className="flex flex-col items-center group transform hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">Credit Card</span>
            </div>

            <div className="flex flex-col items-center group transform hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-red-200 transition-colors">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">Vodafone Cash</span>
            </div>

            <div className="flex flex-col items-center group transform hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-purple-200 transition-colors">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">InstaPay</span>
            </div>

            <div className="flex flex-col items-center group transform hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-amber-200 transition-colors">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <span className="text-xs text-gray-600 font-medium">Bank Transfer</span>
            </div>
          </div>
          
          <div className="text-center text-gray-600 mt-4 text-sm">
            Multiple payment options for your convenience
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
