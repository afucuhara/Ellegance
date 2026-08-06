import React from 'react';
import { ArrowUpRight, ShieldCheck, Heart, Brush } from 'lucide-react';
import { PHONE_NUMBER } from '../data/siteData';
import craftImg from '../assets/images/regenerated_image_1786049482273.webp';

interface CraftSectionProps {
  onOpenQuoteModal?: () => void;
}

export const CraftSection: React.FC<CraftSectionProps> = () => {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Olá, gostaria de tirar dúvidas sobre os móveis.')}`;

  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-[#1a2228] text-white overflow-hidden">
      {/* Decorative ambient background circle */}
      <div className="absolute -right-64 -bottom-64 w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Media Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src={craftImg}
                alt="Detalhe do trançado artesanal em corda náutica preta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2228]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 space-y-8 pt-4 lg:pt-0">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-[#c5a25d] text-xs font-black tracking-widest uppercase">
                <span className="w-8 h-[2px] bg-[#c5a25d] inline-block" />
                <span>Feito para durar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium leading-tight">
                Da escolha da corda ao último detalhe.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Cada móvel Ellegance passa por um processo artesanal atento. O resultado são peças resistentes, confortáveis e com presença — pensadas para acompanhar a sua rotina por muitos anos.
            </p>

            {/* Features List */}
            <div className="space-y-6 pt-2 border-t border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 text-[#c5a25d] rounded-xl shrink-0 mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Resistência ao clima</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Materiais altamente selecionados para áreas cobertas, jardins e varandas abertas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 text-[#c5a25d] rounded-xl shrink-0 mt-1">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Conforto de verdade</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Ergonomia pensada nos mínimos detalhes, proporções adequadas e estofados acolhedores.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-white/10 text-[#c5a25d] rounded-xl shrink-0 mt-1">
                  <Brush className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Acabamento artesanal</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Tramas trançadas mão a mão com rigor técnico e sensibilidade estética em cada nó.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#b8934a] hover:bg-[#9a7836] text-white border-2 border-[#b8934a] hover:border-[#9a7836] text-sm font-extrabold rounded-xl transition-all shadow-lg"
              >
                <span>Quero tirar minhas dúvidas</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

