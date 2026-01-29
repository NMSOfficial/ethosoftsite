import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, className = "", children, title, subtitle }) => {
  return (
    <section id={id} className={`py-24 md:py-36 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-20 md:mb-32">
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // smooth ease-out-quart
            >
            {title && (
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-brand-dark mb-6">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
                    {subtitle}
                </p>
            )}
            <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-1 bg-brand-salmon mt-8 rounded-full"
            />
            </motion.div>
        </div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;