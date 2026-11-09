import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, HardHat, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['accueil', 'a-propos', 'services', 'realisations', 'expertise', 'processus', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#accueil', label: 'Accueil', id: 'accueil' },
    { href: '#a-propos', label: 'À propos', id: 'a-propos' },
    { href: '#services', label: 'Nos Services', id: 'services' },
    { href: '#realisations', label: 'Réalisations', id: 'realisations' },
    { href: '#expertise', label: 'Expertise', id: 'expertise' },
    { href: '#processus', label: 'Processus', id: 'processus' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-header border-b border-gray-200/80 shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo EBRA Service BTP Bénin */}
          <a
            href="#accueil"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="EBRA Service BTP Bénin Accueil"
          >
            <div className="w-10 h-10 rounded-xl bg-[#151515] flex items-center justify-center text-[#E87524] shadow-md transition-transform duration-300 group-hover:scale-105 border border-gray-800">
              <HardHat className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#151515] leading-none flex items-center gap-1.5">
                EBRA <span className="text-[#E87524]">BTP</span>
              </span>
              <span className="text-[10px] tracking-wider font-semibold text-[#6C757D] uppercase mt-0.5">
                Service Bénin
              </span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200/60 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs xl:text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#151515] text-white shadow-xs font-semibold'
                      : 'text-[#495057] hover:text-[#151515] hover:bg-gray-100/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-[#151515] text-xs font-bold transition-colors border border-gray-200/80"
              title="Appeler directement"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E87524]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              title="Discuter sur WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenQuote}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E87524] text-white font-medium text-xs xl:text-sm tracking-wide shadow-md shadow-[#E87524]/20 hover:bg-[#D36215] transition-all duration-300 hover:shadow-lg hover:shadow-[#E87524]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Bouton Mobile Burger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-full bg-[#E87524] text-white text-xs font-semibold shadow-sm"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-gray-200 text-[#151515] hover:bg-gray-50 focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Tiroir */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-header border-b border-gray-200 mt-3 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#E87524]/10 text-[#E87524] font-bold'
                    : 'text-[#151515] hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200/80 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-[#E87524] text-white font-medium text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Demander un devis gratuit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#151515] font-bold text-sm text-center flex items-center justify-center gap-2 border border-gray-200"
              >
                <PhoneCall className="w-4 h-4 text-[#E87524]" />
                <span>Appeler : {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-sm text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Échanger directement sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

