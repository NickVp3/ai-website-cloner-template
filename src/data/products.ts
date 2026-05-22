import type { Category, CategoryMeta, Product } from "@/types";

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "celulares",
    label: "Celulares",
    description: "Los Ultimos smartphones de las mejores marcas.",
  },
  {
    slug: "tecnologia",
    label: "Tecnología",
    description: "Laptops, tablets, monitores y más.",
  },
  {
    slug: "gaming",
    label: "Gaming",
    description: "Consolas, periféricos y setups para gamers.",
  },
  {
    slug: "accesorios",
    label: "Accesorios",
    description: "Carga, audio, almacenamiento y complementos.",
  },
];

export const PRODUCTS: Product[] = [
  // CELULARES
  {
    id: "iphone-15-pro",
    slug: "iphone-15-pro-128gb",
    name: "iPhone 15 Pro 128GB Titanio Natural",
    shortDescription: "El chip A17 Pro más potente de Apple en diseño titanio.",
    description:
      "El iPhone 15 Pro redefine lo que un smartphone puede hacer. Con el chip A17 Pro de 3 nm, cámara principal de 48 MP con zoom óptico 3x y el nuevo botón de acción personalizable, este es el iPhone más capaz jamás creado. Su chasis de titanio grado 5 lo hace más ligero y resistente que nunca.",
    price: 5299000,
    originalPrice: 5899000,
    images: [],
    category: "celulares",
    brand: "Apple",
    stock: 12,
    badge: "nuevo",
    specs: {
      Pantalla: "6.1\" Super Retina XDR OLED 2556×1179 px",
      Procesador: "Apple A17 Pro (3 nm)",
      RAM: "8 GB",
      Almacenamiento: "128 GB",
      Camara: "48 MP + 12 MP + 12 MP",
      Bateria: "3274 mAh",
      "Sistema operativo": "iOS 17",
      Conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3",
      Dimensiones: "146.6 × 70.6 × 8.25 mm",
      Peso: "187 g",
    },
    ratings: [
      { userId: "u1", score: 5, comment: "Increíble cámara y rendimiento. Vale cada peso.", author: "Carlos M.", date: "2025-03-10" },
      { userId: "u2", score: 5, comment: "El mejor iPhone que he tenido. Titanio se siente premium.", author: "Laura P.", date: "2025-02-22" },
      { userId: "u3", score: 4, comment: "Excelente, aunque la batería podría ser mayor.", author: "Andrés T.", date: "2025-01-15" },
    ],
    featured: true,
  },
  {
    id: "samsung-s24-ultra",
    slug: "samsung-galaxy-s24-ultra-256gb",
    name: "Samsung Galaxy S24 Ultra 256GB Titanio Negro",
    shortDescription: "S Pen integrado, zoom 100x y Galaxy AI nativo.",
    description:
      "El Galaxy S24 Ultra es el smartphone más poderoso de Samsung. Con su pantalla Dynamic AMOLED de 6.8\", el S Pen integrado y la exclusiva suite Galaxy AI, redefinirás tu productividad. Su sistema de cuatro cámaras con zoom espacial de 100x captura cada detalle.",
    price: 5269000,
    originalPrice: 6199000,
    images: [],
    category: "celulares",
    brand: "Samsung",
    stock: 8,
    badge: "oferta",
    specs: {
      Pantalla: "6.8\" Dynamic AMOLED 2X 3088×1440 px 120Hz",
      Procesador: "Snapdragon 8 Gen 3",
      RAM: "12 GB",
      Almacenamiento: "256 GB",
      Camara: "200 MP + 50 MP + 12 MP + 10 MP",
      Bateria: "5000 mAh",
      "Sistema operativo": "Android 14 / One UI 6.1",
      Conectividad: "5G, Wi-Fi 7, Bluetooth 5.3",
      Extras: "S Pen integrado, IP68",
    },
    ratings: [
      { userId: "u4", score: 5, comment: "El S Pen es un diferencial enorme. Pantalla espectacular.", author: "Valentina R.", date: "2025-04-01" },
      { userId: "u5", score: 4, comment: "Muy bueno pero grande para mi mano.", author: "Felipe G.", date: "2025-03-18" },
    ],
    featured: true,
  },
  {
    id: "motorola-edge-50",
    slug: "motorola-edge-50-pro-256gb",
    name: "Motorola Edge 50 Pro 256GB",
    shortDescription: "Carga de 125W y cámara con OIS mejorado.",
    description:
      "El Motorola Edge 50 Pro destaca por su carga ultrarrápida de 125W que llena la batería en menos de 20 minutos, su pantalla pOLED de 144Hz y su sistema de cámaras con estabilización óptica avanzada. Un flagship assequible para quienes no quieren sacrificar rendimiento.",
    price: 1799000,
    images: [],
    category: "celulares",
    brand: "Motorola",
    stock: 20,
    badge: "hot",
    specs: {
      Pantalla: "6.7\" pOLED 2712×1220 px 144Hz",
      Procesador: "Snapdragon 7 Gen 3",
      RAM: "12 GB",
      Almacenamiento: "256 GB",
      Camara: "50 MP + 13 MP + 10 MP",
      Bateria: "4500 mAh, carga 125W",
      "Sistema operativo": "Android 14",
    },
    ratings: [
      { userId: "u6", score: 5, comment: "La carga de 125W es una locura. En 18 min está lleno.", author: "Sebastián L.", date: "2025-04-10" },
    ],
    featured: false,
  },
  {
    id: "xiaomi-14",
    slug: "xiaomi-14-512gb-ceramic",
    name: "Xiaomi 14 512GB Ceramic Black",
    shortDescription: "Co-engineered con Leica. Snapdragon 8 Gen 3.",
    description:
      "El Xiaomi 14 lleva la fotografía mobile a otro nivel gracias a su sistema de cámaras Leica con lentes de 1\" de pulgada. Combinado con el Snapdragon 8 Gen 3 y una pantalla AMOLED de 120Hz, ofrece una experiencia flagship completa a un precio más accesible.",
    price: 3499000,
    images: [],
    category: "celulares",
    brand: "Xiaomi",
    stock: 6,
    specs: {
      Pantalla: "6.36\" AMOLED 2670×1200 px 120Hz",
      Procesador: "Snapdragon 8 Gen 3",
      RAM: "12 GB",
      Almacenamiento: "512 GB",
      Camara: "50 MP Leica + 50 MP + 50 MP",
      Bateria: "4610 mAh, carga 90W",
    },
    ratings: [],
    featured: false,
  },

  // TECNOLOGIA
  {
    id: "macbook-air-m3",
    slug: "macbook-air-m3-13-8gb",
    name: "MacBook Air M3 13\" 8GB 256GB",
    shortDescription: "El laptop más delgado de Apple con chip M3.",
    description:
      "El MacBook Air con chip M3 ofrece hasta 18 horas de batería, pantalla Liquid Retina de 13.6\", y un rendimiento que supera a muchos laptops con ventilador. Delgado, silencioso y extraordinariamente capaz para trabajo creativo, programación y entretenimiento.",
    price: 5799000,
    originalPrice: 6299000,
    images: [],
    category: "tecnologia",
    brand: "Apple",
    stock: 5,
    badge: "nuevo",
    specs: {
      Pantalla: "13.6\" Liquid Retina 2560×1664 px",
      Chip: "Apple M3 (8 núcleos CPU, 10 GPU)",
      RAM: "8 GB unificada",
      Almacenamiento: "256 GB SSD",
      Bateria: "Hasta 18 horas",
      Peso: "1.24 kg",
      Puertos: "2× USB-C Thunderbolt 3, MagSafe 3, jack 3.5mm",
    },
    ratings: [
      { userId: "u7", score: 5, comment: "Increíble rendimiento para desarrollo web. Nunca se calienta.", author: "Diego H.", date: "2025-03-05" },
      { userId: "u8", score: 5, comment: "Bateria que dura todo el día sin cargarlo. Perfecto.", author: "Mariana C.", date: "2025-02-14" },
    ],
    featured: true,
  },
  {
    id: "samsung-odyssey-g5",
    slug: "samsung-odyssey-g5-27-qhd",
    name: "Monitor Samsung Odyssey G5 27\" QHD 165Hz",
    shortDescription: "Curvo 1000R, QHD y 165Hz para gaming y trabajo.",
    description:
      "El Odyssey G5 combina una resolución QHD de 2560×1440 con una tasa de refresco de 165Hz y curvatura de 1000R para una experiencia gaming y productiva inmersiva. Tiempo de respuesta de 1ms GTG y AMD FreeSync Premium incluidos.",
    price: 1199000,
    images: [],
    category: "tecnologia",
    brand: "Samsung",
    stock: 9,
    specs: {
      Panel: "27\" VA curvo 1000R",
      Resolucion: "2560×1440 (QHD)",
      "Tasa de refresco": "165Hz",
      "Tiempo de respuesta": "1ms GTG",
      HDR: "HDR10",
      Conectividad: "2× HDMI 2.0, 1× DisplayPort 1.2",
      "Sync technology": "AMD FreeSync Premium",
    },
    ratings: [
      { userId: "u9", score: 4, comment: "Excelente relación calidad-precio. Colores vibrantes.", author: "Tomás W.", date: "2025-01-28" },
    ],
    featured: false,
  },
  {
    id: "ipad-pro-m4",
    slug: "ipad-pro-11-m4-256gb",
    name: "iPad Pro 11\" M4 Wi-Fi 256GB",
    shortDescription: "El iPad más potente con pantalla OLED Ultra Retina XDR.",
    description:
      "El iPad Pro con chip M4 presenta la primera pantalla OLED de doble capa de Apple, el Ultra Retina XDR, con brillo increíble y negros perfectos. Es el dispositivo más delgado que Apple ha fabricado y con el chip M4 supera a la mayoría de laptops del mercado.",
    price: 4199000,
    images: [],
    category: "tecnologia",
    brand: "Apple",
    stock: 4,
    badge: "hot",
    specs: {
      Pantalla: "11\" Ultra Retina XDR OLED 2420×1668 px",
      Chip: "Apple M4",
      RAM: "8 GB",
      Almacenamiento: "256 GB",
      Camara: "12 MP + LiDAR",
      Bateria: "Hasta 10 horas",
    },
    ratings: [
      { userId: "u10", score: 5, comment: "La pantalla OLED es absolutamente impresionante.", author: "Natalia B.", date: "2025-04-05" },
      { userId: "u11", score: 5, comment: "Perfecto para diseño gráfico con el Apple Pencil.", author: "Ricardo V.", date: "2025-03-22" },
    ],
    featured: true,
  },

  // GAMING
  {
    id: "ps5-slim",
    slug: "playstation-5-slim-disc",
    name: "PlayStation 5 Slim Disc Edition",
    shortDescription: "30% más compacto. Los mejores exclusivos de PS5.",
    description:
      "La PlayStation 5 Slim es más delgada y liviana que la versión original, manteniendo el mismo procesador AMD Zen 2 y GPU RDNA 2 que entrega gráficos en 4K a 60fps (hasta 8K compatible). Con SSD de 1TB y DualSense que incluye retroalimentación háptica, la inmersión es total.",
    price: 3299000,
    images: [],
    category: "gaming",
    brand: "Sony",
    stock: 7,
    badge: "nuevo",
    specs: {
      CPU: "AMD Zen 2, 8 núcleos a 3.5GHz",
      GPU: "AMD RDNA 2, 10.3 TFLOPS",
      RAM: "16 GB GDDR6",
      Almacenamiento: "1 TB SSD personalizado",
      "Resolucion máx": "8K (compatible), 4K 60fps",
      Optico: "Blu-ray 4K Ultra HD",
      Conectividad: "Wi-Fi 6, Bluetooth 5.1, USB-A × 2, USB-C",
    },
    ratings: [
      { userId: "u12", score: 5, comment: "El DualSense es una experiencia única. Los exclusivos son increíbles.", author: "Camilo R.", date: "2025-03-30" },
      { userId: "u13", score: 5, comment: "Más compacta y silenciosa que la original. Perfecta.", author: "Isabella M.", date: "2025-03-01" },
    ],
    featured: true,
  },
  {
    id: "hyperx-alloy-origins",
    slug: "hyperx-alloy-origins-core-teclado",
    name: "Teclado Mecánico HyperX Alloy Origins Core TKL",
    shortDescription: "Switches HyperX Red lineales. RGB por tecla.",
    description:
      "El HyperX Alloy Origins Core es un teclado mecánico TKL (sin numpad) con switches HyperX Red lineales que ofrecen una respuesta suave y silenciosa ideal para gaming. Iluminacion RGB por tecla programable y chasis de aluminio de grado aeronáutico.",
    price: 449000,
    originalPrice: 599000,
    images: [],
    category: "gaming",
    brand: "HyperX",
    stock: 15,
    badge: "oferta",
    specs: {
      Tipo: "Mecánico TKL (tenkeyless)",
      Switches: "HyperX Red (lineal)",
      Iluminacion: "RGB por tecla",
      Chasis: "Aluminio grado aeronáutico",
      Conectividad: "USB-C desmontable",
      "Anti-ghosting": "100% NKRO",
    },
    ratings: [
      { userId: "u14", score: 5, comment: "Excelente teclado. Los switches Red son perfectos para gaming.", author: "Juan D.", date: "2025-02-10" },
      { userId: "u15", score: 4, comment: "Muy buena calidad, aunque el software podría mejorar.", author: "Sofía A.", date: "2025-01-20" },
    ],
    featured: false,
  },
  {
    id: "logitech-g-pro-x2",
    slug: "logitech-g-pro-x-superlight-2",
    name: "Mouse Logitech G Pro X Superlight 2",
    shortDescription: "60g ultraligero. Sensor HERO 2 de 32000 DPI.",
    description:
      "El Logitech G Pro X Superlight 2 es el ratón gaming más avanzado de Logitech. Con solo 60 gramos de peso, el nuevo sensor HERO 2 de 32000 DPI y la tecnología LIGHTSPEED inalámbrica con latencia de 1ms, ofrece una precisión y agilidad sin precedentes.",
    price: 699000,
    images: [],
    category: "gaming",
    brand: "Logitech",
    stock: 11,
    specs: {
      Peso: "60 g",
      Sensor: "HERO 2 - hasta 32000 DPI",
      Botones: "5 programables",
      Conectividad: "LIGHTSPEED inalámbrico + USB-C",
      Bateria: "Hasta 95 horas",
      "Click switch": "LIGHTFORCE híbrido",
    },
    ratings: [
      { userId: "u16", score: 5, comment: "El mejor mouse que he usado en mi vida. Vale cada peso.", author: "Pablo E.", date: "2025-04-12" },
    ],
    featured: false,
  },
  {
    id: "secretlab-titan-evo",
    slug: "secretlab-titan-evo-2025",
    name: "Silla Gamer Secretlab TITAN Evo 2025",
    shortDescription: "Memoria de espuma fría. Inclinacion 4D integral.",
    description:
      "La Secretlab TITAN Evo 2025 establece el estándar en sillas gaming. Con espuma de memoria fría de próxima generación que no colapsa con el tiempo, soporte lumbar magnético ajustable, reposabrazos 4D y tapicería NEO Hybrid Leatherette, es la silla definitiva para sesiones largas.",
    price: 2199000,
    images: [],
    category: "gaming",
    brand: "Secretlab",
    stock: 3,
    specs: {
      Material: "NEO Hybrid Leatherette",
      Relleno: "Espuma de memoria fría",
      Inclinacion: "165° reclinación",
      Reposabrazos: "4D ajustables",
      Soporte: "Lumbar magnético integrado",
      "Peso máximo": "130 kg",
    },
    ratings: [
      { userId: "u17", score: 5, comment: "Después de 6 meses no hay dolor de espalda. Increíble.", author: "Juliana F.", date: "2025-02-28" },
      { userId: "u18", score: 5, comment: "La mejor inversión que hice para mi setup.", author: "Alejandro N.", date: "2025-01-05" },
    ],
    featured: true,
  },

  // ACCESORIOS
  {
    id: "airpods-pro-2",
    slug: "airpods-pro-2da-gen-usb-c",
    name: "AirPods Pro 2ª Gen con USB-C",
    shortDescription: "Cancelación activa de ruido. Audio adaptativo.",
    description:
      "Los AirPods Pro de 2ª generación con conector USB-C ofrecen la mejor cancelación activa de ruido de Apple, el nuevo Audio Adaptativo que ajusta automáticamente la mezcla entre ANC y modo transparente, y hasta 30 horas de batería total con el estuche.",
    price: 1349000,
    images: [],
    category: "accesorios",
    brand: "Apple",
    stock: 18,
    specs: {
      Driver: "Apple H2",
      ANC: "Cancelación activa de ruido",
      Audio: "Audio espacial con seguimiento dinámico de cabeza",
      Bateria: "6h (30h con estuche)",
      Resistencia: "IP54 (auriculares y estuche)",
      Conectividad: "Bluetooth 5.3, USB-C",
    },
    ratings: [
      { userId: "u19", score: 5, comment: "El ANC es magistral. En el metro no escucho absolutamente nada.", author: "Luciana O.", date: "2025-03-15" },
      { userId: "u20", score: 4, comment: "Excelentes, pero caros. Si tienes iPhone valen la pena.", author: "Mateo S.", date: "2025-02-08" },
    ],
    featured: true,
  },
  {
    id: "anker-140w-gan",
    slug: "anker-140w-gan-ultra-compact",
    name: "Cargador Anker 140W GaN Ultra Compact",
    shortDescription: "Carga 3 dispositivos simultáneamente. Tecnología GaN.",
    description:
      "El cargador Anker 140W GaN3 Ultra carga tu MacBook Pro a máxima velocidad, un iPhone y unos AirPods al mismo tiempo desde un solo bloque compacto. La tecnología GaN de tercera generación lo hace un 40% más pequeño que cargadores equivalentes.",
    price: 249000,
    images: [],
    category: "accesorios",
    brand: "Anker",
    stock: 30,
    badge: "nuevo",
    specs: {
      Potencia: "140W total",
      Puertos: "2× USB-C + 1× USB-A",
      Tecnología: "GaN3 (Gallium Nitride)",
      Protocolos: "USB PD 3.1, PPS, Quick Charge 5.0",
      Entrada: "100-240V (internacional)",
      Garantia: "18 meses Anker",
    },
    ratings: [
      { userId: "u21", score: 5, comment: "Cargo laptop, celular y audífonos a la vez. Increíble.", author: "Esteban J.", date: "2025-04-08" },
    ],
    featured: false,
  },
  {
    id: "samsung-t7-shield-2tb",
    slug: "samsung-t7-shield-2tb-usb32",
    name: "SSD Portátil Samsung T7 Shield 2TB USB 3.2",
    shortDescription: "Resistente a golpes, agua y polvo. 1050MB/s.",
    description:
      "El Samsung T7 Shield combina velocidades de transferencia de hasta 1050 MB/s con resistencia IP65 a polvo y agua, y un chasis de goma que absorbe golpes. Con 2TB de capacidad, es el compañero perfecto para creadores de contenido y profesionales en movimiento.",
    price: 629000,
    originalPrice: 699000,
    images: [],
    category: "accesorios",
    brand: "Samsung",
    stock: 14,
    badge: "oferta",
    specs: {
      Capacidad: "2 TB",
      Velocidad: "Lectura 1050 MB/s / Escritura 1000 MB/s",
      Interfaz: "USB 3.2 Gen 2 (10Gbps)",
      Resistencia: "IP65, hasta 3m de caída",
      Cifrado: "AES 256-bit",
      Compatibilidad: "USB-A y USB-C incluidos",
    },
    ratings: [
      { userId: "u22", score: 5, comment: "Velocidad real increíble. Lo uso para editar 4K directo.", author: "Carolina Z.", date: "2025-03-20" },
      { userId: "u23", score: 4, comment: "Muy rápido y robusto. El precio bajó bastante.", author: "Hernán Q.", date: "2025-02-15" },
    ],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getAverageRating(product: Product): number {
  if (product.ratings.length === 0) return 0;
  const sum = product.ratings.reduce((acc, r) => acc + r.score, 0);
  return Math.round((sum / product.ratings.length) * 10) / 10;
}

export function getCategoryMeta(slug: Category): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
