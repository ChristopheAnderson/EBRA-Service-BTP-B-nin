import React from 'react';
import { Award, Compass, ShieldAlert, Users, CheckCircle, Hammer, Building2 } from 'lucide-react';
import { STATS } from '../data/content';
import { TextReveal } from './TextReveal';
import { TiltCard } from './TiltCard';
import { MotionReveal, StaggerContainer, StaggerItem } from './MotionReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-propos" className="py-28 bg-white relative overflow-hidden border-t border-b border-gray-200/80">
      
      {/* Motif décoratif d'arrière-plan */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E87524]/5 rounded-bl-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête de section avec TextReveal */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87524]/10 text-[#E87524] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>À Propos d'EBRA Service BTP</span>
          </div>
          
          <TextReveal
            text="Une ingénierie de précision au cœur de l'Afrique de l'Ouest."
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
            highlightWords={['précision', "l'Afrique"]}
          />

          <p className="text-base sm:text-lg text-[#5A6065] leading-relaxed">
            Fondée sur les valeurs de rigueur technique, de transparence et de durabilité, notre entreprise s'impose comme un acteur de confiance pour bâtir des ouvrages fiables et pérennes au Bénin.
          </p>
        </div>

        {/* Grille principale : Photos de professionnels africains & Contenu textuel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Photos architecturales réelles avec MotionReveal et Tilt */}
          <MotionReveal animation="fade-right" className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <TiltCard maxTilt={5}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img
                      src="/images/btp-02.jpg"
                      alt="Ingénieur béninois analysant les plans sur chantier"
                      className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-bold">Suivi technique & Topographie</span>
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={5}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img
                      src="/images/btp-03.jpg"
                      alt="Équipe technique BTP au Bénin"
                      className="w-full h-44 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-bold">Coordination sur le terrain</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              <div className="space-y-4 pt-8">
                <TiltCard maxTilt={5}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img
                      src="/images/btp-09.jpg"
                      alt="Chantier de gros œuvre béton armé"
                      className="w-full h-44 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-bold">Coulage & Contrôle structurel</span>
                    </div>
                  </div>
                </TiltCard>

                <TiltCard maxTilt={5}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img
                      src="/images/btp-10.jpg"
                      alt="Architecte béninois observant l'élévation"
                      className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-108"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-bold">Génie civil & Infrastructures</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

            {/* Badge flottant d'excellence avec ombre marquée */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 bg-[#151515] text-white px-7 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3.5 border border-gray-700 hover:scale-105 transition-transform duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#E87524] flex items-center justify-center text-white shrink-0 shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wider text-[#E87524]">Expertise BTP Certifiée</p>
                <p className="text-sm font-bold text-white">Chantiers menés avec rigueur</p>
              </div>
            </div>
          </MotionReveal>

          {/* Argumentaire textuel */}
          <MotionReveal animation="fade-left" className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#151515] leading-snug font-display">
              Bâtir des édifices solides qui traversent les générations
            </h3>

            <p className="text-[#5A6065] text-base leading-relaxed">
              Chez <strong className="text-[#151515]">EBRA Service BTP Bénin</strong>, nous appréhendons chaque projet comme un défi d'ingénierie unique. Des études géotechniques à la pose des dernières finitions, nous coordonnons l'ensemble des corps d'état avec une exigence sans compromis.
            </p>

            <p className="text-[#5A6065] text-base leading-relaxed">
              Nous conjuguons l'utilisation de matériaux locaux de premier choix avec les meilleures méthodologies de calcul de structures en béton armé, garantissant ainsi sécurité, pérennité et valorisation de votre investissement immobilier ou public.
            </p>

            {/* 4 Piliers clés */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-1.5 hover:border-[#E87524]/50 transition-colors">
                <div className="flex items-center gap-2 text-[#E87524]">
                  <Award className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-[#151515]">Excellence Constructive</h4>
                </div>
                <p className="text-xs text-[#5A6065]">
                  Formulation rigoureuse des bétons, respect des temps de cure et dosages contrôlés.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-1.5 hover:border-[#E87524]/50 transition-colors">
                <div className="flex items-center gap-2 text-emerald-600">
                  <ShieldAlert className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-[#151515]">Sécurité Chantier (HSE)</h4>
                </div>
                <p className="text-xs text-[#5A6065]">
                  Port obligatoire des EPI, balisage clair et formation continue de nos équipes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-1.5 hover:border-[#E87524]/50 transition-colors">
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-[#151515]">Équipes Qualifiées</h4>
                </div>
                <p className="text-xs text-[#5A6065]">
                  Ingénieurs, conducteurs de travaux et artisans béninois rompus aux exigences techniques.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-1.5 hover:border-[#E87524]/50 transition-colors">
                <div className="flex items-center gap-2 text-amber-600">
                  <Hammer className="w-4 h-4" />
                  <h4 className="text-sm font-bold text-[#151515]">Matériel & Engins</h4>
                </div>
                <p className="text-xs text-[#5A6065]">
                  Bétonnières, vibreurs, échafaudages sécurisés et engins de nivellement performants.
                </p>
              </div>
            </div>

            {/* Checklist rapide */}
            <div className="space-y-2.5 pt-2">
              {[
                "Devis détaillés et transparents poste par poste",
                "Plans d'exécution validés avant tout démarrage de chantier",
                "Garantie de livraison et suivi après réception des clés"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold text-[#151515]">{item}</span>
                </div>
              ))}
            </div>

          </MotionReveal>

        </div>

        {/* Chiffres & Indicateurs avec Stagger cascade */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-gray-200/80">
          {STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <TiltCard maxTilt={6}>
                <div className="p-6 sm:p-8 rounded-3xl bg-[#F8F9FA] border border-gray-200/80 text-center hover:border-[#E87524]/60 hover:bg-white transition-all shadow-xs hover:shadow-lg">
                  <div className="text-3xl sm:text-5xl font-extrabold text-[#E87524] font-display mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#151515] mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#6C757D]">
                    {stat.caption}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
