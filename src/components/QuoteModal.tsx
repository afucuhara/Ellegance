import React, { useState } from 'react';
import { X, Send, Check, MessageSquare, PhoneCall } from 'lucide-react';
import { PRODUCTS, ROPE_COLORS, PHONE_NUMBER, DISPLAY_PHONE } from '../data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialColor?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct = '',
  initialColor = ''
}) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || PRODUCTS[0].title);
  const [selectedColor, setSelectedColor] = useState(initialColor || ROPE_COLORS[0].name);
  const [customDimensions, setCustomDimensions] = useState('');
  const [userName, setUserName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Olá, gostaria de solicitar um orçamento para o meu ambiente:\n\n`;
    if (userName) text += `• *Nome*: ${userName}\n`;
    text += `• *Móvel/Categoria*: ${selectedProduct}\n`;
    text += `• *Cor da Corda*: ${selectedColor}\n`;
    if (customDimensions.trim()) {
      text += `• *Detalhes/Medidas*: ${customDimensions.trim()}\n`;
    }
    text += `\nVim pelo site da Ellegance Móveis e gostaria de orientações.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#dce5e7]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#1a2228] text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <MessageSquare className="w-5 h-5 text-[#c5a25d]" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-medium leading-tight">Solicitar Orçamento</h3>
              <p className="text-xs text-white/80">Atendimento direto com Rafael & Michelle</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#607078] mb-1.5">
              Seu Nome (Opcional)
            </label>
            <input
              type="text"
              placeholder="Como prefere ser chamado(a)?"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e2d9c7] focus:outline-none focus:ring-2 focus:ring-[#b8934a] text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#607078] mb-1.5">
              Interesse Principal
            </label>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setSelectedProduct(prod.title)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-all ${
                    selectedProduct === prod.title
                      ? 'border-[#b8934a] bg-[#b8934a]/10 text-[#b8934a] font-bold'
                      : 'border-[#e2d9c7] hover:border-[#b8934a]/50 text-[#132a34]'
                  }`}
                >
                  {prod.title}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#607078] mb-1.5">
              Cor da Corda Náutica
            </label>
            <div className="flex flex-wrap gap-2">
              {ROPE_COLORS.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all ${
                    selectedColor === color.name
                      ? 'border-[#b8934a] bg-[#b8934a] text-white font-medium shadow-sm'
                      : 'border-[#e2d9c7] bg-[#f7f3ec] text-[#132a34] hover:border-[#b8934a]'
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-black/10 inline-block"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                  {selectedColor === color.name && <Check className="w-3 h-3 ml-0.5" />}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setSelectedColor('Outra cor sob consulta')}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                  selectedColor === 'Outra cor sob consulta'
                    ? 'border-[#b8934a] bg-[#b8934a] text-white font-medium'
                    : 'border-[#e2d9c7] bg-[#f7f3ec] text-[#132a34]'
                }`}
              >
                + Outra cor
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#607078] mb-1.5">
              Medidas ou Observações do Ambiente (Opcional)
            </label>
            <textarea
              rows={3}
              placeholder="Ex: Varanda gourmet de 3m x 2m; preciso de mesa redonda para 6 lugares..."
              value={customDimensions}
              onChange={(e) => setCustomDimensions(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-[#e2d9c7] focus:outline-none focus:ring-2 focus:ring-[#b8934a] text-sm resize-none"
            />
          </div>

          {/* Quick info box */}
          <div className="p-3.5 bg-[#f7f3ec] rounded-xl border border-[#e2d9c7] flex items-center justify-between text-xs text-[#607078]">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#b8934a]" />
              <span>WhatsApp Showroom: <strong>{DISPLAY_PHONE}</strong></span>
            </div>
            <span className="hidden sm:inline-block font-semibold text-[#b8934a]">Resposta rápida</span>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-[#b8934a] hover:bg-[#9a7836] text-white font-bold rounded-xl shadow-lg shadow-[#b8934a]/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Enviar via WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
