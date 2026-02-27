
import React from 'react';
import { Mood } from '../types';
import { ArrowDown, Zap, Globe } from 'lucide-react';

interface HeroProps {
  mood: Mood;
}

export const Hero: React.FC<HeroProps> = ({ mood }) => {
  const isDark = mood === 'dark';
  
  return (
    <div className="relative min-h-[140vh] flex flex-col justify-center px-6 lg:px-24 overflow-hidden">
      {/* Animated Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#8F00FF] rounded-full blur-[250px] opacity-20 mesh-gradient"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#B0FF00] rounded-full blur-[220px] opacity-10 mesh-gradient" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl pt-32">
        <div className="inline-flex items-center gap-4 mb-12 group cursor-pointer">
            <span className="w-16 h-[1px] bg-[#8F00FF] group-hover:w-32 transition-all duration-700"></span>
            <h2 className="text-[10px] tracking-[0.7em] font-bold text-[#8F00FF] uppercase flex items-center gap-3">
              <Zap size={16} fill="currentColor" /> 2026 E-TİCARET RÖNESANSI
            </h2>
        </div>
        
        <h1 className="text-6xl md:text-[11rem] lg:text-[14rem] font-bold leading-[0.8] massive-text mb-16 select-none">
          <span className="block hover:translate-x-6 transition-transform duration-1000">DİJİTAL</span>
          <span className="block liquid-silver hover:-translate-x-6 transition-transform duration-1000">MİMARİ</span>
          <span className="block hover:translate-x-6 transition-transform duration-1000">SANAT</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-10">
            <p className={`text-xl md:text-3xl max-w-xl font-light leading-snug ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Platform sınırlarını markanızın vizyonuyla yok ediyoruz. Sadece mağaza açmıyoruz; markanızın global geleceğini inşa ediyoruz.
            </p>
            <div className="flex flex-wrap gap-6 text-[10px] font-bold tracking-[0.4em] uppercase opacity-50">
              <span className="flex items-center gap-2 hover:text-[#8F00FF] cursor-default"><Globe size={12} /> GLOBAL SCALING</span>
              <span>•</span>
              <span className="hover:text-[#B0FF00] cursor-default">HEADLESS COMMERCE</span>
              <span>•</span>
              <span className="hover:text-[#8F00FF] cursor-default">UI/UX AUDIT</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 lg:items-end">
             <div className="flex flex-wrap gap-6">
               <button className="group relative px-14 py-7 bg-[#8F00FF] text-white rounded-full font-bold text-xl overflow-hidden transition-all hover:pr-20 shadow-[0_0_50px_rgba(143,0,255,0.4)]">
                 <span className="relative z-10">DÖNÜŞÜMÜ BAŞLAT</span>
                 <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all text-2xl">→</div>
               </button>
               <button className={`px-14 py-7 border-2 rounded-full font-bold text-xl hover:bg-white/10 transition-colors ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                 LAB'I KEŞFET
               </button>
             </div>
          </div>
        </div>

        {/* Dense Statistics Bar */}
        <div className={`mt-48 p-1 border-t border-b ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 py-20">
            {[
              { label: 'YILLIK TİCARET HACMİ', val: '₺1.5B+', desc: 'Partnerlerimizin toplam büyümesi' },
              { label: 'AKTİF GLOBAL PAZAR', val: '50+', desc: 'Sınır tanımayan e-ihracat' },
              { label: 'CORE WEB VITALS', val: '100', desc: 'Mükemmel teknik performans' },
              { label: 'ULUSLARARASI ÖDÜL', val: '28', desc: 'Global tasarım otoriteleri onayı' }
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-default relative">
                <span className="block text-5xl lg:text-7xl font-bold massive-text text-[#8F00FF] group-hover:text-[#B0FF00] transition-colors origin-left">{stat.val}</span>
                <span className="block text-[11px] tracking-[0.4em] font-bold uppercase mt-5 opacity-60">{stat.label}</span>
                <p className="text-[11px] mt-4 opacity-30 italic group-hover:opacity-100 transition-opacity max-w-[220px]">{stat.desc}</p>
                <div className="absolute -right-8 top-0 w-[1px] h-full bg-white/5 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ArrowDown size={48} />
      </div>

      <div className="absolute top-1/2 right-[-6rem] rotate-90 hidden 2xl:block opacity-5">
        <span className="massive-text text-[12rem] tracking-[0.2em] pointer-events-none uppercase">FUTURE COMMERCE</span>
      </div>
    </div>
  );
};
