import React, { useEffect, useState } from 'react';
import { HardHat } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 700);
          }, 300);
          return 100;
        }
        // Progression rapide et irrégulière simulant un chargement de données télémétriques
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#151515] text-white flex flex-col justify-between p-8 sm:p-12 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isFading ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top bar avec status HUD */}
      <div className="flex items-center justify-between text-xs font-mono text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E87524] animate-ping" />
          <span className="text-white font-bold tracking-wider">EBRA_BTP_SYSTEM // v2.6</span>
        </div>
        <div>
          <span>COTONOU, BÉNIN [06°21'N 02°25'E]</span>
        </div>
      </div>

      {/* Centre : Titre & Compteur géant */}
      <div className="max-w-4xl mx-auto w-full text-left space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#E87524] flex items-center justify-center text-white shadow-lg">
            <HardHat className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight font-display text-white">
              EBRA SERVICE BTP BÉNIN
            </h2>
            <p className="text-xs text-[#E87524] font-mono tracking-widest uppercase">
              Initialisation du chantier & modélisation 3D
            </p>
          </div>
        </div>

        {/* Compteur numérique géant */}
        <div className="flex items-baseline gap-4">
          <span className="text-6xl sm:text-8xl md:text-9xl font-extrabold font-display tracking-tighter text-white">
            {progress}
          </span>
          <span className="text-3xl sm:text-5xl font-extrabold text-[#E87524] font-display">
            %
          </span>
        </div>

        {/* Barre de progression avec effet laser */}
        <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#E87524] via-[#F38C3D] to-white transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-xs font-mono text-gray-400 pt-1">
          <span>{progress < 40 ? 'Calibrage des capteurs topographiques...' : progress < 80 ? 'Génération de la maquette structurelle 3D...' : 'Prêt pour immersion.'}</span>
          <span>{progress}/100</span>
        </div>
      </div>

      {/* Bas de page */}
      <div className="flex items-center justify-between text-[11px] font-mono text-gray-500">
        <span>EXCELLENCE CONSTRUCTIVE</span>
        <span>NORME ISO & SÉCURITÉ CHANTIER</span>
      </div>
    </div>
  );
};

