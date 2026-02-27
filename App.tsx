
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Platforms } from './components/Platforms';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Vision } from './components/Vision';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Mission } from './components/Mission';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Trends } from './components/Trends';
import { Mood } from './types';

const App: React.FC = () => {
  const [mood, setMood] = useState<Mood>('dark');
  const [currentPage, setCurrentPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (page: string) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 500);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero mood={mood} />
            <Platforms mood={mood} />
            <Mission mood={mood} />
            <Process mood={mood} />
            <Testimonials mood={mood} />
            <Trends mood={mood} />
          </>
        );
      case 'expertise':
        return <Services mood={mood} />;
      case 'showcase':
        return <Portfolio mood={mood} />;
      case 'vision':
        return <Vision mood={mood} />;
      case 'connection':
        return <Contact mood={mood} />;
      default:
        return <Hero mood={mood} />;
    }
  };

  const toggleMood = () => {
    setMood(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${mood === 'dark' ? 'bg-[#050505] text-white' : 'bg-[#fcfcfc] text-black'}`}>
      <CustomCursor mood={mood} />
      <Navbar 
        mood={mood} 
        toggleMood={toggleMood} 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
      />
      
      {/* Liquid Transition Overlay */}
      <div className={`fixed inset-0 z-[100] bg-[#8F00FF] transition-transform duration-700 pointer-events-none ${isTransitioning ? 'translate-y-0' : '-translate-y-full'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.85, 0, 0.15, 1)' }}></div>

      <main className={`relative z-10 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      <Footer mood={mood} navigateTo={navigateTo} />
    </div>
  );
};

export default App;
