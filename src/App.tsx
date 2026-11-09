import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { SmoothScroll } from './components/SmoothScroll';
import { ArchitectCursor } from './components/ArchitectCursor';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteOpen(true);
  };

  const handleSelectServiceFromSection = (serviceTitle: string) => {
    // Préremplissage du service et défilement doux
    setSelectedServiceForQuote(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F8F9FA] text-[#151515] flex flex-col font-['Manrope',sans-serif] relative selection:bg-[#E87524]/20 selection:text-[#E87524]">
        
        {/* Preloader architectural d'introduction */}
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

        {/* Curseur laser géomètre & coordonnées en temps réel */}
        <ArchitectCursor />

        {/* Barre de navigation fixe */}
        <Navbar onOpenQuote={() => handleOpenQuote()} />

        {/* Contenu principal */}
        <main className="flex-grow">
          {/* 01 — Hero Section avec 3D Three.js & Switch de Modes Rendu/Structure/Wireframe */}
          <HeroSection onOpenQuote={() => handleOpenQuote()} />

          {/* Bandeau cinématique défilant */}
          <MarqueeBanner />

          {/* 02 — À Propos & Vision d'Ingénierie */}
          <AboutSection />

          {/* 03 — Nos Services avec cartes Tilt 3D */}
          <ServicesSection onSelectService={handleSelectServiceFromSection} />

          {/* 04 — Nos Réalisations avec Lightbox */}
          <ProjectsShowcase />

          {/* 05 — Expertise & Sécurité Chantier */}
          <ExpertiseSection />

          {/* 06 — Notre Processus en 5 étapes */}
          <ProcessSection />

          {/* 07 — Contact & Localisation Google Maps */}
          <ContactSection preselectedService={selectedServiceForQuote} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modale de devis rapide */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          defaultService={selectedServiceForQuote}
        />

        {/* Bouton d'action WhatsApp permanent */}
        <WhatsAppFloatingButton />
      </div>
    </SmoothScroll>
  );
}

export default App;
