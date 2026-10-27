export type HomeIcon =
  | 'card'
  | 'wallet'
  | 'person'
  | 'file'
  | 'phone'
  | 'building'
  | 'pin'
  | 'headphones'
  | 'shield'
  | 'bag'
  | 'users'
  | 'download'
  | 'whatsapp';
export type HomeItem = {
  id: string;
  title: string;
  description?: string;
  icon: HomeIcon;
  href?: string;
};
export type HomeFaq = { question: string; answer?: string };
export const home = {
  seo: {
    title: 'Unixcard | Cartões, crédito e soluções para o seu dia a dia',
    description:
      'Conheça a Unixcard: cartões, crédito, conta digital e soluções para pessoas e empresas. Encontre parceiros e canais de atendimento.',
    name: 'Unixcard',
    legalName: 'Golcred S/A – CFI',
    locale: 'pt_BR',
  },
  ui: {
    skip: 'Pular para o conteúdo',
    learn: 'Conhecer',
    pause: 'Pausar animação do ecossistema',
    play: 'Retomar animação do ecossistema',
    carousel: 'Soluções para você',
    slide: 'Mostrar cartão',
    close: 'Fechar',
    pendingTitle: 'Acesso em breve',
    pending: 'Este acesso ainda não está disponível nesta versão.',
    faqPending: 'Resposta ainda não disponível',
    updated: 'Atualizado em 22/10/2026',
  },
  hero: {
    lines: ['Soluções', 'financeiras', 'para facilitar', 'a sua vida.'],
    description:
      'Cartões, crédito, conta digital e serviços para o seu dia a dia com segurança.',
    cta: 'Conheça a Unixcard',
    href: '#sobre',
    image: '/images/home/hero.webp',
    alt: 'Mulher sorridente de terno azul segurando um smartphone',
  },
  quick: {
    title: 'Acesso rápido',
    items: [
      { id: 'cartoes', title: 'Cartões', icon: 'card', href: '/cartoes' },
      { id: 'credito', title: 'Crédito', icon: 'wallet', href: '/credito' },
      {
        id: 'vida-financeira',
        title: 'Vida financeira',
        icon: 'person',
        href: '/conta-digital',
      },
      { id: 'fatura', title: 'Fatura', icon: 'file' },
    ] as HomeItem[],
  },
  about: {
    chip: 'Sobre a Unixcard',
    title: 'Nascemos em Santa Catarina para ',
    highlight: 'conectar oportunidades',
    after: ' em todos os lugares',
    description:
      'A Unixcard conecta pessoas e empresas a soluções financeiras para facilitar o dia a dia e impulsionar negócios.',
    image: '/images/home/about-v2.png',
    alt: 'Pessoas conectadas pelo celular e mapa iluminado de Santa Catarina junto à Ponte Hercílio Luz',
    cta: 'Conheça a Unixcard',
    href: '/institucional',
  },
  ecosystem: {
    title: 'Um ecossistema que conecta.',
    items: ['Pessoas', 'Parceiros', 'Empresas'],
  },
  needs: {
    chip: 'Soluções',
    title: 'O que você precisa hoje?',
    description: 'Escolha a solução ideal para o seu momento.',
    items: [
      {
        id: 'cartao',
        title: 'Quero um cartão',
        description: 'Conheça os cartões Unixcard.',
        icon: 'card',
        href: '/cartoes',
      },
      {
        id: 'credito',
        title: 'Preciso de crédito',
        description: 'Soluções para diferentes necessidades.',
        icon: 'wallet',
        href: '/credito',
      },
      {
        id: 'contas',
        title: 'Quero acessar minhas contas',
        description: 'Entre no app e tenha tudo na sua mão.',
        icon: 'phone',
      },
      {
        id: 'empresa',
        title: 'Tenho uma empresa',
        description: 'Soluções financeiras para o seu negócio.',
        icon: 'building',
        href: '/para-empresas',
      },
    ] as HomeItem[],
  },
  personal: {
    chip: 'Para você',
    title: 'Soluções que movem pessoas e impulsionam negócios',
    description: 'Serviços feitos para facilitar a sua vida.',
    cards: [
      {
        id: 'cartoes',
        title: 'Cartões Unixcard',
        description: 'Mais possibilidades para o seu dia a dia.',
        href: '/cartoes',
        image: '/images/home/black-card.png',
        alt: 'Cartão Unixcard Black com símbolo U luminoso',
        theme: 'dark',
      },
      {
        id: 'credenciamento',
        title: 'Credenciamento',
        description: 'Aceite o cartão Unixcard no seu estabelecimento.',
        href: '/para-empresas/credenciamento',
        image: '/images/home/pos.webp',
        alt: 'Maquininha física Unixcard para recebimento de pagamentos',
        theme: 'blue',
      },
    ],
  },
  business: {
    chip: 'Para sua empresa',
    title: 'Soluções para negócios',
    description:
      'Crédito, antecipação de recebíveis, gestão financeira e mais para impulsionar o seu negócio.',
    items: [
      {
        id: 'capital-de-giro',
        title: 'Capital de Giro',
        description: 'Mais fôlego para o seu negócio crescer.',
        icon: 'pin',
        href: '/para-empresas/capital-de-giro',
      },
    ] as HomeItem[],
  },
  partners: {
    chip: 'Rede de parceiros',
    title: 'Unixcard perto de você',
    description:
      'Use seu cartão em diversos estabelecimentos e aproveite parceiros exclusivos.',
    image: '/images/home/partner-map.png',
    alt: 'Mapa ilustrativo com marcadores de estabelecimentos parceiros',
    search: 'Encontre um local que aceita Unixcard',
    featured: 'Parceiros em destaque',
    cta: 'Ver todos os parceiros',
    href: '/onde-usar',
    logos: [
      {
        image: '/images/home/brasil.webp',
        alt: 'Brasil Atacadista',
        width: 1377,
        height: 1142,
      },
      {
        image: '/images/home/imperatriz.png',
        alt: 'Supermercados Imperatriz',
        width: 443,
        height: 451,
      },
      {
        image: '/images/home/galo.webp',
        alt: 'Postos Galo',
        width: 1254,
        height: 1254,
      },
    ],
  },
  benefits: {
    chip: 'Nossos diferenciais',
    title: 'Feito para facilitar',
    description:
      'Mais que produtos financeiros, oferecemos praticidade, segurança e pessoas reais ao seu lado.',
    items: [
      {
        id: 'praticidade',
        title: 'Praticidade',
        description: 'Resolva tudo pelo celular.',
        icon: 'phone',
      },
      {
        id: 'atendimento',
        title: 'Atendimento humano',
        description: 'Sempre que você precisar.',
        icon: 'headphones',
      },
      {
        id: 'seguranca',
        title: 'Segurança',
        description: 'Tecnologia e proteção para os seus dados.',
        icon: 'shield',
      },
      {
        id: 'presenca',
        title: 'Presença no seu dia a dia',
        description: 'Benefícios em parceiros em todo o Brasil.',
        icon: 'bag',
      },
    ] as HomeItem[],
  },
  trust: {
    chip: 'Confiança',
    title: 'Confiança que nasce e cresce com você.',
    description:
      'Segurança, transparência e responsabilidade fazem parte da nossa relação com você.',
    extra:
      'Conheça quem está por trás da Unixcard e como protegemos cada etapa da sua experiência.',
    items: [
      {
        id: 'transparencia',
        title: 'Transparência',
        description:
          'Informações claras sobre nossos serviços, compromissos e relacionamento com você.',
        icon: 'building',
        href: '/institucional',
      },
      {
        id: 'controle',
        title: 'Controle na sua mão',
        description:
          'Mais autonomia para acompanhar seus produtos e consultar seus dados com praticidade.',
        icon: 'phone',
        href: '/conta-digital',
      },
      {
        id: 'seguranca',
        title: 'Segurança',
        description:
          'Nossa tecnologia e nossos protocolos para proteger as informações em todas as transações.',
        icon: 'shield',
      },
    ] as HomeItem[],
  },
  faq: {
    chip: 'Alguma dúvida?',
    title: 'Dúvidas sobre a Unixcard',
    cta: 'Ver todas as perguntas',
    href: '/ajuda',
    items: [
      { question: 'O que é a Unixcard?', answer: 'A Unixcard é uma instituição financeira que oferece produtos e serviços bancários digitais.' },
      { question: 'A Unixcard é um banco?', answer: 'Não, a Unixcard é uma instituição financeira que oferece produtos e serviços bancários digitais, mas não é um banco tradicional.' },
      { question: 'Quais são os produtos e serviços?', answer: 'Oferecemos uma variedade de produtos e serviços bancários digitais, incluindo cartões de crédito, contas digitais e outros serviços financeiros.' },
      { question: 'Onde posso usar meus cartões?', answer: 'Os cartões Unixcard podem ser usados em qualquer estabelecimento credenciado, além de todos os supermercados Brasil atacadista e Imperatriz.' },
      { question: 'Como solicitar um cartão?', answer: 'Você pode solicitar um cartão Unixcard através do nosso app, preenchendo o formulário de solicitação e aguardando a análise do seu pedido.' },
      { question: 'Como aumentar o limite?', answer: 'Para aumentar o limite do seu cartão, você pode entrar em contato com o nosso atendimento especializado.' },
    ] as HomeFaq[],
  },
  contact: {
    chip: 'Fale conosco',
    title: 'Seu próximo passo começa com uma escolha simples.',
    description: 'Conte com opções de ajuda.',
    items: [
      {
        id: 'whatsapp',
        title: 'WhatsApp',
        description: 'Segunda a sábado, das 08h às 20h. (Exceto feriados)',
        icon: 'whatsapp',
      },
      {
        id: 'sac',
        title: 'SAC',
        description: 'Segunda a sábado, das 08h às 20h. (Exceto feriados)',
        icon: 'headphones',
      },
      {
        id: 'ouvidoria',
        title: 'Ouvidoria',
        description: 'Segunda a sábado, das 08h às 18h. (Exceto feriados)',
        icon: 'users',
      },
      {
        id: 'seguranca',
        title: 'Segurança',
        description: 'Dicas e orientações importantes.',
        icon: 'shield',
      },
    ] as HomeItem[],
  },
  app: {
    title: 'Baixe o app Unixcard',
    description: 'Mais praticidade no seu dia a dia.',
  },
};
