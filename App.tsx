import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="antialiased selection:bg-brand-salmon/30 selection:text-brand-dark min-h-screen flex flex-col bg-brand-light">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Projects />
            <Team />
            <Achievements />
            <Partners />
            <Blog />
          </main>
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;