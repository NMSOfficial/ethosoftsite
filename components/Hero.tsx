import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LOGOS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  // Animation variants for staggered text
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.6 // Wait for preloader roughly
      }
    }
  };

  const item: Variants = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
  };

  const AnimatedText = ({ text, className = "" }: { text: string, className?: string }) => (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span variants={item} className="inline-block">
        {text}&nbsp;
      </motion.span>
    </span>
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            x: ["-20%", "20%", "-20%"],
            y: ["-10%", "10%", "-10%"],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-gradient-to-br from-brand-salmon/20 to-transparent rounded-full blur-[100px]"
        />
        <motion.div 
           animate={{ 
            scale: [1, 1.3, 1],
            x: ["20%", "-20%", "20%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-tl from-[#e0c35f]/10 to-transparent rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 2.2, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
           <img src={LOGOS.fullColor} alt="Ethosoft Full Logo" className="h-24 md:h-32 w-auto object-contain" />
        </motion.div>

        {/* Cinematic Title */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl lg:text-7xl font-light text-brand-dark mb-8 leading-tight tracking-tight"
        >
          <div className="block">
            <AnimatedText text="Yapay" />
            <AnimatedText text="Zeka" />
            <AnimatedText text="ile" />
          </div>
          <div className="block mt-2">
            <span className="inline-block overflow-hidden align-bottom text-brand-salmon font-normal">
                <motion.span variants={item} className="inline-block">
                    Sınırları
                </motion.span>
            </span>
            <span className="inline-block overflow-hidden align-bottom text-brand-salmon font-normal">
                <motion.span variants={item} className="inline-block ml-3">
                    Yeniden
                </motion.span>
            </span>
             <span className="inline-block overflow-hidden align-bottom text-brand-salmon font-normal">
                <motion.span variants={item} className="inline-block ml-3">
                    Çiziyoruz
                </motion.span>
            </span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Sağlık, eğitim ve temel yapay zeka teknolojilerinde, insani değerleri merkeze alan yenilikçi çözümler üretiyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full overflow-hidden bg-brand-dark text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-salmon transition-transform duration-300 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative flex items-center">Projelerimizi İnceleyin</span>
          </a>
          <a 
            href="#contact" 
            className="group inline-flex items-center justify-center px-8 py-3 rounded-full border border-brand-dark/20 text-brand-dark font-medium hover:bg-brand-gray transition-all duration-300 hover:-translate-y-1"
          >
            İletişime Geçin <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;