
import React from 'react';
import { Mood } from '../types';
import { Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

interface FooterProps {
  mood: Mood;
  navigateTo: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ mood, navigateTo }) => {
  const isDark = mood === 'dark';

  return (
    <footer className={`py-24 px-6 lg:px-24 border-t ${isDark ? 'border-white/5' : 'border-black/5'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
           <span className="text-4xl font-bold massive-text">NOVA</span>
           <span className="text-[10px] tracking-widest font-bold border border-current px-3 py-1 rounded">2026</span>
        </div>

        <div className="flex gap-12 text-[11px] tracking-[0.4em] font-bold">
           <button onClick={() => navigateTo('expertise')} className="hover:text-[#8F00FF] transition-colors uppercase">UZMANLIK</button>
           <button onClick={() => navigateTo('showcase')} className="hover:text-[#8F00FF] transition-colors uppercase">REFERANSLAR</button>
           <button onClick={() => navigateTo('connection')} className="hover:text-[#8F00FF] transition-colors uppercase">İLETİŞİM</button>
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-[#8F00FF] transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-[#8F00FF] transition-colors"><Linkedin size={24} /></a>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 rounded-full border border-current flex items-center justify-center hover:bg-[#8F00FF] hover:border-[#8F00FF] hover:text-white transition-all shadow-xl"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
      
      <div className="mt-20 text-center text-[10px] tracking-[0.5em] font-medium opacity-30 uppercase">
        © 2026 NOVA COMMERCE STUDIO. TÜM HAKLARI SAKLIDIR. DİJİTAL MİMARİ SİSTEMLERİ.
      </div>
    </footer>
  );
};
