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
  // Enlace personalizado (opcional) para redirigir a una página externa o interna diferente a /cursos/[id]
  href?: string;
};

export const courses: Course[] = [
  {
    id: "comunidad-discord",
    title: "Comunidad UVA",
    description: "Únete a nuestra comunidad exclusiva en Discord. Conecta con otros arquitectos, comparte recursos y crece profesionalmente.",
    price: 7,
    priceDisplay: "$7USD/mes",
    hotmartLink: "https://wa.link/ytb29o",
    rating: 5,
    cover: "/Humanizar/discord_cover.jpeg",
    category: "comunidad",
    level: "básico",
    href: "/comunidad"
  },
  {
    id: "diplomado-gestion-desarrollo-vivienda",
    title: "Diplomado en Gestión y Desarrollo de Vivienda",
    description: "De la captación del cliente a la entrega del proyecto. Aprende a estructurar, vender y ejecutar proyectos de vivienda de forma profesional y rentable.",
    price: 198,
    hotmartLink: "https://wa.link/1o9gra",
    rating: 5,
    cover: "/Humanizar/diplomado_vivienda_16_9.png",
    category: "gestión",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "Módulo 1: Captación de clientes, marketing y diseño arquitectónico",
        items: [
          "Estrategias de captación de clientes",
          "Marketing para proyectos de vivienda",
          "Diseño arquitectónico orientado a la rentabilidad"
        ]
      },
      {
        title: "Módulo 2: Diseños técnicos: estructuras, redes y normativa",
        items: [
          "Coordinación de diseños técnicos",
          "Estructuras y redes",
          "Cumplimiento de normativa vigente"
        ]
      },
      {
        title: "Módulo 3: Contratos, cotizaciones y gestión administrativa",
        items: [
          "Elaboración de contratos sólidos",
          "Cotizaciones precisas",
          "Gestión administrativa eficiente"
        ]
      },
      {
        title: "Módulo 4: Costos, presupuestos y modelos de contratación",
        items: [
          "Análisis de costos",
          "Elaboración de presupuestos detallados",
          "Selección del modelo de contratación adecuado"
        ]
      },
      {
        title: "Módulo 5: Ejecución, seguimiento y cierre del proyecto",
        items: [
          "Supervisión de la ejecución de obra",
          "Seguimiento y control de avances",
          "Cierre exitoso y entrega del proyecto"
        ]
      }
    ]
  },
  {
    id: "render-visualizacion-ia",
    title: "Render y Visualización con IA",
    description: "Aprende a crear renders hiperrealistas, videos y recorridos virtuales en minutos a partir de imágenes básicas, bocetos o fotografías crudas.",
    price: 198,
    hotmartLink: "https://wa.link/12f318",
    rating: 5,
    cover: "/Humanizar/portada_render_ia.jpeg",
    category: "visualización",
    level: "básico",
    videoUrl: undefined,
    syllabus: [
      {
        title: "Sesión 1: La mente de la IA aplicada a arquitectura",
        items: [
          "Introducción al flujo ARCH-AI",
          "Prompt Engineering para arquitectos",
          "Cómo entrenar la IA para entender espacio, estilo y materialidad",
          "Creación de moodboards inteligentes con IA",
          "Conceptualización arquitectónica asistida"
        ]
      },
      {
        title: "Sesión 2: De boceto a render profesional en minutos",
        items: [
          "Convertir croquis o imágenes básicas en renders",
          "Flujo Sketch → Render hiperrealista",
          "Control de estilo arquitectónico",
          "Generación rápida de 3 renders profesionales"
        ]
      },
      {
        title: "Sesión 3: Arquitectura técnica con IA",
        items: [
          "Generación de planos, cortes y vistas técnicas",
          "Remodelación con IA desde fotografías reales",
          "Control geométrico para respetar la arquitectura",
          "IA aplicada a interiores y materiales"
        ]
      },
      {
        title: "Sesión 4: Arquitectura en movimiento",
        items: [
          "Creación de recorridos virtuales con IA",
          "Generación de videos arquitectónicos",
          "Storytelling visual para proyectos",
          "Animaciones arquitectónicas en minutos"
        ]
      },
      {
        title: "Sesión 5: Presentación y venta de proyectos con IA",
        items: [
          "Cómo crear presentaciones comerciales impactantes",
          "Generación automática de láminas y portafolios",
          "Uso de IA para marketing arquitectónico",
          "Preparación de proyecto final del curso"
        ]
      }
    ]
  },
  {
    id: "diplomado-gerencia-proyectos",
    title: "Diplomado en Gerencia de Proyectos, Costos y Presupuestos",
    description: "Domina la gestión integral de obras: planificación, costos, contratación y cierre financiero.",
    price: 198,
    hotmartLink: "https://wa.link/8qibm3",
    rating: 5,
    cover: "/Humanizar/Gerencia_de_proyectos_16.9.jpeg",
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
    price: 198,
    hotmartLink: "https://wa.link/cckgye",
    rating: 5,
    cover: "/Humanizar/Oficina_de_arquitectura_en_10_dias_16.9.jpeg",
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
    hotmartLink: "https://wa.link/zqb5rk",
    rating: 5,
    cover: "/Humanizar/Asesoria_1a1_16.9.jpeg",
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
        title: "PAQUETE 2 — ACOMPAÑAMIENTO PROFESIONAL (5 Horas - $490 USD)",
        items: [
          "Análisis profundo de presupuestos y costos",
          "Optimización de diseño y decisiones arquitectónicas",
          "Estrategia de control financiero del proyecto",
          "Ajustes en honorarios, márgenes y estructura de cobro",
          "Acompañamiento personalizado paso a paso"
        ]
      },
      {
        title: "PAQUETE 3 — MENTORÍA ESTRATÉGICA UVA (10 Horas - $870 USD)",
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
  {
    id: "libro-vendiendo-arquitectura",
    title: "VENDIENDO ARQUITECTURA DE 0 A 100",
    description: "De arquitecto técnico a profesional rentable. Estrategias y métodos para vender y realizar mejor tus proyectos. Libro digital de 115 páginas.",
    price: 40,
    hotmartLink: "https://wa.link/lczqwx",
    rating: 5,
    cover: "/Humanizar/Vendiendo_arquitectura_de_cero_a_100_16.9.jpeg",
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
    hotmartLink: "https://wa.link/7uscfq",
    rating: 5,
    cover: "/Humanizar/Del_CAD_al_feed_16.9.jpeg",
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
    price: 198,
    hotmartLink: "https://wa.link/vph1ml",
    rating: 5,
    cover: "/Humanizar/Curso_de_D5_16.9.jpeg",
    category: "visualización",
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
    title: "Instagram + Facebook Ads para Arquitectos, Diseñadores y Constructores (DE 0 A 100)",
    description: "Convierte redes sociales en clientes reales y proyectos pagos. Aprende a crear contenido estratégico, dominar el algoritmo y vender servicios de arquitectura.",
    price: 198,
    hotmartLink: "https://wa.link/xhavn3",
    rating: 5,
    cover: "/Humanizar/curso_instagram_v2.png",
    category: "visualización",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "SESIÓN 1: Mentalidad + Sistema de Captación de Clientes",
        items: [
          "Cómo dejar de “subir contenido bonito” y empezar a vender",
          "El sistema real que usan arquitectos para conseguir clientes",
          "Posicionamiento: cómo volverte autoridad en tu ciudad",
          "Estructura completa del embudo digital"
        ]
      },
      {
        title: "SESIÓN 2: Consolidación de Instagram (Tu marca personal que vende)",
        items: [
          "Perfil optimizado para convertir seguidores en clientes",
          "Bio estratégica + portafolio irresistible",
          "Qué publicar para atraer proyectos reales",
          "Cómo construir una imagen premium"
        ]
      },
      {
        title: "SESIÓN 3: Contenido que Vende: Storytelling + UGC",
        items: [
          "Cómo contar historias que conectan y generan ventas",
          "Estructura de reels virales con intención comercial",
          "Uso de UGC para generar confianza inmediata",
          "Cómo mostrar proyectos de forma estratégica (antes/después)"
        ]
      },
      {
        title: "SESIÓN 4: Configuración PRO: Instagram + Facebook Unificados",
        items: [
          "Conexión correcta entre Instagram y Facebook Business",
          "Creación de Business Manager paso a paso",
          "Instalación del Pixel",
          "Base técnica lista para escalar"
        ]
      },
      {
        title: "SESIÓN 5: Segmentación Inteligente (Clientes que sí pagan)",
        items: [
          "Cómo encontrar clientes con capacidad de inversión",
          "Públicos fríos, tibios y calientes",
          "Segmentación estratégica por ubicación e intereses",
          "Cómo atraer proyectos de alto valor"
        ]
      },
      {
        title: "SESIÓN 6: Creación de Anuncios que Generan Leads",
        items: [
          "Cómo crear anuncios que captan atención",
          "Copywriting persuasivo para arquitectura",
          "Creativos que convierten (video + imagen)",
          "Estrategia para llevar clientes a WhatsApp"
        ]
      },
      {
        title: "SESIÓN 7: Cierre de Ventas y Seguimiento de Leads",
        items: [
          "Cómo responder mensajes y cerrar proyectos",
          "Scripts listos para WhatsApp",
          "Cómo filtrar clientes y optimizar tu tiempo",
          "Proceso de conversión efectivo"
        ]
      },
      {
        title: "SESIÓN 8: Escalamiento + Automatización del Negocio",
        items: [
          "Cómo invertir más y ganar más",
          "Métricas clave para escalar campañas",
          "Automatización básica de leads",
          "Plan de crecimiento mensual"
        ]
      }
    ]
  },
  {
    id: "diseno-interior-iluminacion",
    title: "Diseño Interior e Iluminación",
    description: "Curso completo para principiantes, profesionales y empíricos. Domina desde la historia y el concepto hasta la iluminación y la gestión profesional.",
    price: 198,
    hotmartLink: "https://wa.link/a5spdi",
    rating: 5,
    cover: "/Humanizar/Diseño_de_interiores_e_iluminacion_16.9.jpeg",
    category: "diseño",
    level: "básico",
    videoUrl: undefined,
    syllabus: [
      {
        title: "SESIÓN 1: Definición, Concepto e Historia del Diseño Interior",
        items: [
          "Qué es el diseño de interiores y qué no es",
          "Diferencias entre arquitectura, diseño interior y estilismo",
          "El interiorismo como disciplina proyectual",
          "El concepto de capas en el espacio",
          "Historia del diseño interior (1900–2000)",
          "Referentes clave, movimientos e influencias",
          "El rol del interiorista hoy",
          "Introducción al pensamiento crítico del espacio"
        ]
      },
      {
        title: "SESIÓN 2: Estilos y Desarrollo",
        items: [
          "Análisis del usuario y del espacio",
          "Estilo propio y estilo de vida",
          "Lectura del contexto arquitectónico",
          "Estilos de diseño interior (más allá de la etiqueta estética)",
          "Cómo construir un concepto sólido",
          "Moodboards conceptuales",
          "Narrativa del espacio y storytelling",
          "Coherencia conceptual en todo el proyecto"
        ]
      },
      {
        title: "SESIÓN 3: Desarrollo del Proyecto de Diseño Interior",
        items: [
          "Fases de un proyecto de interiorismo",
          "Zonificación y distribución espacial",
          "Ergonomía, proporción y escala",
          "Diseño de iluminación",
          "Selección de materiales y acabados",
          "Mobiliario fijo y suelto",
          "Detalles constructivos y criterios técnicos",
          "Planos de interiorismo",
          "Presentación profesional del proyecto"
        ]
      },
      {
        title: "SESIÓN 4: Introducción a la Práctica Profesional",
        items: [
          "Qué es la administración del diseño",
          "Cómo funciona un estudio de diseño de interiores",
          "Tipos de proyectos de diseño interior",
          "Tipos de servicios de diseño",
          "Tipos de contrataciones",
          "Tipos de cotizaciones",
          "Relación con el cliente: roles, límites y expectativas",
          "Comunicación profesional y presentación de propuestas"
        ]
      }
    ]
  },
  {
    id: "revit-arquitectura",
    title: "Revit Arquitectura",
    description: "Curso completo de Revit Arquitectura. Aprende desde los fundamentos hasta la documentación y planos, optimizando tus tiempos de trabajo.",
    price: 198,
    hotmartLink: "https://wa.link/mv7clc",
    rating: 5,
    cover: "/Humanizar/Autodesk_Revit_16.9.jpeg",
    category: "software",
    level: "básico",
    videoUrl: undefined,
    syllabus: [
      {
        title: "Día 1: REVIT - Introducción a Revit Arquitectura",
        items: [
          "Fundamentos y Navegación",
          "Conceptos básicos, interfaz de usuario y metodología de modelado"
        ]
      },
      {
        title: "Día 2: REVIT - Modelado de Elementos Arquitectónicos",
        items: [
          "Muros, Pisos y Cubiertas",
          "Creación y modificación de elementos arquitectónicos esenciales"
        ]
      },
      {
        title: "Día 3: REVIT - Diseño Paramétrico: Familias y Componentes Personalizados",
        items: [
          "Introducción a las familias",
          "Categorías",
          "Parámetros"
        ]
      },
      {
        title: "Día 4: REVIT - Diseño Paramétrico: Familias y Componentes Personalizados II",
        items: [
          "Continuación con el modelado paramétrico",
          "Importación y carga de familias"
        ]
      },
      {
        title: "Día 5: REVIT - Cuantificación y cantidades",
        items: [
          "Cuantificación de materiales y elementos",
          "Tablas de cantidades"
        ]
      },
      {
        title: "Día 6: REVIT - Expresión y componentes gráficos",
        items: [
          "Plantillas de visualización",
          "Líneas y expresión",
          "Regiones, Hatch y estilos de dibujo"
        ]
      },
      {
        title: "Día 7: REVIT - Documentación y Planos",
        items: [
          "Generación de vistas",
          "Planos de planta, secciones y detalles",
          "Isometrías y exportación planos PDF - DWG"
        ]
      }
    ]
  },
  {
    id: "curso-sketchup",
    title: "Curso de SketchUp",
    description: "Modelado Arquitectónico desde Cero. Aprende a modelar tus proyectos en 3D de una manera rápida y sencilla.",
    price: 198,
    rating: 5,
    hotmartLink: "https://wa.link/m5xo5u",
    cover: "/Humanizar/portada_para_curso_sketchup_en_academia.jpeg",
    category: "software",
    level: "básico",
    videoUrl: undefined,
    syllabus: [
      {
        title: "Módulo 1: Introducción",
        items: ["Introducción, interfaz, navegación y herramientas básicas."]
      },
      {
        title: "Módulo 2: Modelado arquitectónico",
        items: ["Modelado arquitectónico, Push/Pull, Offset, geometría limpia y buenas prácticas."]
      },
      {
        title: "Módulo 3: Construcción de una vivienda desde planos",
        items: ["Muros, puertas, ventanas, losas y cubiertas."]
      },
      {
        title: "Módulo 4: Organización profesional",
        items: ["Grupos, componentes, etiquetas, escenas y 3D Warehouse."]
      },
      {
        title: "Módulo 5: Presentación arquitectónica",
        items: ["Materiales, texturas, estilos, sombras, cortes y presentación arquitectónica."]
      },
      {
        title: "Módulo 6: Plugins esenciales",
        items: ["Plugins esenciales para optimizar el modelado y el flujo de trabajo."]
      },
      {
        title: "Módulo 7: Terrenos y topografía",
        items: ["Terrenos, topografía e implantación arquitectónica con Sandbox Tools."]
      },
      {
        title: "Módulo 8: Optimización y exportación",
        items: [
          "Optimización, exportación para presentación, IA y render conceptual.",
          "Proyecto Final: Modelarás una vivienda completa con terreno, interior, materiales, escenas y archivos listos para presentación o render."
        ]
      }
    ]
  },
  {
    id: "diplomado-clinicas-odontologicas",
    title: "Diseño Interior y Habilitación de Clínicas Odontológicas",
    description: "Aprende a desarrollar proyectos odontológicos completos, desde el diseño hasta la habilitación con la Resolución 3100 de 2019.",
    price: 198,
    rating: 5,
    hotmartLink: "https://wa.link/222uck",
    cover: "/Humanizar/portada_para_diplomado_diseño_y_habilitacion_de_clinicas_odontologicas_en_academia.jpeg",
    category: "diseño",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "Módulo 1: Normativa y habilitación",
        items: ["Normativa y habilitación bajo la Resolución 3100 de 2019."]
      },
      {
        title: "Módulo 2: Diseño arquitectónico",
        items: ["Criterios de diseño arquitectónico para clínicas odontológicas."]
      },
      {
        title: "Módulo 3: Diseño interior",
        items: ["Diseño interior, materiales y experiencia del paciente."]
      },
      {
        title: "Módulo 4: Presupuestos y planeación",
        items: ["Presupuestos, planeación de obra y control de costos."]
      },
      {
        title: "Módulo 5: Construcción y habilitación final",
        items: ["Proceso de construcción, ejecución y habilitación final de la clínica."]
      }
    ]
  },
  {
    id: "diplomado-claude-ia",
    title: "Diplomado en Claude IA para Presupuestos y Administración de Obra",
    description: "Aprende a convertir a Claude en tu asistente profesional para trabajar más rápido, con mayor precisión y sin empezar de cero.",
    price: 198,
    rating: 5,
    hotmartLink: "https://wa.link/ykrcz2",
    cover: "/Humanizar/portada_diplomado.jpeg",
    category: "gestión",
    level: "intermedio",
    videoUrl: undefined,
    syllabus: [
      {
        title: "Sesión 1: Fundamentos de Claude para la Construcción",
        items: ["Introducción a Claude y su aplicación real en proyectos arquitectónicos y de construcción."]
      },
      {
        title: "Sesión 2: Presupuestos Inteligentes con IA",
        items: ["Generación, análisis y optimización de presupuestos automatizados."]
      },
      {
        title: "Sesión 3: Administración y control presupuestal de Obra",
        items: ["Seguimiento financiero, estimaciones y control de costos en tiempo real."]
      },
      {
        title: "Sesión 4: Documentación y Gestión de Clientes",
        items: ["Redacción de contratos, reportes, actas y comunicación profesional asistida por IA."]
      },
      {
        title: "Sesión 5: Implementación Completa para tu Empresa",
        items: ["Creación de flujos de trabajo personalizados para tu propio estudio o constructora."]
      }
    ]
  }
];
