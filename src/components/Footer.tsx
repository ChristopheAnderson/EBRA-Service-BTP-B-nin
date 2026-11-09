import React from 'react';
import { HardHat, ArrowUp, MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-white pt-20 pb-12 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800 text-left">
          
          {/* Colonne 1 : Entreprise (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E87524] flex items-center justify-center text-white shadow-md">
                <HardHat className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-white leading-none">
                  EBRA <span className="text-[#E87524]">BTP</span>
                </span>
                <span className="text-[10px] tracking-wider font-semibold text-gray-400 uppercase mt-0.5">
                  Service Bénin
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Entreprise générale de BTP, génie civil, voirie et rénovation à Cotonou et sur l'ensemble du territoire béninois. Nous bâtissons des infrastructures solides et durables.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E87524] shrink-0" />
                <a href={COMPANY_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {COMPANY_INFO.address}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E87524] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E87524] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#E87524] shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </p>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E87524]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-white transition-colors">À Propos d'EBRA</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Nos Services</a>
              </li>
              <li>
                <a href="#realisations" className="hover:text-white transition-colors">Nos Réalisations</a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">Notre Expertise Qualité</a>
              </li>
              <li>
                <a href="#processus" className="hover:text-white transition-colors">Méthodologie de Travail</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Devis</a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Domaines d'activités (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E87524]">
              Pôles d'intervention
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {SERVICES_LIST.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{s.title}</span>
                    <span className="text-[10px] text-gray-500 uppercase">{s.category}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#E87524] hover:underline"
              >
                <span>Voir notre localisation Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Ligne inférieure : Copyright & Bouton Retour Haut */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} EBRA Service BTP Bénin. Tous droits réservés. Bâtir avec exigence.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-400">
              Cotonou, République du Bénin
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-gray-800 hover:bg-[#E87524] text-white transition-colors cursor-pointer"
              aria-label="Retour en haut"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

