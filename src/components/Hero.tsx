import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { PHONE_NUMBER } from '../data/siteData';
import heroMainPhoto from '../assets/images/regenerated_image_1786044465533.webp';
import chairPhoto from '../assets/images/regenerated_image_1786047937969.png';

interface HeroProps {
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site da Ellegance Móveis e gostaria de falar com um especialista.')}`;

  return (
    <section id="inicio" className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b lg:bg-gradient-to-br from-white via-[#fff] to-[#f8f6f0]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Copy Column */}
          <div className="lg:col-span-6 space-y-6 lg:space-y-8 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-[#b8934a] text-xs font-black tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#b8934a] inline-block" />
              <span>Artesanal · sofisticado · durável</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#132a34] font-medium leading-[1.02] tracking-tight">
              Elegância e conforto para o seu espaço.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#607078] leading-relaxed max-w-xl font-normal">
              Móveis em corda náutica feitos para transformar áreas internas e externas em ambientes únicos.
            </p>

            {/* Hero Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-14 sm:h-16 px-8 bg-[#b8934a] hover:bg-[#9a7836] text-white text-base font-extrabold rounded-xl shadow-xl shadow-[#b8934a]/25 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
              >
                <span>Falar com um especialista</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="#colecao"
                className="h-12 px-4 flex items-center justify-center gap-2 text-sm lg:text-base font-bold text-[#132a34] hover:text-[#b8934a] border-b-2 border-[#132a34] hover:border-[#b8934a] transition-colors self-center sm:self-auto"
              >
                <span>Conhecer a coleção</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Proof Stats Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-8 border-t border-[#dce5e7]">
              <div>
                <strong className="block text-base xs:text-lg sm:text-2xl lg:text-3xl text-[#b8934a] font-bold font-serif whitespace-nowrap">
                  20 anos
                </strong>
                <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-tight sm:tracking-wider text-[#607078] font-medium block mt-0.5 leading-tight">
                  criando boas histórias
                </span>
              </div>

              <div>
                <strong className="block text-base xs:text-lg sm:text-2xl lg:text-3xl text-[#b8934a] font-bold font-serif whitespace-nowrap">
                  100%
                </strong>
                <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-tight sm:tracking-wider text-[#607078] font-medium block mt-0.5 leading-tight">
                  produção artesanal
                </span>
              </div>

              <div>
                <strong className="block text-base xs:text-lg sm:text-2xl lg:text-3xl text-[#b8934a] font-bold font-serif whitespace-nowrap">
                  Todo Brasil
                </strong>
                <span className="text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-tight sm:tracking-wider text-[#607078] font-medium block mt-0.5 leading-tight">
                  entrega sob consulta
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Tile Collage */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[620px]">
            {/* Decorative Rope Line Circles */}
            <div className="absolute -right-20 -top-10 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full border border-[#b8934a]/20 pointer-events-none" />
            <div className="absolute -right-10 top-10 w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-[#b8934a]/15 pointer-events-none" />

            {/* Main Photo Tile */}
            <div className="absolute left-0 top-6 w-[82%] h-[85%] rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-10">
              <img
                src={heroMainPhoto}
                alt="Conjunto completo de sofá e poltronas Ellegance em corda náutica"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            {/* Chair Photo Tile */}
            <div className="absolute right-0 bottom-0 w-[40%] h-[50%] rounded-2xl overflow-hidden border-8 border-white shadow-2xl z-20">
              <img
                src={chairPhoto}
                alt="Cadeira artesanal preta em corda náutica"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
