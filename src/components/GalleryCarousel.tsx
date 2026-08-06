import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY } from '../data/siteData';

interface GalleryCarouselProps {
  onOpenLightbox: (title: string, image: string, category?: string) => void;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ onOpenLightbox }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#f5f1e9] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Gallery Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2.5 text-[#b8934a] text-xs font-black tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#b8934a] inline-block" />
              <span>Projetos Ellegance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#132a34] font-medium leading-tight">
              Ambientes reais, feitos para viver.
            </h2>
          </div>

          <div className="lg:col-span-5 text-[#607078] text-base lg:text-lg leading-relaxed">
            Conheça algumas peças produzidas pela Ellegance e veja como diferentes tramas, cores e composições transformam áreas gourmet, varandas e espaços de convivência.
          </div>
        </div>

        {/* Gallery Controls Bar */}
        <div className="flex items-center justify-end gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-[#cfd9da] bg-white/90 hover:bg-[#b8934a] hover:text-white text-[#b8934a] flex items-center justify-center transition-all shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-[#cfd9da] bg-white/90 hover:bg-[#b8934a] hover:text-white text-[#b8934a] flex items-center justify-center transition-all shadow-sm"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Track Carousel */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2"
        >
          {GALLERY.map((item) => (
            <figure
              key={item.id}
              onClick={() => onOpenLightbox(item.title, item.image, item.category)}
              className="group shrink-0 w-[85%] sm:w-[45%] lg:w-[23%] bg-white rounded-2xl overflow-hidden border border-[#e4dfd5] shadow-lg cursor-pointer snap-start transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#e8e1d6] to-[#f7f4ee] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 rounded-full text-[#132a34] shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <figcaption className="p-5 text-[#132a34] font-serif text-lg font-medium leading-snug flex items-center min-h-[72px]">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
};
