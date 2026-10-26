export const primaryNavigation = [
  { label: 'Início', href: '/', icon: 'home' },
  { label: 'Produtos', href: '/produtos', icon: 'products' },
  { label: 'Onde usar', href: '/onde-usar', icon: 'location' },
  { label: 'Ajuda', href: '/ajuda', icon: 'help' },
] as const;
export const menuNavigation = [
  { label: 'Início', href: '/' },
  { label: 'Sobre a Unixcard', href: '/institucional' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Onde usar', href: '/onde-usar' },
  { label: 'Para empresas', href: '/para-empresas' },
  { label: 'Canais de atendimento', href: '/contato' },
];
export const productNavigation = [
  { label: 'Cartões Unixcard', href: '/cartoes' },
  { label: 'Crédito Pessoal', href: '/credito/credito-pessoal' },
  { label: 'Conta Digital', href: '/conta-digital' },
  { label: 'Crédito com Garantia', href: '/credito/credito-com-garantia' },
  {
    label: 'Financiamento de Veículos',
    href: '/credito/financiamento-de-veiculos',
  },
  { label: 'Crédito Colaborador', href: '/credito/credito-colaborador' },
  { label: 'Investimentos', href: '/investimentos' },
  { label: 'Unixcel', href: '/unixcel' },
  { label: 'Capital de Giro', href: '/para-empresas/capital-de-giro' },
  {
    label: 'Antecipação de Recebíveis',
    href: '/para-empresas/antecipacao-de-recebiveis',
  },
  { label: 'Credenciamento POS', href: '/para-empresas/credenciamento' },
];
export const siteCopy = {
  menu: 'Menu de navegação',
  open: 'Abrir menu',
  close: 'Fechar menu',
  back: 'Voltar ao menu',
  cta: 'Conheça a Unixcard',
  ctaHref: '/institucional',
  signature: 'Digital, humano e feito para você.',
  company: 'Golcred S/A – CFI',
  footerGroups: [
    { title: 'Unixcard', links: menuNavigation.slice(1) },
    {
      title: 'Informações',
      links: [
        { label: 'Ajuda', href: '/ajuda' },
        { label: 'Privacidade', href: '/privacidade' },
        { label: 'Termos de uso', href: '/termos' },
        { label: 'Cookies', href: '/cookies' },
      ],
    },
  ],
  cookie: {
    title: 'Suas preferências de cookies',
    description:
      'Usamos recursos essenciais para o funcionamento do site. Você escolhe se permite cookies de análise para nos ajudar a entender o uso e melhorar sua experiência.',
    accept: 'Aceitar todos',
    reject: 'Somente essenciais',
    customize: 'Personalizar',
    save: 'Salvar preferências',
    essential: 'Essenciais',
    essentialDescription:
      'Necessários para o funcionamento do site. Sempre ativos.',
    analytics: 'Análise de uso',
    analyticsDescription:
      'Permite ferramentas de medição, como Google Analytics e Microsoft Clarity.',
    reopen: 'Preferências de cookies',
    policy: 'Política de cookies',
  },
};
