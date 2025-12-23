export type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number; // 1-5
  cover: string;
  category: string;
  level: "básico" | "intermedio" | "avanzado";
  // Texto de precio opcional para mostrar (por ejemplo, "$40 USD")
  priceDisplay?: string;
  // URL del video de Google Drive (embed)
  videoUrl?: string;
  // Temario estructurado opcional
  syllabus?: {
    title: string;
    items?: string[];
  }[];
};

export const courses: Course[] = [
  {
    id: "intro-arquitectura",
    title: "Diplomado en Gestión y Desarrollo de Vivienda",
    description: "Curso de Vivienda Modular y Gestión de Clientes. Dirigido a Arquitectos, Diseñadores, Ingenieros y Principiantes.",
    price: 80,
    rating: 5,
    cover: "/Desarrollodevivienda.jpg",
    category: "arquitectura",
    level: "básico",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    syllabus: [
      {
        title: "SESIÓN 1: INTRODUCCIÓN Y PREDIMENSIONAMIENTO A ESTRUCTURAS",
        items: [
          "Geotecnia del predio, comprensión y análisis",
          "Predimensionamiento de estructura",
          "¿Que es la modulación?",
          "Alojamientos, refugios y viviendas",
        ],
      },
      {
        title: "SESIÓN 2: MODULACIÓN Y DISEÑO DE LA VIVIENDA MODULAR",
        items: [
          "Comercio y mercado, ¿Cómo lo abordo y vendo?",
          "Proceso de diseño sobre ejemplos reales de Vivienda Modular en área corta y área extensa.",
          "Organigrama de áreas y proyección a crecimiento a futuro del proyecto como táctica comercial",
        ],
      },
      {
        title: "SESIÓN 3: ESTRATEGIAS COMERCIALES Y VENTA MEDIANTE REDES SOCIALES",
        items: [
          "Análisis de mercado general y nichos de clientes vigentes en la actualidad",
          "Publicaciones en Instagram y TikTok estructuradas sobre Vivienda Modular",
          "Gestión de clientes mediante publicaciones e interacción sobre historias embudo",
          "Función de las Redes Sociales en el mercado de Vivienda Modular",
        ],
      },
      {
        title: "SESIÓN 4: CREACIÓN ESTRATÉGICA DE PIEZAS PUBLICITARIAS, PAUTA BAJO IA",
        items: [
          "Canva cómo herramienta fundamental, entendimiento y diagramación",
          "Creación de videos, duración, estructura y tipo de contenido",
          "Creación y diagramación de piezas PNG y JPEG para pautas efectivas sobre Vivienda Modular",
        ],
      },
      {
        title: "SESIÓN 5: META ADS, SISTEMAS DE PAUTAS BAJO INTELIGENCIA ARTIFICIAL",
        items: [
          "Funcionamiento y creación de pautas desde Meta Ads y botón de Promocionar Publicación en Instagram",
          "Conclusiones y repaso de conceptos generales para entrar a mercado",
        ],
      },
    ],
  },
  {
    id: "modelado-bim",
    title: "Diplomado en Gerencia de Proyectos, Costos y Honorarios",
    description: "Flujo de trabajo, coordinación y documentación.",
    price: 80,
    rating: 5,
    cover: "/Gerenciadeproyectos.jpg",
    category: "tecnología",
    level: "intermedio",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "interiorismo-funcional",
    title: "Vendiendo Arquitectura de 0 a 100",
    description: "Estrategias comerciales para vender arquitectura de manera efectiva.",
    price: 25,
    rating: 4,
    cover: "/libro-uva.jpg",
    category: "gestión",
    level: "intermedio",
    priceDisplay: "$25 USD",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "urbanismo-sostenible",
    title: "Diplomado en D5 Render",
    description: "Planificación y estrategias para ciudades resilientes.",
    price: 80,
    rating: 5,
    cover: "/D5size.jpg",
    category: "urbanismo",
    level: "avanzado",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "render-fotorealista",
    title: "Diplomado en Redes Sociales y Contenido Efectivo",
    description: "Luz, materiales y composición visual.",
    price: 80,
    rating: 4,
    cover: "/RedesSociales.jpg",
    category: "visualización",
    level: "intermedio",
    priceDisplay: "$80 USD",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
