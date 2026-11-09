import React, { useEffect, useState } from 'react';

export const ArchitectCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Désactiver sur écrans tactiles
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('.cursor-pointer') ||
        target?.closest('input') ||
        target?.closest('select') ||
        target?.closest('textarea')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Anneau réticule de géomètre */}
      <div
        className="absolute rounded-full border border-[#E87524]/60 transition-all duration-150 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovered ? '56px' : '32px',
          height: isHovered ? '56px' : '32px',
          backgroundColor: isHovered ? 'rgba(232, 117, 36, 0.08)' : 'transparent',
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
        }}
      >
        {/* Lignes de visée d'arpenteur */}
        <span className="absolute top-0 w-1.5 h-[1px] bg-[#E87524]" />
        <span className="absolute bottom-0 w-1.5 h-[1px] bg-[#E87524]" />
        <span className="absolute left-0 h-1.5 w-[1px] bg-[#E87524]" />
        <span className="absolute right-0 h-1.5 w-[1px] bg-[#E87524]" />
      </div>

      {/* Point central laser */}
      <div
        className="absolute w-2 h-2 rounded-full bg-[#E87524] shadow-xs shadow-[#E87524] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />

      {/* Coordonnées géométriques en temps réel */}
      <div
        className="absolute font-mono text-[9px] font-semibold text-[#151515] bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded border border-gray-200/80 shadow-xs pointer-events-none -translate-y-6 translate-x-4 select-none opacity-80"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        <span>X:{Math.round(pos.x)} Y:{Math.round(pos.y)}</span>
      </div>
    </div>
  );
};

