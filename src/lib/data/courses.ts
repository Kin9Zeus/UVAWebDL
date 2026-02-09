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
  // Enlace directo de pago (e.g. Hotmart)
  hotmartLink?: string;
};

export const courses: Course[] = [
  {
    id: "diplomado-gerencia-proyectos",
    title: "Diplomado en Gerencia de Proyectos, Costos y Presupuestos",
    description: "Domina la gestión integral de obras: planificación, costos, contratación y cierre financiero.",
    price: 150,
    hotmartLink: "https://wa.link/i7yx5y",
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
    id: "abriendo-oficina-arquitectura",
    title: "Abriendo tu oficina de Arquitectura en 10 días",
    description: "Mentoría grupal diseñada para arquitectos que quieren abrir su estudio de forma estructurada, acompañada y con visión empresarial.",
    price: 150,
    hotmartLink: "https://wa.link/ba1roh",
    rating: 5,
    cover: "/Humanizar/abriendo_oficina.jpeg",
    category: "gestión",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "MÓDULO 1: Mentalidad y visión de estudio",
        items: [
          "Transición de arquitecto ejecutor a arquitecto empresario",
          "Definición clara del tipo de estudio que quieres construir",
          "Eliminación de bloqueos comunes (miedo, desorden, improvisación)"
        ]
      },
      {
        title: "MÓDULO 2: Definición de tu modelo de estudio",
        items: [
          "Servicios que vas a ofrecer",
          "Cliente ideal y enfoque de mercado",
          "Diferenciación estratégica (más allá de lo estético)"
        ]
      },
      {
        title: "MÓDULO 3: Marca, identidad y posicionamiento",
        items: [
          "Creación y análisis de marca según tu identidad personal y profesional",
          "Coherencia entre quién eres, cómo te muestras y lo que comunicas",
          "Construcción de una marca auténtica y alineada con tu estudio",
          "Narrativa y discurso de marca aplicados a arquitectura"
        ]
      },
      {
        title: "MÓDULO 4: Estructura legal y operativa básica",
        items: [
          "Requisitos esenciales para operar formalmente sin sobrecomplicarte",
          "Procesos mínimos para trabajar ordenado desde el inicio",
          "Organización básica de proyectos y clientes"
        ]
      },
      {
        title: "MÓDULO 5: Portafolio estratégico",
        items: [
          "Qué mostrar y qué no mostrar",
          "Cómo presentar proyectos aunque no tengas grandes obras",
          "El portafolio como herramienta comercial"
        ]
      },
      {
        title: "MÓDULO 6: Estrategia comercial para arquitectos",
        items: [
          "Cómo atraer clientes sin depender solo de referidos",
          "Canales que sí funcionan en arquitectura",
          "Sistema simple y realista de ventas"
        ]
      },
      {
        title: "MÓDULO 7: Propuesta de valor y estructura de precios",
        items: [
          "Definición clara de servicios y entregables",
          "Bases para cobrar con seguridad y coherencia",
          "Evitar la subvaloración del trabajo profesional"
        ]
      },
      {
        title: "MÓDULO 8: Redes sociales con intención de negocio",
        items: [
          "Contenido adecuado según tu etapa",
          "Uso de redes para atraer clientes reales",
          "Rutina sostenible alineada con tu marca"
        ]
      },
      {
        title: "MÓDULO 9: Plan de acción personalizado",
        items: [
          "Pasos concretos según tu contexto actual",
          "Priorización estratégica de acciones"
        ]
      },
      {
        title: "MÓDULO 10: Cierre y proyección del estudio",
        items: [
          "Revisión final del proceso",
          "Ajustes estratégicos",
          "Proyección y siguientes pasos para tu estudio"
        ]
      }
    ]
  },
  {
    id: "asesoria-personalizada",
    title: "Asesoría 1 a 1 personalizada para tu empresa",
    description: "Acompañamiento estratégico para proyectos y empresas de arquitectura, diseño y construcción. Enfocado en presupuesto, estructura arquitectónica y control económico.",
    price: 80,
    priceDisplay: "Desde $80 USD",
    hotmartLink: "https://wa.link/r7u7qs",
    rating: 5,
    cover: "/Humanizar/asesoria_1a1.jpeg",
    category: "gestión",
    level: "avanzado",
    videoUrl: undefined,
    syllabus: [
      {
        title: "PAQUETE 1 — SESIÓN ESTRATÉGICA (1 Hora - $80 USD)",
        items: [
          "Revisión rápida de tu proyecto o empresa",
          "Diagnóstico presupuestal y económico",
          "Análisis de viabilidad arquitectónica",
          "Recomendaciones claras y accionables",
          "Sesión 100% personalizada (1 a 1)"
        ]
      },
      {
        title: "PAQUETE 2 — ACOMPAÑAMIENTO PROFESIONAL (5 Horas - $380 USD)",
        items: [
          "Análisis profundo de presupuestos y costos",
          "Optimización de diseño y decisiones arquitectónicas",
          "Estrategia de control financiero del proyecto",
          "Ajustes en honorarios, márgenes y estructura de cobro",
          "Acompañamiento personalizado paso a paso"
        ]
      },
      {
        title: "PAQUETE 3 — MENTORÍA ESTRATÉGICA UVA (10 Horas - $760 USD)",
        items: [
          "Diagnóstico completo de tu empresa o proyecto",
          "Estructuración total de presupuestos y flujo de caja",
          "Estrategia arquitectónica alineada con rentabilidad",
          "Corrección de errores que generan pérdidas",
          "Acompañamiento estratégico continuo",
          "Visión clara para escalar y tomar decisiones con seguridad"
        ]
      }
    ]
  },
  // Removed duplicate course modelado-bim
  {
    id: "libro-vendiendo-arquitectura",
    title: "VENDIENDO ARQUITECTURA DE 0 A 100",
    description: "De arquitecto técnico a profesional rentable. Estrategias y métodos para vender y realizar mejor tus proyectos. Libro digital de 115 páginas.",
    price: 40,
    hotmartLink: "https://wa.link/jm6flq",
    rating: 5,
    cover: "/Humanizar/Vendiendo_Arquitectura_de_0_a_100.PNG",
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
        ]
      }
    ]
  },
  {
    id: "libro-del-cad-al-feed",
    title: "DEL CAD AL FEED",
    description: "Guía digital práctica que te enseña cómo pasar del diseño al contenido y del contenido a las ventas.",
    price: 40,
    hotmartLink: "https://wa.link/21my6s",
    rating: 5,
    cover: "/Humanizar/del_cad_al_feed.png",
    category: "gestión",
    level: "básico",
    videoUrl: undefined,
    accessDuration: "Acceso de por vida",
    syllabus: [
      {
        title: "CONTENIDO DE LA GUÍA",
        items: [
          "Cómo usar Instagram de forma profesional",
          "Qué tipo de Reels generan alcance",
          "Cuándo publicar y por qué",
          "Hooks para captar atención en segundos",
          "Contenido viral sin perder autoridad",
          "Pautas pagas con Meta Ads",
          "Canva aplicado a redes",
          "Inteligencia artificial para crear y crecer",
          "Cómo monetizar tus redes de forma real"
        ]
      }
    ]
  },
  {
    id: "diplomado-d5-render",
    title: "Diplomado en D5 Render",
    description: "Curso intensivo de renderizado arquitectónico. Domina la iluminación, materiales PBR, integración con IA y postproducción.",
    price: 150,
    hotmartLink: "https://wa.link/g5i2ju",
    rating: 5,
    cover: "/D5size.jpg",
    category: "urbanismo",
    level: "avanzado",
    videoUrl: undefined,
    syllabus: [
      {
        title: "MÓDULO 1: Empezando",
        items: [
          "Instalación e interfaz de usuario",
          "Conceptos de ArchViz y composición fotográfica",
          "Iluminación básica, UVS y LOD (Level of Detail)",
          "Flujo de trabajo optimizado"
        ]
      },
      {
        title: "MÓDULO 2: Fundamentos Técnicos",
        items: [
          "Materiales PBR: creación y edición avanzada",
          "Luces IES y HDRI para realismo",
          "Configuración de cámaras y LUTs",
          "Gestión de biblioteca y assets"
        ]
      },
      {
        title: "MÓDULO 3: Renderizado de Interiores",
        items: [
          "Iluminación ambiental y artificial",
          "Efectos climáticos y ambientación",
          "Uso de Decals para detalles realistas",
          "Vidrios, espejos y corrección de color"
        ]
      },
      {
        title: "MÓDULO 4: Renderizado de Exteriores",
        items: [
          "Entorno natural y vegetación",
          "Configuración de clima y efectos atmosféricos",
          "Agua, caústicas y materiales complejos",
          "Renders nocturnos y efectos avanzados"
        ]
      },
      {
        title: "MÓDULO 5: Inteligencia Artificial en D5",
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
    id: "diplomado-redes-ia",
    title: "Diplomado en Redes Sociales, Creación de Contenido e Inteligencia Artificial",
    description: "Gana clientes, crece en seguidores y viraliza tu empresa. Aprende a crear contenido estratégico, dominar el algoritmo y vender servicios de arquitectura.",
    price: 150,
    hotmartLink: "https://wa.link/iafcnd",
    rating: 5,
    cover: "/RedesSociales.jpg",
    category: "visualización",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "SESIÓN 1: Introducción y Diagnóstico de cuentas",
        items: [
          "Análisis de tus cuentas",
          "Fórmula simple: problema → solución → resultado",
          "Tipos de contenido que vende",
          "Hooks de alto impacto para retención",
          "Canva: carruseles, fichas técnicas y portafolio visual"
        ]
      },
      {
        title: "SESIÓN 2: Creación de Contenido, Storytelling y Contenido Viral",
        items: [
          "Cómo grabar contenido viral",
          "2026 contenido natural va a viralizar",
          "Audio, voz y música que elevan el contenido",
          "CapCut: edición rápida, subtítulos, before/after",
          "Canva: portadas y llamados a la acción"
        ]
      },
      {
        title: "SESIÓN 3: Clientes, venta efectiva y estructura de mensajes",
        items: [
          "Embudo claro: contenido → mensaje → llamada → contrato",
          "Qué decir (y qué no) en mensajes directos",
          "Productos puente: Asesorías, Pre-diseños, Análisis de vivienda",
          "Plantillas de DM que convierten",
          "Canva: cotización premium + portafolio de una página"
        ]
      },
      {
        title: "SESIÓN 4: Pautas e Inteligencia Artificial",
        items: [
          "Cómo funciona el algoritmo hoy (sin mitos)",
          "Qué tipo de contenido impulsar con pauta",
          "Estructura básica de anuncios para arquitectos",
          "Errores comunes que queman presupuesto",
          "Sistema simple para amplificar resultados"
        ]
      },
      {
        title: "SESIÓN 5: Consolidación de marca y plan de contenido anual",
        items: [
          "Cómo verte profesional y confiable en redes",
          "Perfil optimizado que genera contactos",
          "Organización de contenido semanal",
          "Automatización básica para ahorrar tiempo",
          "Ruta clara para escalar tu marca y tus ingresos"
        ]
      }
    ]
  }
];
