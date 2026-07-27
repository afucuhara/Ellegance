import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { LOGO_URL, PHONE_NUMBER } from '../data/siteData';

interface HeaderProps {
  onOpenQuoteModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Olá, vim pelo site e gostaria de solicitar um orçamento.')}`;

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
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 h-[76px] lg:h-[88px] flex items-center bg-white ${
        scrolled
          ? 'shadow-md border-b border-[#e2d9c7]/40'
          : 'border-b border-[#e2d9c7]/20'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img
            src={LOGO_URL}
            alt="Ellegance Móveis — Há 20 anos trazendo elegância e conforto em corda náutica"
            className="w-[170px] sm:w-[210px] lg:w-[235px] h-auto object-contain"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-[#2c373e] hover:text-[#b8934a] font-bold text-sm xl:text-[15px] tracking-wide transition-colors group"
            >
              {link.name}
              <span className="absolute bottom-[-8px] left-0 right-full h-[2px] bg-[#b8934a] transition-all duration-300 group-hover:right-0" />
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 h-11 lg:h-12 px-5 lg:px-6 bg-[#b8934a] hover:bg-[#9a7836] text-white text-xs lg:text-sm font-extrabold rounded-lg shadow-lg shadow-[#b8934a]/20 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#132a34] hover:text-[#b8934a] rounded-lg border border-[#e2d9c7]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[76px] bg-white border-b border-[#e2d9c7] shadow-xl p-6 flex flex-col gap-4 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#132a34] hover:text-[#b8934a] py-2 border-b border-[#f7f3ec] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-5 bg-[#b8934a] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

