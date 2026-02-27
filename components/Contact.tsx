
import React, { useState } from 'react';
import { Mood } from '../types';
import { ChevronRight, Check, MapPin, Mail, Phone, Globe2 } from 'lucide-react';

export const Contact: React.FC<{ mood: Mood }> = ({ mood }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    message: ''
  });

  const isDark = mood === 'dark';

  return (
    <div className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          <div>
            <h2 className="text-sm tracking-[0.5em] font-bold text-[#8F00FF] mb-6 uppercase">Bize Ulaşın</h2>
            <h3 className="text-5xl md:text-8xl font-bold massive-text mb-12">THE PORTAL</h3>
            <p className="text-xl opacity-60 font-light mb-16 leading-relaxed">
              Markanızın dijital evrimini başlatmak için bir kıvılcım yeterli. 
              Sizin için en doğru mimariyi birlikte kurgulayalım.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#8F00FF] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-widest opacity-40 uppercase">E-Posta</span>
                  <span className="text-xl font-medium">hello@novacommerce.studio</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#B0FF00] group-hover:text-black transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-widest opacity-40 uppercase">Ofis</span>
                  <span className="text-xl font-medium">Maslak HQ, İstanbul / Global Digital Office</span>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#8F00FF] group-hover:text-white transition-all">
                  <Globe2 size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold tracking-widest opacity-40 uppercase">Vizyon</span>
                  <span className="text-xl font-medium">7 Kıtada Aktif Partnerlik</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-10 md:p-16 rounded-[3rem] border shadow-2xl relative overflow-hidden ${isDark ? 'bg-zinc-900 border-white/5 shadow-black' : 'bg-white border-black/5 shadow-gray-200'}`}>
            <div className="relative z-10">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h4 className="text-2xl font-bold mb-8">Sizi Tanıyalım</h4>
                  <div className="space-y-8">
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-current/20 py-4 outline-none focus:border-[#8F00FF] transition-all"
                        placeholder="Adınız ve Markanız"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        className="w-full bg-transparent border-b border-current/20 py-4 outline-none focus:border-[#8F00FF] transition-all"
                        placeholder="E-Posta Adresiniz"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <button 
                      onClick={() => setStep(2)}
                      className="w-full py-6 bg-current text-inverted rounded-full font-bold flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform"
                      style={{ backgroundColor: isDark ? 'white' : 'black', color: isDark ? 'black' : 'white' }}
                    >
                      İLERLE <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h4 className="text-2xl font-bold mb-8">Altyapı Tercihiniz</h4>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {['Shopify', 'T-Soft', 'Ticimax', 'İdesoft'].map(p => (
                      <button 
                        key={p}
                        onClick={() => setFormData({...formData, platform: p})}
                        className={`py-5 rounded-2xl border-2 transition-all font-bold text-sm ${formData.platform === p ? 'border-[#8F00FF] bg-[#8F00FF]/5 text-[#8F00FF]' : 'border-current/10 opacity-60'}`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(3)}
                    className="w-full py-6 bg-[#8F00FF] text-white rounded-full font-bold flex items-center justify-center gap-4"
                  >
                    SON ADIM <ChevronRight size={20} />
                  </button>
                  <button onClick={() => setStep(1)} className="w-full mt-4 text-[10px] font-bold opacity-40 uppercase tracking-widest">Geri Dön</button>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in zoom-in duration-500 text-center py-10">
                  <div className="w-24 h-24 bg-[#B0FF00] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(176,255,0,0.4)]">
                    <Check size={48} className="text-black" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Mesaj Alındı!</h4>
                  <p className="opacity-60 mb-8 font-light">
                    Kreatif ekibimiz {formData.name} için e-ticaret analizine başladı bile. 
                    En geç 24 saat içinde dönüş yapacağız.
                  </p>
                  <button 
                    onClick={() => setStep(1)}
                    className="text-[#8F00FF] font-bold underline text-sm"
                  >
                    Yeni Bir Talep Gönder
                  </button>
                </div>
              )}
            </div>
            
            {/* Background Aesthetic */}
            <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-[#8F00FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
