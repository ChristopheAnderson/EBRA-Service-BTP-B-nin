import React from 'react';
import { ShieldCheck, HardHat, Ruler, Cpu, Activity, Truck } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { TextReveal } from './TextReveal';

export const ExpertiseSection: React.FC = () => {
  const expertisePoints = [
    {
      icon: ShieldCheck,
      title: "Contrôles Matériaux & Résistance",
      description: "Prélèvements réguliers et essais d'affaissement au cône d'Abrams sur chaque gâchée de béton. Vérification de la limite d'élasticité des aciers d'armature (FeE500).",
      color: "text-[#E87524]",
      bg: "bg-[#E87524]/10"
    },
    {
      icon: HardHat,
      title: "Sécurité & Zéro Accident Toléré",
      description: "Règlement strict sur l'ensemble de nos chantiers béninois : équipements de protection individuelle (EPI) obligatoires, balisage des zones à risques et briefings matinaux.",
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: Ruler,
      title: "Précision Topographique & Laser",
      description: "Implantation millimétrique à l'aide de niveaux optiques et lasers haute précision. Maîtrise parfaite de l'altimétrie pour l'assainissement gravitaire.",
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: Cpu,
      title: "Conception BIM & Simulation 3D",
      description: "Anticipation des collisions entre canalisations, gaines électriques et éléments porteurs avant le premier coulage grâce à la modélisation 3D avancée.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Activity,
      title: "Suivi & Traçabilité Hebdomadaire",
      description: "Chaque client bénéficie d'un rapport de chantier hebdomadaire détaillé avec relevés photographiques, journal de météo et respect du planning prévisionnel.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      icon: Truck,
      title: "Approvisionnement & Logistique Locale",
      description: "Partenariats solides avec les carrières de concassé, fabricants de ciment certifié et fournisseurs de sable lavé pour éviter toute rupture d'approvisionnement.",
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section id="expertise" className="py-28 bg-[#F8F9FA] relative overflow-hidden border-t border-b border-gray-200/80 bg-architect-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] text-white text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E87524]" />
            <span>Excellence Opérationnelle</span>
          </div>
          
          <TextReveal
            text="La rigueur technique comme marque de fabrique."
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight font-display"
            highlightWords={['rigueur', 'fabrique.']}
          />

          <p className="text-base sm:text-lg text-[#5A6065]">
            Dans le BTP, la solidité d'un bâtiment ne s'improvise pas. Elle repose sur des protocoles vérifiés, une surveillance méthodique et un savoir-faire éprouvé.
          </p>
        </div>

        {/* Grille d'expertises avec Tilt 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertisePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <TiltCard key={index} maxTilt={6} className="h-full">
                <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-2xl hover:border-[#E87524]/50 transition-all duration-300 text-left space-y-5 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className={`w-13 h-13 rounded-2xl ${point.bg} ${point.color} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#151515] tracking-tight font-display">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#5A6065] leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#151515]">
                    <span className="w-2 h-2 rounded-full bg-[#E87524] animate-pulse" />
                    <span>Protocole EBRA certifié</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Témoignage d'engagement */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-md max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 text-left">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-gray-100">
            <img
              src="/images/btp-11.jpg"
              alt="Responsable technique EBRA BTP"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-1.5">
            <p className="text-sm sm:text-base text-[#151515] italic font-medium leading-relaxed">
              « Chaque mètre cube coulé engage notre réputation et la sécurité des personnes qui occuperont ces lieux pendant des décennies. Nous ne faisons aucun compromis sur la qualité. »
            </p>
            <p className="text-xs font-extrabold text-[#E87524] uppercase tracking-wider pt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E87524]" />
              Direction Technique — EBRA Service BTP Bénin
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
