import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { TextReveal } from './TextReveal';

interface LocationHub {
  id: string;
  name: string;
  role: string;
  delay: string;
  activeProjects: number;
  highlight: string;
  coords: { x: number; y: number }; // Coordonnées % sur le SVG
}

export const BeninMapHUD: React.FC = () => {
  const hubs: LocationHub[] = [
    {
      id: 'calavi',
      name: 'Abomey-Calavi / Womey',
      role: 'Siège d’exploitation & Base Technique',
      delay: '< 30 minutes',
      activeProjects: 6,
      highlight: 'Dépannages urgences 24/7 & logistique engins',
      coords: { x: 70, y: 76 },
    },
    {
      id: 'cotonou',
      name: 'Cotonou Métropole',
      role: 'Chantiers Résidentiels & Tertiaires',
      delay: '< 45 minutes',
      activeProjects: 8,
      highlight: 'Immeubles R+X, villas haie vive & voiries',
      coords: { x: 74, y: 80 },
    },
    {
      id: 'ouidah',
      name: 'Ouidah & Route des Pêches',
      role: 'Villas de Prestige & Éco-Construction',
      delay: '< 1 heure',
      activeProjects: 3,
      highlight: 'Complexes touristiques et fondations littorales',
      coords: { x: 62, y: 79 },
    },
    {
      id: 'portonovo',
      name: 'Porto-Novo (Capitale)',
      role: 'Génie Civil & Équipements Publics',
      delay: '< 1h15',
      activeProjects: 4,
      highlight: 'Assainissement, caniveaux doubles & dalots',
      coords: { x: 82, y: 74 },
    },
    {
      id: 'seme',
      name: 'Sèmè-Kpodji & Zone Industrielle',
      role: 'Plateformes Logistiques & Dallages',
      delay: '< 1 heure',
      activeProjects: 2,
      highlight: 'Hangars métalliques & dallages quartzés 5T',
      coords: { x: 80, y: 82 },
    },
    {
      id: 'parakou',
      name: 'Parakou & Sous-Région',
      role: 'Missions Spéciales & Grands Ouvrages',
      delay: 'Sur planification',
      activeProjects: 2,
      highlight: 'Infrastructures routières & hydrauliques',
      coords: { x: 68, y: 45 },
    },
  ];

  const [selectedHub, setSelectedHub] = useState<LocationHub>(hubs[0]);

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden bg-architect-grid border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] text-white text-xs font-bold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5 text-[#E87524]" />
            <span>Rayonnement & Ancrage Territorial</span>
          </div>
          
          <TextReveal
            text="Un déploiement opérationnel sur tout le Bénin."
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
            highlightWords={['déploiement', 'Bénin.']}
          />

          <p className="text-base sm:text-lg text-[#5A6065]">
            Depuis notre siège à Womey (Abomey-Calavi), nos équipes techniques et engins de chantier interviennent rapidement sur les principaux corridors de développement du pays.
          </p>
        </div>

        {/* Grille Carte HUD interactive & Carte détaillée */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Panneau Carte Stylisée (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xl relative overflow-hidden text-left">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#151515]">
                  Radar d'Intervention — Bénin
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#6C757D]">
                6 ZONES COUVERTES
              </span>
            </div>

            {/* Représentation géographique stylisée du Bénin */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl bg-gradient-to-b from-[#F8F9FA] to-gray-100 border border-gray-200/80 overflow-hidden flex items-center justify-center">
              
              {/* Lignes de latitude / longitude */}
              <div className="absolute inset-0 bg-architect-grid opacity-60" />
              <div className="laser-scanline" />

              {/* Silhouette stylisée de la côte et du Bénin */}
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full max-h-96 p-4 object-contain text-gray-300 drop-shadow-sm select-none"
                fill="none"
                stroke="currentColor"
              >
                {/* Contour symbolique du Bénin */}
                <path
                  d="M170 30 L220 50 L250 110 L260 170 L240 220 L270 300 L260 380 L290 440 L280 470 L140 470 L130 420 L150 350 L120 280 L140 180 L130 110 Z"
                  fill="#FFFFFF"
                  stroke="#E87524"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="transition-all"
                />
                {/* Océan Atlantique au sud */}
                <path d="M100 480 Q200 470 320 480" stroke="#0ea5e9" strokeWidth="3" />
                <text x="210" y="495" fill="#0ea5e9" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                  Golfe de Guinée / Océan Atlantique
                </text>
              </svg>

              {/* Points d'ancrage cliquables sur la carte */}
              {hubs.map((hub) => {
                const isSelected = selectedHub.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: `${hub.coords.x}%`, top: `${hub.coords.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                    title={hub.name}
                  >
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      {isSelected && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E87524] opacity-75" />
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-4 w-4 items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#E87524] ring-4 ring-[#E87524]/20 scale-125'
                            : 'bg-[#151515] group-hover:bg-[#E87524]'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      </span>
                    </span>

                    {/* Étiquette du nom */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 top-6 whitespace-nowrap text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm border transition-all ${
                        isSelected
                          ? 'bg-[#151515] text-[#E87524] border-gray-700'
                          : 'bg-white/90 text-[#151515] border-gray-200 group-hover:bg-[#E87524] group-hover:text-white'
                      }`}
                    >
                      {hub.name.split('/')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-[#6C757D] text-center mt-3 italic">
              Cliquez sur un pôle géographique pour afficher les détails d'intervention.
            </p>
          </div>

          {/* Fiche détaillée du pôle sélectionné (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-xl space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E87524] text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E87524] uppercase tracking-wider">
                    Pôle sélectionné
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#151515] font-display">
                    {selectedHub.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80 space-y-1">
                <span className="text-[11px] font-bold text-[#6C757D] uppercase">Rôle stratégique</span>
                <p className="text-sm font-bold text-[#151515]">
                  {selectedHub.role}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#6C757D] uppercase mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#E87524]" />
                    <span>Délai d'intervention</span>
                  </div>
                  <p className="text-base font-extrabold text-[#151515]">
                    {selectedHub.delay}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#6C757D] uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chantiers en cours</span>
                  </div>
                  <p className="text-base font-extrabold text-[#151515]">
                    {selectedHub.activeProjects} Projets actifs
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#6C757D] uppercase block mb-1">
                  Spécialités déployées sur ce secteur :
                </span>
                <p className="text-sm text-[#5A6065] leading-relaxed">
                  {selectedHub.highlight}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3.5 rounded-xl bg-[#151515] hover:bg-[#E87524] text-white font-bold text-xs uppercase tracking-wider text-center block transition-colors shadow-md"
                >
                  Lancer un chantier dans cette zone
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
