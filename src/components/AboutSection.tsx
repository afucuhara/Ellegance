import React from 'react';
import { Award, Heart, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Number + History */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
            {/* Big 20 number */}
            <div className="sm:col-span-4 flex flex-col text-[#0787c8]">
              <span className="text-7xl sm:text-8xl lg:text-9xl font-serif font-bold leading-none tracking-tight">
                20
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-[#07516f] mt-2">
                anos de Ellegance
              </span>
            </div>

            {/* Story text */}
            <div className="sm:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2.5 text-[#0787c8] text-xs font-black tracking-widest uppercase">
                <span className="w-8 h-[2px] bg-[#0787c8] inline-block" />
                <span>Nossa história</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#132a34] font-medium leading-tight">
                Móveis que fazem parte da vida.
              </h2>

              <p className="text-base text-[#607078] leading-relaxed">
                Há duas décadas, Rafael e Michelle transformam técnica e sensibilidade em mobiliário artesanal. A Ellegance nasceu para criar peças que unem beleza, resistência e o prazer de estar em casa.
              </p>

              <p className="text-base text-[#607078] leading-relaxed">
                Atendimento próximo, escolhas personalizadas e cuidado em cada etapa: do primeiro contato até a entrega no seu espaço.
              </p>

              {/* Founder Signatures */}
              <div className="pt-4 border-t border-[#dce5e7]">
                <p className="font-serif italic text-xl text-[#07516f] font-medium">
                  Rafael & Michelle
                </p>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#607078]">
                  Fundadores · Ellegance Móveis
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl border-8 border-[#f7f3ec]">
              <img
                src="https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-terracotta.webp"
                alt="Coleção artesanal Ellegance Móveis em terracota"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#07516f] text-white p-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-4 max-w-xs">
              <div className="p-3 bg-white/10 rounded-xl text-[#8edafb]">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-xs leading-relaxed">
                Tradição e dedicação em Curitiba e entregas para todo o Brasil.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
