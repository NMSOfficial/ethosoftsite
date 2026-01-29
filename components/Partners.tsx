import React from 'react';
import Section from './Section';
import { PARTNERS, PARTNER_IMG_BASE_URL } from '../constants';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  return (
    <Section 
      id="partners" 
      className="bg-white rounded-3xl my-10"
      title="Partnerlerimiz"
    >
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
        {PARTNERS.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-32 md:w-48 group text-center"
          >
            <div className="h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
               <img 
                src={`${PARTNER_IMG_BASE_URL}/${partner.logo}`} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm text-gray-400 font-light group-hover:text-gray-600 transition-colors">{partner.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Partners;