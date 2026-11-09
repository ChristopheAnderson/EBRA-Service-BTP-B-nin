import React, { useState } from 'react';
import { WORK_PROCESS, type StepItem } from '../data/content';
import { GitCommit, ArrowRight, Check, CheckCircle2 } from 'lucide-react';
import { TextReveal } from './TextReveal';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="processus" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87524]/10 text-[#E87524] text-xs font-bold uppercase tracking-wider">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Méthodologie de Travail</span>
          </div>
          
          <TextReveal
            text="De la première esquisse à la remise des clés."
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
            highlightWords={['esquisse', 'clés.']}
          />

          <p className="text-base sm:text-lg text-[#5A6065]">
            Un parcours structuré en 5 étapes rigoureuses pour garantir le respect de vos budgets et de vos délais de livraison.
          </p>
        </div>

        {/* Ligne de progression visuelle avec pourcentages */}
        <div className="w-full bg-gray-100 h-2 rounded-full mb-8 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#E87524] to-[#151515] transition-all duration-500 ease-out"
            style={{ width: `${((activeStep + 1) / WORK_PROCESS.length) * 100}%` }}
          />
        </div>

        {/* Barre de navigation des étapes sur desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-12">
          {WORK_PROCESS.map((step: StepItem, idx: number) => {
            const isCurrent = activeStep === idx;
            const isPassed = activeStep > idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-[#151515] text-white border-[#151515] shadow-xl shadow-black/15 scale-102'
                    : isPassed
                    ? 'bg-emerald-50/70 text-[#151515] border-emerald-200'
                    : 'bg-[#F8F9FA] text-[#5A6065] border-gray-200/80 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold font-display ${isCurrent ? 'text-[#E87524]' : isPassed ? 'text-emerald-600' : 'text-[#6C757D]'}`}>
                    ÉTAPE {step.number}
                  </span>
                  {isPassed && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
                <h4 className="text-sm font-bold truncate">
                  {step.title.split('&')[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Carte détaillée de l'étape sélectionnée */}
        <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-12 border border-gray-200/90 shadow-xl text-left relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E87524]/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3.5">
                <span className="w-13 h-13 rounded-2xl bg-[#E87524] text-white font-display font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-[#E87524]/30">
                  {WORK_PROCESS[activeStep].number}
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E87524]">
                    Phase {activeStep + 1} sur 5
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight font-display">
                    {WORK_PROCESS[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-bold text-[#151515] italic">
                {WORK_PROCESS[activeStep].subtitle}
              </p>

              <p className="text-base text-[#5A6065] leading-relaxed">
                {WORK_PROCESS[activeStep].description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#151515] uppercase tracking-wider">
                  Actions clés de cette phase :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WORK_PROCESS[activeStep].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 text-xs font-bold text-[#151515] shadow-2xs">
                      <Check className="w-4 h-4 text-[#E87524] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation étape précédente / suivante */}
              <div className="flex items-center gap-3 pt-4">
                {activeStep > 0 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="px-5 py-3 rounded-xl bg-white border border-gray-200 text-[#151515] font-bold text-xs hover:bg-gray-50 transition-colors cursor-pointer shadow-xs"
                  >
                    ← Étape précédente
                  </button>
                )}
                {activeStep < WORK_PROCESS.length - 1 ? (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="px-6 py-3 rounded-xl bg-[#E87524] text-white font-bold text-xs hover:bg-[#D36215] transition-all cursor-pointer flex items-center gap-2 shadow-md shadow-[#E87524]/20"
                  >
                    <span>Étape suivante</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-xl bg-[#151515] text-white font-bold text-xs hover:bg-black transition-all cursor-pointer flex items-center gap-2 shadow-lg"
                  >
                    <span>Lancer mon projet avec EBRA</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Illustration de chantier pour la phase */}
            <div className="lg:col-span-5 relative h-72 sm:h-88 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src={
                  activeStep === 0
                    ? '/images/btp-04.jpg'
                    : activeStep === 1
                    ? '/images/btp-21.jpg'
                    : activeStep === 2
                    ? '/images/btp-14.jpg'
                    : activeStep === 3
                    ? '/images/btp-09.jpg'
                    : '/images/btp-15.jpg'
                }
                alt={WORK_PROCESS[activeStep].title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-bold">
                  Illustration de l'Étape {WORK_PROCESS[activeStep].number} sur le terrain
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
