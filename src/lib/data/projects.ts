export type Project = {
  id: string;
  name: string;
  description: string;
  images: string[];
  category?: string;
};

export const projects: Project[] = [
  {
    id: "selva-negra",
    name: "SELVA NEGRA",
    description:
      "SELVA NEGRA – Proyecto de glamping con acabados y espacios de lujo, centrado en brindar una experiencia de alojamiento en la naturaleza sin renunciar al confort.",
    images: [
      "/projects/selva-negra/g1.jpg",
      "/projects/selva-negra/g2.jpg",
      "/projects/selva-negra/g3.jpg",
      "/projects/selva-negra/g4.jpg",
      "/projects/selva-negra/g5.jpg",
      "/projects/selva-negra/g6.jpg",
      "/projects/selva-negra/g7.jpg",
    ],
    category: "glamping",
  },
  {
    id: "apartamento-em",
    name: "Apartamento Em",
    description:
      "Remodelación total de apartamento contemporáneo. Los interiores muestran un ambiente sobrio con paleta de grises y beiges, pisos de madera y detalles en mármol. En las zonas sociales hay sofá gris, mesas de centro, plantas y luminarias; los dormitorios siguen la misma estética minimalista con mobiliario de líneas sencillas y grandes.",
    images: [
      "/projects/Apartamento-Em/1.jpg",
      "/projects/Apartamento-Em/2.jpg",
      "/projects/Apartamento-Em/3.jpg",
      "/projects/Apartamento-Em/4.jpg",
      "/projects/Apartamento-Em/5.jpg",
      "/projects/Apartamento-Em/6.jpg",
      "/projects/Apartamento-Em/7.jpg",
    ],
    // Puedes asignar una categoría si quieres mostrar la etiqueta
    // category: "residencial",
  },
  {
    id: "casa-lievano",
    name: "Casa Liévano",
    description:
      "Diseño y construcción de vivienda campestre nueva. Las fotos muestran una casa de un nivel con cubiertas planas, volúmenes de concreto claro y celosías. Hay un patio con piscina y un muro decorativo. Los interiores combinan sala con jardín, cocina con isla de mármol y dormitorio con cama tipo plataforma de madera.",
    images: [
      "/projects/Casa-Lievano/1.jpg",
      "/projects/Casa-Lievano/2.jpg",
      "/projects/Casa-Lievano/3.jpg",
      "/projects/Casa-Lievano/4.jpg",
      "/projects/Casa-Lievano/5.jpg",
      "/projects/Casa-Lievano/6.jpg",
      "/projects/Casa-Lievano/7.jpg",
      "/projects/Casa-Lievano/8.jpg",
      "/projects/Casa-Lievano/9.jpg",
    ],
  },
  {
    id: "fenat",
    name: "FENAT",
    description:
      "FENAT (Estudio Dental) – Diseño comercial odontológico. La fachada curva beige tiene ventanas redondas y la marca FENAT en gran formato. En el interior, la recepción emplea paredes onduladas, iluminación perimetral y un mostrador curvo. Las salas de consulta y tratamientos combinan muebles blancos, madera y techos con tragaluces circulares. Se incluyen áreas de oficinas y reuniones con separadores iluminados y mobiliario ergonómico.",
    images: [
      "/projects/FENAT/1.jpg",
      "/projects/FENAT/2.jpg",
      "/projects/FENAT/3.jpg",
      "/projects/FENAT/4.jpg",
      "/projects/FENAT/5.jpg",
      "/projects/FENAT/6.jpg",
      "/projects/FENAT/7.jpg",
      "/projects/FENAT/8.jpg",
    ],
  },
  {
    id: "la-mahaus",
    name: "La Mahaus",
    description:
      "La Mahaus – Vivienda campestre de estilo industrial e integrada a la naturaleza. Las vistas exteriores muestran volúmenes de madera, concreto y metal en un entorno montañoso. Los interiores combinan materiales rústicos e industriales: vigas a la vista, muros de ladrillo, mesas de madera maciza y grandes ventanales hacia el bosque. Las habitaciones presentan iluminación cálida indirecta, paredes oscuras y vistas panorámicas; el baño integra madera y concreto con regadera y tina.",
    images: [
      "/projects/La-Mahaus/1.jpg",
      "/projects/La-Mahaus/2.jpg",
      "/projects/La-Mahaus/3.jpg",
      "/projects/La-Mahaus/4.jpg",
      "/projects/La-Mahaus/5.jpg",
      "/projects/La-Mahaus/6.jpg",
      "/projects/La-Mahaus/7.jpg",
      "/projects/La-Mahaus/9.jpg",
      "/projects/La-Mahaus/10.jpg",
      "/projects/La-Mahaus/11.jpg",
    ],
  },
  {
    id: "residencia-lepore",
    name: "Residencia Lepore",
    description:
      "Residencia Lepore – Diseño de vivienda campestre con estilo brutalista, que sugiere uso de concreto expuesto y geometría fuerte",
    images: [
      "/projects/Residencia-Lepore/1.jpg",
      "/projects/Residencia-Lepore/2.jpg",
      "/projects/Residencia-Lepore/3.jpg",
      "/projects/Residencia-Lepore/4.jpg",
      "/projects/Residencia-Lepore/5.jpg",
      "/projects/Residencia-Lepore/6.jpg",
      "/projects/Residencia-Lepore/7.jpg",
      "/projects/Residencia-Lepore/8.jpg",
      "/projects/Residencia-Lepore/9.jpg",
      "/projects/Residencia-Lepore/10.jpg",
      "/projects/Residencia-Lepore/11.jpg",
      "/projects/Residencia-Lepore/12.jpg",
    ],
  },
];
