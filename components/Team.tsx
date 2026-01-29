import React from 'react';
import Section from './Section';
import { TEAM, TEAM_IMG_BASE_URL } from '../constants';
import { motion } from 'framer-motion';
import { Linkedin, Mail, User } from 'lucide-react';
import { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="flex flex-col items-center text-center group cursor-default w-full sm:w-auto"
  >
    <div className="relative mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-md group-hover:shadow-2xl group-hover:shadow-brand-salmon/20 transition-all duration-300 group-hover:border-brand-salmon/30">
      {member.image ? (
        <img 
          src={`${TEAM_IMG_BASE_URL}/${member.image}`} 
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 group-hover:scale-110 transition-transform duration-500">
          <User size={48} />
        </div>
      )}
    </div>
    
    <h3 className="text-lg font-bold text-brand-dark mb-1 group-hover:text-brand-salmon transition-colors">{member.name}</h3>
    <p className="text-sm text-brand-salmon font-medium mb-3 h-10 flex items-start justify-center px-2">{member.role}</p>
    
    <div className="flex gap-4 mt-auto opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0077b5] transition-colors hover:scale-110">
          <Linkedin size={20} />
        </a>
      )}
      {member.email && (
        <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-brand-salmon transition-colors hover:scale-110">
          <Mail size={20} />
        </a>
      )}
    </div>
  </motion.div>
);

const Team: React.FC = () => {
  const advisors = TEAM.filter(m => m.group === 'advisor');
  const leadership = TEAM.filter(m => m.group === 'leadership');
  const team = TEAM.filter(m => m.group === 'team');

  return (
    <Section 
      id="team" 
      title="Ekibimiz" 
      subtitle="Farklı disiplinlerden gelen, tutkulu ve yenilikçi zihinler."
    >
      <div className="flex flex-col items-center gap-16">
        
        {/* Advisors */}
        {advisors.length > 0 && (
          <div className="flex flex-wrap justify-center gap-12 w-full">
            {advisors.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}

        {/* Leadership */}
        {leadership.length > 0 && (
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 w-full max-w-6xl">
            {leadership.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}

        {/* Core Team */}
        {team.length > 0 && (
           <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 w-full max-w-7xl">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Team;