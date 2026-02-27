
import React, { useEffect, useState } from 'react';
import { Mood } from '../types';

export const CustomCursor: React.FC<{ mood: Mood }> = ({ mood }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#8F00FF] pointer-events-none z-[9999] transition-transform duration-200 mix-blend-difference"
        style={{ transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 2.5 : 1})` }}
      ></div>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#8F00FF] rounded-full pointer-events-none z-[9999] transition-transform duration-75 mix-blend-difference"
        style={{ transform: `translate(${position.x - 4}px, ${position.y - 4}px)` }}
      ></div>
    </>
  );
};
