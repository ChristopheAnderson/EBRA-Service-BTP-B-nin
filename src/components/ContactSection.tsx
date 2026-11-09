import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ExternalLink, 
  MessageSquare, 
  Building2, 
  AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/content';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: preselectedService || 'Bâtiment résidentiel / Villa',
    location: '',
    estimatedBudget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Mise à jour si pré-sélectionné
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulation de traitement d'envoi frontend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Lancement de confettis de célébration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E87524', '#151515', '#A8ADB3', '#FFFFFF']
        });
      } catch (err) {
        console.log(err);
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F9FA] relative overflow-hidden bg-architect-grid border-t border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Entête */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E87524]/10 text-[#E87524] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Contact & Devis Personnalisé</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight">
            Parlons de votre prochain chantier au Bénin
          </h2>
          <p className="text-base sm:text-lg text-[#5A6065]">
            Que vous ayez un plan d'architecte déjà prêt ou simplement une idée de projet, notre bureau d'études étudie votre demande sous 24 à 48 heures.
          </p>
        </div>

        {/* Grille principale : Formulaire & Coordonnées / Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Colonne Formulaire (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-lg text-left">
              
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#151515]">
                    Demande de devis & évaluation gratuite
                  </h3>
                  <p className="text-xs text-[#6C757D] mt-1">
                    Sans engagement — Réponse rapide par notre équipe technique
                  </p>
                </div>
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-orange-50 text-[#E87524] items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#151515]">
                    Demande transmise avec succès !
                  </h4>
                  <p className="text-sm text-[#5A6065] max-w-md mx-auto leading-relaxed">
                    Merci <strong className="text-[#151515]">{formData.fullName}</strong>. Un ingénieur conseil d'EBRA Service BTP Bénin analysera les détails de votre projet ({formData.projectType}) et vous contactera au <strong className="text-[#151515]">{formData.phone}</strong>.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          projectType: 'Bâtiment résidentiel / Villa',
                          location: '',
                          estimatedBudget: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-gray-100 text-[#151515] font-semibold text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      Envoyer une autre demande
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Bonjour, je viens de soumettre une demande de devis sur votre site pour : ' + formData.projectType)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <span>Accélérer par WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Ex: Paul Dossou"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ex: +229 97 00 00 00"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: contact@exemple.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Type de travaux / Prestation
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                      >
                        <option value="Bâtiment résidentiel / Villa">Bâtiment résidentiel / Villa</option>
                        <option value="Immeuble commercial ou bureaux">Immeuble commercial ou bureaux</option>
                        <option value="Génie civil & Ouvrages d'art">Génie civil & Ouvrages d'art</option>
                        <option value="Voirie, Pavage & Assainissement">Voirie, Pavage & Assainissement</option>
                        <option value="Rénovation & Réhabilitation lourde">Rénovation & Réhabilitation lourde</option>
                        <option value="Bureau d'études & Plans 3D">Bureau d'études & Plans 3D</option>
                        <option value="Coordination de chantier TCE">Coordination de chantier TCE</option>
                        <option value="Autre demande">Autre demande spécifique</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Localisation du projet (Ville / Quartier)
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Ex: Cotonou, Calavi, Ouidah..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Fourchette de budget indicatif
                      </label>
                      <select
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                      >
                        <option value="">À définir avec l'ingénieur</option>
                        <option value="Moins de 10 Millions FCFA">&lt; 10 Millions FCFA</option>
                        <option value="10 à 30 Millions FCFA">10 à 30 Millions FCFA</option>
                        <option value="30 à 75 Millions FCFA">30 à 75 Millions FCFA</option>
                        <option value="Plus de 75 Millions FCFA">&gt; 75 Millions FCFA</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                      Description de votre besoin
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Précisez la surface estimée, le nombre de niveaux (R+...), l'état actuel de la parcelle, vos délais souhaités..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E87524]/20 focus:border-[#E87524] text-sm text-[#151515] transition-all bg-[#F8F9FA]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-[#E87524] hover:bg-[#D36215] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E87524]/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Transmission en cours...</span>
                      ) : (
                        <>
                          <span>Envoyer ma demande de devis</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#6C757D] text-center pt-2">
                    Vos données restent confidentielles et sont uniquement utilisées pour l'étude de votre devis technique.
                  </p>

                </form>
              )}

            </div>
          </div>

          {/* Colonne Coordonnées & Localisation Google Maps (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Carte Coordonnées Directes */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#151515]">
                Nos coordonnées
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E87524] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#6C757D] uppercase">Localisation</span>
                    <p className="text-sm font-bold text-[#151515] mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-[#5A6065]">
                      Bénin — Afrique de l'Ouest
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#6C757D] uppercase">Téléphone & WhatsApp</span>
                    <p className="text-sm font-bold text-[#151515] mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-[#E87524] transition-colors">
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                        className="text-xs font-semibold text-[#151515] hover:text-[#E87524] flex items-center gap-1 bg-gray-100 px-2.5 py-1 rounded-md"
                      >
                        <Phone className="w-3 h-3 text-[#E87524]" />
                        <span>Appeler</span>
                      </a>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>WhatsApp direct</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#6C757D] uppercase">Courrier électronique</span>
                    <p className="text-sm font-bold text-[#151515] mt-0.5">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#E87524] transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 text-[#151515] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#6C757D] uppercase">Horaires de bureau</span>
                    <p className="text-xs font-bold text-[#151515] mt-0.5">
                      {COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bouton direct WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Démarrer une conversation WhatsApp</span>
              </a>
            </div>

            {/* Carte Google Maps Interactive */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#151515]">
                    Localisation sur Google Maps
                  </h4>
                  <p className="text-xs text-[#6C757D]">
                    Position officielle EBRA Service BTP Bénin
                  </p>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#F8F9FA] hover:bg-[#E87524] text-[#151515] hover:text-white text-xs font-bold border border-gray-200 transition-colors flex items-center gap-1.5"
                >
                  <span>Ouvrir dans Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Aperçu interactif Maps */}
              <div className="relative h-56 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
                <iframe
                  title="EBRA Service BTP Bénin Google Maps"
                  src={`https://maps.google.com/maps?q=place_id:${COMPANY_INFO.locationId}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="p-3 rounded-xl bg-[#F8F9FA] text-[11px] text-[#5A6065] flex items-center justify-between">
                <span>ID Google Maps : {COMPANY_INFO.locationId}</span>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E87524] font-bold hover:underline"
                >
                  Itinéraire GPS →
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

