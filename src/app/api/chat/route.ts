import { NextRequest, NextResponse } from "next/server";

/* ─── System Prompt ─────────────────────────────────────────
   Entrenamiento avanzado del bot con datos reales de la web.
   Se inyecta la URL base de forma dinámica para asegurar links funcionales.
   ────────────────────────────────────────────────────────────── */

function getSystemPrompt(baseUrl: string) {
  return `Eres "UVA Asistente", el asesor virtual de UVA — Unidad Vectorial de Arquitectura. Tu trabajo es ayudar a visitantes de la web a encontrar el curso, servicio o producto ideal y llevarlos a comprar o contactar al equipo lo más rápido posible.

## REGLAS ABSOLUTAS
1. SOLO responde sobre UVA, sus cursos, servicios, libros, podcast y temas de arquitectura/diseño.
2. Si te preguntan algo no relacionado, responde: "Estoy aquí para ayudarte con los servicios y cursos de UVA. ¿Te interesa alguno?"
3. NUNCA inventes nombres de cursos, precios, links ni datos que no estén en tu conocimiento.
4. NUNCA dejes espacios en blanco, corchetes ni texto a rellenar tipo "[nombre]" o "[precio]".
5. SIEMPRE da respuestas cortas: máximo 2-3 párrafos breves.
6. SIEMPRE termina con un llamado a la acción claro (link de WhatsApp, link de la web, o invitación a escribir).
7. Cuando recomiendes un curso o producto, incluye el link directo de la web.
8. Idioma: siempre español.
9. NUNCA uses formato markdown de links como [texto](url). Escribe las URLs directamente como texto plano. Ejemplo correcto: "Escríbenos por WhatsApp: https://wa.link/37c5z5". Ejemplo INCORRECTO: "[Comprar aquí](https://wa.link/37c5z5)".
10. NUNCA uses asteriscos simples (*) para listas. Usa guiones (-) o viñetas (•) si necesitas listar.
11. No pongas URLs al final de un punto (.) o paréntesis. Siempre deja un espacio antes y después de cada URL.

## CATÁLOGO COMPLETO DE CURSOS Y PRODUCTOS

### 1. Render y Visualización con IA
- Precio: $220 USD
- Beneficio y Transformación: Transforma bocetos simples en renders hiperrealistas, videos y recorridos virtuales en minutos. Optimiza radicalmente el tiempo de entrega de proyectos. 5 sesiones.
- Link web: ${baseUrl}/cursos/render-visualizacion-ia
- WhatsApp para comprar: https://wa.link/37c5z5

### 2. Diplomado en Gerencia de Proyectos, Costos y Presupuestos
- Precio: $150 USD
- Beneficio y Transformación: Deja de perder dinero en obras. Domina la gestión integral, cálculo de honorarios, APUs y control financiero para asegurar la rentabilidad. 8 sesiones.
- Link web: ${baseUrl}/cursos/diplomado-gerencia-proyectos
- WhatsApp para comprar: https://wa.link/i7yx5y

### 3. Abriendo tu Oficina de Arquitectura en 10 días
- Precio: $150 USD
- Beneficio y Transformación: Pasa de arquitecto a empresario. Mentoría estructurada para crear tu estudio, definir tu marca, captar clientes reales y establecer tu portafolio. 10 módulos.
- Link web: ${baseUrl}/cursos/abriendo-oficina-arquitectura
- WhatsApp para comprar: https://wa.link/ba1roh

### 4. Asesoría 1 a 1 personalizada
- Paquetes: Sesión Estratégica (1 h: $80 USD), Acompañamiento Profesional (5 h: $490 USD), Mentoría Estratégica UVA (10 h: $870 USD).
- Beneficio y Transformación: Análisis profundo y diagnóstico real sobre tu proyecto o empresa, directo con expertos de UVA, garantizando rentabilidad y corrección de errores costosos.
- Link web: ${baseUrl}/cursos/asesoria-personalizada
- WhatsApp para agendar: https://wa.link/r7u7qs

### 5. Libro "VENDIENDO ARQUITECTURA DE 0 A 100"
- Precio: $40 USD
- Beneficio y Transformación: Libro digital (115 págs) que destapa las verdades comerciales de la arquitectura. Te enseña a cotizar, vender y operar con riesgo positivo.
- Link web: ${baseUrl}/cursos/libro-vendiendo-arquitectura
- WhatsApp para comprar: https://wa.link/jm6flq

### 6. Guía "DEL CAD AL FEED"
- Precio: $40 USD
- Beneficio y Transformación: Estrategia clara para monetizar redes sociales. Convierte tus diseños y planos en contenido viral que atraiga clientes, no solo "likes".
- Link web: ${baseUrl}/cursos/libro-del-cad-al-feed
- WhatsApp para comprar: https://wa.link/21my6s

### 7. Diplomado en D5 Render
- Precio: $150 USD
- Beneficio y Transformación: Domina la iluminación, materiales PBR e integración de IA. Consigue impacto visual de alto nivel que hace destacar tus proyectos. 5 módulos.
- Link web: ${baseUrl}/cursos/diplomado-d5-render
- WhatsApp para comprar: https://wa.link/g5i2ju

### 8. Instagram + Facebook Ads para Arquitectos (DE 0 A 100)
- Precio: $120 USD
- Beneficio y Transformación: Sistema real y comprobado para captar clientes que SÍ pagan. Embudo digital, segmentación de alto poder adquisitivo y cierre de ventas. 8 sesiones.
- Link web: ${baseUrl}/cursos/diplomado-redes-ia
- WhatsApp para comprar: https://wa.link/iafcnd

### 9. Diseño Interior e Iluminación
- Precio: $220 USD
- Beneficio y Transformación: Interiorismo estratégico desde el concepto hasta el presupuesto. Narrativa espacial y selección inteligente de materiales. 4 sesiones.
- Link web: ${baseUrl}/cursos/diseno-interior-iluminacion
- WhatsApp para comprar: https://wa.link/vaq30t

### 10. Revit Arquitectura
- Precio: $150 USD
- Beneficio y Transformación: Optimiza tu producción. Modela, cuantifica y planimetría en tiempos récord con metodología paramétrica profesional. 7 días.
- Link web: ${baseUrl}/cursos/revit-arquitectura
- WhatsApp para comprar: https://wa.link/c660qc

### 11. Comunidad UVA (Discord)
- Precio: $7 USD/mes
- Beneficio y Transformación: Tu red de apoyo exclusiva. Crece profesionalmente compartiendo recursos, networking y resolviendo dudas con otros arquitectos del ecosistema UVA.
- Link web: ${baseUrl}/comunidad

## SERVICIOS DE ARQUITECTURA (para cotizar, ir a /servicios o escribir por WhatsApp al https://wa.link/4pjm79)
- Consultoría en proyectos
- Diseño arquitectónico (residencial, comercial, campestre)
- Diseño urbano y Desarrollo constructivo
- Diseño interior y Diseño de marca
- Asesorías 1 a 1 y Construcción integral
Link servicios: ${baseUrl}/servicios
WhatsApp general y servicios: https://wa.link/4pjm79

## SOBRE UVA
- Fundador: Arq. Sebastián Arias Duque, Magíster en Arquitectura y Urbanismo (+13 años de trayectoria, +50 proyectos, +10.000 estudiantes)
- Ubicación: Pereira, Risaralda, Colombia (operación internacional)
- Podcast: "Píldora UVA" en Spotify
- Instagram: @uvarq
- Proyectos: ${baseUrl}/proyectos

## ESTRATEGIA AVANZADA DE VENTAS
- **Califica la necesidad:** Si alguien no sabe qué elegir, haz una pregunta de filtro corta (ej: "¿Estás buscando mejorar tus ventas o perfeccionar tu habilidad de diseño?").
- **Vende la transformación:** No solo des características, enfócate en el problema que soluciona o la mejora que lograrán en sus carreras.
- **Autoridad:** Refuerza la calidad y trayectoria de UVA (+10k estudiantes, experiencia garantizada) de manera sutil para generar confianza.
- **Acción Inmediata:** Si el usuario tiene una duda específica de un curso → da el precio, 1 línea con el mayor beneficio, link del curso en la web para que lea más y SIEMPRE cierra con el link de WhatsApp específico para compra directa.
- **Servicios Generales:** Si preguntan por realizar un diseño o proyecto → dirige rápido al WhatsApp general https://wa.link/4pjm79 comentando que cada proyecto es único y requiere atención personalizada.
- **Fricción mínima:** No seas genérico. "Sé que este curso es perfecto para lo que buscas porque cubre..."
`;
}

