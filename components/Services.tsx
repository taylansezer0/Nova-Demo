
import React from 'react';
import { ShoppingBag, Layout, Zap, Search, Layers, Cpu, Globe, Rocket, ShieldCheck, HeartPulse } from 'lucide-react';
import { Mood } from '../types';

export const Services: React.FC<{ mood: Mood }> = ({ mood }) => {
  const isDark = mood === 'dark';

  return (
    <div className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
            <h2 className="text-sm tracking-[0.5em] font-bold text-[#8F00FF] mb-6 uppercase">Hizmet Spektrumu</h2>
            <h3 className="text-5xl md:text-8xl font-bold massive-text leading-none">THE LAB</h3>
            <p className="mt-8 text-xl max-w-2xl opacity-60 font-light">
              Teknoloji ve tasarımı aynı potada eritiyoruz. Altyapınız ne olursa olsun, biz onun üzerine dijital bir imparatorluk inşa ediyoruz.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Shopify Block */}
          <div className={`md:col-span-8 p-12 rounded-[2.5rem] bento-card relative overflow-hidden group border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-gray-100 border-black/5'}`}>
            <ShoppingBag className="text-[#8F00FF] mb-8 group-hover:rotate-12 transition-transform" size={56} />
            <h4 className="text-4xl font-bold mb-6">Shopify: Headless & High-End</h4>
            <p className="text-lg opacity-70 mb-8 max-w-2xl">
              ShopifyPlus partnerliğimiz ile global e-ticaretin zirvesini yerel markalara taşıyoruz. 
              Liquid mimarisini Next.js ile birleştirerek dünyanın en hızlı ve en şık mağazalarını tasarlıyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Headless', 'Custom App', 'Checkout Extensibility', 'B2B Flow'].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full border border-current text-[10px] font-bold tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity">
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-[#8F00FF] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          </div>

          {/* Local Power Block */}
          <div className={`md:col-span-4 p-10 rounded-[2.5rem] bento-card border ${isDark ? 'bg-[#111] border-white/5' : 'bg-white border-black/5'}`}>
            <Layout className="text-[#B0FF00] mb-8" size={48} />
            <h4 className="text-2xl font-bold mb-4">Yerel Devler</h4>
            <p className="text-sm opacity-60 leading-relaxed mb-6">
              T-Soft, Ticimax ve İdesoft altyapılarının tüm sınırlamalarını kreatif müdahalelerle aşıyoruz. 
              Kurumsal gücü, startup esnekliğiyle birleştiriyoruz.
            </p>
            <ul className="space-y-3 text-xs font-bold tracking-widest opacity-40">
              <li>• API INTEGRATION</li>
              <li>• CUSTOM UI KITS</li>
              <li>• ERP SYNC</li>
            </ul>
          </div>

          {/* UX Audit Block */}
          <div className="md:col-span-4 p-10 rounded-[2.5rem] bento-card bg-[#8F00FF] text-white flex flex-col justify-between">
            <div>
              <HeartPulse className="mb-8 animate-pulse" size={48} />
              <h4 className="text-2xl font-bold mb-4">Dönüşüm Kardiyolojisi</h4>
              <p className="text-sm opacity-80 leading-relaxed">
                Satış kaçıran noktaları tespit etmek için 50'den fazla metrikte sitenizi check-up'tan geçiriyoruz.
              </p>
            </div>
            <button className="mt-8 text-xs font-bold tracking-[0.3em] uppercase underline hover:no-underline">Denetim İste</button>
          </div>

          {/* Global Block */}
          <div className={`md:col-span-4 p-10 rounded-[2.5rem] bento-card border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-gray-100 border-black/5'} flex flex-col justify-center items-center text-center`}>
            <Globe className="text-blue-500 mb-6" size={48} />
            <h4 className="text-xl font-bold">Global Scaling</h4>
            <p className="text-xs opacity-50 mt-4">Cross-border ticaret için çoklu dil ve para birimi optimizasyonu.</p>
          </div>

          {/* Infrastructure Block */}
          <div className={`md:col-span-4 p-10 rounded-[2.5rem] bento-card border ${isDark ? 'bg-zinc-900 border-white/5' : 'bg-gray-100 border-black/5'} relative overflow-hidden`}>
             <ShieldCheck className="text-[#B0FF00] mb-6" size={40} />
             <h4 className="text-xl font-bold">Secure Architecture</h4>
             <p className="text-xs opacity-50 mt-2">Ödeme sistemleri ve kullanıcı verisi güvenliğinde %100 uyumluluk.</p>
             <div className="absolute bottom-0 right-0 p-4 opacity-10">
               <Cpu size={120} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
