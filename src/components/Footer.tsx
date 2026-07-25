import React from 'react';
import { LOGO_URL } from '../data/siteData';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Coleção', href: '#colecao' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Processo', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-white text-[#132a34] py-8 px-4 sm:px-6 lg:px-10 border-t border-[#ebe7df]">
      <div className="w-full max-w-7xl mx-auto space-y-6">
        
        {/* Main Row: Brand on Left, Menu Nav on Right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Logo & Tagline */}
          <div className="space-y-1.5 max-w-md">
            <a href="#inicio" className="inline-block transition-transform hover:scale-105">
              <img
                src={LOGO_URL}
                alt="Ellegance Móveis"
                className="w-44 sm:w-52 h-auto object-contain"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#607078] leading-relaxed">
              Móveis artesanais em corda náutica para ambientes internos e externos.
            </p>
          </div>

          {/* Right: Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2.5 lg:justify-end" aria-label="Links do rodapé">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-extrabold text-[#2c373e] hover:text-[#b8934a] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom: Copyright & Website Link */}
        <div className="pt-4 border-t border-[#ebe7df] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#607078]">
          <p>© {new Date().getFullYear()} Ellegance Móveis. Todos os direitos reservados.</p>
          <a
            href="https://www.ellegancemoveis.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b8934a] font-semibold transition-colors"
          >
            ellegancemoveis.com
          </a>
        </div>

      </div>
    </footer>
  );
};


