// src/components/Reservation/Reservation.jsx
import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Reservation Data:', formData);
    alert('Reservation submitted successfully!');
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            MAKE A RESERVATION
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book your table online and experience the best culinary journey in California
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:9179427243" className="text-amber-600 hover:text-amber-700 text-lg font-medium transition-colors duration-300">
                    (917) 942 – 7243
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-amber-50 rounded-2xl hover:bg-amber-100 transition-colors duration-300 group">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:book@restaurantly.com" className="text-amber-600 hover:text-amber-700 text-lg font-medium transition-colors duration-300">
                    book@restaurantly.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Quick response</p>
                </div>
              </div>

              {/* Quick Reservation Button */}
              <button className="w-full bg-amber-600 text-white py-4 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
                <span>Reservate now</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Locations */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">OUR LOCATIONS</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 font-medium">4600 Rodeo Ln</p>
                    <p className="text-gray-600 text-sm">Los Angeles, California, CA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-700 font-medium">2736 Worden St.</p>
                    <p className="text-gray-600 text-sm">San Diego, California, CA</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 text-amber-600 hover:text-amber-700 font-medium flex items-center justify-center space-x-2 py-2">
                <span>More locations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Opening Hours */}
            <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">OPEN HOURS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Mon – Fri</span>
                  <span className="text-amber-600 font-semibold">9 AM – 8 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-amber-600 font-semibold">10 AM – 11 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-amber-600 font-semibold">10 AM – 10 PM</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-white text-amber-600 border border-amber-600 py-3 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold">
                Book a table
              </button>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Make a reservation</h3>
              <p className="text-gray-600 mb-8">Fill out the form below to reserve your table</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Person' : 'People'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300"
                    placeholder="Any special requests or dietary requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-4 rounded-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;