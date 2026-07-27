import { Product, GalleryItem, RopeColor, FaqItem } from '../types';
import logoImg from '../assets/images/regenerated_image_1785002193276.png';

export const PHONE_NUMBER = "5541997682816";
export const DISPLAY_PHONE = "(41) 99768-2816";

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
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-natural.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Sofás e conjuntos.",
  },
  {
    id: "mesas-cadeiras",
    title: "Mesas & cadeiras",
    description: "Encontros à mesa com conforto, leveza e acabamento sofisticado.",
    category: "Jantar",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-round.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Mesas e cadeiras.",
  },
  {
    id: "poltronas",
    title: "Poltronas artesanais",
    description: "Peças marcantes que combinam ergonomia, personalidade e tramas exclusivas.",
    category: "Living",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-green.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Poltronas artesanais.",
  },
  {
    id: "balancos",
    title: "Balanços suspensos",
    description: "Um convite para desacelerar em espaços internos ou externos.",
    category: "Lazer",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/hanging-chair.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Balanços suspensos.",
  },
  {
    id: "banquetas",
    title: "Banquetas gourmet",
    description: "Design contemporâneo para bancadas, cozinhas e espaços gourmet.",
    category: "Gourmet",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/gourmet-black.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Banquetas gourmet.",
  },
  {
    id: "espreguicadeiras-daybeds",
    title: "Espreguiçadeiras & daybeds",
    description: "Conforto amplo para viver seus melhores momentos ao ar livre.",
    category: "Lazer",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/daybed.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Espreguiçadeiras e daybeds.",
  },
  {
    id: "living-terracotta",
    title: "Conjuntos para varanda",
    description: "Tons terrosos e acolhedores em corda náutica para espaços com personalidade.",
    category: "Living",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-terracotta.webp",
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
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/chair-olive.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Cadeiras de jantar.",
  },
  {
    id: "conjunto-gourmet-black",
    title: "Conjuntos para área gourmet",
    description: "Peças em tom grafite e preto para ambientes modernos e integrados.",
    category: "Gourmet",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-black.webp",
    whatsappMessage: "Olá, vim pelo site e gostaria de conhecer as opções de Conjuntos para área gourmet.",
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "galeria-1",
    title: "Living externo em tons naturais",
    category: "Living",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-natural.webp",
  },
  {
    id: "galeria-2",
    title: "Preto e madeira em harmonia",
    category: "Jantar",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-black.webp",
  },
  {
    id: "galeria-3",
    title: "Aconchego em terracota",
    category: "Living",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-terracotta.webp",
  },
  {
    id: "galeria-4",
    title: "Sala de jantar com desenho autoral",
    category: "Jantar",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-round.webp",
  },
  {
    id: "galeria-5",
    title: "Verde profundo e fibras naturais",
    category: "Living",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-green.webp",
  },
  {
    id: "galeria-6",
    title: "Leveza para receber",
    category: "Jantar",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/dining-glass.webp",
  },
  {
    id: "galeria-7",
    title: "Área gourmet contemporânea",
    category: "Gourmet",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/gourmet-black.webp",
  },
  {
    id: "galeria-8",
    title: "Daybed para desacelerar",
    category: "Lazer",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/daybed.webp",
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
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/living-olive.webp",
  },
  {
    id: "galeria-11",
    title: "Poltronas clássicas renovadas",
    category: "Living",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/armchairs-natural.webp",
  },
  {
    id: "galeria-12",
    title: "Trama e cor sob medida",
    category: "Jantar",
    image: "https://ellegance-moveis.daring-fairy-0251.chatgpt.site/client-real/chair-olive.webp",
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
