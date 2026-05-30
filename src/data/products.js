import audifonospremium from '../assets/audifonospremium.jpg'
import blazerejecutivo from '../assets/blazerejecutivo.jpg'
import botasdecuero from '../assets/botasdecuero.jpg'
import chaquetadecuero from '../assets/chaquetadecuero.jpg'
import coleccionjoyeria from '../assets/coleccionjoyeria.jpg'
import coleccionropaprimavera from '../assets/coleccionropaprimavera.jpg'
import headsetprofesional from '../assets/headsetprofesional.jpg'
import macbookpro from '../assets/macbookpro.jpg'
import mouseinalambrico from '../assets/mouseinalambrico.jpg'
import relojelite from '../assets/relojelite.jpg'
import setaccesorios from '../assets/setaccesorios.jpg'
import setupcompleto from '../assets/setupcompleto.jpg'

const baseProducts = [
  {
    slug: 'audifonos-inalambricos-premium',
    category: 'Electronicos',
    title: 'Audifonos Inalambricos Premium',
    price: '279.92',
    oldPrice: '349.90',
    rating: 5,
    ratingValue: 4.8,
    reviews: 234,
    discount: 20,
    imageSrc: audifonospremium,
    imageAlt: 'Audifonos inalambricos premium',
    description:
      'Audifonos inalambricos con cancelacion de ruido activa, bateria de 30 horas y sonido de alta fidelidad. Perfectos para trabajo, estudio y entretenimiento.',
    stockLabel: 'En Stock',
    shippingText: 'Envio gratis +S/ 200',
    warrantyText: '30 dias de devolucion',
  },
  {
    slug: 'laptop-macbook-pro',
    category: 'Electronicos',
    title: 'Laptop MacBook Pro',
    price: '5299.90',
    oldPrice: '',
    rating: 5,
    ratingValue: 4.9,
    reviews: 567,
    discount: null,
    imageSrc: macbookpro,
    imageAlt: 'Laptop MacBook Pro',
    description:
      'Laptop de alto rendimiento pensada para flujos creativos, trabajo profesional y multitarea exigente. Pantalla nitida, potencia estable y acabado premium.',
    stockLabel: 'En Stock',
    shippingText: 'Envio asegurado',
    warrantyText: 'Garantia de 1 ano',
  },
  {
    slug: 'setup-completo-workspace',
    category: 'Electronicos',
    title: 'Setup Completo Workspace',
    price: '679.91',
    oldPrice: '799.90',
    rating: 5,
    ratingValue: 4.7,
    reviews: 145,
    discount: 15,
    imageSrc: setupcompleto,
    imageAlt: 'Setup completo workspace',
    description:
      'Pack ideal para escritorios modernos con una seleccion visualmente equilibrada de accesorios utiles para productividad y home office.',
    stockLabel: 'En Stock',
    shippingText: 'Entrega rapida',
    warrantyText: 'Cambios por fallas',
  },
  {
    slug: 'headset-profesional-negro',
    category: 'Electronicos',
    title: 'Headset Profesional Negro',
    price: '599.90',
    oldPrice: '',
    rating: 4,
    ratingValue: 4.5,
    reviews: 89,
    discount: null,
    imageSrc: headsetprofesional,
    imageAlt: 'Headset profesional negro',
    description:
      'Headset comodo y envolvente para sesiones largas de trabajo, juego o escucha inmersiva, con acabados elegantes y presencia sobria.',
    stockLabel: 'En Stock',
    shippingText: 'Envio gratis +S/ 200',
    warrantyText: '30 dias de devolucion',
  },
  {
    slug: 'chaqueta-de-cuero-premium',
    category: 'Ropa',
    title: 'Chaqueta de Cuero Premium',
    price: '649.90',
    oldPrice: '',
    rating: 5,
    ratingValue: 4.8,
    reviews: 321,
    discount: null,
    imageSrc: chaquetadecuero,
    imageAlt: 'Chaqueta de cuero premium',
    description:
      'Chaqueta de cuero con caida estructurada, presencia elegante y un acabado pensado para elevar looks casuales y urbanos.',
    stockLabel: 'En Stock',
    shippingText: 'Entrega en 48 horas',
    warrantyText: 'Cambios de talla',
  },
  {
    slug: 'coleccion-ropa-primavera',
    category: 'Ropa',
    title: 'Coleccion Ropa Primavera',
    price: '224.92',
    oldPrice: '299.90',
    rating: 5,
    ratingValue: 4.6,
    reviews: 198,
    discount: 25,
    imageSrc: coleccionropaprimavera,
    imageAlt: 'Coleccion ropa primavera',
    description:
      'Seleccion de prendas ligeras y coloridas para una temporada fresca, con propuestas versatiles para combinar en diferentes ocasiones.',
    stockLabel: 'En Stock',
    shippingText: 'Envio gratis +S/ 200',
    warrantyText: 'Cambios de talla',
  },
  {
    slug: 'blazer-ejecutivo-negro',
    category: 'Ropa',
    title: 'Blazer Ejecutivo Negro',
    price: '499.90',
    oldPrice: '',
    rating: 4,
    ratingValue: 4.4,
    reviews: 276,
    discount: null,
    imageSrc: blazerejecutivo,
    imageAlt: 'Blazer ejecutivo negro',
    description:
      'Blazer sobrio y estilizado para oficina, eventos o combinaciones smart casual. Un basico refinado para un armario versatil.',
    stockLabel: 'En Stock',
    shippingText: 'Entrega en 48 horas',
    warrantyText: 'Cambios de talla',
  },
  {
    slug: 'botas-de-cuero-classic',
    category: 'Ropa',
    title: 'Botas de Cuero Classic',
    price: '459.90',
    oldPrice: '',
    rating: 5,
    ratingValue: 4.7,
    reviews: 167,
    discount: null,
    imageSrc: botasdecuero,
    imageAlt: 'Botas de cuero classic',
    description:
      'Botas de cuero con silueta clasica, materiales resistentes y un perfil elegante que funciona muy bien para uso diario o salidas especiales.',
    stockLabel: 'En Stock',
    shippingText: 'Envio protegido',
    warrantyText: 'Cambios de talla',
  },
  {
    slug: 'set-de-accesorios-luxury',
    category: 'Accesorios',
    title: 'Set de Accesorios Luxury',
    price: '699.93',
    oldPrice: '999.90',
    rating: 4,
    ratingValue: 4.5,
    reviews: 423,
    discount: 30,
    imageSrc: setaccesorios,
    imageAlt: 'Set de accesorios luxury',
    description:
      'Curaduria premium de accesorios con estetica sofisticada, ideal para complementar outfits y elevar detalles personales con un acabado refinado.',
    stockLabel: 'En Stock',
    shippingText: 'Envio premium',
    warrantyText: '30 dias de devolucion',
  },
  {
    slug: 'coleccion-joyeria-artesanal',
    category: 'Accesorios',
    title: 'Coleccion Joyeria Artesanal',
    price: '424.91',
    oldPrice: '499.90',
    rating: 4,
    ratingValue: 4.4,
    reviews: 189,
    discount: 15,
    imageSrc: coleccionjoyeria,
    imageAlt: 'Coleccion joyeria artesanal',
    description:
      'Piezas de joyeria con detalle artesanal y presencia delicada, pensadas para regalo o para sumar identidad a cualquier estilo.',
    stockLabel: 'En Stock',
    shippingText: 'Envio protegido',
    warrantyText: 'Cambios por defecto',
  },
  {
    slug: 'reloj-minimalista-urban',
    category: 'Accesorios',
    title: 'Reloj Minimalista Urban',
    price: '319.90',
    oldPrice: '',
    rating: 4,
    ratingValue: 4.3,
    reviews: 118,
    discount: null,
    imageSrc: relojelite,
    imageAlt: 'Reloj minimalista urban',
    description:
      'Reloj de diseño limpio y contemporaneo para quienes prefieren piezas discretas, funcionales y faciles de combinar a diario.',
    stockLabel: 'En Stock',
    shippingText: 'Envio gratis +S/ 200',
    warrantyText: 'Garantia de 1 ano',
  },
  {
    slug: 'mouse-inalambrico-precision',
    category: 'Electronicos',
    title: 'Mouse Inalambrico Precision',
    price: '189.90',
    oldPrice: '',
    rating: 5,
    ratingValue: 4.8,
    reviews: 143,
    discount: null,
    imageSrc: mouseinalambrico,
    imageAlt: 'Mouse inalambrico precision',
    description:
      'Mouse ergonomico de respuesta precisa, ideal para trabajo prolongado, productividad diaria y una experiencia fluida en escritorio.',
    stockLabel: 'En Stock',
    shippingText: 'Entrega rapida',
    warrantyText: 'Garantia de 1 ano',
  },
]

