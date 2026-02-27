
import React, { useState } from 'react';
import { Project, Mood } from '../types';
import { ArrowUpRight, X, BarChart3, Clock, Target } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: 'VALOR INTERIOR',
    category: 'Home & Decor',
    platform: 'Shopify Plus',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200',
    challenge: 'Mevcut site mobilde 6 saniyede açılıyordu ve kullanıcıların %40\'ı ödeme sayfasında sepeti terk ediyordu.',
    solution: 'Liquid mimarisi tamamen sıfırdan "Mobile-First" prensibiyle yazıldı. Headless altyapı ile yükleme süresi 0.8s\'ye çekildi.',
    size: 'large'
  },
  {
    id: 2,
    title: 'AURA COSMETICS',
    category: 'Beauty',
    platform: 'T-Soft',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=1200',
    challenge: 'Ürünlerin 3D modellerinin sergilenmesi gerekiyordu ancak altyapı buna hazır değildi.',
    solution: 'Özel bir WebGL görüntüleyici geliştirildi ve T-Soft API\'si ile senkronize edildi. Satışlar %120 arttı.',
    size: 'small'
  },
  {
    id: 3,
    title: 'STREET WEAR TR',
    category: 'Fashion',
    platform: 'Ticimax',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1200',
    challenge: 'Kampanya dönemlerinde sitenin çökmesi ve filtreleme karmaşası.',
    solution: 'Filtreleme mimarisi tamamen JS tabanlı bir motorla değiştirildi. Cache katmanı ile sunucu yükü %70 azaltıldı.',
    size: 'small'
  },
  {
    id: 4,
    title: 'NOVA TECH',
    category: 'Electronics',
    platform: 'Shopify',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1200',
    challenge: 'Global pazara açılırken 12 farklı dilde içerik yönetimi.',
    solution: 'Context-aware dil yönlendirme ve Shopify Markets entegrasyonu ile global dönüşüm oranı 2 katına çıktı.',
    size: 'large'
  }
];

export const Portfolio: React.FC<{ mood: Mood }> = ({ mood }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isDark = mood === 'dark';

  return (
    <div className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <h2 className="text-sm tracking-[0.5em] font-bold text-[#8F00FF] mb-6 uppercase">Referanslarımız</h2>
            <h3 className="text-5xl md:text-8xl font-bold massive-text">THE SHOWCASE</h3>
          </div>
          <p className="max-w-xs opacity-50 text-xs tracking-widest leading-loose font-bold uppercase">
            Platform bağımsız, estetik odaklı, sonuç garantili projeler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-[2.5rem] cursor-none ${project.size === 'large' ? 'md:col-span-1' : 'md:col-span-1'}`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#B0FF00] mb-3">{project.platform}</span>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{project.category}</p>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#8F00FF] group-hover:border-[#8F00FF] transition-all">
                    <ArrowUpRight className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rich Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col lg:flex-row animate-in fade-in duration-500 overflow-y-auto lg:overflow-hidden">
          <button 
            onClick={() => setSelectedProject(null)}
            className="fixed top-8 right-8 z-[110] w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#8F00FF] transition-all"
          >
            <X size={32} />
          </button>
          
          <div className="lg:w-1/2 h-[60vh] lg:h-full relative">
            <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
          
          <div className="lg:w-1/2 p-8 lg:p-24 flex flex-col justify-center bg-zinc-950 overflow-y-auto">
            <span className="text-[#8F00FF] font-bold tracking-[0.5em] text-xs mb-6 uppercase">Detaylı Analiz</span>
            <h3 className="text-5xl lg:text-7xl font-bold massive-text mb-12 text-white">{selectedProject.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
               <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-[#B0FF00]" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Problem</h4>
                  </div>
                  <p className="text-lg font-light text-white/80 leading-relaxed">{selectedProject.challenge}</p>
               </div>
               <div>
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="text-[#8F00FF]" size={20} />
                    <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Sonuç</h4>
                  </div>
                  <p className="text-lg font-light text-[#B0FF00] leading-relaxed">{selectedProject.solution}</p>
               </div>
            </div>

            <div className="flex flex-wrap gap-12 pt-12 border-t border-white/10">
               <div>
                 <span className="block text-3xl font-bold massive-text text-white">0.8s</span>
                 <span className="text-[10px] tracking-widest text-white/40 uppercase">Açılış Hızı</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold massive-text text-white">%120</span>
                 <span className="text-[10px] tracking-widest text-white/40 uppercase">Satış Artışı</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold massive-text text-white">x2.5</span>
                 <span className="text-[10px] tracking-widest text-white/40 uppercase">Dönüşüm</span>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
