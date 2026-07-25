import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { ROPE_COLORS } from '../data/siteData';

interface ColorPaletteProps {
  onSelectColorForQuote: (colorName: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ onSelectColorForQuote }) => {
  const [activeColor, setActiveColor] = useState(ROPE_COLORS[0]);

  return (
    <section id="cores" className="py-20 lg:py-28 bg-[#f5f1e9]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#0787c8] text-xs font-black tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#0787c8] inline-block" />
              <span>Seu móvel, seu estilo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#132a34] font-medium leading-tight">
              Uma paleta para cada ambiente.
            </h2>

            <p className="text-base sm:text-lg text-[#607078] leading-relaxed">
              Dos tons naturais aos mais marcantes, você escolhe a corda que melhor conversa com a arquitetura, o paisagismo e a personalidade do seu espaço.
            </p>

            {/* Interactive Swatches Grid */}
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#607078]">
                Clique para explorar a cor:
              </label>

              <div className="flex flex-wrap items-center gap-3">
                {ROPE_COLORS.map((color) => {
                  const isActive = activeColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setActiveColor(color)}
                      className={`relative w-12 h-12 rounded-full border-4 transition-all transform hover:scale-110 flex items-center justify-center shadow-md ${
                        isActive
                          ? 'border-[#0787c8] scale-110 ring-4 ring-[#0787c8]/20'
                          : 'border-white hover:border-[#0787c8]/50'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                      aria-label={color.name}
                    >
                      {isActive && <Check className="w-5 h-5 text-white drop-shadow-md" />}
                    </button>
                  );
                })}
              </div>

              {/* Active Color Detail Box */}
              <div className="p-5 bg-white rounded-2xl border border-[#dce5e7] shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full border border-black/10 inline-block"
                      style={{ backgroundColor: activeColor.hex }}
                    />
                    <strong className="text-base font-bold text-[#132a34]">
                      {activeColor.name}
                    </strong>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0787c8]">
                    Corda Náutica Premium
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#607078] leading-relaxed">
                  {activeColor.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectColorForQuote(activeColor.name)}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-[#07516f] hover:text-[#0787c8] border-b-2 border-[#07516f] hover:border-[#0787c8] transition-colors pb-1"
                >
                  <span>Consultar projetos na cor {activeColor.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Visual Photo Column */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px]">
            {/* Primary Blue/Olive Sofa photo */}
            <div className="absolute right-0 top-0 w-[80%] h-[80%] rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-10">
              <img
                src={activeColor.image || "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-green.webp"}
                alt={`Móvel Ellegance em corda ${activeColor.name}`}
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>

            {/* Secondary Natural Chair photo */}
            <div className="absolute left-0 bottom-0 w-[50%] h-[55%] rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-20">
              <img
                src="https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/armchairs-natural.webp"
                alt="Poltronas em corda náutica natural"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Circle Badge */}
            <div className="absolute right-6 bottom-8 z-30 w-32 h-32 rounded-full bg-[#0787c8] text-white flex flex-col items-center justify-center text-center p-3 font-bold text-xs uppercase tracking-wider shadow-2xl animate-float">
              <span>Do natural</span>
              <span className="text-[10px] text-white/80">ao</span>
              <span>vibrante</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
