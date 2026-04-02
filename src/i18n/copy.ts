import type { Lang } from "./LanguageContext";

export const uiCopy = {
  en: {
    formIndex: "FORM INDEX",
    index: "INDEX",
    info: "Info",
    close: "Close",
    openPage: "OPEN PAGE",
    openSection: "OPEN SECTION",
    backToIndex: "BACK TO INDEX",
    collection: "Collection",
    infoTab: "Info",
    selectedPieces: "Selected pieces",
    inquiryOnly: "Inquiry-only. No checkout.",
    note: "NOTE",
    infoLabel: "INFO",
    pages: "PAGES",
    contact: "CONTACT",
    inquire: "Inquire",
    collectionNote:
      "This is a curated preview. For sizing, availability and custom requests — use “Inquire”.",
    infoText:
      "A quiet futurism capsule: material studies, editorial silhouettes, and controlled motion language.",
    contactLead: "For inquiries:",
    statusAvailable: "Available",
    statusMadeToOrder: "Made to order",
    statusSoldOut: "Sold out",
  },
  es: {
    formIndex: "FORM INDEX",
    index: "ÍNDICE",
    info: "Info",
    close: "Cerrar",
    openPage: "ABRIR PÁGINA",
    openSection: "ABRIR SECCIÓN",
    backToIndex: "VOLVER AL ÍNDICE",
    collection: "Colección",
    infoTab: "Info",
    selectedPieces: "Piezas seleccionadas",
    inquiryOnly: "Solo consulta. Sin checkout.",
    note: "NOTA",
    infoLabel: "INFO",
    pages: "PÁGINAS",
    contact: "CONTACTO",
    inquire: "Consultar",
    collectionNote:
      "Esta es una vista curada. Para tallas, disponibilidad y solicitudes personalizadas — usa “Consultar”.",
    infoText:
      "Una cápsula de futurismo silencioso: estudios de material, siluetas editoriales y lenguaje de movimiento controlado.",
    contactLead: "Para consultas:",
    statusAvailable: "Disponible",
    statusMadeToOrder: "Bajo pedido",
    statusSoldOut: "Agotado",
  },
} as const;

export const stageCopy = {
  en: [
    {
      id: "intro",
      indexTitle: "Intro",
      eyebrow: "FORM INDEX",
      title: "Quiet futurism demo",
      description: "Index drives a sticky stage. Scroll drives state.",
    },
    {
      id: "textures",
      indexTitle: "Textures",
      eyebrow: "Material library",
      title: "Surface studies",
      description: "Controlled motion, editorial spacing.",
    },
    {
      id: "campaign",
      indexTitle: "Campaign",
      eyebrow: "Wide hero / Posters",
      title: "Campaign system",
      description: "Crossfade + blur micro-motion.",
    },
    {
      id: "lookbook",
      indexTitle: "Lookbook",
      eyebrow: "V01 / V02",
      title: "Lookbook volumes",
      description: "Concept placement, not full-bleed.",
    },
    {
      id: "product",
      indexTitle: "Product",
      eyebrow: "Detail set",
      title: "Product images",
      description: "Close-ups + whitespace.",
    },
  ],
  es: [
    {
      id: "intro",
      indexTitle: "Intro",
      eyebrow: "FORM INDEX",
      title: "Demo de futurismo silencioso",
      description: "El índice impulsa un escenario fijo. El scroll impulsa el estado.",
    },
    {
      id: "textures",
      indexTitle: "Texturas",
      eyebrow: "Biblioteca de materiales",
      title: "Estudios de superficie",
      description: "Movimiento controlado, espaciado editorial.",
    },
    {
      id: "campaign",
      indexTitle: "Campaña",
      eyebrow: "Hero ancho / Pósters",
      title: "Sistema de campaña",
      description: "Crossfade + micro-movimiento con blur.",
    },
    {
      id: "lookbook",
      indexTitle: "Lookbook",
      eyebrow: "V01 / V02",
      title: "Volúmenes lookbook",
      description: "Colocación conceptual, no a sangre completa.",
    },
    {
      id: "product",
      indexTitle: "Producto",
      eyebrow: "Set de detalle",
      title: "Imágenes de producto",
      description: "Primeros planos + espacio en blanco.",
    },
  ],
} as const;

export const pageLabels = {
  en: {
    textures: "Textures",
    campaign: "Campaign",
    lookbook: "Lookbook",
    product: "Product",
  },
  es: {
    textures: "Texturas",
    campaign: "Campaña",
    lookbook: "Lookbook",
    product: "Producto",
  },
} as const;

