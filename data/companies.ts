export type CompanyIcon =
  | 'tailored'
  | 'people'
  | 'shield'
  | 'chart'
  | 'store'
  | 'briefcase'
  | 'box'
  | 'building';
export type CompanySolution = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  details: string;
  benefits: readonly string[];
  credit?: boolean;
  // Preencha href quando a página específica estiver implementada.
  href?: string;
};

export const companies = {
  seo: {
    title: 'Para Empresas | Soluções Unixcard para seu negócio',
    description:
      'Conheça as soluções Unixcard para empresas: credenciamento, capital de giro, antecipação de recebíveis e outras opções de crédito.',
  },
  ui: {
    skip: 'Pular para o conteúdo',
    back: 'Voltar para Produtos',
    home: 'Início',
    page: 'Para Empresas',
    breadcrumb: 'Navegação estrutural',
    more: 'Saiba mais',
    close: 'Fechar detalhes',
    show: 'Mostrar solução',
    creditNotice:
      'Crédito sujeito à análise e disponibilidade. Consulte as condições da solução escolhida.',
  },
  hero: {
    chip: 'Para Empresas',
    title:
      'Soluções financeiras para movimentar, proteger e fazer seu negócio ',
    highlight: 'crescer.',
    description:
      'Crédito, recebíveis, credenciamento e muito mais para a sua empresa ir mais longe.',
    cta: 'Conheça as soluções',
    image: '/images/companies/hero.png',
    alt: 'Empresário de camisa azul e óculos segurando um tablet',
  },
  solutions: {
    chip: 'Para Empresas',
    title: 'Soluções para o crescimento da sua empresa',
    description:
      'Soluções personalizadas para o seu segmento, mais eficiência na sua rotina financeira.',
    items: [
      {
        id: 'credenciamento',
        title: 'Credenciamento',
        description:
          'Venda mais e atraia novos clientes! Aceite pagamentos com o Cartão Unixcard.',
        image: '/images/companies/accreditation.png',
        alt: 'Profissional recebendo um pagamento no terminal de cartão',
        details:
          'Aceite o Cartão Unixcard no seu estabelecimento e ofereça mais opções de pagamento para seus clientes.',
        benefits: [
          'Amplie as opções de pagamento do seu estabelecimento.',
          'Conecte seu negócio aos clientes do ecossistema Unixcard.',
          'Tenha mais possibilidades para vender e receber.',
        ],
      },
      {
        id: 'capital-de-giro',
        title: 'Capital de giro',
        description:
          'Recursos para manter sua empresa em movimento e apoiar seus próximos passos.',
        image: '/images/companies/working-capital.png',
        alt: 'Empresário consultando informações financeiras no notebook',
        details:
          'O Capital de Giro Unixcard oferece recursos para a rotina financeira da sua empresa, conforme análise e condições de contratação.',
        benefits: [
          'Apoie o pagamento de fornecedores.',
          'Reforce o estoque e cubra despesas fixas.',
          'Dê fôlego ao fluxo de caixa.',
        ],
        credit: true,
      },
      {
        id: 'antecipacao-de-recebiveis',
        title: 'Antecipação de recebíveis',
        description:
          'Antecipe valores a receber e organize o fluxo de caixa da sua empresa.',
        image: '/images/companies/receivables.png',
        alt: 'Empreendedora trabalhando no notebook em seu negócio',
        details:
          'A Antecipação de Recebíveis permite que sua empresa receba antes valores previstos para o futuro, conforme as condições da operação.',
        benefits: [
          'Antecipe recebimentos futuros.',
          'Melhore a previsibilidade financeira.',
          'Tenha recursos para manter seu negócio em movimento.',
        ],
        credit: true,
      },
      {
        id: 'outras-solucoes',
        title: 'Outras soluções de crédito',
        description:
          'Mais possibilidades para sua empresa crescer, investir e manter o fluxo de caixa em dia.',
        image: '/images/companies/hero.png',
        alt: 'Empresário segurando um tablet e planejando os próximos passos do negócio',
        details:
          'Conheça outras opções de crédito pensadas para diferentes momentos da sua empresa.',
        benefits: [
          'Crédito com garantia de imóvel ou veículo.',
          'Financiamento de veículos para sua empresa.',
          'Antecipação de vendas parceladas no cartão.',
        ],
        credit: true,
      },
    ] as CompanySolution[],
  },
  reasons: {
    chip: 'Escolha Unix',
    title: 'Por que escolher a Unixcard?',
    description:
      'Mais que soluções financeiras, uma instituição para crescer junto com a sua empresa.',
    items: [
      {
        title: 'Soluções sob medida',
        description: 'Para cada fase do seu negócio',
        icon: 'tailored',
      },
      {
        title: 'Atendimento especializado',
        description: 'Com quem entende de empresas',
        icon: 'people',
      },
      {
        title: 'Processos simples',
        description: 'Mais agilidade, menos burocracia',
        icon: 'shield',
      },
      {
        title: 'Segurança e confiança',
        description: 'Do seu lado em todas as etapas',
        icon: 'chart',
      },
    ] as { title: string; description: string; icon: CompanyIcon }[],
  },
  audience: {
    chip: 'Para sua empresa',
    title: 'Soluções para diferentes tipos de negócio',
    description:
      'Atendemos empresas de diferentes portes e segmentos, com soluções financeiras pensadas para cada realidade.',
    items: [
      { title: 'Varejo', description: 'Vendas e crescimento', icon: 'store' },
      {
        title: 'Prestadores de serviço',
        description: 'Crédito e pagamentos',
        icon: 'briefcase',
      },
      { title: 'Fornecedores', description: 'Caixa e recebíveis', icon: 'box' },
      {
        title: 'Pequenas e médias empresas',
        description: 'Soluções para crescer',
        icon: 'building',
      },
    ] as { title: string; description: string; icon: CompanyIcon }[],
  },
} as const;
