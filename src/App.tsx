import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromiseStrip } from './components/PromiseStrip';
import { Collection } from './components/Collection';
import { GalleryCarousel } from './components/GalleryCarousel';
import { CraftSection } from './components/CraftSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LightboxModal } from './components/LightboxModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { GALLERY } from './data/siteData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState('');
  const [quoteInitialColor, setQuoteInitialColor] = useState('');

  // Lightbox State
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    currentIndex: number;
    title: string;
    image: string;
    category?: string;
  }>({
    isOpen: false,
    currentIndex: 0,
    title: '',
    image: '',
    category: '',
  });

  const handleOpenQuoteModal = (product = '', color = '') => {
    setQuoteInitialProduct(product);
    setQuoteInitialColor(color);
    setIsQuoteModalOpen(true);
  };

  const handleOpenLightbox = (title: string, image: string, category?: string) => {
    const foundIndex = GALLERY.findIndex((item) => item.image === image || item.title === title);
    setLightboxState({
      isOpen: true,
      currentIndex: foundIndex >= 0 ? foundIndex : 0,
      title,
      image,
      category,
    });
  };

  const handleLightboxNext = () => {
    const nextIdx = (lightboxState.currentIndex + 1) % GALLERY.length;
    const item = GALLERY[nextIdx];
    setLightboxState({
      isOpen: true,
      currentIndex: nextIdx,
      title: item.title,
      image: item.image,
      category: item.category,
    });
  };

  const handleLightboxPrev = () => {
    const prevIdx = (lightboxState.currentIndex - 1 + GALLERY.length) % GALLERY.length;
    const item = GALLERY[prevIdx];
    setLightboxState({
      isOpen: true,
      currentIndex: prevIdx,
      title: item.title,
      image: item.image,
      category: item.category,
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#132a34] selection:bg-[#0787c8] selection:text-white flex flex-col font-sans">
      {/* Navigation Header */}
      <Header
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Benefits Strip */}
        <PromiseStrip />

        {/* Collection Section */}
        <Collection
          onSelectProduct={(productName) => handleOpenQuoteModal(productName)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Gallery Carousel Section */}
        <GalleryCarousel onOpenLightbox={handleOpenLightbox} />

        {/* Craft / Differentials Section */}
        <CraftSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* About Us Section */}
        <AboutSection />

        {/* Process Steps Section */}
        <ProcessSection />

        {/* FAQs Section */}
        <FaqSection />

        {/* Contact Section */}
        <ContactSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteInitialProduct}
        initialColor={quoteInitialColor}
      />

      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        title={lightboxState.title}
        image={lightboxState.image}
        category={lightboxState.category}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
        onRequestQuote={(productTitle) => handleOpenQuoteModal(productTitle)}
      />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}