export const collectionCopy = {
  en: [
    {
      id: "fi-01",
      name: "Quiet Futurism Coat",
      note: "Limited run / editorial piece",
      price: "€420",
      status: "made_to_order",
    },
    {
      id: "fi-02",
      name: "Surface Study Set",
      note: "Material-first silhouette",
      price: "€260",
      status: "available",
    },
    {
      id: "fi-03",
      name: "Lookbook Volume 01",
      note: "Seasonal capsule",
      price: "€180",
      status: "available",
    },
    {
      id: "fi-04",
      name: "Product Detail Piece",
      note: "Close-up / craft focus",
      price: "€140",
      status: "sold_out",
    },
  ],
  es: [
    {
      id: "fi-01",
      name: "Abrigo Quiet Futurism",
      note: "Edición limitada / pieza editorial",
      price: "€420",
      status: "made_to_order",
    },
    {
      id: "fi-02",
      name: "Set Surface Study",
      note: "Silueta centrada en el material",
      price: "€260",
      status: "available",
    },
    {
      id: "fi-03",
      name: "Lookbook Volumen 01",
      note: "Cápsula de temporada",
      price: "€180",
      status: "available",
    },
    {
      id: "fi-04",
      name: "Pieza Product Detail",
      note: "Primer plano / enfoque en la confección",
      price: "€140",
      status: "sold_out",
    },
  ],
} as const;

