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
  // Duración del acceso (ej. "Acceso de por vida", "6 meses")
  accessDuration?: string;
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
    title: "Diplomado en Gerencia de Proyectos, Costos y Presupuestos",
    description: "Domina la gestión integral de obras: planificación, costos, contratación y cierre financiero.",
    price: 150,
    rating: 5,
    cover: "/Gerenciadeproyectos.jpg",
    category: "gestión",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "SESIÓN 1: Introducción a la Gerencia de Proyectos",
        items: [
          "Introducción al diplomado",
          "Entrega de plantillas y documentos base",
          "Fases del proyecto: de la conceptualización a la entrega",
          "Rol del arquitecto y diseñador como gestor de proyectos"
        ]
      },
      {
        title: "SESIÓN 2: Planificación Estratégica del Proyecto",
        items: [
          "Definición de objetivos y alcance",
          "Actores clave del proyecto (stakeholders)",
          "Tabulaciones, presupuesto y programación de obra",
          "Costos ocultos y rutas críticas",
          "Elaboración de cronogramas con herramientas digitales"
        ]
      },
      {
        title: "SESIÓN 3: Costos Directos e Indirectos",
        items: [
          "Tipos de costos: Materiales, Mano de obra, Equipos, Indirectos",
          "Métodos de estimación: Por metro cuadrado, Presupuesto detallado"
        ]
      },
      {
        title: "SESIÓN 4: Presupuestación Detallada y Control de Costos",
        items: [
          "Análisis de Precios Unitarios (APU)",
          "Control y seguimiento del presupuesto en obra",
          "Gestión de desviaciones"
        ]
      },
      {
        title: "SESIÓN 5: Honorarios Profesionales en Arquitectura y Diseño",
        items: [
          "Métodos de cálculo de honorarios: Porcentaje, Por m², Por etapas",
          "Ajustes según tipo y escala del proyecto",
          "Cómo presentar propuestas económicas profesionales"
        ]
      },
      {
        title: "SESIÓN 6: Contratación y Tipos de Contrato",
        items: [
          "Contrato por A.I.U",
          "Administración delegada (Honorarios sobre costos directos)",
          "Contrato Todo Costo / Llave en Mano",
          "Riesgos y responsabilidades en cada modalidad"
        ]
      },
      {
        title: "SESIÓN 7: Ejecución y Seguimiento del Proyecto",
        items: [
          "Seguimiento físico y financiero",
          "Control de avances y desviaciones",
          "Indicadores clave de gestión"
        ]
      },
      {
        title: "SESIÓN 8: Cierre del Proyecto y Lecciones Aprendidas",
        items: [
          "Checklist de cierre y entrega de obra",
          "Documentación final del proyecto",
          "Análisis financiero final",
          "Lecciones aprendidas"
        ]
      }
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
    accessDuration: "Acceso de por vida",
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
