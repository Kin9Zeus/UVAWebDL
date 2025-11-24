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
};

export const courses: Course[] = [
  {
    id: "intro-arquitectura",
    title: "Diplomado en Gestión y Desarrollo de Vivienda",
    description: "Fundamentos, enfoque conceptual y ejemplos modernos.",
    price: 80,
    rating: 5,
    cover: "/Desarrollodevivienda.jpg",
    category: "arquitectura",
    level: "básico",
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
  },
];
