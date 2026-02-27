
import React from 'react';
import { Mood } from '../types';
import { Layers, Lightbulb, Users, Globe } from 'lucide-react';

export const Vision: React.FC<{ mood: Mood }> = ({ mood }) => {
  const isDark = mood === 'dark';

  return (
    <div className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
            <h2 className="text-sm tracking-[0.5em] font-bold text-[#8F00FF] mb-6 uppercase">Manifestomuz</h2>
            <h3 className="text-5xl md:text-8xl font-bold massive-text mb-12">THE VISION</h3>
            <p className="text-3xl font-light leading-tight max-w-4xl">
              "Biz bir yazılım ajansı değil, bir e-ticaret tasarım stüdyosuyuz. Kod yazmıyoruz; markanızın dijital DNA'sını yeniden kurguluyoruz."
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div className="space-y-16">
            <div className="group">
              <div className="flex items-center gap-6 mb-6">
                 <span className="text-4xl font-bold massive-text text-[#8F00FF] opacity-20 group-hover:opacity-100 transition-opacity">01</span>
                 <h4 className="text-2xl font-bold">Stratejik Mimari</h4>
              </div>
              <p className="opacity-60 leading-relaxed font-light pl-16">
                Sadece güzel görünüme değil, yüksek dönüşüm oranlarına odaklanıyoruz. Her pikselin arkasında bir veri, her butonun arkasında bir strateji var.
              </p>
            </div>
            <div className="group">
              <div className="flex items-center gap-6 mb-6">
                 <span className="text-4xl font-bold massive-text text-[#8F00FF] opacity-20 group-hover:opacity-100 transition-opacity">02</span>
                 <h4 className="text-2xl font-bold">Teknolojik Bağımsızlık</h4>
              </div>
              <p className="opacity-60 leading-relaxed font-light pl-16">
                Shopify'ın esnekliğiyle T-Soft'un kurumsal gücünü birleştirebilecek yetkinlikteyiz. Sizi kısıtlayan platformları değil, sizin için çalışan çözümleri sunuyoruz.
              </p>
            </div>
          </div>

          <div className={`p-1 border rounded-[3rem] overflow-hidden group ${isDark ? 'border-white/10' : 'border-black/10'}`}>
             <div className="relative h-full w-full">
               <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Future" />
               <div className="absolute inset-0 flex items-center justify-center p-12 bg-black/40">
                  <p className="text-center text-white text-xl font-bold italic">
                    "Geleceği tahmin etmiyoruz, onu sizin için tasarlıyoruz."
                  </p>
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { title: 'KREATİF GÜÇ', icon: <Lightbulb size={32} />, val: '100%', color: 'text-[#8F00FF]' },
             { title: 'MİMARİ KATMAN', icon: <Layers size={32} />, val: 'QUAD', color: 'text-[#B0FF00]' },
             { title: 'GLOBAL ETKİ', icon: <Globe size={32} />, val: 'WORLD', color: 'text-blue-500' },
             { title: 'EKİP RUHU', icon: <Users size={32} />, val: 'ELITE', color: 'text-orange-500' }
           ].map((item, idx) => (
             <div key={idx} className={`p-10 rounded-[2.5rem] border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-gray-50 border-black/5'} flex flex-col items-center justify-center text-center bento-card`}>
                <div className={`${item.color} mb-6`}>{item.icon}</div>
                <span className="text-3xl font-bold massive-text mb-2">{item.val}</span>
                <span className="text-[10px] tracking-widest font-bold uppercase opacity-40">{item.title}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
