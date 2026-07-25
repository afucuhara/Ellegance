import React from 'react';
import { ArrowUpRight, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface CraftSectionProps {
  onOpenQuoteModal: () => void;
}

export const CraftSection: React.FC<CraftSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="diferenciais" className="relative py-20 lg:py-28 bg-[#0b4056] text-white overflow-hidden">
      {/* Decorative ambient background circle */}
      <div className="absolute -right-64 -bottom-64 w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Media Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[580px] lg:h-[640px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/armchair-black.webp"
                alt="Detalhe do trançado artesanal em corda náutica preta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b4056]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Detail Badge */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-6 sm:right-6 bg-white text-[#132a34] p-5 rounded-2xl shadow-2xl flex items-start gap-4 border border-[#dce5e7]">
              <div className="p-3 bg-[#0787c8]/10 text-[#0787c8] rounded-xl shrink-0 mt-0.5">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <strong className="block text-sm font-bold text-[#07516f]">
                  Detalhes que você sente.
                </strong>
                <p className="text-xs text-[#607078] leading-relaxed">
                  Precisão no trançado, cuidado no acabamento e conforto em cada curva.
                </p>
              </div>
            </div>
          </div>

          {/* Right Copy Column */}
          <div className="lg:col-span-7 space-y-8 pt-4 lg:pt-0">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 text-[#8edafb] text-xs font-black tracking-widest uppercase">
                <span className="w-8 h-[2px] bg-[#8edafb] inline-block" />
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
                <div className="p-2.5 bg-white/10 text-[#8edafb] rounded-xl shrink-0 mt-1">
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
                <div className="p-2.5 bg-white/10 text-[#8edafb] rounded-xl shrink-0 mt-1">
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
                <div className="p-2.5 bg-white/10 text-[#8edafb] rounded-xl shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
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
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white text-white hover:text-[#0b4056] border-2 border-white/40 hover:border-white text-sm font-extrabold rounded-xl transition-all shadow-lg"
              >
                <span>Quero tirar minhas dúvidas</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
