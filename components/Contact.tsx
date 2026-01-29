import React from 'react';
import { CONTACT_INFO, LOGOS } from '../constants';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <img src={LOGOS.iconWhite} alt="Ethosoft White Icon" className="h-10 w-auto opacity-90" />
              <span className="text-2xl font-light tracking-wide">Ethosoft</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Geleceği Birlikte <br />
              <span className="text-brand-salmon">Şekillendirelim.</span>
            </h2>
            <p className="text-gray-400 font-light max-w-md text-lg">
              Projelerimiz hakkında bilgi almak, iş birliği yapmak veya ekibimize katılmak için bizimle iletişime geçin.
            </p>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex items-center gap-6 group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-brand-salmon/30"
            >
              <div className="bg-brand-salmon/20 p-4 rounded-full text-brand-salmon group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">E-posta Gönderin</p>
                <p className="text-xl font-medium">{CONTACT_INFO.email}</p>
              </div>
            </a>

            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-6 group p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-brand-salmon/30"
            >
               <div className="bg-[#0077b5]/20 p-4 rounded-full text-[#0077b5] group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">LinkedIn'de Takip Edin</p>
                <p className="text-xl font-medium">Ethos AI Team</p>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Ethosoft AI Team. Tüm hakları saklıdır.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-salmon transition-colors"
          >
            Başa Dön <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;