import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Afficher une petite bulle d'invitation après 4 secondes
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Infobulle d'invitation */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-gray-200/90 shadow-xl text-left text-xs font-medium text-[#151515] animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-[#151515]">Besoin d'un devis rapide ?</span>
            <span className="text-[11px] text-[#6C757D]">Discutez avec nos techniciens</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors ml-1"
            aria-label="Fermer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Bouton rond vert WhatsApp */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-108 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 relative group"
        aria-label="Contacter sur WhatsApp"
        title="Contacter sur WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#E87524] border-2 border-white animate-pulse" />
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};

