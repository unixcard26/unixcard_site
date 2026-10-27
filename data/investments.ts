export type InvestmentFAQ = { question: string; answer?: string };

// Condições comerciais transcritas do protótipo: validar com o emissor antes da publicação.
export const investments = {
  seo: {
    title: 'Investimentos Unixcard | Opções para seus planos',
    description:
      'Conheça os investimentos Unixcard, as opções de liquidez e prazo, a tributação e a cobertura do FGC.',
  },
  ui: {
    skip: 'Pular para o conteúdo',
    home: 'Início',
    page: 'Investimentos',
    breadcrumb: 'Navegação estrutural',
    pendingAnswer: 'Resposta em preparação',
    next: 'Veja como investir',
  },
  hero: {
    title: 'Investimentos Unixcard',
    subtitle: 'Invista hoje pensando nos seus próximos planos.',
    description:
      'Conheça as opções de investimento com rentabilidade atrelada ao CDI e escolha o prazo que combina com seus objetivos.',
    cta: 'Conheça as opções',
    image: '/images/investments/hero.png',
    alt: 'Homem sorridente olhando para o celular',
    desktopImage: '/images/investments/hero-desktop.png',
    desktopAlt: 'Homem sorridente olhando para o celular',
  },
  needs: {
    chip: 'Para o seu momento',
    title: 'Qual investimento combina com você?',
    description:
      'Escolha a opção ideal de acordo com seus objetivos e o tempo que você pretende deixar seu dinheiro investido.',
    items: [
      {
        id: 'lc-diario',
        title: 'Preciso de acesso ao meu dinheiro',
        description: 'Conheça a LC Diário, com resgate e liquidez diária.',
        name: 'LC Diário',
        icon: 'wallet',
      },
      {
        id: 'lc-1-ano',
        title: 'Posso investir por pelo menos 1 ano',
        description: 'Conheça a LC 1 Ano e tenha mais rentabilidade.',
        name: 'LC 1 Ano',
        icon: 'chart',
      },
      {
        id: 'lc-3-anos',
        title: 'Quero investir em um prazo maior',
        description: 'Conheça a LC 3 Anos e potencialize seus resultados.',
        name: 'LC 3 Anos',
        icon: 'clock',
      },
    ],
  },
  how: {
    chip: 'Como funciona',
    title: 'Como funcionam os investimentos Unixcard?',
    description:
      'Você aplica um valor em uma Letra de Câmbio (LC) emitida pela Golcred e recebe uma rentabilidade conforme as condições da opção escolhida.',
    items: [
      {
        title: 'Valor mínimo',
        description: 'A partir de R$ 1.000.',
        icon: 'money',
      },
      {
        title: 'Rentabilidade',
        description: 'Percentual do CDI conforme a opção de investimento.',
        icon: 'chart',
      },
      {
        title: 'Liquidez',
        description: 'O momento do resgate varia conforme a opção escolhida.',
        icon: 'wallet',
      },
      {
        title: 'Prazo',
        description: 'Todos os investimentos possuem vencimento de 3 anos.',
        icon: 'clock',
      },
    ],
    image: '/images/investments/how.png',
    alt: 'Homem consultando seu celular à mesa',
    caption: 'Mais possibilidades para o seu dinheiro render mais.',
  },
  security: {
    chip: 'Segurança',
    title: 'Seu investimento com mais segurança',
    description:
      'Os investimentos Unixcard são emitidos pela Golcred e contam com a proteção do Fundo Garantidor de Créditos (FGC) dentro dos limites aplicáveis.',
    items: [
      {
        title: 'Proteção do FGC',
        description:
          'Até R$ 250 mil por CPF ou CNPJ, por instituição financeira ou conglomerado, limitado a R$ 1 milhão em quatro anos, conforme as regras do FGC.',
        icon: 'shield',
      },
      {
        title: 'Emissor',
        description: 'Emitidos pela Golcred.',
        icon: 'building',
      },
      {
        title: 'Risco',
        description: 'Classificação de risco: Muito baixo.',
        icon: 'lock',
      },
    ],
    cta: 'Entenda mais sobre a garantia do FGC e seus limites.',
    href: 'https://www.fgc.org.br/sobre-garantia-fgc',
  },
  tax: {
    chip: 'Tributação',
    title: 'Como funciona o Imposto de Renda?',
    description:
      'Os rendimentos dos investimentos Unixcard são tributados pela tabela regressiva do Imposto de Renda.',
    headers: ['Prazo da aplicação', 'Alíquota de IR sobre o rendimento'],
    rows: [
      ['Até 180 dias', '22,5%'],
      ['De 181 a 360 dias', '20%'],
      ['De 361 a 720 dias', '17,5%'],
      ['Acima de 720 dias', '15%'],
    ],
    note: 'A alíquota é aplicada sobre o rendimento, conforme o prazo da aplicação e a legislação vigente.',
  },
  special: {
    chip: 'Opção especial',
    title: 'LC Limite Unixcard',
    description:
      'Uma opção de investimento que também pode ser conectada ao seu cartão Unixcard.',
    image: '/images/investments/limit.png',
    alt: 'Cartão azul Unixcard segurado em uma das mãos',
    caption: 'Invista e tenha mais flexibilidade para o seu cartão.',
    items: [
      { title: 'A partir de', description: 'R$ 1.000', icon: 'money' },
      { title: 'Vencimento', description: '3 anos', icon: 'clock' },
      { title: 'Rentabilidade', description: '100% do CDI', icon: 'chart' },
      {
        title: 'Resgate',
        description: 'Após quitação do saldo devedor do Unixcard',
        icon: 'wallet',
      },
      { title: 'Emissor', description: 'Golcred', icon: 'building' },
      { title: 'Risco', description: 'Muito baixo', icon: 'lock' },
    ],
  },
  steps: {
    chip: 'Passo a passo',
    title: 'Como investir com a Unixcard?',
    description:
      'Em poucos passos, você escolhe a opção de investimento e começa a fazer seu dinheiro render.',
    items: [
      {
        title: 'Acesse sua conta',
        description: 'Entre pelo app ou site com seus dados.',
      },
      {
        title: 'Escolha o investimento',
        description: 'Compare as opções de prazo, liquidez e rentabilidade.',
      },
      {
        title: 'Informe o valor',
        description: 'Aplicação mínima de R$ 1.000.',
      },
      {
        title: 'Revise as informações',
        description: 'Confira rentabilidade, prazo, resgate e tributação.',
      },
      {
        title: 'Confirme o investimento',
        description: 'Pronto! Seu investimento estará registrado.',
      },
    ],
  },
  faq: {
    chip: 'Dúvidas frequentes',
    title: 'Tire suas dúvidas sobre os Investimentos Unixcard.',
    description: 'Encontre as principais respostas ou fale com a nossa equipe.',
    // Inserir answer somente após aprovação editorial. O accordion e o JSON-LD são ativados automaticamente.
    items: [
      { question: 'Quais investimentos a Unixcard oferece?', answer: '' },
      { question: 'Os investimentos Unixcard têm cobertura do FGC?' },
      { question: 'Qual é o valor mínimo para investir na Unixcard?' },
      {
        question:
          'Como funcionam rentabilidade, prazo e resgate dos investimentos Unixcard?',
      },
    ] as InvestmentFAQ[],
  },
} as const;
