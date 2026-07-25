import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, FileCode } from 'lucide-react';
import { LOGO_URL } from '../data/siteData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Coleção', href: '#colecao' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Cores', href: '#cores' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Processo', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 h-[76px] lg:h-[88px] flex items-center ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#10252f]/10'
          : 'bg-white/90 backdrop-blur-md border-b border-[#10252f]/05'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img
            src={LOGO_URL}
            alt="Ellegance Móveis — Há 20 anos trazendo elegância e conforto"
            className="w-[170px] sm:w-[210px] lg:w-[235px] h-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[#344b55] hover:text-[#0787c8] font-bold text-sm xl:text-[15px] tracking-wide transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-[-8px] left-0 right-full h-[2px] bg-[#0787c8] transition-all duration-300 group-hover:right-0" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="hidden sm:inline-flex items-center justify-center gap-2 h-11 lg:h-12 px-5 lg:px-6 bg-[#0787c8] hover:bg-[#07516f] text-white text-xs lg:text-sm font-extrabold rounded-lg shadow-lg shadow-[#0787c8]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Pedir orçamento</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#132a34] hover:text-[#0787c8] rounded-lg border border-[#dce5e7]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-white border-b border-[#dce5e7] shadow-xl p-6 flex flex-col gap-4 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#132a34] hover:text-[#0787c8] py-2 border-b border-[#f7f3ec] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3.5 px-5 bg-[#0787c8] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

