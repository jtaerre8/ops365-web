export const CONTACT = {
  phone: '+56979982980',
  phoneDisplay: '+569 7998 2980',
  email: 'eventosprat@gmail.com',
  instagram: 'https://www.instagram.com/magoprat/',
  instagramHandle: '@magoprat',
  facebook: 'https://web.facebook.com/profile.php?id=100003995720672',
  whatsapp: 'https://wa.me/56979982980',
}

export function waLink(message) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

export const STATS = [
  { value: '18+', label: 'Años de experiencia' },
  { value: '3.000+', label: 'Shows realizados' },
  { value: '100.000+', label: 'Espectadores felices' },
  { value: '7', label: 'Días a la semana' },
]

export const SHOWS = [
  {
    id: 'basico',
    name: 'Show Básico',
    tagline: 'La magia esencial para empezar la fiesta',
    duration: '30 minutos',
    priceSantiago: 100000,
    priceFuera: 130000,
    featured: false,
    features: ['3 números de magia', 'Aparición de paloma', 'Show 100% interactivo'],
  },
  {
    id: 'premium',
    name: 'Show Premium',
    tagline: 'La opción favorita para cumpleaños inolvidables',
    duration: '30 minutos',
    priceSantiago: 130000,
    priceFuera: 150000,
    featured: true,
    features: [
      '3 números de magia',
      'Aparición de paloma',
      'Regalo para el cumpleañero',
    ],
  },
  {
    id: 'exclusivo',
    name: 'Show Exclusivo',
    tagline: 'La experiencia mágica completa',
    duration: '45 minutos',
    priceSantiago: 140000,
    priceFuera: 160000,
    featured: false,
    accent: true,
    badge: 'El más pedido',
    features: [
      '5 números de magia',
      'Aparición de paloma y conejo',
      'Regalo para el cumpleañero',
      'Cariño y fotos con el conejo',
      'Ticket de regalo para invitados',
      'Truco de magia virtual de regalo',
      'Descuento para tu siguiente show',
    ],
  },
]

export function formatCLP(value) {
  return value.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 })
}

export const WHY_US = [
  {
    title: 'Diversión garantizada',
    description: 'Adaptamos cada presentación a la edad y el público para asegurar que todos se diviertan.',
    icon: 'PartyPopper',
  },
  {
    title: 'Show interactivo',
    description: 'Los niños no solo son espectadores, ¡son parte activa del show!',
    icon: 'Sparkles',
  },
  {
    title: 'Profesionalismo',
    description: 'Con años de experiencia, aseguro que cada evento sea impecable.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Flexibilidad total',
    description: 'Nos adaptamos a tus necesidades: cumpleaños, evento escolar o reunión familiar.',
    icon: 'Wand2',
  },
]

// ⚠️ PLACEHOLDER — reemplazar por comentarios reales de Instagram del Mago Prat
// antes de publicar. Mantener el mismo formato { id, author, title, body }.
export const TESTIMONIALS = [
  {
    id: 1,
    author: 'Familia Contreras',
    title: 'Cumpleaños de Martina, 6 años',
    body: '“Los niños quedaron fascinados de principio a fin. El Mago Prat logró que hasta los más tímidos participaran. 100% recomendado.”',
  },
  {
    id: 2,
    author: 'Colegio San Ignacio',
    title: 'Show para evento escolar',
    body: '“Contratamos el show para 80 niños y fue un éxito total. Muy profesional, puntual y con mucha paciencia.”',
  },
  {
    id: 3,
    author: 'Familia Rojas',
    title: 'Cumpleaños de Benjamín, 8 años',
    body: '“Increíble cómo logra que todos participen. Los papás también terminamos maravillados con los trucos.”',
  },
  {
    id: 4,
    author: 'Jardín Infantil Arcoíris',
    title: 'Celebración de fin de año',
    body: '“Volveríamos a contratarlo sin dudarlo. La magia + el humor hicieron que fuera la mejor fiesta del año.”',
  },
]

export const FAQS = [
  {
    question: '¿Hace magia en regiones?',
    answer: 'Sí, el Mago Prat va a todos los rincones del país a los cuales sea invitado.',
  },
  {
    question: '¿Hace magia sin animales?',
    answer: 'Claro que sí, la magia no depende de los animales. Podemos armar un show 100% sin ellos si lo prefieres.',
  },
  {
    question: '¿Puedes revelar un truco de magia?',
    answer: 'No, no y no. Un mago nunca revela sus secretos... a menos que te metas a un taller, ahí sí puedes aprender los mejores juegos de magia.',
  },
  {
    question: '¿Cuánto dura el show?',
    answer: 'Entre 30 y 50 minutos, dependiendo del show que elijas, llenos de magia, humor y sorpresas.',
  },
  {
    question: '¿Cómo reservo una fecha?',
    answer: 'Escríbenos por WhatsApp o correo con la fecha y comuna de tu evento y armamos juntos un día inolvidable.',
  },
]
