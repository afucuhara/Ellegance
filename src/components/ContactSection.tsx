import React from 'react';
import { MessageCircle, MapPin, ExternalLink } from 'lucide-react';
import { SHOWROOM_ADDRESS, MAPS_URL, CONTACT_PERSONS } from '../data/siteData';

interface ContactSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-gradient-to-r from-[#161c20] to-[#252f36] text-white overflow-hidden">
      {/* Background ambient circle decoration */}
      <div className="absolute -left-72 -top-72 w-[630px] h-[630px] rounded-full border border-white/15 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-10">
        
        {/* Section Title Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2.5 text-[#c5a25d] text-xs font-black tracking-widest uppercase">
            <span className="w-8 h-[2px] bg-[#c5a25d] inline-block" />
            <span>Vamos criar juntos?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-medium leading-tight">
            Seu novo ambiente começa com uma conversa.
          </h2>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal">
            Fale diretamente com os nossos fundadores para escolher ou personalizar as peças ideais para o seu projeto:
          </p>
        </div>

        {/* 2-Column Grid: Left (Contacts) | Right (Endereço) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Contact Persons */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl flex flex-col justify-center space-y-3 sm:space-y-4">
            {CONTACT_PERSONS.map((person) => {
              const personWaUrl = `https://wa.me/${person.phone}?text=${encodeURIComponent(person.whatsappMessage)}`;
              return (
                <div
                  key={person.name}
                  className="flex items-center justify-between bg-white/5 hover:bg-white/10 p-3 sm:p-5 rounded-xl border border-white/10 transition-colors gap-2 sm:gap-4"
                >
                  <div className="space-y-0.5 sm:space-y-1 min-w-0">
                    <p className="text-sm sm:text-lg font-bold text-white whitespace-nowrap">{person.name}</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#c5a25d] whitespace-nowrap">{person.displayPhone}</p>
                  </div>

                  <a
                    href={personWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 sm:px-4 py-1.5 sm:py-2.5 bg-[#b8934a] hover:bg-[#9a7836] text-white rounded-lg transition-colors flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold shrink-0 shadow-md group"
                    title={`Chamar ${person.name} no WhatsApp`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 group-hover:text-white transition-opacity" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Column: Address & Embedded Google Maps */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl flex flex-col justify-between space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white/10 text-[#c5a25d] rounded-xl shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#c5a25d]">
                  Endereço
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                  {SHOWROOM_ADDRESS}
                </p>
              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-white/15 shadow-md">
              <iframe
                title="Localização Ellegance Móveis no Google Maps"
                src="https://maps.google.com/maps?q=Av.+Marechal+Mascarenhas+de+Morais,+992+-+Santa+C%C3%A2ndida,+Curitiba+-+PR&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="pt-1">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#c5a25d] hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10"
              >
                <span>Acessar</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