export const pageCopy = {
  lookbook: {
    en: {
      shell: {
        eyebrow: "LOOKBOOK",
        title: "Lookbook volumes",
        intro:
          "Two distinct editorial sets build the lookbook layer: one studies structure and silhouette discipline, the other opens into softer volume and quieter spacing. Together they should feel like a composed publication, not a standard gallery.",
        meta: "V01 Structure / V02 Volume / portrait-led editorial sequencing",
      },
      principleLabel: "EDITORIAL PRINCIPLE",
      principleText:
        "The lookbook should not read as one flat archive. It is split into two curated movements: a stricter structural study and a softer volume study. This separation gives the page hierarchy, rhythm, and a more publication-like feeling.",
      structureCardLabel: "V01 / STRUCTURE",
      structureCardText:
        "Sharper silhouette discipline, cleaner containment, editorial restraint.",
      volumeCardLabel: "V02 / VOLUME",
      volumeCardText:
        "Softer massing, looser spacing, quieter atmosphere and drift.",
      v01: {
        label: "V01",
        title: "Structure",
        note:
          "The first set is more restrained and architectural. Frames should feel upright, measured, and clean, with enough air around the body to emphasize silhouette logic rather than spectacle.",
      },
      structureNoteLabel: "STRUCTURE NOTE",
      structureNoteText:
        "The companion column acts as a pause and keeps the page from becoming just a list of verticals. It preserves editorial cadence.",
      sequenceLabel: "SEQUENCE",
      sequenceText:
        "Volume one closes with a calmer continuation rather than a climax. The feeling should stay composed, measured, and architectural.",
      v02: {
        label: "V02",
        title: "Volume",
        note:
          "The second set opens the system slightly. There is still restraint, but the shapes carry more softness and mass. The page should feel quieter, fuller, and more atmospheric.",
      },
      volumeNoteLabel: "VOLUME NOTE",
      volumeNoteText:
        "This block should feel less structural and slightly more atmospheric, while keeping the same quiet editorial discipline.",
    },
    es: {
      shell: {
        eyebrow: "LOOKBOOK",
        title: "Volúmenes lookbook",
        intro:
          "Dos sets editoriales distintos construyen la capa lookbook: uno estudia la estructura y la disciplina de la silueta, el otro se abre a un volumen más suave y un espaciado más silencioso. Juntos deben sentirse como una publicación compuesta, no como una galería estándar.",
        meta: "V01 Estructura / V02 Volumen / secuencia editorial guiada por retrato",
      },
      principleLabel: "PRINCIPIO EDITORIAL",
      principleText:
        "El lookbook no debe leerse como un archivo plano. Está dividido en dos movimientos curados: un estudio estructural más estricto y un estudio de volumen más suave. Esta separación da jerarquía, ritmo y una sensación más cercana a una publicación.",
      structureCardLabel: "V01 / ESTRUCTURA",
      structureCardText:
        "Disciplina de silueta más precisa, contención más limpia, contención editorial.",
      volumeCardLabel: "V02 / VOLUMEN",
      volumeCardText:
        "Más suavidad en la masa, espaciado más suelto y una atmósfera más silenciosa.",
      v01: {
        label: "V01",
        title: "Estructura",
        note:
          "El primer set es más contenido y arquitectónico. Los encuadres deben sentirse rectos, medidos y limpios, con suficiente aire alrededor del cuerpo para enfatizar la lógica de la silueta más que el espectáculo.",
      },
      structureNoteLabel: "NOTA DE ESTRUCTURA",
      structureNoteText:
        "La columna complementaria actúa como una pausa y evita que la página se convierta solo en una lista de verticales. Conserva la cadencia editorial.",
      sequenceLabel: "SECUENCIA",
      sequenceText:
        "El primer volumen se cierra con una continuación más calmada que con un clímax. La sensación debe seguir siendo compuesta, medida y arquitectónica.",
      v02: {
        label: "V02",
        title: "Volumen",
        note:
          "El segundo set abre ligeramente el sistema. Aún hay contención, pero las formas cargan más suavidad y masa. La página debe sentirse más silenciosa, plena y atmosférica.",
      },
      volumeNoteLabel: "NOTA DE VOLUMEN",
      volumeNoteText:
        "Este bloque debe sentirse menos estructural y algo más atmosférico, manteniendo la misma disciplina editorial silenciosa.",
    },
  },

  campaign: {
    en: {
      shell: {
        eyebrow: "CAMPAIGN",
        title: "Campaign system",
        intro:
          "A wider editorial field built around atmosphere, spacing, and visual presence. Unlike the portrait-led lookbook, this page should feel more cinematic and spatial - closer to a campaign spread than a sequence of product frames.",
        meta: "Wide editorials / quiet atmosphere / spread-based rhythm",
      },
      noteLabel: "CAMPAIGN NOTE",
      noteText:
        "This layer should open the system up. The emphasis is on wider image breathing room, group presence, softer pacing, and the feeling of a composed campaign spread rather than a sequence of upright studies.",
      wideSpreadLabel: "WIDE SPREAD",
      wideSpreadText:
        "Larger horizontal fields, softer image drift, more air around the scene.",
      pacingLabel: "PACING",
      pacingText:
        "Campaign rhythm should feel composed and cinematic, not dense or merch-driven.",
      atmosphereLabel: "ATMOSPHERE",
      atmosphereText:
        "The first transition after the hero should create a pause, not a drop in energy. Text acts as a quiet editorial hinge between large spreads.",
      spreadLogicLabel: "SPREAD LOGIC",
      spreadLogicText:
        "Unlike the lookbook, campaign framing can be broader and more atmospheric. The page should still stay restrained, but allow a slightly fuller visual field.",
    },
    es: {
      shell: {
        eyebrow: "CAMPAÑA",
        title: "Sistema de campaña",
        intro:
          "Un campo editorial más amplio construido alrededor de atmósfera, espaciado y presencia visual. A diferencia del lookbook guiado por retrato, esta página debe sentirse más cinematográfica y espacial, más cercana a un spread de campaña que a una secuencia de imágenes de producto.",
        meta: "Editoriales amplios / atmósfera silenciosa / ritmo basado en spreads",
      },
      noteLabel: "NOTA DE CAMPAÑA",
      noteText:
        "Esta capa debe abrir el sistema. El énfasis está en un mayor espacio para la imagen, presencia grupal, un ritmo más suave y la sensación de un spread de campaña compuesto, no de una secuencia de estudios verticales.",
      wideSpreadLabel: "SPREAD AMPLIO",
      wideSpreadText:
        "Campos horizontales más amplios, deriva de imagen más suave y más aire alrededor de la escena.",
      pacingLabel: "RITMO",
      pacingText:
        "El ritmo de campaña debe sentirse compuesto y cinematográfico, no denso ni orientado a merchandising.",
      atmosphereLabel: "ATMÓSFERA",
      atmosphereText:
        "La primera transición después del hero debe crear una pausa, no una caída de energía. El texto actúa como una bisagra editorial silenciosa entre spreads grandes.",
      spreadLogicLabel: "LÓGICA DEL SPREAD",
      spreadLogicText:
        "A diferencia del lookbook, el encuadre de campaña puede ser más amplio y atmosférico. La página debe seguir siendo contenida, pero permitir un campo visual ligeramente más lleno.",
    },
  },

  product: {
    en: {
      shell: {
        eyebrow: "PRODUCT",
        title: "Product images",
        intro:
          "A quieter object layer focused on silhouette precision, crafted surfaces, and controlled framing. The page should feel closer to editorial product study than to a conventional commerce detail page.",
        meta: "Object studies / material focus / clean containment",
      },
      studyLabel: "OBJECT STUDY",
      studyText:
        "This page is less about narrative spread and more about precision. Images should feel carefully held in space, with enough quiet around them to let proportion, seam logic, and material character carry the attention.",
      detailLabel: "DETAIL",
      detailText:
        "Cleaner framing, closer reading, less atmospheric distance.",
      surfaceLabel: "SURFACE",
      surfaceText:
        "The page should privilege material discipline over merchandising cues.",
      craftLabel: "CRAFT NOTE",
      craftText:
        "The secondary column works as a controlled pause. It keeps the product layer from collapsing into a simple tiled gallery.",
      containmentLabel: "CONTAINMENT",
      containmentText:
        "This is still not a store template. The product page should feel curated, sparse, and editorial - closer to a design study than to checkout logic.",
    },
    es: {
      shell: {
        eyebrow: "PRODUCTO",
        title: "Imágenes de producto",
        intro:
          "Una capa de objeto más silenciosa enfocada en la precisión de la silueta, superficies trabajadas y encuadre controlado. La página debe sentirse más cercana a un estudio editorial de producto que a una página comercial convencional.",
        meta: "Estudios de objeto / foco material / contención limpia",
      },
      studyLabel: "ESTUDIO DE OBJETO",
      studyText:
        "Esta página trata menos de una narrativa expandida y más de precisión. Las imágenes deben sentirse cuidadosamente sostenidas en el espacio, con suficiente silencio alrededor para que la proporción, la lógica de costuras y el carácter del material sostengan la atención.",
      detailLabel: "DETALLE",
      detailText:
        "Encuadre más limpio, lectura más cercana y menos distancia atmosférica.",
      surfaceLabel: "SUPERFICIE",
      surfaceText:
        "La página debe priorizar la disciplina material sobre las señales de merchandising.",
      craftLabel: "NOTA DE CONFECCIÓN",
      craftText:
        "La columna secundaria funciona como una pausa controlada. Evita que la capa de producto se reduzca a una simple galería en mosaico.",
      containmentLabel: "CONTENCIÓN",
      containmentText:
        "Esto sigue sin ser una plantilla de tienda. La página de producto debe sentirse curada, escasa y editorial, más cercana a un estudio de diseño que a la lógica de checkout.",
    },
  },

  textures: {
    en: {
      shell: {
        eyebrow: "TEXTURES",
        title: "Surface studies",
        intro:
          "A quieter material page built around softness, grain, fold, and controlled shadow. Unlike the portrait, campaign, or product layers, this page should feel observational and tactile - closer to a study of surface than to an image-led story.",
        meta: "Material crops / quiet macro studies / tactile editorial rhythm",
      },
      noteLabel: "MATERIAL NOTE",
      noteText:
        "This page slows the system down. The role of the imagery is not to stage a scene, but to hold attention on surface, density, light absorption, softness, and the way fabric becomes an atmosphere on its own.",
      grainLabel: "GRAIN",
      grainText:
        "The crop should carry tactile information without becoming noisy.",
      foldLabel: "FOLD",
      foldText:
        "Shape emerges through softness, shadow, and gradual transitions.",
      observationLabel: "OBSERVATION",
      observationText:
        "The secondary column should read like a margin note in a material journal - quieter, smaller, and supportive rather than competitive.",
      softFieldLabel: "SOFT FIELD",
      softFieldText:
        "This layer should feel the least narrative of all four pages. It is about texture as atmosphere, not texture as supporting detail.",
    },
    es: {
      shell: {
        eyebrow: "TEXTURAS",
        title: "Estudios de superficie",
        intro:
          "Una página material más silenciosa construida alrededor de suavidad, grano, pliegue y sombra controlada. A diferencia de las capas de retrato, campaña o producto, esta página debe sentirse observacional y táctil, más cercana a un estudio de superficie que a una historia guiada por imagen.",
        meta: "Recortes de material / estudios macro silenciosos / ritmo editorial táctil",
      },
      noteLabel: "NOTA MATERIAL",
      noteText:
        "Esta página desacelera el sistema. El papel de la imagen no es escenificar una escena, sino sostener la atención sobre la superficie, densidad, absorción de luz, suavidad y la manera en que el tejido se convierte en atmósfera por sí mismo.",
      grainLabel: "GRANO",
      grainText:
        "El recorte debe aportar información táctil sin volverse ruidoso.",
      foldLabel: "PLIEGUE",
      foldText:
        "La forma emerge a través de suavidad, sombra y transiciones graduales.",
      observationLabel: "OBSERVACIÓN",
      observationText:
        "La columna secundaria debe leerse como una nota al margen en un diario material: más silenciosa, más pequeña y de apoyo, no competitiva.",
      softFieldLabel: "CAMPO SUAVE",
      softFieldText:
        "Esta capa debe sentirse la menos narrativa de las cuatro páginas. Trata la textura como atmósfera, no como detalle de apoyo.",
    },
  },
} as const;

export function statusLabel(lang: Lang, status: string) {
  if (status === "made_to_order") return uiCopy[lang].statusMadeToOrder;
  if (status === "sold_out") return uiCopy[lang].statusSoldOut;
  return uiCopy[lang].statusAvailable;
}
