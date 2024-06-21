import { v4 as uuidv4 } from "uuid";

const siteInfo = {
  name: "<Perasconharina/>",
  description: "Páginas internas económicas para PYMES",
  logoUrl: "/assets/logo.png",
  contact: {
    email: "hola@viralpyme.cl",
    social: {
      twitter: "https://twitter.com/holaviralpyme",
      facebook: "https://facebook.com/holaviralpyme",
      instagram: "https://instagram.com/holaviralpyme",
    },
  },
};

const plans = [
  {
    slug: "plan-basico",
    name: "Emprende",
    description: "Anuncia tu negocio en Internet y obtén más contactos de nuevos clientes",
    content: "Ideal para negocios que recién comienzan. Incluye una página de inicio con información básica y un formulario de contacto.",
    featureImage: '/src/assets/plans-images/plan-basico.jpg',
    imageCreadits: 'Foto de <a href="https://unsplash.com/es/@jdiegoph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diego PH</a> en <a href="https://unsplash.com/es/fotos/person-holding-light-bulb-fIq0tET6llw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    features: [
      "1 página web",
      "Diseño responsivo",
      "Formulario de contacto",
      "Enlaces a Redes Sociales",
      "Descripción de servicios y productos, con una foto",
      "Optimización básica para motores de búsqueda (SEO)",
      "Ubicación en Google Maps",
      "Soporte por email durante 3 meses",
      "Webhosting básico gratis por primer año",
    ],
    price: 85000,
  },
  {
    slug: "plan-catalogo",
    name: "Catálogo",
    description: "El Catálogo Online te permite mostrar no solo tus servicios, sino tus productos con sus respectivos precios y detalles de cada uno",
    content: "Perfecto para negocios que necesitan mostrar una gama de productos o servicios con detalles y precios.",
    featureImage: '/src/assets/plans-images/plan-basico.jpg',
    imageCreadits: 'Foto de <a href="https://unsplash.com/es/@jdiegoph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diego PH</a> en <a href="https://unsplash.com/es/fotos/person-holding-light-bulb-fIq0tET6llw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    features: [
      "Hasta 3 páginas internas",
      "Diseño responsivo",
      "Sección de catálogo de productos/servicios",
      "Formulario de contacto",
      "Ubicación en Google Maps",
      "Enlaces a Redes Sociales",
      "Optimización básica para motores de búsqueda (SEO)",
      "Soporte por email durante 3 meses",
      "Webhosting básico gratis por primer año",
    ],
    price: 155000,
    tag: "Recomendado",
  },
  {
    slug: "plan-profesional",
    name: "Profesional",
    description: "Especialmente diseñado para mostrar tus servicios profesionales en diversas áreas",
    content: "Adecuado para profesionales que necesitan una presencia online sólida y detallada.",
    featureImage: '/src/assets/plans-images/plan-basico.jpg',
    imageCreadits: 'Foto de <a href="https://unsplash.com/es/@jdiegoph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diego PH</a> en <a href="https://unsplash.com/es/fotos/person-holding-light-bulb-fIq0tET6llw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    features: [
      "Hasta 6 páginas internas",
      "Diseño responsivo",
      "Sección de servicios detallada",
      "Blog integrado",
      "Formulario de contacto",
      "Optimización avanzada para motores de búsqueda (SEO)",
      "Soporte por email y teléfono durante 6 meses",
      "Webhosting profesional gratis por primer año",
      "1 cuenta de correo corporativo gratis",
    ],
    price: 260000,
  },
  {
    slug: "plan-propiedades",
    name: "Propiedades",
    description: "Diseñado especialmente para corredores de propiedades y agentes inmobiliarios",
    content: "Ideal para agentes inmobiliarios que necesitan mostrar propiedades con detalles, imágenes y mapas.",
    featureImage: '/src/assets/plans-images/plan-basico.jpg',
    imageCreadits: 'Foto de <a href="https://unsplash.com/es/@jdiegoph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diego PH</a> en <a href="https://unsplash.com/es/fotos/person-holding-light-bulb-fIq0tET6llw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    features: [
      "Hasta 6 páginas internas",
      "Diseño responsivo",
      "Sección de propiedades con filtros de búsqueda",
      "Blog integrado",
      "Integración con Google Maps",
      "Formulario de contacto y de solicitud de visita",
      "Optimización avanzada para motores de búsqueda (SEO)",
      "Soporte prioritario por email y teléfono durante 1 año",
      "Webhosting profesional gratis por primer año",
      "2 cuentas de correo corporativo gratis",
    ],
    price: 330000,
  },
  {
    slug: "plan-e-commerce",
    name: "e-Commerce",
    description: "El sitio de tu tienda que muestra tus productos y controla tu stock",
    content: "Perfecto para tiendas que desean vender productos en línea con control de inventario y pasarelas de pago.",
    featureImage: '/src/assets/plans-images/plan-basico.jpg',
    imageCreadits: 'Foto de <a href="https://unsplash.com/es/@jdiegoph?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Diego PH</a> en <a href="https://unsplash.com/es/fotos/person-holding-light-bulb-fIq0tET6llw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    features: [
      "Páginas ilimitadas",
      "Diseño responsivo",
      "Carrito de compras y pago en línea",
      "Gestión de inventario",
      "Integración con métodos de pago (PayPal, Stripe, etc.)",
      "Optimización avanzada para motores de búsqueda (SEO)",
      "Soporte completo por email, teléfono y chat durante 1 año",
      "Blog integrado",
      "Webhosting profesional gratis por primer año",
      "5 cuentas de correo corporativo gratis",
    ],
    price: 980000,
  },
  // Añade más planes aquí
];

const menu = [
  {
    title: "Inicio",
    url: "/",
    id: uuidv4(),
  },
  {
    title: "Nosotros",
    url: "/about",
    id: uuidv4(),
  },
  {
    title: "Planes",
    url: "/plans",
    id: uuidv4(),
  },
  {
    title: "Contacto",
    url: "/contact",
    id: uuidv4(),
  },
];

const config = {
  siteInfo,
  menu,
  plans,
};

export default config;
