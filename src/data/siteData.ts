import { Product, GalleryItem, RopeColor, FaqItem } from '../types';
import logoImg from '../assets/images/regenerated_image_1785002193276.png';
import prod0Img from '../assets/images/regenerated_image_1786046080804.webp';
import prod1Img from '../assets/images/regenerated_image_1786046081830.webp';
import prod2Img from '../assets/images/regenerated_image_1786047130130.jpg';
import prod3Img from '../assets/images/regenerated_image_1786047131160.jpg';
import prod4Img from '../assets/images/regenerated_image_1786047131904.webp';
import prod5Img from '../assets/images/regenerated_image_1786047133414.webp';
import prod6Img from '../assets/images/regenerated_image_1786047133861.webp';
import prod8Img from '../assets/images/regenerated_image_1786047134778.webp';
import prod9Img from '../assets/images/regenerated_image_1786047135334.webp';

import gal0Img from '../assets/images/regenerated_image_1786047456252.jpg';
import gal1Img from '../assets/images/regenerated_image_1786047456937.jpg';
import gal2Img from '../assets/images/regenerated_image_1786047935975.jpg';
import gal3Img from '../assets/images/regenerated_image_1786047936800.jpg';
import gal4Img from '../assets/images/regenerated_image_1786047937351.webp';
import gal5Img from '../assets/images/regenerated_image_1786048119449.webp';
import gal6Img from '../assets/images/regenerated_image_1786048120317.webp';
import gal7Img from '../assets/images/regenerated_image_1786049032369.webp';
import gal9Img from '../assets/images/regenerated_image_1786049032977.webp';
import gal10Img from '../assets/images/regenerated_image_1786049033882.webp';
import gal11Img from '../assets/images/regenerated_image_1786049034687.webp';

export const PHONE_NUMBER = "5541999163917";
export const DISPLAY_PHONE = "(41) 99916-3917";
export const INSTAGRAM_URL = "https://www.instagram.com/m.ellegance/";

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  displayPhone: string;
  whatsappMessage: string;
}

export const CONTACT_PERSONS: ContactPerson[] = [
  {
    name: "Rafael Forbeck",
    role: "",
    phone: "5541997682816",
    displayPhone: "(41) 99768-2816",
    whatsappMessage: "Olá Rafael Forbeck, vi o site da Ellegance Móveis e gostaria de conversar com você sobre um projeto de móveis em corda náutica.",
  },
  {
    name: "Michelle Forbeck",
    role: "",
    phone: "5541999163917",
    displayPhone: "(41) 99916-3917",
    whatsappMessage: "Olá Michelle Forbeck, vi o site da Ellegance Móveis e gostaria de solicitar um orçamento personalizado para o meu ambiente.",
  },
];
export const SHOWROOM_ADDRESS = "Av. Marechal Mascarenhas de Morais, 992 - Santa Cândida · Curitiba — PR";
export const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Av.+Marechal+Mascarenhas+de+Morais,+992,+Santa+C%C3%A2ndida,+Curitiba+-+PR";
export const LOGO_URL = logoImg;
export const LOGO_WHITE_URL = logoImg;

