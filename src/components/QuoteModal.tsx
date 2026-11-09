import React, { useState } from 'react';
import { X, Send, CheckCircle, HardHat, AlertCircle, Phone, MapPin, ShieldCheck, Clock, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService || 'Bâtiment & Gros Œuvre',
    location: '',
    description: '',
    urgency: 'Standard (1 à 3 mois)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#E87524', '#151515', '#A8ADB3', '#FFFFFF']
        });
      } catch (err) {
        console.log(err);
      }
    }, 700);
  };

  const servicesList = [
    'Bâtiment & Gros Œuvre',
    'Génie Civil & Dalots',
    'VRD & Pavage Autobloquant',
    'Rénovation & Réhabilitation',
    'Bureau d’Études & BIM',
    'Électricité, Plomberie & Dépannage 24/7',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-200 text-left overflow-hidden my-auto max-h-[92vh] flex flex-col md:flex-row">
        
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/90 hover:bg-gray-100 text-[#151515] flex items-center justify-center transition-colors cursor-pointer shadow-md"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="w-full py-16 px-8 text-center space-y-5 my-auto">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#151515] font-display">
              Demande enregistrée avec succès !
            </h3>
            <p className="text-sm sm:text-base text-[#5A6065] max-w-lg mx-auto leading-relaxed">
              Merci <strong>{formData.name}</strong>. Nos ingénieurs examinent votre demande pour la prestation <strong>{formData.service}</strong> et vous contacteront au <strong>{formData.phone}</strong> sous 24 à 48 heures.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-8 py-3.5 rounded-xl bg-[#E87524] hover:bg-[#D36215] text-white font-bold text-sm transition-all cursor-pointer shadow-lg shadow-[#E87524]/20"
              >
                Retourner sur le site
              </button>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Bonjour, je viens de remplir une demande de devis sur votre site pour : ' + formData.service)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Accélérer par WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Volet Gauche PC (40%) : Sombre & Architectural */}
            <div className="hidden md:flex md:w-[38%] bg-[#151515] text-white p-8 flex-col justify-between relative overflow-hidden shrink-0">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#E87524]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-architect-grid opacity-30" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#E87524] text-white flex items-center justify-center shadow-lg">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-white font-display leading-tight">
                      EBRA BTP BÉNIN
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-[#E87524]">
                      Bureau d'Ingénierie
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-extrabold text-white leading-snug">
                    Étude technique & devis personnalisé
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Chaque devis fait l'objet d'un examen minutieux par un ingénieur en bâtiment ou génie civil.
                  </p>
                </div>

                {/* 3 Garanties */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-[#E87524] shrink-0" />
                    <span>Calculs conformes aux règles BAEL 91</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <Clock className="w-4 h-4 text-[#E87524] shrink-0" />
                    <span>Réponse détaillée sous 24h à 48h</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-gray-300">
                    <MapPin className="w-4 h-4 text-[#E87524] shrink-0" />
                    <span>Siège à Womey, Abomey-Calavi</span>
                  </div>
                </div>
              </div>

              {/* Coordonnées directes réelles */}
              <div className="relative z-10 pt-6 border-t border-gray-800 space-y-2 text-xs">
                <p className="text-gray-400">Besoin d'un échange immédiat ?</p>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-white hover:text-[#E87524] flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E87524]" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Volet Droit (60%) : Formulaire aéré */}
            <div className="w-full md:w-[62%] p-6 sm:p-10 overflow-y-auto max-h-[85vh] md:max-h-[92vh]">
              <div className="mb-6">
                <span className="text-[11px] font-bold text-[#E87524] uppercase tracking-wider block mb-1">
                  Formulaire Devis Express
                </span>
                <h3 className="text-2xl font-extrabold text-[#151515] font-display">
                  Précisez votre projet de construction
                </h3>
              </div>

              {error && (
                <div className="mb-4 p-3.5 rounded-xl bg-rose-50 text-rose-700 text-xs flex items-center gap-2 border border-rose-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Sélection de la prestation avec boutons pills cliquables */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-2">
                    Domaine d'intervention *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {servicesList.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => setFormData({ ...formData, service: srv })}
                        className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                          formData.service === srv
                            ? 'bg-[#151515] text-white border-[#151515] shadow-sm'
                            : 'bg-[#F8F9FA] text-[#5A6065] border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nom & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                      Votre Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Christian Houenou"
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] bg-[#F8F9FA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                      Téléphone joignable *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: +229 97 00 00 00"
                      required
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] bg-[#F8F9FA]"
                    />
                  </div>
                </div>

                {/* Email & Localisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@exemple.com"
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] bg-[#F8F9FA]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                      Ville / Quartier du chantier
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ex: Cotonou, Calavi, Ouidah..."
                      className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] bg-[#F8F9FA]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                    Description sommaire du projet
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Superficie envisagée, nombre d'étages (R+...), état du terrain..."
                    className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] bg-[#F8F9FA]"
                  />
                </div>

                {/* Bouton d'action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#E87524] hover:bg-[#D36215] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E87524]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Transmission au bureau d'études...</span>
                    ) : (
                      <>
                        <span>Transmettre ma demande d'étude gratuite</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
