
import React from 'react';
import { Mood } from '../types';
import { ArrowUpRight } from 'lucide-react';

export const Trends: React.FC<{ mood: Mood }> = ({ mood }) => {
  const isDark = mood === 'dark';
  
  return (
    <div className="py-48 px-6 lg:px-24 bg-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div>
            <h2 className="text-[10px] tracking-[0.6em] font-bold text-[#8F00FF] mb-8 uppercase">İÇERİKLER</h2>
            <h3 className="text-5xl md:text-7xl font-bold massive-text">2026 TRENDLERİ</h3>
          </div>
          <p className="max-w-xs text-[11px] tracking-[0.3em] font-bold opacity-50 uppercase leading-loose">
            E-Ticaret dünyasının geleceğini bugünden şekillendiren içgörülerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "HEADLESS MIMARI NEDİR?", tag: "TEKNOLOJİ", size: "col-span-1" },
            { title: "CONVERSION RATE OPTIMIZATION (CRO) REHBERİ", tag: "STRATEJİ", size: "md:col-span-2" },
            { title: "YAPAY ZEKA DESTEKLİ KİŞİSELLEŞTİRME", tag: "GELECEK", size: "md:col-span-2" },
            { title: "3D ÜRÜN DENEYİMİ", tag: "TASARIM", size: "col-span-1" }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.size} p-12 rounded-[3.5rem] border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-white border-black/5'} hover:border-[#8F00FF] transition-all cursor-pointer group flex flex-col justify-between aspect-square md:aspect-auto min-h-[300px]`}
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest font-bold text-[#8F00FF] uppercase">{item.tag}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-[#B0FF00]" />
              </div>
              <h4 className="text-3xl font-bold leading-tight group-hover:text-[#8F00FF] transition-colors">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
