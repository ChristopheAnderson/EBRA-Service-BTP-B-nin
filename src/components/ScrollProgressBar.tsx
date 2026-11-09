import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Number(currentProgress.toFixed(1)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent pointer-events-none">
      {/* Barre de progression orange chantier */}
      <div
        className="h-full bg-gradient-to-r from-[#151515] via-[#E87524] to-[#F38C3D] transition-all duration-75 ease-out shadow-xs shadow-[#E87524]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

