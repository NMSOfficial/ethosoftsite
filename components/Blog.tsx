import React from 'react';
import Section from './Section';
import { Construction } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <Section id="blog" title="Blog & Yayınlar">
      <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300 text-center">
        <div className="bg-white p-4 rounded-full shadow-sm mb-6">
          <Construction className="text-brand-salmon" size={48} />
        </div>
        <h3 className="text-2xl font-medium text-brand-dark mb-2">Hazırlık Aşamasında</h3>
        <p className="text-gray-500 max-w-md">
          Bilgi birikimimizi ve araştırmalarımızı paylaşacağımız blog sayfamız üzerinde çalışıyoruz. Çok yakında buradayız.
        </p>
      </div>
    </Section>
  );
};

export default Blog;