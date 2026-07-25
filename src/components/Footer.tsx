import React, { useState } from 'react';
import { LOGO_URL } from '../data/siteData';
import { downloadElementorJsonFile, generateElementorJson } from '../utils/elementorExporter';
import { Download, Copy, Check, Code, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(generateElementorJson(), null, 2);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: 'Coleção', href: '#colecao' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Cores', href: '#cores' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Processo', href: '#processo' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#0c252f] text-white py-16 px-4 sm:px-6 lg:px-10 border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto space-y-10">
        
        {/* Top: Logo & Tagline */}
        <div className="space-y-4">
          <a href="#inicio" className="inline-block p-3 bg-white rounded-xl shadow-md">
            <img
              src={LOGO_URL}
              alt="Ellegance Móveis — Há 20 anos trazendo elegância e conforto"
              className="w-56 sm:w-64 h-auto object-contain"
            />
          </a>
          <p className="text-sm sm:text-base text-white/70 max-w-md leading-relaxed">
            Móveis artesanais em corda náutica para ambientes internos e externos.
          </p>
        </div>

        {/* Middle: Navigation links */}
        <nav className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10" aria-label="Links do rodapé">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs sm:text-sm font-bold text-white/80 hover:text-[#8edafb] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Bottom: Copyright & Export Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 tracking-wider">
          <p>© {new Date().getFullYear()} Ellegance Móveis. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => downloadElementorJsonFile()}
              className="text-[#8edafb] hover:text-white transition-colors font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Baixar arquivo JSON para Elementor"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Modelo Elementor (.json)</span>
            </button>

            <button
              onClick={() => setShowJsonModal(true)}
              className="text-white/70 hover:text-white transition-colors font-semibold flex items-center gap-1.5 cursor-pointer"
              title="Ver ou copiar código JSON"
            >
              <Code className="w-4 h-4 text-[#8edafb]" />
              <span>Ver/Copiar JSON</span>
            </button>

            <a
              href="https://www.ellegancemoveis.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ellegancemoveis.com.br
            </a>
          </div>
        </div>

      </div>

      {/* JSON Viewer/Download Modal */}
      {showJsonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#132a34] text-white rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl border border-white/10 overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0c252f]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0787c8]/20 flex items-center justify-center text-[#8edafb]">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Modelo Elementor (JSON)</h3>
                  <p className="text-xs text-white/60">Exportação completa em containers com widgets de HTML</p>
                </div>
              </div>
              <button
                onClick={() => setShowJsonModal(false)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg text-xs text-white/70">
                <span>Arquivo: <strong className="text-white">elementor-ellegance-moveis-html-containers.json</strong></span>
                <span>Tamanho: {(jsonString.length / 1024).toFixed(1)} KB</span>
              </div>

              <div className="relative bg-black/50 border border-white/10 rounded-xl p-4 overflow-x-auto max-h-[350px]">
                <pre className="text-xs font-mono text-emerald-400 leading-relaxed whitespace-pre">
                  {jsonString}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-white/10 bg-[#0c252f] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCopyJson}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Código Copiado!' : 'Copiar Código JSON'}</span>
              </button>

              <button
                onClick={() => {
                  downloadElementorJsonFile();
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0787c8] hover:bg-[#07516f] text-white rounded-xl text-xs font-bold shadow-lg transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Baixar Arquivo .JSON</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
};

