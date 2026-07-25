import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2.5 text-[#b8934a] text-xs font-black tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#b8934a] inline-block" />
              <span>Dúvidas frequentes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#132a34] font-medium leading-tight">
              Antes de escolher.
            </h2>

            <p className="text-base text-[#607078] leading-relaxed">
              Tire suas principais dúvidas sobre resistência, personalização, prazos e entrega dos nossos móveis em corda náutica.
            </p>

            <div className="p-6 bg-[#f7f3ec] rounded-2xl border border-[#e2d9c7] space-y-3 mt-6">
              <div className="flex items-center gap-3 text-[#b8934a] font-bold">
                <HelpCircle className="w-5 h-5 text-[#b8934a]" />
                <span>Possui outra dúvida?</span>
              </div>
              <p className="text-xs text-[#607078] leading-relaxed">
                Nossa equipe está disponível no WhatsApp para ajudar você com especificações do seu projeto.
              </p>
            </div>
          </div>

          {/* Right Accordions Column */}
          <div className="lg:col-span-7 border-t border-[#e2d9c7]">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border-b border-[#e2d9c7] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-6 flex items-center justify-between text-left gap-4 hover:text-[#b8934a] transition-colors"
                  >
                    <span className="text-lg sm:text-xl font-bold text-[#132a34] leading-snug">
                      {faq.question}
                    </span>
                    <span className="p-2 rounded-full bg-[#f7f3ec] text-[#b8934a] shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 text-sm sm:text-base text-[#607078] leading-relaxed animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