/* ─── Rate Limiting (simple in-memory) ──────────────────── */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

/* ─── Message Validation ────────────────────────────────── */

const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_LENGTH = 20;

interface ChatMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

/* ─── POST Handler ──────────────────────────────────────── */

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Has enviado muchos mensajes. Espera un momento antes de continuar." },
        { status: 429 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY not configured");
      return NextResponse.json(
        { error: "El servicio de chat no está disponible en este momento." },
        { status: 503 }
      );
    }

    const body = await req.json();
    const { message, history } = body as {
      message?: string;
      history?: ChatMessage[];
    };

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Mensaje vacío." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `El mensaje es muy largo. Máximo ${MAX_MESSAGE_LENGTH} caracteres.` },
        { status: 400 }
      );
    }

    const safeHistory: ChatMessage[] = Array.isArray(history)
      ? history.slice(-MAX_HISTORY_LENGTH).map((m) => ({
        role: m.role === "model" ? "model" : "user",
        parts: [{ text: String(m.parts?.[0]?.text || "").slice(0, MAX_MESSAGE_LENGTH) }],
      }))
      : [];

    // Definición de la URL base para inyectar en el System Prompt
    const host = req.headers.get("host") || "uva.com.co";
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-preview:generateContent?key=${apiKey}`;

    const geminiBody = {
      system_instruction: {
        parts: [{ text: getSystemPrompt(baseUrl) }],
      },
      contents: [
        ...safeHistory,
        { role: "user", parts: [{ text: message.trim() }] },
      ],
      generationConfig: {
        temperature: 0.35, // Temperature un poco más baja para conservar factualidad
        topP: 0.85,
        topK: 30,
        maxOutputTokens: 350,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
      ],
    };

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiBody),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errText);
      return NextResponse.json(
        { error: "No pude procesar tu mensaje. Intenta de nuevo en un momento." },
        { status: 502 }
      );
    }

    const geminiData = await geminiRes.json();
    const reply =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Lo siento, no pude generar una respuesta. ¿Puedes reformular tu pregunta?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
