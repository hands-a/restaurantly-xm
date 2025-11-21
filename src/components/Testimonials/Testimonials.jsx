// src/components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The best restaurant",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit erat eget porttitor tincidunt feugiat mi malesuada libero sed mattis quis eget varius.",
      author: "Rana Wael",
      role: "Food Blogger",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 2,
      quote: "Simply delicious",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit erat eget porttitor tincidunt feugiat mi malesuada libero sed mattis quis eget varius.",
      author: "Abdullah Sayed",
      role: "Regular Customer",
      rating: 5,
      image: "👨‍🍳"
    },
    {
      id: 3,
      quote: "One of a kind restaurant",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit erat eget porttitor tincidunt feugiat mi malesuada libero sed mattis quis eget varius.",
      author: "Ahmed Sayed",
      role: "Local Guide",
      rating: 5,
      image: "👩‍🎓"
    },
    {
      id: 4,
      quote: "Exceptional experience",
      text: "The food quality and service were beyond expectations. Will definitely come back!",
      author: "Hamza Nour",
      role: "Food Critic",
      rating: 5,
      image: "👨‍💻"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            WHAT OUR CLIENTS SAY
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-2xl">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-amber-200 text-6xl">
              "
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-amber-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6">
                "{testimonials[activeTestimonial].quote}"
              </h3>

              {/* Text */}
              <p className="text-lg text-gray-600 text-center leading-relaxed mb-8 max-w-2xl mx-auto">
                {testimonials[activeTestimonial].text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {testimonials[activeTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[activeTestimonial].author}
                  </div>
                  <div className="text-amber-600 text-sm">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-amber-50 transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:bg-amber-50 transition-all duration-300 flex items-center justify-center group"
            >
              <svg className="w-6 h-6 text-gray-600 group-hover:text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 ${
                activeTestimonial === index ? 'border-amber-500' : 'border-transparent'
              }`}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                "{testimonial.quote}"
              </h4>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-amber-600 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-amber-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-amber-100">Five Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-amber-100">Would Return</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 mx-auto">
              <span>READ MORE REVIEWS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by food lovers across the world</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Yelp</div>
            <div className="text-2xl font-bold text-gray-400">Google Reviews</div>
            <div className="text-2xl font-bold text-gray-400">TripAdvisor</div>
            <div className="text-2xl font-bold text-gray-400">OpenTable</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;