import React, { useState } from 'react';
import { PROJECTS_LIST, type ProjectItem } from '../data/content';
import { Eye, MapPin, Calendar, Maximize2, X, Check, Building, Layers } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { TextReveal } from './TextReveal';

export const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = [
    { id: 'all', label: 'Toutes les réalisations' },
    { id: 'batiment', label: 'Bâtiments & Villas' },
    { id: 'genie-civil', label: 'Génie Civil' },
    { id: 'vrd', label: 'VRD & Voirie' },
    { id: 'renovation', label: 'Rénovation' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeFilter);

  return (
    <section id="realisations" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87524]/10 text-[#E87524] text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Galerie de Projets & Chantiers</span>
            </div>
            
            <TextReveal
              text="Nos chantiers & références au Bénin."
              as="h2"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
              highlightWords={['chantiers', 'Bénin.']}
            />

            <p className="text-base sm:text-lg text-[#5A6065]">
              Découvrez un aperçu des ouvrages que nos équipes réalisent : structures durables, finitions de prestige et respect rigoureux des cahiers des charges.
            </p>
          </div>

          {/* Filtres de catégorie */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-[#E87524] text-white shadow-lg shadow-[#E87524]/25 scale-105'
                    : 'bg-[#F8F9FA] text-[#5A6065] hover:text-[#151515] hover:bg-gray-100 border border-gray-200/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets avec TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <TiltCard key={project.id} maxTilt={6} className="h-full">
              <div
                onClick={() => setSelectedProject(project)}
                className="group bg-[#F8F9FA] rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#E87524]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image du projet */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Badge de catégorie */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#151515] shadow-xs">
                      {project.categoryLabel}
                    </div>

                    {/* Bouton d'agrandissement au survol */}
                    <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Localisation & Année */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-gray-200">
                      <span className="flex items-center gap-1.5 font-bold">
                        <MapPin className="w-3.5 h-3.5 text-[#E87524]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Contenu textuel */}
                  <div className="p-6 text-left space-y-3">
                    <h3 className="text-xl font-bold text-[#151515] group-hover:text-[#E87524] transition-colors tracking-tight font-display">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#5A6065] leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags techniques */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-white border border-gray-200/90 text-[#495057]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bouton Voir les détails */}
                <div className="px-6 pb-6 pt-2 text-left">
                  <div className="w-full py-3 rounded-xl bg-white group-hover:bg-[#151515] group-hover:text-white text-[#151515] text-xs font-bold text-center border border-gray-200 transition-all flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Consulter la fiche technique</span>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Mention de rigueur & transparence */}
        <div className="mt-14 text-center">
          <p className="text-xs text-[#6C757D] max-w-xl mx-auto italic">
            * Les visuels présentés illustrent nos standards d'ingénierie et de réalisation. Les fiches de chantiers réels sont mises à jour régulièrement au fur et à mesure des réceptions de travaux.
          </p>
        </div>

      </div>

      {/* Modal Lightbox détails projet */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 text-left">
            
            {/* Bouton Fermer */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 text-[#151515] flex items-center justify-center shadow-lg hover:bg-[#E87524] hover:text-white transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Grande Image */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E87524] px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md inline-block mb-2">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Détails du projet */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-3 gap-4 pb-6 border-b border-gray-100">
                <div>
                  <span className="text-[11px] font-semibold text-[#6C757D] uppercase">Localisation</span>
                  <p className="text-sm font-bold text-[#151515] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E87524]" />
                    {selectedProject.location}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#6C757D] uppercase">Envergure</span>
                  <p className="text-sm font-bold text-[#151515] flex items-center gap-1 mt-0.5">
                    <Layers className="w-3.5 h-3.5 text-[#E87524]" />
                    {selectedProject.surface || 'Projet complet'}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-[#6C757D] uppercase">Année</span>
                  <p className="text-sm font-bold text-[#151515] flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E87524]" />
                    {selectedProject.year}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
                  Descriptif des travaux
                </h4>
                <p className="text-sm text-[#5A6065] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#151515] uppercase tracking-wider mb-2">
                  Points techniques notables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#F8F9FA] border border-gray-200/80 text-xs font-bold text-[#151515]">
                      <Check className="w-4 h-4 text-[#E87524] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-4 rounded-xl bg-[#151515] hover:bg-[#E87524] text-white font-bold text-sm transition-all duration-300 cursor-pointer text-center shadow-md"
                >
                  Fermer la vue
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
