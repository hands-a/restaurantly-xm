import React, { useState } from 'react';

const Pages = () => {
  const [activeBranch, setActiveBranch] = useState(0);

  const branches = [
    {
      id: 1,
      name: 'Nasr City Branch',
      address: '90 El Nasr Road, Nasr City, Cairo',
      phone: '+20 100 123 4567',
      hours: {
        weekdays: '9:00 AM - 12:00 AM',
        weekend: '10:00 AM - 1:00 AM',
        ramadan: 'Iftar - 2:00 AM'
      },
      features: ['Free Parking', 'Outdoor Seating', 'Family Section', 'WiFi'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      map: 'https://maps.google.com/?q=Nasr+City,Cairo'
    },
    {
      id: 2,
      name: 'Zamalek Branch',
      address: '15 Brazil Street, Zamalek, Cairo',
      phone: '+20 100 234 5678',
      hours: {
        weekdays: '10:00 AM - 1:00 AM',
        weekend: '10:00 AM - 2:00 AM',
        ramadan: 'Iftar - 3:00 AM'
      },
      features: ['Nile View', 'Valet Parking', 'Live Music', 'Private Rooms'],
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      map: 'https://maps.google.com/?q=Zamalek,Cairo'
    },
    {
      id: 3,
      name: 'New Cairo Branch',
      address: 'Point 90 Mall, New Cairo',
      phone: '+20 100 345 6789',
      hours: {
        weekdays: '10:00 AM - 11:00 PM',
        weekend: '10:00 AM - 12:00 AM',
        ramadan: 'Iftar - 1:00 AM'
      },
      features: ['Mall Location', 'Kids Play Area', 'Modern Design', 'Events Space'],
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      map: 'https://maps.google.com/?q=Point+90+Mall,New+Cairo'
    }
  ];

  const teamMembers = [
    {
      name: 'Chef Ahmed Hassan',
      role: 'Executive Chef',
      experience: '15+ years',
      specialty: 'Mediterranean Cuisine',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Chef Maria Samir',
      role: 'Pastry Chef',
      experience: '12+ years',
      specialty: 'French Desserts',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Omar Khalid',
      role: 'Restaurant Manager',
      experience: '10+ years',
      specialty: 'Customer Service',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Locations & Team
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Discover our branches across Cairo and meet our talented team
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Branches
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our conveniently located branches across Cairo
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-2 flex space-x-2">
              {branches.map((branch, index) => (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeBranch === index
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-amber-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{branch.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-80 md:h-full">
                <img
                  src={branches[activeBranch].image}
                  alt={branches[activeBranch].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {branches[activeBranch].name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-amber-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">{branches[activeBranch].address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">{branches[activeBranch].phone}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Operating Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday - Thursday</span>
                      <span className="font-medium">{branches[activeBranch].hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday</span>
                      <span className="font-medium">{branches[activeBranch].hours.weekend}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ramadan</span>
                      <span className="font-medium">{branches[activeBranch].hours.ramadan}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {branches[activeBranch].features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={branches[activeBranch].map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-amber-600 text-white py-3 rounded-xl hover:bg-amber-700 transition-colors text-center font-semibold"
                  >
                    Get Directions
                  </a>
                  <button className="flex-1 border border-amber-600 text-amber-600 py-3 rounded-xl hover:bg-amber-50 transition-colors font-semibold">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented professionals behind our exceptional dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Experience:</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Specialty:</span>
                      <span className="font-medium">{member.specialty}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">3</div>
              <div className="text-gray-600">Branches</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-amber-600 mb-2">10k+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