export const products = baseProducts.map((product) => ({
  ...product,
  href: `#/producto/${product.slug}`,
  gallery: [product.imageSrc, product.imageSrc, product.imageSrc],
}))

export const featuredProductSlugs = [
  'audifonos-inalambricos-premium',
  'laptop-macbook-pro',
  'setup-completo-workspace',
  'headset-profesional-negro',
  'chaqueta-de-cuero-premium',
  'coleccion-ropa-primavera',
  'blazer-ejecutivo-negro',
  'botas-de-cuero-classic',
]

export const discountProductSlugs = [
  'audifonos-inalambricos-premium',
  'setup-completo-workspace',
  'coleccion-ropa-primavera',
  'set-de-accesorios-luxury',
  'coleccion-joyeria-artesanal',
]

export function getProductsBySlugs(slugs) {
  return slugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean)
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug) ?? null
}

export function getRelatedProducts(currentSlug, limit = 3) {
  const currentProduct = getProductBySlug(currentSlug)

  if (!currentProduct) {
    return []
  }

  const sameCategoryProducts = products.filter(
    (product) => product.slug !== currentSlug && product.category === currentProduct.category,
  )

  const otherProducts = products.filter(
    (product) => product.slug !== currentSlug && product.category !== currentProduct.category,
  )

  return [...sameCategoryProducts, ...otherProducts].slice(0, limit)
}
