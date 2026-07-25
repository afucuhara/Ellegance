import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent("Olá, vim pelo site da Ellegance Móveis e gostaria de informações e orçamento.");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 p-4 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp com especialista"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 text-xs font-black uppercase tracking-wider transition-all duration-300">
        Atendimento WhatsApp
      </span>
    </button>
  );
};
