import React from 'react';

export const PromiseStrip: React.FC = () => {
  const promises = [
    "Design autoral",
    "Resistência ao sol e à chuva",
    "Conforto que acolhe",
    "Acabamento premium"
  ];

  // Repeat items for seamless infinite ticker scrolling
  const marqueeItems = [...promises, ...promises, ...promises, ...promises];

  return (
    <section className="bg-[#b8934a] text-white py-2.5 overflow-hidden shadow-inner border-y border-[#b8934a]/20 select-none">
      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12">
          {marqueeItems.map((promise, index) => (
            <div key={`${promise}-${index}`} className="flex items-center gap-8 sm:gap-12 shrink-0">
              <span className="w-1.5 h-1.5 bg-white rotate-45 inline-block opacity-80 shrink-0" />
              <p className="whitespace-nowrap text-[11px] sm:text-xs font-black tracking-widest uppercase text-white">
                {promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