export const PRODUCTS: Product[] = [
  {
    id: "sofas-conjuntos",
    title: "Sofás & conjuntos",
    description: "Composições acolhedoras para varandas, jardins e áreas gourmet.",
    category: "Living",
    image: prod0Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Sofás e conjuntos.",
  },
  {
    id: "mesas-cadeiras",
    title: "Mesas & cadeiras",
    description: "Encontros à mesa com conforto, leveza e acabamento sofisticado.",
    category: "Jantar",
    image: prod1Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Mesas e cadeiras.",
  },
  {
    id: "poltronas",
    title: "Poltronas artesanais",
    description: "Peças marcantes que combinam ergonomia, personalidade e tramas exclusivas.",
    category: "Living",
    image: prod2Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Poltronas artesanais.",
  },
  {
    id: "balancos",
    title: "Balanços suspensos",
    description: "Um convite para desacelerar em espaços internos ou externos.",
    category: "Lazer",
    image: prod3Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Balanços suspensos.",
  },
  {
    id: "banquetas",
    title: "Banquetas gourmet",
    description: "Design contemporâneo para bancadas, cozinhas e espaços gourmet.",
    category: "Gourmet",
    image: prod4Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Banquetas gourmet.",
  },
  {
    id: "espreguicadeiras-daybeds",
    title: "Espreguiçadeiras & daybeds",
    description: "Conforto amplo para viver seus melhores momentos ao ar livre.",
    category: "Lazer",
    image: prod5Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Espreguiçadeiras e daybeds.",
  },
  {
    id: "living-terracotta",
    title: "Conjuntos para varanda",
    description: "Tons terrosos e acolhedores em corda náutica para espaços com personalidade.",
    category: "Living",
    image: prod6Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Conjuntos para varanda.",
  },
  {
    id: "mesas-vidro",
    title: "Mesas de vidro & corda",
    description: "Combinações leves de tampos transparentes com estrutura trançada.",
    category: "Jantar",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-glass.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Mesas de vidro & corda.",
  },
  {
    id: "cadeiras-oliva",
    title: "Cadeiras de jantar",
    description: "Design autoral e ergonômico para compor salas de jantar e varandas.",
    category: "Jantar",
    image: prod8Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Cadeiras de jantar.",
  },
  {
    id: "conjunto-gourmet-black",
    title: "Conjuntos para área gourmet",
    description: "Peças em tom grafite e preto para ambientes modernos e integrados.",
    category: "Gourmet",
    image: prod9Img,
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Conjuntos para área gourmet.",
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "galeria-1",
    title: "Living externo em tons naturais",
    category: "Living",
    image: gal0Img,
  },
  {
    id: "galeria-2",
    title: "Preto e madeira em harmonia",
    category: "Jantar",
    image: gal1Img,
  },
  {
    id: "galeria-3",
    title: "Aconchego em terracota",
    category: "Living",
    image: gal2Img,
  },
  {
    id: "galeria-4",
    title: "Sala de jantar com desenho autoral",
    category: "Jantar",
    image: gal3Img,
  },
  {
    id: "galeria-5",
    title: "Verde profundo e fibras naturais",
    category: "Living",
    image: gal4Img,
  },
  {
    id: "galeria-6",
    title: "Leveza para receber",
    category: "Jantar",
    image: gal5Img,
  },
  {
    id: "galeria-7",
    title: "Área gourmet contemporânea",
    category: "Gourmet",
    image: gal6Img,
  },
  {
    id: "galeria-8",
    title: "Daybed para desacelerar",
    category: "Lazer",
    image: gal7Img,
  },
  {
    id: "galeria-9",
    title: "Balanço para momentos de pausa",
    category: "Lazer",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/hanging-chair.webp",
  },
  {
    id: "galeria-10",
    title: "Living artesanal em verde oliva",
    category: "Living",
    image: gal9Img,
  },
  {
    id: "galeria-11",
    title: "Poltronas clássicas renovadas",
    category: "Living",
    image: gal10Img,
  },
  {
    id: "galeria-12",
    title: "Trama e cor sob medida",
    category: "Jantar",
    image: gal11Img,
  },
];

export const ROPE_COLORS: RopeColor[] = [
  {
    id: "bege-natural",
    name: "Bege Natural",
    hex: "#d6bc93",
    description: "Sensação orgânica e acolhedora, perfeita para integrações com paisagismo e ambientes com tons amadeirados.",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/armchairs-natural.webp",
  },
  {
    id: "verde-oliva",
    name: "Verde Oliva",
    hex: "#6b7250",
    description: "Sofisticação natural que se funde com áreas externas e jardins, transmitindo serenidade e elegância.",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-green.webp",
  },
  {
    id: "azul-marinho",
    name: "Azul Marinho",
    hex: "#173e5e",
    description: "Inspirado no universo náutico tradicional, traz nobreza e contraste marcante para varandas e piscinas.",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-natural.webp",
  },
  {
    id: "cinza-grafite",
    name: "Cinza Grafite",
    hex: "#4b5152",
    description: "Toque urbano e contemporâneo, combina admiravelmente com concreto, vidro e arquitetura moderna.",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-black.webp",
  },
  {
    id: "terracotta",
    name: "Terracota",
    hex: "#a76148",
    description: "Calor e personalidade em uma tonalidade terrosa sofisticada que destaca o trançado artesanal.",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-terracotta.webp",
  },
  {
    id: "turquesa",
    name: "Turquesa",
    hex: "#048e92",
    description: "Vibração refrescante ideal para espaços de praia, piscinas e ambientes descontraídos de verão.",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/hanging-chair.webp",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Os móveis podem ficar em áreas externas?",
    answer: "Sim! A corda náutica e as estruturas de alumínio com pintura eletrostática são especialmente desenvolvidas para resistir ao sol, chuva e umidade. No atendimento, orientamos sobre as melhores composições e tecidos adequados para cada grau de exposição ao clima.",
  },
  {
    id: "faq-2",
    question: "Posso escolher a cor da corda e do tecido?",
    answer: "Com certeza. Oferecemos uma paleta diversificada de cores de cordas náuticas e tecidos impermeáveis de alta performance. Apresentamos todas as amostras durante a fase de orçamento para alinhar perfeitamente com o seu projeto.",
  },
  {
    id: "faq-3",
    question: "Vocês entregam fora de Curitiba?",
    answer: "Sim, atendemos e entregamos em todo o Brasil sob consulta de frete especializado. Basta nos informar sua cidade pelo WhatsApp para calcularmos as condições de entrega com segurança.",
  },
  {
    id: "faq-4",
    question: "Como solicitar um orçamento personalizado?",
    answer: "Basta clicar nos botões de WhatsApp do site. Você falará diretamente com nossa equipe (Rafael ou Michelle), podendo enviar as medidas do espaço ou fotos do seu ambiente para sugestão das peças ideais.",
  },
];
