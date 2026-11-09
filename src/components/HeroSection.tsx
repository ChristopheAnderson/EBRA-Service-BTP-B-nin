import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ShieldCheck, MapPin, Sparkles, Eye, Layers, Box, Cpu } from 'lucide-react';
import { ArchitecturalCanvas, type RenderMode } from './ArchitecturalCanvas';
import { TextReveal } from './TextReveal';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuote }) => {
  const [renderMode, setRenderMode] = useState<RenderMode>('realistic');
  const [isExploded, setIsExploded] = useState<boolean>(false);

  return (
    <section id="accueil" className="relative min-h-[96vh] pt-28 pb-16 flex items-center overflow-hidden bg-architect-grid">
      {/* Laser Scanline animée sur le hero */}
      <div className="laser-scanline" />

      {/* Halos de lumière studio */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E87524]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#A8ADB3]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne Gauche : Titre Cinématique & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Tag architectural au top avec animation d'entrée */}
            <motion.div
              initial={{ opacity: 0, y: -25, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200/90 shadow-xs hover:border-[#E87524]/40 transition-colors"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87524] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E87524]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#151515]">
                Entreprise Générale de BTP & Génie Civil
              </span>
              <span className="text-gray-300">|</span>
              <span className="text-xs font-semibold text-[#E87524] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Cotonou, Bénin
              </span>
            </motion.div>

            {/* Titre Cinématique avec TextReveal mot à mot */}
            <div className="space-y-2">
              <TextReveal
                text="Bâtir l'avenir du Bénin avec rigueur et excellence."
                as="h1"
                delay={0.2}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#151515] leading-[1.12] tracking-tight font-display"
                highlightWords={['Bénin', 'excellence.']}
                highlightClass="text-[#E87524] relative inline-block after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-full after:h-2.5 after:bg-[#E87524]/15 after:-rotate-1 after:rounded-sm after:-z-10"
              />
            </div>

            {/* Sous-titre descriptif animé */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#5A6065] max-w-2xl leading-relaxed"
            >
              EBRA Service BTP Bénin concrétise vos projets de construction neuve, génie civil, voirie et réhabilitation lourde. Une maîtrise d'œuvre certifiée, des matériaux rigoureusement testés et une ambition architecturale sans compromis.
            </motion.p>

            {/* Boutons CTA avec animation d'entrée douce */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenQuote}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E87524] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#E87524]/25 hover:bg-[#D36215] transition-all duration-300 hover:shadow-2xl hover:shadow-[#E87524]/35 hover:-translate-y-1 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#151515] font-bold text-sm sm:text-base border border-gray-200/90 hover:border-[#E87524]/50 hover:bg-gray-50 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-[#E87524]" />
                <span>Découvrir nos expertises</span>
              </a>
            </motion.div>

            {/* 3 Piliers de réassurance avec cascade stagger */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-gray-200/80"
            >
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/60 border border-gray-200/60 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#151515]">Normes & Sécurité</h4>
                  <p className="text-[11px] text-[#6C757D]">Respect strict BAEL & EPI</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/60 border border-gray-200/60 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#E87524] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#151515]">Ingénierie & BIM 3D</h4>
                  <p className="text-[11px] text-[#6C757D]">Métrés & calculs précis</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/60 border border-gray-200/60 backdrop-blur-xs">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#151515]">Délais Maîtrisés</h4>
                  <p className="text-[11px] text-[#6C757D]">Planning par étapes</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Colonne Droite : Scène 3D Interactive avec apparition cinématique */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 h-[480px] sm:h-[540px] lg:h-[620px] relative"
          >
            <div className="w-full h-full rounded-3xl bg-gradient-to-b from-white to-[#F1F3F5] border border-gray-200 shadow-2xl overflow-hidden relative group">
              
              {/* HUD 1 : Coordonnées Topographiques en haut à gauche */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 text-[11px] font-bold text-[#151515] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#E87524] animate-ping" />
                  <span>Modèle 3D Interactif</span>
                </div>
                <div className="font-mono text-[9px] text-[#6C757D] bg-white/80 backdrop-blur-xs px-2 py-0.5 rounded border border-gray-200/60 max-w-fit">
                  LAT: 06°21'45"N | ALT: +6.80m NGF
                </div>
              </div>

              {/* HUD 2 : Contrôle des Modes 3D en haut à droite */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-gray-200 shadow-xs">
                <button
                  onClick={() => setRenderMode('realistic')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                    renderMode === 'realistic'
                      ? 'bg-[#151515] text-white shadow-xs'
                      : 'text-[#6C757D] hover:text-[#151515]'
                  }`}
                  title="Vue Réaliste avec Béton et Vitrage"
                >
                  <Eye className="w-3 h-3" />
                  <span>Rendu</span>
                </button>
                <button
                  onClick={() => setRenderMode('structure')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                    renderMode === 'structure'
                      ? 'bg-[#E87524] text-white shadow-xs'
                      : 'text-[#6C757D] hover:text-[#151515]'
                  }`}
                  title="Vue Poteaux-Poutres et Armatures"
                >
                  <Box className="w-3 h-3" />
                  <span>Structure</span>
                </button>
                <button
                  onClick={() => setRenderMode('wireframe')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer flex items-center gap-1 ${
                    renderMode === 'wireframe'
                      ? 'bg-[#151515] text-[#E87524] shadow-xs'
                      : 'text-[#6C757D] hover:text-[#151515]'
                  }`}
                  title="Vue Filaire Holographique BIM"
                >
                  <Layers className="w-3 h-3" />
                  <span>Fil de fer</span>
                </button>
              </div>

              {/* Canevas 3D Three.js */}
              <ArchitecturalCanvas
                renderMode={renderMode}
                isExploded={isExploded}
              />

              {/* HUD 3 : Contrôles bas avec bouton "Vue Éclatée des Étages" */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-md text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E87524] animate-pulse" />
                  <span className="font-bold text-[#151515] text-xs">
                    {renderMode === 'realistic'
                      ? 'Édifice Architectural R+2'
                      : renderMode === 'structure'
                      ? 'Squelette Béton Armé & Grue'
                      : 'Modélisation BIM Topographique'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExploded(!isExploded)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer border ${
                      isExploded
                        ? 'bg-[#E87524] text-white border-[#E87524]'
                        : 'bg-gray-100 text-[#151515] border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {isExploded ? 'Réassembler' : 'Vue Éclatée'}
                  </button>
                  <span className="text-[#6C757D] text-[10px] hidden sm:inline">
                    Pivoter à 360°
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
