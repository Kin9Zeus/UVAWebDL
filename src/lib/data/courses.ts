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
    videoUrl?: string;
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
    videoUrl: undefined, // Videos moved to syllabus sessions
    syllabus: [
      {
        title: "SESIÓN 1: INTRODUCCIÓN Y PREDIMENSIONAMIENTO A ESTRUCTURAS",
        videoUrl: "https://drive.google.com/file/d/175zlqhWCxYNwsXAq_92M8LYUsUVRMhLA/preview",
        items: [
          "Geotecnia del predio, comprensión y análisis",
          "Predimensionamiento de estructura",
          "¿Que es la modulación?",
          "Alojamientos, refugios y viviendas",
        ],
      },
      {
        title: "SESIÓN 2: MODULACIÓN Y DISEÑO DE LA VIVIENDA MODULAR",
        videoUrl: "https://drive.google.com/file/d/1zA2ckB1CGfTR6C0USfseiwCoSx6W_8El/preview",
        items: [
          "Comercio y mercado, ¿Cómo lo abordo y vendo?",
          "Proceso de diseño sobre ejemplos reales de Vivienda Modular en área corta y área extensa.",
          "Organigrama de áreas y proyección a crecimiento a futuro del proyecto como táctica comercial",
        ],
      },
      {
        title: "SESIÓN 3: ESTRATEGIAS COMERCIALES Y VENTA MEDIANTE REDES SOCIALES",
        videoUrl: "https://drive.google.com/file/d/124KTIwXKzVqlf2XpxcbPeT3Zu6ykKobD/preview",
        items: [
          "Análisis de mercado general y nichos de clientes vigentes en la actualidad",
          "Publicaciones en Instagram y TikTok estructuradas sobre Vivienda Modular",
          "Gestión de clientes mediante publicaciones e interacción sobre historias embudo",
          "Función de las Redes Sociales en el mercado de Vivienda Modular",
        ],
      },
      {
        title: "SESIÓN 4: CREACIÓN ESTRATÉGICA DE PIEZAS PUBLICITARIAS, PAUTA BAJO IA",
        videoUrl: "https://drive.google.com/file/d/1Z2yUY958Mxy7MJIZXrzQr80Pu_7a23D7/preview",
        items: [
          "Canva cómo herramienta fundamental, entendimiento y diagramación",
          "Creación de videos, duración, estructura y tipo de contenido",
          "Creación y diagramación de piezas PNG y JPEG para pautas efectivas sobre Vivienda Modular",
        ],
      },
      {
        title: "SESIÓN 5: META ADS, SISTEMAS DE PAUTAS BAJO INTELIGENCIA ARTIFICIAL",
        videoUrl: "https://drive.google.com/file/d/10N6NgJ6JrURI2lol9Jtn0jd1-lLvRO4S/preview",
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
    description: "Diplomado en Gerencia de Proyectos, Costos, Presupuestos y Honorarios en Arquitectura, Diseño y Construcción. Incluye plantillas editables, contratos y certificación.",
    price: 80,
    rating: 5,
    cover: "/Gerenciadeproyectos.jpg",
    category: "tecnología",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "CLASE 1: Introducción a la Gerencia de Proyectos",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente: Reemplazar por link real
        items: [
          "Fases del proyecto: desde conceptualización hasta entrega",
          "Rol del arquitecto y diseñador como gestor de proyectos",
          "Actividad práctica: análisis de un caso real",
          "📥 Entrega: Plantilla de cronograma y formato de control de avance"
        ]
      },
      {
        title: "CLASE 2: Planificación Estratégica del Proyecto",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Definición de objetivos, alcance y actores clave",
          "Elaboración de cronogramas con herramientas digitales",
          "Costos Ocultos y Rutas Críticas de Proyecto",
          "📥 Entrega: Plantilla editable de planificación y matriz de stakeholders"
        ]
      },
      {
        title: "CLASE 3: Costos Directos e Indirectos en Proyectos",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Tipos de costos: materiales, mano de obra, equipos, indirectos",
          "Métodos para estimación por metro cuadrado vs. detallado",
          "📥 Entrega: Tabla base de costos para proyectos arquitectónicos y de obra"
        ]
      },
      {
        title: "CLASE 4: Presupuestación Detallada y Control de Costos",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Análisis de precios unitarios (APU)",
          "Seguimiento del presupuesto durante la ejecución",
          "📥 Entrega: Hoja de presupuesto editable con fórmulas automatizadas"
        ]
      },
      {
        title: "CLASE 5: Honorarios Profesionales en Diseño y Arquitectura",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Métodos de cálculo de honorarios: porcentajes, por m², por etapas",
          "Consideraciones según tipo y escala del proyecto",
          "Presentación de propuestas económicas profesionales",
          "📥 Entrega: Plantilla de cotización + contrato base para servicios de diseño"
        ]
      },
      {
        title: "CLASE 6: Contratación y Tipos de Contrato",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Contratos por A.I.U (Administración, Imprevistos y Utilidades)",
          "Contrato por Administración delegada",
          "Contrato a Todo Costo (Llave en Mano)"
        ]
      },
      {
        title: "CLASE 7: Ejecución y Seguimiento del Proyecto",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Seguimiento físico y financiero del proyecto",
          "Informes de avance y control de desviaciones",
          "📥 Entrega: Formato editable de informe de obra y tabla de indicadores"
        ]
      },
      {
        title: "CLASE 8: Cierre del Proyecto y Lecciones Aprendidas",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Checklist de cierre, entrega de obra y documentación final",
          "Análisis financiero final y lecciones aprendidas",
          "Presentación final del proyecto",
          "📥 Entrega: Plantilla de cierre de proyecto"
        ]
      }
    ]
  },
  {
    id: "interiorismo-funcional",
    title: "Vendiendo Arquitectura de 0 a 100",
    description: "Estrategias comerciales para vender arquitectura de manera efectiva. Libro digital descargable.",
    price: 25,
    rating: 4,
    cover: "/libro-uva.jpg",
    category: "gestión",
    level: "básico",
    videoUrl: undefined,
    syllabus: [
       {
         title: "CONTENIDO DEL LIBRO DIGITAL",
         items: [
           "Despertando de las creencias",
           "Apertura de oficina ¿que conlleva crear una marca?",
           "La intuición",
           "¿Cómo ingresar y establecerse en un mercado agresivo?",
           "¿Cómo debe cotizarse un diseño arquitectónico?",
           "Entrega ideal en sistema BIM",
           "Estrategias de Mercado para arquitectos y constructores",
           "Funcionamiento de las falsas creencias",
           "La marca en la arquitectura",
           "Riesgo positivo en la arquitectura",
           "Conclusiones finales"
         ],
         videoUrl: "https://docs.google.com/document/d/TU_LINK_DEL_LIBRO_AQUI/export?format=pdf" // Reemplazar con link real
       }
     ]
   },
  {
    id: "urbanismo-sostenible",
    title: "Diplomado en D5 Render",
    description: "Curso intensivo de renderizado arquitectónico. Domina la iluminación, materiales PBR, integración con IA y postproducción.",
    price: 80,
    rating: 5,
    cover: "/D5size.jpg",
    category: "urbanismo",
    level: "avanzado",
    videoUrl: undefined,
    syllabus: [
      {
        title: "MÓDULO 1: Empezando con D5 Render",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Instalación e interfaz de usuario",
          "Conceptos de ArchViz y composición fotográfica",
          "Iluminación básica, UVS y LOD (Level of Detail)",
          "Flujo de trabajo optimizado"
        ]
      },
      {
        title: "MÓDULO 2: Fundamentos Técnicos",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Materiales PBR: creación y edición avanzada",
          "Luces IES y HDRI para realismo",
          "Configuración de cámaras y LUTs",
          "Gestión de biblioteca y assets"
        ]
      },
      {
        title: "MÓDULO 3: Renderizado de Interiores",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Iluminación ambiental y artificial",
          "Efectos climáticos y ambientación",
          "Uso de Decals para detalles realistas",
          "Vidrios, espejos y corrección de color"
        ]
      },
      {
        title: "MÓDULO 4: Renderizado de Exteriores",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Entorno natural y vegetación",
          "Configuración de clima y efectos atmosféricos",
          "Agua, caústicas y materiales complejos",
          "Renders nocturnos y efectos avanzados"
        ]
      },
      {
        title: "MÓDULO 5: Inteligencia Artificial en D5",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Mapas de profundidad y blur",
          "Rescalado y enhancers (D5 + Krea)",
          "Integración con Yanus y Stable Diffusion",
          "Renders 360° y postproducción",
          "🎁 Recursos exclusivos: escenas, materiales, HDRIs y luces IES"
        ]
      }
    ]
  },
  {
    id: "render-fotorealista",
    title: "Diplomado en Redes Sociales y Contenido Efectivo",
    description: "Aprende a crear contenido estratégico, dominar el algoritmo y vender servicios de arquitectura con Instagram y Meta Ads.",
    price: 80,
    rating: 4,
    cover: "/RedesSociales.jpg",
    category: "visualización",
    level: "intermedio",
    priceDisplay: "$80 USD",
    videoUrl: undefined,
    syllabus: [
      {
        title: "SESIÓN 1: Creación de Contenido (Arquitectura → Historia → Video)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Cómo contar un proyecto: cliente → problema → solución → resultado",
          "Tipos de contenido: Educativo | Inspiracional | Técnico | Riesgos reales",
          "Hooks: 5–7s para retención",
          "Canva: carruseles, fichas técnicas y portafolios",
          "💡 Práctica: Script de Reel + matriz de 30 contenidos"
        ]
      },
      {
        title: "SESIÓN 2: Producción y Edición Pro (Reels Arquitectónicos)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Recorrido visual: vestíbulo → eje → remate → detalle",
          "Sonido + voz + ritmo",
          "CapCut: secuencias 7–9 escenas, subtítulos, plantillas, before/after",
          "Canva: portadas, miniaturas y CTA visual",
          "💡 Práctica: 1 Reel grabado y editado en clase"
        ]
      },
      {
        title: "SESIÓN 3: Clientes y Modelo Comercial (DM → Asesoría → Contrato)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Embudos: Historia → Mensaje → Llamada → Contrato",
          "Productos puente: consultoría, pre-diseño, análisis de vivienda",
          "Plantillas de DM que cierran ventas",
          "Canva: cotización premium + portafolio 1 página",
          "💡 Práctica: Embudo UVA personalizado"
        ]
      },
      {
        title: "SESIÓN 4: Algoritmo + Sistema de Pauta Meta Ads",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Instagram mide: retención + interacción + guardados + compartidos",
          "Sistema UVA 3/30: Publica 3 piezas, Espera 30h, La más fuerte → pauta",
          "Pauta Meta Ads: Viralización, Comercial (mensajes) y Marca profesional",
        ]
      },
      {
        title: "SESIÓN 5: Sistema UVA 30–60–90 + Escalamiento",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pendiente
        items: [
          "Calendario editorial 90 días",
          "Operación por roles: Crear → Publicar → Analizar → Optimizar",
          "Lenguaje para cerrar negocios",
          "Aumento de 59 seguidores Diarios, metodología UVA"
        ]
      }
    ]
  },
];
