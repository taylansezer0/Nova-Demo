
import React from 'react';
import { Mood } from '../types';

export const Mission: React.FC<{ mood: Mood }> = ({ mood }) => {
  const isDark = mood === 'dark';
  return (
    <div className="py-48 px-6 lg:px-24 bg-gradient-to-b from-transparent to-[#8F00FF]/5 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#8F00FF]/5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-[10px] tracking-[0.6em] font-bold text-[#8F00FF] mb-10 uppercase">MANIFESTO</h2>
          <p className="text-5xl md:text-7xl font-bold massive-text leading-[1] select-none">
            E-TİCARETİ <span className="liquid-silver">STATİK</span> BİR SAYFA DEĞİL, BİR <span className="text-[#B0FF00]">DENEYİM</span> OLARAK GÖRÜYORUZ.
          </p>
        </div>
        
        <div className="lg:w-1/2 space-y-10">
          <p className={`text-2xl font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Geleneksel ajansların aksine, biz her platformun sınırlarını markanızın karakterine göre esnetiyoruz. Shopify'ın global estetiğini, yerel pazarın teknik gereklilikleriyle pürüzsüzce birleştiriyoruz.
          </p>
          <div className="flex gap-16 border-t border-white/10 pt-10">
            <div>
              <span className="block text-5xl font-bold text-[#8F00FF] massive-text">150+</span>
              <span className="text-[11px] tracking-[0.3em] font-bold opacity-50 uppercase mt-2">DÖNÜŞEN MARKA</span>
            </div>
            <div>
              <span className="block text-5xl font-bold text-[#B0FF00] massive-text">0.4s</span>
              <span className="text-[11px] tracking-[0.3em] font-bold opacity-50 uppercase mt-2">LCP HIZI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
