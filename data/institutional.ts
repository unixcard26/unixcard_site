export type InstitutionalIcon =
  | 'pin'
  | 'wallet'
  | 'users'
  | 'cart'
  | 'truck'
  | 'building'
  | 'person'
  | 'card'
  | 'phone'
  | 'sparkles'
  | 'grid'
  | 'store';
export type InstitutionalFaq = { question: string; answer?: string };
export const institutional = {
  seo: {
    title: 'Sobre a Unixcard | Nossa história e ecossistema',
    description:
      'Conheça a Unixcard, sua relação com a Golcred e o ecossistema que conecta pessoas, empresas e oportunidades em Santa Catarina.',
  },
  ui: {
    skip: 'Pular para o conteúdo',
    back: 'Voltar',
    home: 'Início',
    page: 'Sobre a Unixcard',
    pendingAnswer: 'Resposta ainda não disponível',
    updated: 'Atualizado em 26/10/2026',
  },
  hero: {
    title: 'Conectamos pessoas, empresas e ',
    highlight: 'oportunidades.',
    description:
      'A Unixcard está evoluindo de um cartão regional para uma plataforma de soluções financeiras, pagamentos, benefícios e relacionamento.',
    image: '/images/institutional/map.webp',
    alt: 'Mapa de Santa Catarina com conexões e pontos luminosos azuis',
    primary: 'Conheça o ecossistema',
    primaryHref: '#ecossistema',
    secondary: 'Ver nossas soluções',
    secondaryHref: '#solucoes',
  },
  about: {
    chip: 'Sobre a Unixcard',
    title: 'O que é a Unixcard?',
    description:
      'A Unixcard é uma plataforma de soluções financeiras e meios de pagamento ligada à Golcred CFI e ao ecossistema do Grupo Mundial Mix, com atuação concentrada em Santa Catarina.',
    cards: [
      {
        title: 'Santa Catarina',
        description: 'Nossa atuação é concentrada em SC.',
        icon: 'pin',
      },
      {
        title: 'Soluções financeiras',
        description: 'Muito mais que um cartão.',
        icon: 'wallet',
      },
      {
        title: 'Ecossistema conectado',
        description: 'Pessoas, empresas e oportunidades.',
        icon: 'users',
      },
    ] as { title: string; description: string; icon: InstitutionalIcon }[],
    image: '/images/institutional/bridge.webp',
    alt: 'Ponte Hercílio Luz em Florianópolis ao entardecer',
  },
  ecosystem: {
    chip: 'Nosso ecossistema',
    title: 'Nosso ecossistema',
    description: 'Muito mais do que uma relação entre cliente e cartão.',
    center: 'Unixcard',
    image: '/images/institutional/neon.webp',
    alt: 'Símbolo U luminoso da Unixcard',
    caption:
      'Cada conexão cria novas possibilidades para o próximo participante do ecossistema.',
    nodes: [
      { title: 'Clientes', icon: 'users' },
      { title: 'Supermercados', icon: 'cart' },
      { title: 'Colaboradores', icon: 'users' },
      { title: 'Fornecedores', icon: 'truck' },
      { title: 'Empresas parceiras', icon: 'building' },
    ] as { title: string; icon: InstitutionalIcon }[],
  },
  flow: {
    chip: 'Fluxo do ecossistema',
    title: 'Como o ecossistema funciona?',
    description:
      'Do fornecedor ao cliente, a Unixcard conecta todo o ciclo com soluções financeiras e de relacionamento.',
    steps: [
      {
        title: 'Fornecedor',
        description: 'Novas relações comerciais.',
        icon: 'truck',
      },
      {
        title: 'Supermercado',
        description: 'Mais vendas e relacionamento.',
        icon: 'cart',
      },
      {
        title: 'Empresas parceiras',
        description: 'Pagamentos e soluções.',
        icon: 'building',
      },
      {
        title: 'Colaborador',
        description: 'Conta, crédito e benefícios.',
        icon: 'users',
      },
      {
        title: 'Cliente',
        description: 'Mais conveniência no dia a dia.',
        icon: 'person',
      },
      {
        title: 'Unixcard',
        description: 'Conecta todo o ciclo.',
        icon: 'brand',
      },
    ] as {
      title: string;
      description: string;
      icon: InstitutionalIcon | 'brand';
    }[],
  },
  solutions: {
    chip: 'Nossas soluções',
    title: 'Soluções que conectam',
    description:
      'Produtos e serviços completos para pessoas, negócios e o ecossistema.',
    cards: [
      {
        title: 'Cartões e crédito',
        description: 'Mais possibilidades para o seu dia a dia.',
        icon: 'card',
        href: '/cartoes',
      },
      {
        title: 'Conta digital',
        description: 'Praticidade, segurança e serviços.',
        icon: 'phone',
        href: '/conta-digital',
      },
      {
        title: 'Meios de pagamento',
        description: 'Soluções modernas para seu negócio.',
        icon: 'wallet',
        href: '/para-empresas/credenciamento',
      },
      {
        title: 'Benefícios',
        description: 'Mais valor para pessoas e empresas.',
        icon: 'sparkles',
        href: '/produtos',
      },
      {
        title: 'Soluções empresariais',
        description: 'Para diferentes necessidades.',
        icon: 'grid',
        href: '/para-empresas',
      },
      {
        title: 'Rede credenciada',
        description: 'Uma ampla rede de estabelecimentos em Santa Catarina.',
        icon: 'store',
        href: '/onde-usar',
      },
    ] as {
      title: string;
      description: string;
      icon: InstitutionalIcon;
      href: string;
    }[],
  },
  history: {
    chip: 'Nossa história',
    title: 'Nossa origem',
    description:
      'Uma história sólida que nos trouxe até aqui e nos impulsiona para o futuro.',
    items: [
      {
        year: '1974',
        mark: 'M',
        title: 'Grupo Mundial Mix',
        description:
          'Início de um grande grupo, com forte presença em Santa Catarina.',
      },
      {
        year: '2005',
        mark: 'G',
        title: 'Golcred CFI',
        description:
          'Instituição financeira do Grupo Mundial Mix, com sede em São José – SC.',
      },
      {
        year: 'Hoje',
        mark: '',
        title: 'Unixcard em transformação',
        description:
          'Evoluindo de um cartão regional para uma plataforma de relacionamento e soluções financeiras.',
      },
    ],
    image: '/images/institutional/emblem.webp',
    alt: 'Emblema U da Unixcard',
  },
  purpose: {
    chip: 'Nosso propósito',
    title: 'Transformar relacionamento em ',
    highlight: 'oportunidades.',
    second: ' E oportunidades em ',
    secondHighlight: 'valor.',
    description:
      'Queremos ser o elo financeiro e de relacionamento do ecossistema supermercadista.',
    image: '/images/institutional/purpose.webp',
    alt: 'Homem sorridente segurando um smartphone e olhando para cima',
    primary: 'Conheça nossas soluções',
    primaryHref: '/produtos',
    secondary: 'Ver rede Unixcard',
    secondaryHref: '/onde-usar',
  },
  faq: {
    chip: 'Perguntas frequentes',
    title: 'Dúvidas sobre a Unixcard',
    description:
      'Tire suas dúvidas e conheça melhor nossa história, atuação e soluções.',
    items: [
      { question: 'O que é a Unixcard?' },
      { question: 'Qual a relação com a Golcred?' },
      { question: 'O que é o ecossistema Unixcard?' },
      { question: 'Onde a Unixcard atua?' },
      { question: 'Quais soluções fazem parte da Unixcard?' },
    ] as InstitutionalFaq[],
  },
  closing: {
    title: 'Quer saber mais?',
    description:
      'Fale com nossa equipe ou conheça nossas soluções e faça parte do ecossistema.',
    primary: 'Conhecer soluções',
    primaryHref: '/produtos',
    secondary: 'Falar com a Unixcard',
    secondaryHref: '/#contato',
  },
};
