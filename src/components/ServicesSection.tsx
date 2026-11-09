import React, { useState } from 'react';
import { SERVICES_LIST, type ServiceItem } from '../data/content';
import { Layers, ArrowRight, CheckCircle2, ChevronRight, HardHat } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { TextReveal } from './TextReveal';
import { StaggerContainer, StaggerItem, MotionReveal } from './MotionReveal';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'Construction neuve', label: 'Gros Œuvre' },
    { id: 'Travaux Publics', label: 'Génie Civil' },
    { id: 'Voirie & Réseaux', label: 'VRD & Pavage' },
    { id: 'Rénovation', label: 'Rénovation' },
    { id: 'Ingénierie', label: 'Bureau d\'études' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="services" className="py-28 bg-[#F8F9FA] relative overflow-hidden bg-architect-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête avec révélation animée */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87524]/10 text-[#E87524] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Nos Domaines de Compétence</span>
            </div>
            
            <TextReveal
              text="Des solutions complètes pour tous vos ouvrages."
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
              highlightWords={['complètes', 'ouvrages.']}
            />

            <p className="text-base sm:text-lg text-[#5A6065]">
              De la conception architecturale à la remise des clés, nous intervenons sur l'ensemble de la chaîne de valeur du BTP au Bénin.
            </p>
          </div>

          {/* Filtres par catégories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#151515] text-white shadow-md scale-105'
                    : 'bg-white text-[#5A6065] hover:text-[#151515] hover:bg-gray-100 border border-gray-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des services avec Stagger cascade, Tilt 3D et reflets */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <StaggerItem key={service.id} className="h-full">
              <TiltCard maxTilt={6} className="h-full">
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-2xl hover:border-[#E87524]/50 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    {/* Image du service avec zoom au survol */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      
                      {/* Badge BTP */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#151515] uppercase tracking-wider shadow-xs">
                        {service.badge}
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 z-10">
                        <span className="text-[11px] font-bold text-[#E87524] uppercase tracking-wider block">
                          {service.category}
                        </span>
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Corps de texte */}
                    <div className="p-6 text-left space-y-4">
                      <p className="text-xs font-semibold text-[#151515] italic">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-sm text-[#5A6065] leading-relaxed">
                        {service.description}
                      </p>

                      {/* Caractéristiques techniques */}
                      <div className="pt-2 border-t border-gray-100 space-y-2">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-[#2A2E33]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E87524] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bouton d'action pour le service */}
                  <div className="p-6 pt-0 text-left">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#F8F9FA] group-hover:bg-[#E87524] text-[#151515] group-hover:text-white font-bold text-xs transition-all duration-300 flex items-center justify-between cursor-pointer border border-gray-200 group-hover:border-[#E87524] shadow-xs group-hover:shadow-md"
                    >
                      <span>Chiffrer ce type de projet</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bannière d'accompagnement sur-mesure */}
        <MotionReveal animation="zoom-in" className="mt-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#151515] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden border border-gray-800 shadow-2xl">
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#E87524]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="text-left space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E87524]">
                <HardHat className="w-4 h-4" />
                <span>Votre besoin est spécifique ?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-display">
                Étude technique & visite de terrain sans engagement
              </h3>
              <p className="text-sm text-gray-400 max-w-xl">
                Nos ingénieurs se déplacent sur votre parcelle ou bâtiment à Cotonou, Abomey-Calavi, Porto-Novo et dans tout le Bénin pour établir un diagnostic géotechnique préalable.
              </p>
            </div>

            <button
              onClick={() => onSelectService('Général - Visite de terrain')}
              className="shrink-0 px-8 py-4 rounded-xl bg-[#E87524] text-white font-bold text-sm hover:bg-[#D36215] transition-all duration-300 shadow-xl shadow-[#E87524]/30 hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>Planifier une visite technique</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
