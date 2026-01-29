import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Team from './components/Team';
import Achievements from './components/Achievements';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-brand-salmon/30 selection:text-brand-dark min-h-screen flex flex-col bg-brand-light">
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
    </div>
  );
};

export default App;