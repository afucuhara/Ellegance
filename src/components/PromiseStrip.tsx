import React from 'react';

export const PromiseStrip: React.FC = () => {
  const promises = [
    "Design autoral",
    "Resistência ao sol e à chuva",
    "Conforto que acolhe",
    "Acabamento premium"
  ];

  return (
    <section className="bg-[#0787c8] text-white py-5 px-4 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-8 sm:gap-x-12 text-center text-xs sm:text-sm font-extrabold tracking-widest uppercase">
        {promises.map((promise, index) => (
          <React.Fragment key={promise}>
            {index > 0 && (
              <span className="hidden sm:inline-block w-1.5 h-1.5 bg-white rotate-45 opacity-80" />
            )}
            <p className="flex items-center gap-2">
              <span className="sm:hidden w-1.5 h-1.5 bg-white rotate-45 inline-block opacity-80" />
              {promise}
            </p>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
