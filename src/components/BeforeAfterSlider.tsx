import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPos(Number(percentage.toFixed(1)));
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87524]/10 text-[#E87524] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformation & Réhabilitation</span>
          </div>
          
          <TextReveal
            text="La puissance de la transformation EBRA BTP."
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
            highlightWords={['transformation', 'BTP.']}
          />

          <p className="text-base sm:text-lg text-[#5A6065]">
            Glissez le curseur pour visualiser la métamorphose entre la structure brute ou vétuste et l'ouvrage contemporain réceptionné selon nos normes de qualité.
          </p>
        </div>

        {/* Conteneur du Slider Interactif */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[460px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 select-none cursor-ew-resize group"
          >
            {/* Image 2 : APRÈS (Fond complet) */}
            <img
              src="/images/btp-15.jpg"
              alt="Ouvrage achevé par EBRA Service BTP Bénin"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-5 right-5 z-10 px-4 py-1.5 rounded-full bg-[#151515]/90 backdrop-blur-md text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Après : Réception EBRA BTP</span>
            </div>

            {/* Image 1 : AVANT (Découpée par clip-path) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <img
                src="/images/btp-09.jpg"
                alt="Chantier de gros œuvre brut avant finition"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-5 left-5 z-10 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#151515] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-[#E87524]" />
                <span>Avant : Structure Brute</span>
              </div>
            </div>

            {/* Ligne séparatrice et poignée mobile */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none -translate-x-1/2 flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Poignée centrale tactile */}
              <div className="w-12 h-12 rounded-full bg-[#E87524] text-white flex items-center justify-center shadow-xl border-3 border-white transition-transform group-hover:scale-110">
                <MoveHorizontal className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>

            {/* Légende en bas de carte */}
            <div className="absolute bottom-5 inset-x-5 z-10 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 pointer-events-none">
              <span className="font-semibold hidden sm:inline">
                Chantier R+3 — Reprise en sous-œuvre & finitions haut standing
              </span>
              <span className="font-mono text-[#E87524] text-xs font-bold mx-auto sm:mx-0">
                Glisser pour comparer ({Math.round(sliderPos)}%)
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

