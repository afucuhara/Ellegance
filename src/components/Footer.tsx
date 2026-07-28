import React from 'react';
import { Instagram } from 'lucide-react';
import { LOGO_URL, INSTAGRAM_URL } from '../data/siteData';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Coleção', href: '#colecao' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-white text-[#132a34] py-10 px-4 sm:px-6 lg:px-10 border-t border-[#ebe7df]">
      <div className="w-full max-w-7xl mx-auto space-y-8">
        
        {/* Main Row: Logo & Instagram on Left, Vertical Menu shifted closer */}
        <div className="flex flex-col sm:flex-row items-start justify-start gap-10 sm:gap-16 md:gap-24 lg:gap-32">
          {/* Left: Logo, Tagline & Instagram */}
          <div className="space-y-3 max-w-md">
            <a href="#inicio" className="inline-block transition-transform hover:scale-105">
              <img
                src={LOGO_URL}
                alt="Ellegance Móveis"
                className="w-48 sm:w-56 h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#607078] leading-relaxed">
              Móveis artesanais em corda náutica para ambientes internos e externos. Elegância, durabilidade e sofisticação.
            </p>
            <div className="pt-1">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#132a34] hover:text-[#b8934a] transition-colors"
                title="Siga a Ellegance Móveis no Instagram"
              >
                <Instagram className="w-4 h-4 text-[#b8934a] shrink-0" />
                <span>Instagram (@m.ellegance)</span>
              </a>
            </div>
          </div>

          {/* Right: Menu (Horizontal on mobile, vertical on desktop) */}
          <div className="flex flex-col items-start space-y-2.5 w-full sm:w-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#b8934a] mb-1">
              Menu
            </span>
            <nav className="flex flex-row flex-wrap items-center sm:flex-col sm:items-start gap-x-6 gap-y-2.5" aria-label="Navegação do rodapé">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-[#2c373e] hover:text-[#b8934a] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Website Link */}
        <div className="pt-6 border-t border-[#ebe7df] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#607078]">
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


