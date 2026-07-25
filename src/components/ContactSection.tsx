import React from 'react';
import { MessageCircle, MapPin, Phone, UserCheck, ExternalLink } from 'lucide-react';
import { DISPLAY_PHONE, SHOWROOM_ADDRESS, MAPS_URL, PHONE_NUMBER } from '../data/siteData';

interface ContactSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Olá, vim pelo site e gostaria de solicitar um orçamento.')}`;

  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-gradient-to-r from-[#0b536f] to-[#0787c8] text-white overflow-hidden">
      {/* Background ambient circle decoration */}
      <div className="absolute -left-72 -top-72 w-[630px] h-[630px] rounded-full border border-white/15 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-[#91ddff] text-xs font-black tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#91ddff] inline-block" />
              <span>Vamos criar juntos?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium leading-tight">
              Seu novo ambiente começa com uma conversa.
            </h2>

            <p className="text-base sm:text-xl text-white/85 leading-relaxed font-normal">
              Fale com Rafael ou Michelle. Vamos entender seu espaço e indicar as peças ideais para o seu projeto.
            </p>

            <div className="pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 px-8 bg-white hover:bg-[#f7f3ec] text-[#07516f] text-base font-extrabold rounded-xl shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-[#0787c8]" />
                <span>Chamar no WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Contact Card Info */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6">
            
            {/* Phone Item */}
            <div className="flex items-start gap-4 pb-5 border-b border-white/15">
              <div className="p-3 bg-white/10 text-[#91ddff] rounded-xl shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#91ddff]">
                  WhatsApp
                </span>
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\D/g, '')}`}
                  className="text-lg font-bold text-white hover:text-[#91ddff] transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>

            {/* Team Item */}
            <div className="flex items-start gap-4 pb-5 border-b border-white/15">
              <div className="p-3 bg-white/10 text-[#91ddff] rounded-xl shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#91ddff]">
                  Atendimento Especializado
                </span>
                <p className="text-base font-bold text-white">
                  Rafael & Michelle
                </p>
              </div>
            </div>

            {/* Showroom Location Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 text-[#91ddff] rounded-xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#91ddff]">
                  Showroom Curitiba
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:text-[#91ddff] transition-colors flex items-center gap-1 mt-0.5"
                >
                  <span>{SHOWROOM_ADDRESS}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
