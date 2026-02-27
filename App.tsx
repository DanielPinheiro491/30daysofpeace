import { useEffect } from 'react';
import Hero from './components/Hero';
import Bonuses from './components/Bonuses';
import OfferCard from './components/OfferCard';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import WhoThisIsFor from './components/WhoThisIsFor';
import WhatInside from './components/WhatInside';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import SneakPeek from './components/SneakPeek';
import Guarantee from './components/Guarantee';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  useEffect(() => {
    document.title = '30 Days of Peace: A Devotional for Anxious Christians';
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onCtaClick={() => scrollToSection('bonuses')} />
      <Bonuses />
      <OfferCard />
      <PainPoints />
      <Solution onCtaClick={() => scrollToSection('offer')} />
      <WhoThisIsFor onCtaClick={() => scrollToSection('offer')} />
      <WhatInside />
      <Transformation />
      <Testimonials />
      <SneakPeek />
      <Guarantee />
      <About />
      <FAQ />
      <FinalCTA />

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2026 30 Days of Peace. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This product is not intended to diagnose, treat, cure, or prevent any disease or medical condition.
            If you are experiencing severe anxiety, please consult with a qualified mental health professional.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
