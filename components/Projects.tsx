import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section 
      id="projects" 
      title="Projelerimiz" 
      subtitle="Sağlıkta, eğitimde ve yapay zeka çekirdek teknolojilerinde geliştirdiğimiz çözümler."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 } 
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:border-brand-salmon/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-salmon bg-brand-salmon/10 rounded-full">
                  {project.category}
                </span>
                <ArrowUpRight className="text-gray-300 group-hover:text-brand-salmon group-hover:rotate-45 transition-all duration-300" size={20} />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-salmon transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center text-brand-dark/70 group-hover:text-brand-salmon transition-colors font-medium text-sm">
               <span>Detayları Gör</span>
               <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;