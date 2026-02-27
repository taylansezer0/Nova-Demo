
import React from 'react';
import { Mood } from '../types';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

export const Process: React.FC<{ mood: Mood }> = ({ mood }) => {
  const isDark = mood === 'dark';
  
  const steps = [
    {
      icon: <Search className="text-[#8F00FF]" />,
      title: "KEŞİF",
      desc: "Markanızın dijital DNA'sını ve hedef kitlenizi analiz ediyoruz."
    },
    {
      icon: <PenTool className="text-[#B0FF00]" />,
      title: "TASARIM",
      desc: "Altyapıya uygun, modern ve dönüşüm odaklı arayüzler kurguluyoruz."
    },
    {
      icon: <Code2 className="text-[#8F00FF]" />,
      title: "MİMARİ",
      desc: "Performans ve güvenlikten ödün vermeden kodlamaya başlıyoruz."
    },
    {
      icon: <Rocket className="text-orange-500" />,
      title: "LANSMAN",
      desc: "Sitenizi global standartlarda canlıya alıp büyüme sürecini yönetiyoruz."
    }
  ];

  return (
    <div className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm tracking-[0.5em] font-bold text-[#8F00FF] mb-6 uppercase text-center">İş Akışımız</h2>
          <h3 className="text-5xl md:text-7xl font-bold massive-text text-center">THE METHODOLOGY</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`p-10 rounded-[3rem] border bento-card flex flex-col gap-6 group hover:bg-[#8F00FF]/5 transition-all ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-gray-50 border-black/5'}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-black/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold massive-text">{step.title}</h4>
              <p className="text-sm opacity-60 leading-relaxed">{step.desc}</p>
              <span className="text-[8px] font-bold opacity-20 tracking-[0.4em] uppercase">Phase 0{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
