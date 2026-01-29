import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LOGOS } from '../constants';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds total loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setCount(progress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 800); // Wait a bit after 100%
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark text-brand-light"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img src={LOGOS.iconWhite} alt="Logo" className="w-20 h-20 opacity-90" />
          {/* Pulse Effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-brand-salmon rounded-full blur-2xl -z-10"
          />
        </motion.div>

        <div className="overflow-hidden h-24 flex items-end">
            <motion.h1 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-light font-sans tracking-tighter"
            >
                {count}%
            </motion.h1>
        </div>
        
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="text-sm uppercase tracking-[0.2em] mt-4"
        >
            Ethosoft AI Team
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;