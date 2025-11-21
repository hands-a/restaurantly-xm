// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero/Hero';
import Reservation from '../components/Reservation/Reservation';
import MenuPreview from '../components/Menu/MenuPreview';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Reservation />
      <MenuPreview />
      <Testimonials />
    </div>
  );
};

export default Home;