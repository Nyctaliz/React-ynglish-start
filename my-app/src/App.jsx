import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Hero />
      <Features />
      <Courses addToCart={addToCart} />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;