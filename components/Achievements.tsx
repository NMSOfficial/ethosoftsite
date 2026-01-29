import React, { useState } from 'react';
import Section from './Section';
import { ACHIEVEMENTS, ACHIEVEMENT_IMG_BASE_URL } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Achievements: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedAchievement = ACHIEVEMENTS.find(a => a.id === selectedId);

  return (
    <Section 
      id="achievements" 
      title="Başarılarımız" 
      subtitle="Katıldığımız yarışmalarda elde ettiğimiz dereceler ve ödüller."
    >
      <div className="space-y-12">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
          >
            <div 
              className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg cursor-pointer group relative"
              onClick={() => setSelectedId(item.id)}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
                 <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
              </div>
              <img 
                src={`${ACHIEVEMENT_IMG_BASE_URL}/${item.image}`} 
                alt={item.title} 
                className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-light text-brand-dark mb-4 leading-tight">
                {item.title}
              </h3>
              <div className="h-0.5 w-16 bg-brand-salmon mx-auto md:mx-0"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="bg-white p-2 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col">
                <div className="overflow-hidden rounded-xl">
                  <img 
                    src={`${ACHIEVEMENT_IMG_BASE_URL}/${selectedAchievement.image}`} 
                    alt={selectedAchievement.title} 
                    className="w-full max-h-[70vh] object-contain bg-gray-100"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl md:text-2xl font-medium text-brand-dark">{selectedAchievement.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Achievements;