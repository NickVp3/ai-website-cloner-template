import type { Category, CategoryMeta, Product } from "@/types";

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: "celulares",
    label: "Celulares",
    description: "Los Ãºltimos smartphones de las mejores marcas.",
  },
  {
    slug: "tecnologia",
    label: "Tecnologia",
    description: "Laptops, tablets, monitores y mÃ¡s.",
  },
  {
    slug: "gaming",
    label: "Gaming",
    description: "Consolas, perifÃ(c)ricos y setups para gamers.",
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
    shortDescription: "El chip A17 Pro mÃ¡s potente de Apple en diseÃ±o titanio.",
    description:
      "El iPhone 15 Pro redefine lo que un smartphone puede hacer. Con el chip A17 Pro de 3 nm, cÃ¡mara principal de 48 MP con zoom Ã³ptico 3x y el nuevo botÃ³n de acciÃ³n personalizable, este es el iPhone mÃ¡s capaz jamÃ¡s creado. Su chasis de titanio grado 5 lo hace mÃ¡s ligero y resistente que nunca.",
    price: 5299000,
    originalPrice: 5899000,
    images: [],
    category: "celulares",
    brand: "Apple",
    stock: 12,
    badge: "nuevo",
    specs: {
      Pantalla: "6.1\" Super Retina XDR OLED 2556Ã—1179 px",
      Procesador: "Apple A17 Pro (3 nm)",
      RAM: "8 GB",
      Almacenamiento: "128 GB",
      Camara: "48 MP + 12 MP + 12 MP",
      Bateria: "3274 mAh",
      "Sistema operativo": "iOS 17",
      Conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3",
      Dimensiones: "146.6 Ã— 70.6 Ã— 8.25 mm",
      Peso: "187 g",
    },
    ratings: [
      { userId: "u1", score: 5, comment: "IncreÃ­ble cÃ¡mara y rendimiento. Vale cada peso.", author: "Carlos M.", date: "2025-03-10" },
      { userId: "u2", score: 5, comment: "El mejor iPhone que he tenido. Titanio se siente premium.", author: "Laura P.", date: "2025-02-22" },
      { userId: "u3", score: 4, comment: "Excelente, aunque la baterÃ­a podrÃ­a ser mayor.", author: "AndrÃ(c)s T.", date: "2025-01-15" },
    ],
    featured: true,
  },
  {
    id: "samsung-s24-ultra",
    slug: "samsung-galaxy-s24-ultra-256gb",
    name: "Samsung Galaxy S24 Ultra 256GB Titanio Negro",
    shortDescription: "S Pen integrado, zoom 100x y Galaxy AI nativo.",
    description:
      "El Galaxy S24 Ultra es el smartphone mÃ¡s poderoso de Samsung. Con su pantalla Dynamic AMOLED de 6.8\", el S Pen integrado y la exclusiva suite Galaxy AI, redefinirÃ¡s tu productividad. Su sistema de cuatro cÃ¡maras con zoom espacial de 100x captura cada detalle.",
    price: 5269000,
    originalPrice: 6199000,
    images: [],
    category: "celulares",
    brand: "Samsung",
    stock: 8,
    badge: "oferta",
    specs: {
      Pantalla: "6.8\" Dynamic AMOLED 2X 3088Ã—1440 px 120Hz",
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
    shortDescription: "Carga de 125W y cÃ¡mara con OIS mejorado.",
    description:
      "El Motorola Edge 50 Pro destaca por su carga ultrarrÃ¡pida de 125W que llena la baterÃ­a en menos de 20 minutos, su pantalla pOLED de 144Hz y su sistema de cÃ¡maras con estabilizaciÃ³n Ã³ptica avanzada. Un flagship assequible para quienes no quieren sacrificar rendimiento.",
    price: 1799000,
    images: [],
    category: "celulares",
    brand: "Motorola",
    stock: 20,
    badge: "hot",
    specs: {
      Pantalla: "6.7\" pOLED 2712Ã—1220 px 144Hz",
      Procesador: "Snapdragon 7 Gen 3",
      RAM: "12 GB",
      Almacenamiento: "256 GB",
      Camara: "50 MP + 13 MP + 10 MP",
      Bateria: "4500 mAh, carga 125W",
      "Sistema operativo": "Android 14",
    },
    ratings: [
      { userId: "u6", score: 5, comment: "La carga de 125W es una locura. En 18 min estÃ¡ lleno.", author: "SebastiÃ¡n L.", date: "2025-04-10" },
    ],
    featured: false,
  },
  {
    id: "xiaomi-14",
    slug: "xiaomi-14-512gb-ceramic",
    name: "Xiaomi 14 512GB Ceramic Black",
    shortDescription: "Co-engineered con Leica. Snapdragon 8 Gen 3.",
    description:
      "El Xiaomi 14 lleva la fotografÃ­a mobile a otro nivel gracias a su sistema de cÃ¡maras Leica con lentes de 1\" de pulgada. Combinado con el Snapdragon 8 Gen 3 y una pantalla AMOLED de 120Hz, ofrece una experiencia flagship completa a un precio mÃ¡s accesible.",
    price: 3499000,
    images: [],
    category: "celulares",
    brand: "Xiaomi",
    stock: 6,
    specs: {
      Pantalla: "6.36\" AMOLED 2670Ã—1200 px 120Hz",
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
    shortDescription: "El laptop mÃ¡s delgado de Apple con chip M3.",
    description:
      "El MacBook Air con chip M3 ofrece hasta 18 horas de baterÃ­a, pantalla Liquid Retina de 13.6\", y un rendimiento que supera a muchos laptops con ventilador. Delgado, silencioso y extraordinariamente capaz para trabajo creativo, programaciÃ³n y entretenimiento.",
    price: 5799000,
    originalPrice: 6299000,
    images: [],
    category: "tecnologia",
    brand: "Apple",
    stock: 5,
    badge: "nuevo",
    specs: {
      Pantalla: "13.6\" Liquid Retina 2560Ã—1664 px",
      Chip: "Apple M3 (8 nÃºcleos CPU, 10 GPU)",
      RAM: "8 GB unificada",
      Almacenamiento: "256 GB SSD",
      Bateria: "Hasta 18 horas",
      Peso: "1.24 kg",
      Puertos: "2Ã— USB-C Thunderbolt 3, MagSafe 3, jack 3.5mm",
    },
    ratings: [
      { userId: "u7", score: 5, comment: "IncreÃ­ble rendimiento para desarrollo web. Nunca se calienta.", author: "Diego H.", date: "2025-03-05" },
      { userId: "u8", score: 5, comment: "Bateria que dura todo el dÃ­a sin cargarlo. Perfecto.", author: "Mariana C.", date: "2025-02-14" },
    ],
    featured: true,
  },
  {
    id: "samsung-odyssey-g5",
    slug: "samsung-odyssey-g5-27-qhd",
    name: "Monitor Samsung Odyssey G5 27\" QHD 165Hz",
    shortDescription: "Curvo 1000R, QHD y 165Hz para gaming y trabajo.",
    description:
      "El Odyssey G5 combina una resoluciÃ³n QHD de 2560Ã—1440 con una tasa de refresco de 165Hz y curvatura de 1000R para una experiencia gaming y productiva inmersiva. Tiempo de respuesta de 1ms GTG y AMD FreeSync Premium incluidos.",
    price: 1199000,
    images: [],
    category: "tecnologia",
    brand: "Samsung",
    stock: 9,
    specs: {
      Panel: "27\" VA curvo 1000R",
      Resolucion: "2560Ã—1440 (QHD)",
      "Tasa de refresco": "165Hz",
      "Tiempo de respuesta": "1ms GTG",
      HDR: "HDR10",
      Conectividad: "2Ã— HDMI 2.0, 1Ã— DisplayPort 1.2",
      "Sync technology": "AMD FreeSync Premium",
    },
    ratings: [
      { userId: "u9", score: 4, comment: "Excelente relaciÃ³n calidad-precio. Colores vibrantes.", author: "TomÃ¡s W.", date: "2025-01-28" },
    ],
    featured: false,
  },
  {
    id: "ipad-pro-m4",
    slug: "ipad-pro-11-m4-256gb",
    name: "iPad Pro 11\" M4 Wi-Fi 256GB",
    shortDescription: "El iPad mÃ¡s potente con pantalla OLED Ultra Retina XDR.",
    description:
      "El iPad Pro con chip M4 presenta la primera pantalla OLED de doble capa de Apple, el Ultra Retina XDR, con brillo increÃ­ble y negros perfectos. Es el dispositivo mÃ¡s delgado que Apple ha fabricado y con el chip M4 supera a la mayorÃ­a de laptops del mercado.",
    price: 4199000,
    images: [],
    category: "tecnologia",
    brand: "Apple",
    stock: 4,
    badge: "hot",
    specs: {
      Pantalla: "11\" Ultra Retina XDR OLED 2420Ã—1668 px",
      Chip: "Apple M4",
      RAM: "8 GB",
      Almacenamiento: "256 GB",
      Camara: "12 MP + LiDAR",
      Bateria: "Hasta 10 horas",
    },
    ratings: [
      { userId: "u10", score: 5, comment: "La pantalla OLED es absolutamente impresionante.", author: "Natalia B.", date: "2025-04-05" },
      { userId: "u11", score: 5, comment: "Perfecto para diseÃ±o grÃ¡fico con el Apple Pencil.", author: "Ricardo V.", date: "2025-03-22" },
    ],
    featured: true,
  },

  // GAMING
  {
    id: "ps5-slim",
    slug: "playstation-5-slim-disc",
    name: "PlayStation 5 Slim Disc Edition",
    shortDescription: "30% mÃ¡s compacto. Los mejores exclusivos de PS5.",
    description:
      "La PlayStation 5 Slim es mÃ¡s delgada y liviana que la versiÃ³n original, manteniendo el mismo procesador AMD Zen 2 y GPU RDNA 2 que entrega grÃ¡ficos en 4K a 60fps (hasta 8K compatible). Con SSD de 1TB y DualSense que incluye retroalimentaciÃ³n hÃ¡ptica, la inmersiÃ³n es total.",
    price: 3299000,
    images: [],
    category: "gaming",
    brand: "Sony",
    stock: 7,
    badge: "nuevo",
    specs: {
      CPU: "AMD Zen 2, 8 nÃºcleos a 3.5GHz",
      GPU: "AMD RDNA 2, 10.3 TFLOPS",
      RAM: "16 GB GDDR6",
      Almacenamiento: "1 TB SSD personalizado",
      "Resolucion mÃ¡x": "8K (compatible), 4K 60fps",
      Optico: "Blu-ray 4K Ultra HD",
      Conectividad: "Wi-Fi 6, Bluetooth 5.1, USB-A Ã— 2, USB-C",
    },
    ratings: [
      { userId: "u12", score: 5, comment: "El DualSense es una experiencia Ãºnica. Los exclusivos son increÃ­bles.", author: "Camilo R.", date: "2025-03-30" },
      { userId: "u13", score: 5, comment: "MÃ¡s compacta y silenciosa que la original. Perfecta.", author: "Isabella M.", date: "2025-03-01" },
    ],
    featured: true,
  },
  {
    id: "hyperx-alloy-origins",
    slug: "hyperx-alloy-origins-core-teclado",
    name: "Teclado MecÃ¡nico HyperX Alloy Origins Core TKL",
    shortDescription: "Switches HyperX Red lineales. RGB por tecla.",
    description:
      "El HyperX Alloy Origins Core es un teclado mecÃ¡nico TKL (sin numpad) con switches HyperX Red lineales que ofrecen una respuesta suave y silenciosa ideal para gaming. Iluminacion RGB por tecla programable y chasis de aluminio de grado aeronÃ¡utico.",
    price: 449000,
    originalPrice: 599000,
    images: [],
    category: "gaming",
    brand: "HyperX",
    stock: 15,
    badge: "oferta",
    specs: {
      Tipo: "MecÃ¡nico TKL (tenkeyless)",
      Switches: "HyperX Red (lineal)",
      Iluminacion: "RGB por tecla",
      Chasis: "Aluminio grado aeronÃ¡utico",
      Conectividad: "USB-C desmontable",
      "Anti-ghosting": "100% NKRO",
    },
    ratings: [
      { userId: "u14", score: 5, comment: "Excelente teclado. Los switches Red son perfectos para gaming.", author: "Juan D.", date: "2025-02-10" },
      { userId: "u15", score: 4, comment: "Muy buena calidad, aunque el software podrÃ­a mejorar.", author: "SofÃ­a A.", date: "2025-01-20" },
    ],
    featured: false,
  },
  {
    id: "logitech-g-pro-x2",
    slug: "logitech-g-pro-x-superlight-2",
    name: "Mouse Logitech G Pro X Superlight 2",
    shortDescription: "60g ultraligero. Sensor HERO 2 de 32000 DPI.",
    description:
      "El Logitech G Pro X Superlight 2 es el ratÃ³n gaming mÃ¡s avanzado de Logitech. Con solo 60 gramos de peso, el nuevo sensor HERO 2 de 32000 DPI y la tecnologÃ­a LIGHTSPEED inalÃ¡mbrica con latencia de 1ms, ofrece una precisiÃ³n y agilidad sin precedentes.",
    price: 699000,
    images: [],
    category: "gaming",
    brand: "Logitech",
    stock: 11,
    specs: {
      Peso: "60 g",
      Sensor: "HERO 2 - hasta 32000 DPI",
      Botones: "5 programables",
      Conectividad: "LIGHTSPEED inalÃ¡mbrico + USB-C",
      Bateria: "Hasta 95 horas",
      "Click switch": "LIGHTFORCE hÃ­brido",
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
    shortDescription: "Memoria de espuma frÃ­a. Inclinacion 4D integral.",
    description:
      "La Secretlab TITAN Evo 2025 establece el estÃ¡ndar en sillas gaming. Con espuma de memoria frÃ­a de prÃ³xima generaciÃ³n que no colapsa con el tiempo, soporte lumbar magnÃ(c)tico ajustable, reposabrazos 4D y tapicerÃ­a NEO Hybrid Leatherette, es la silla definitiva para sesiones largas.",
    price: 2199000,
    images: [],
    category: "gaming",
    brand: "Secretlab",
    stock: 3,
    specs: {
      Material: "NEO Hybrid Leatherette",
      Relleno: "Espuma de memoria frÃ­a",
      Inclinacion: "165Â° reclinaciÃ³n",
      Reposabrazos: "4D ajustables",
      Soporte: "Lumbar magnÃ(c)tico integrado",
      "Peso mÃ¡ximo": "130 kg",
    },
    ratings: [
      { userId: "u17", score: 5, comment: "DespuÃ(c)s de 6 meses no hay dolor de espalda. IncreÃ­ble.", author: "Juliana F.", date: "2025-02-28" },
      { userId: "u18", score: 5, comment: "La mejor inversiÃ³n que hice para mi setup.", author: "Alejandro N.", date: "2025-01-05" },
    ],
    featured: true,
  },

  // ACCESORIOS
  {
    id: "airpods-pro-2",
    slug: "airpods-pro-2da-gen-usb-c",
    name: "AirPods Pro 2Âª Gen con USB-C",
    shortDescription: "CancelaciÃ³n activa de ruido. Audio adaptativo.",
    description:
      "Los AirPods Pro de 2Âª generaciÃ³n con conector USB-C ofrecen la mejor cancelaciÃ³n activa de ruido de Apple, el nuevo Audio Adaptativo que ajusta automÃ¡ticamente la mezcla entre ANC y modo transparente, y hasta 30 horas de baterÃ­a total con el estuche.",
    price: 1349000,
    images: [],
    category: "accesorios",
    brand: "Apple",
    stock: 18,
    specs: {
      Driver: "Apple H2",
      ANC: "CancelaciÃ³n activa de ruido",
      Audio: "Audio espacial con seguimiento dinÃ¡mico de cabeza",
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
    shortDescription: "Carga 3 dispositivos simultÃ¡neamente. Tecnologia GaN.",
    description:
      "El cargador Anker 140W GaN3 Ultra carga tu MacBook Pro a mÃ¡xima velocidad, un iPhone y unos AirPods al mismo tiempo desde un solo bloque compacto. La tecnologÃ­a GaN de tercera generaciÃ³n lo hace un 40% mÃ¡s pequeÃ±o que cargadores equivalentes.",
    price: 249000,
    images: [],
    category: "accesorios",
    brand: "Anker",
    stock: 30,
    badge: "nuevo",
    specs: {
      Potencia: "140W total",
      Puertos: "2Ã— USB-C + 1Ã— USB-A",
      Tecnologia: "GaN3 (Gallium Nitride)",
      Protocolos: "USB PD 3.1, PPS, Quick Charge 5.0",
      Entrada: "100-240V (internacional)",
      Garantia: "18 meses Anker",
    },
    ratings: [
      { userId: "u21", score: 5, comment: "Cargo laptop, celular y audÃ­fonos a la vez. IncreÃ­ble.", author: "Esteban J.", date: "2025-04-08" },
    ],
    featured: false,
  },
  {
    id: "samsung-t7-shield-2tb",
    slug: "samsung-t7-shield-2tb-usb32",
    name: "SSD PortÃ¡til Samsung T7 Shield 2TB USB 3.2",
    shortDescription: "Resistente a golpes, agua y polvo. 1050MB/s.",
    description:
      "El Samsung T7 Shield combina velocidades de transferencia de hasta 1050 MB/s con resistencia IP65 a polvo y agua, y un chasis de goma que absorbe golpes. Con 2TB de capacidad, es el compaÃ±ero perfecto para creadores de contenido y profesionales en movimiento.",
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
      Resistencia: "IP65, hasta 3m de caÃ­da",
      Cifrado: "AES 256-bit",
      Compatibilidad: "USB-A y USB-C incluidos",
    },
    ratings: [
      { userId: "u22", score: 5, comment: "Velocidad real increÃ­ble. Lo uso para editar 4K directo.", author: "Carolina Z.", date: "2025-03-20" },
      { userId: "u23", score: 4, comment: "Muy rÃ¡pido y robusto. El precio bajÃ³ bastante.", author: "HernÃ¡n Q.", date: "2025-02-15" },
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
