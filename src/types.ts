export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category?: string;
  image: string;
}

export interface RopeColor {
  id: string;
  name: string;
  hex: string;
  description: string;
  badge?: string;
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
