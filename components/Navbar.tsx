
import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Mood } from '../types';

interface NavbarProps {
  mood: Mood;
  toggleMood: () => void;
  currentPage: string;
  navigateTo: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ mood, toggleMood, currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'ANA SAYFA', id: 'home' },
    { name: 'UZMANLIK', id: 'expertise' },
    { name: 'REFERANSLAR', id: 'showcase' },
    { name: 'VİZYON', id: 'vision' },
    { name: 'İLETİŞİM', id: 'connection' }
  ];

  const handleNav = (id: string) => {
    navigateTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
        <div className="w-10 h-10 bg-[#8F00FF] rounded-full flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(143,0,255,0.5)]">
          <span className="text-white font-bold text-xl">N</span>
        </div>
        <span className="text-white text-2xl font-bold tracking-tighter massive-text hidden sm:block">NOVA</span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-[10px] tracking-[0.3em] font-bold">
        {navLinks.map(link => (
          <button
            key={link.id}
            onClick={() => handleNav(link.id)}
            className={`transition-all duration-300 hover:text-[#8F00FF] relative group text-white`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8F00FF] transition-all group-hover:w-full ${currentPage === link.id ? 'w-full' : ''}`} />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={toggleMood}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#8F00FF] transition-all text-white group"
        >
          {mood === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          <span className="text-[10px] uppercase font-bold hidden sm:inline group-hover:text-[#8F00FF] transition-colors">
            {mood === 'dark' ? 'AYDINLIK' : 'KARANLIK'}
          </span>
        </button>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-8 md:hidden text-white z-[60]">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8"><X size={32} /></button>
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="text-4xl font-bold massive-text hover:text-[#8F00FF] transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
