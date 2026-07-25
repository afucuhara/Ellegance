import React from 'react';
import { MessageSquare, Palette, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Conte o que procura",
      description: "Envie uma mensagem com o tipo de móvel, medidas e uma foto do seu ambiente, se tiver."
    },
    {
      number: "02",
      icon: Palette,
      title: "Escolha os detalhes",
      description: "Nossa equipe apresenta modelos, cores de corda náutica, acabamentos e a melhor composição para o seu projeto."
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: "Receba seu orçamento",
      description: "Você recebe todas as informações detalhadas para decidir com tranquilidade e atendimento personalizado."
    }
  ];

  return (
    <section id="processo" className="py-20 lg:py-28 bg-[#f7f8f7]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <div className="inline-flex items-center gap-2.5 text-[#0787c8] text-xs font-black tracking-widest uppercase">
            <span className="w-8 h-[2px] bg-[#0787c8] inline-block" />
            <span>Simples e personalizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#132a34] font-medium leading-tight">
            Do seu projeto ao seu espaço.
          </h2>
          <p className="text-base sm:text-lg text-[#607078] leading-relaxed">
            Sem carrinho e sem complicação. Você fala diretamente com quem entende dos produtos e da fabricação artesanal.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-[#ced9dc] py-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="relative space-y-4 md:pr-6">
                <div className="w-10 h-1 bg-[#0787c8] mb-6" />
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0787c8]">
                  <span>Passo {step.number}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0787c8]/10 text-[#0787c8] rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#132a34] font-medium">
                    {step.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#607078] leading-relaxed">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
