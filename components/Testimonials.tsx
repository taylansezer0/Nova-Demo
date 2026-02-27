
import React from 'react';
import { Mood } from '../types';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC<{ mood: Mood }> = ({ mood }) => {
  const isDark = mood === 'dark';
  
  const reviews = [
    {
      name: "Ahmet Yılmaz",
      title: "Valor CEO",
      text: "Nova ile çalışmak e-ticaret vizyonumuzu 10 yıl ileriye taşıdı. Shopify altyapısını bu kadar sanatsal kullanabilen başka bir ekip yok.",
      color: "border-[#8F00FF]"
    },
    {
      name: "Zeynep Kaya",
      title: "StreetWear Kurucusu",
      text: "Ticimax altyapımızdaki tüm teknik limitleri aşıp bize global bir marka kimliği kazandırdılar. Satışlarımız %200 arttı.",
      color: "border-[#B0FF00]"
    }
  ];

  return (
    <div className="py-48 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[10px] tracking-[0.6em] font-bold text-[#8F00FF] mb-12 uppercase text-center">GÜVEN DUVARI</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className={`p-16 rounded-[4rem] border-l-8 ${rev.color} ${isDark ? 'bg-zinc-900/50 border-white/5' : 'bg-gray-50 border-black/5'} relative overflow-hidden group`}
            >
              <Quote className="absolute top-8 right-12 text-[#8F00FF] opacity-10 group-hover:opacity-30 transition-opacity" size={120} />
              <p className="text-2xl font-light italic leading-relaxed mb-10 relative z-10">"{rev.text}"</p>
              <div>
                <span className="block text-xl font-bold massive-text">{rev.name}</span>
                <span className="text-[10px] tracking-widest font-bold opacity-40 uppercase">{rev.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
