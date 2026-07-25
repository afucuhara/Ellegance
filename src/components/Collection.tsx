import React, { useState } from 'react';
import { PRODUCTS } from '../data/siteData';
import { Product } from '../types';

interface CollectionProps {
  onSelectProduct?: (productName: string) => void;
  onOpenLightbox?: (title: string, image: string, category: string) => void;
}

export const Collection: React.FC<CollectionProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Living', 'Jantar', 'Lazer', 'Gourmet'];

  const filteredProducts = selectedCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="colecao" className="py-20 lg:py-28 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2.5 text-[#b8934a] text-xs font-black tracking-widest uppercase">
              <span className="w-8 h-[2px] bg-[#b8934a] inline-block" />
              <span>Coleção corda náutica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#132a34] font-medium leading-tight">
              Peças que transformam ambientes.
            </h2>
          </div>

          <div className="lg:col-span-5 text-[#607078] text-base lg:text-lg leading-relaxed">
            Uma curadoria completa para você criar composições únicas, do living à área de lazer. Escolha o modelo, o acabamento e a cor que combinam com o seu projeto.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 w-full">
          {categories.map((cat) => {
            const count = cat === 'Todos' 
              ? PRODUCTS.length 
              : PRODUCTS.filter(p => p.category.includes(cat)).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat
                    ? 'bg-[#b8934a] text-white shadow-md scale-105'
                    : 'bg-[#f7f3ec] text-[#607078] hover:bg-[#e8dfd0] hover:text-[#132a34]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-[#e2ded5] text-[#132a34]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product: Product) => (
            <article
              key={product.id}
              className="group bg-[#faf8f4] border border-[#ebe7df] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Card Image Container */}
                <div className="relative aspect-[4/3] bg-[#eee8df] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-[#b8934a]">
                    {product.category}
                  </span>
                </div>

                {/* Card Copy */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#132a34] font-medium mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#607078] leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
