import React from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import { PHONE_NUMBER } from '../data/siteData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  category?: string;
  onNext?: () => void;
  onPrev?: () => void;
  onRequestQuote?: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  image,
  category,
  onNext,
  onPrev,
  onRequestQuote
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors"
        aria-label="Fechar galeria"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-6 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-6 z-10 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 rounded-full transition-colors"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
        />

        <div className="mt-4 text-center max-w-xl">
          {category && (
            <span className="text-[10px] uppercase tracking-widest text-[#c5a25d] font-bold">
              {category}
            </span>
          )}
          <h3 className="text-xl font-serif text-white mt-1">{title}</h3>

          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`Olá! Vi a imagem de "${title}" no site da Ellegance Móveis e gostaria de saber mais informações.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 bg-[#b8934a] hover:bg-[#9a7836] text-white text-xs font-bold rounded-full transition-all shadow-lg"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar no WhatsApp sobre este modelo ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
