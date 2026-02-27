
import React from 'react';
import { Mood } from '../types';

interface PlatformsProps {
  mood: Mood;
}

const platforms = [
  { name: 'Shopify', color: 'hover:bg-[#96bf48]', aura: 'shadow-[#96bf48]', sub: 'Global Standart' },
  { name: 'T-Soft', color: 'hover:bg-[#ed1c24]', aura: 'shadow-[#ed1c24]', sub: 'Yerel Güç' },
  { name: 'Ticimax', color: 'hover:bg-[#00a9e0]', aura: 'shadow-[#00a9e0]', sub: 'Kurumsal Altyapı' },
  { name: 'İdesoft', color: 'hover:bg-[#f68b1e]', aura: 'shadow-[#f68b1e]', sub: 'Hız Odaklı' }
];

export const Platforms: React.FC<PlatformsProps> = ({ mood }) => {
  return (
    <div className="py-24 border-y border-white/10 bg-black/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="massive-text text-[15rem] leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          GÜÇLÜ ALTYAPI
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-12 px-6 lg:px-24">
        {platforms.map((p, i) => (
          <div 
            key={i}
            className={`group relative flex flex-col items-center justify-center p-14 rounded-[3rem] transition-all duration-700 cursor-pointer ${p.color} hover:text-white flex-1 w-full md:w-auto overflow-hidden`}
          >
            <div className={`absolute inset-0 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-30 transition-opacity ${p.aura}`}></div>
            <span className="text-3xl lg:text-5xl font-bold massive-text opacity-40 group-hover:opacity-100 transition-all">
              {p.name}
            </span>
            <span className="text-[11px] tracking-[0.5em] font-bold mt-5 uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-3 group-hover:translate-y-0">
              {p.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
