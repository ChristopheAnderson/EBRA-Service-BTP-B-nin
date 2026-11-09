import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    "BÂTIMENT & GROS ŒUVRE",
    "GÉNIE CIVIL & OUVRAGES D'ART",
    "VOIRIE & ASPHALTAGE BÉNIN",
    "BUREAU D'ÉTUDES & BIM 3D",
    "RÉNOVATION STRUCTURELLE",
    "COORDINATION TCE & SÉCURITÉ",
    "EXCELLENCE CONSTRUCTIVE",
    "COTONOU • CALAVI • PORTO-NOVO"
  ];

  return (
    <div className="w-full bg-[#151515] text-white py-4 overflow-hidden border-y border-gray-800 relative z-20">
      <div className="flex select-none whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 shrink-0">
          {items.map((text, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase text-gray-200">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E87524]" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-8 shrink-0 ml-8" aria-hidden="true">
          {items.map((text, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-6">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase text-gray-200">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#E87524]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

