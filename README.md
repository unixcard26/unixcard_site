# Unixcard — Etapa 1

Base técnica em Next.js App Router, TypeScript estrito e Tailwind CSS v4. Apenas tokens, layout raiz e quatro componentes; nenhuma página de produto ou Home foi criada. Sem deploy.

## Instalação

Use Node.js 22 LTS e pnpm 11.25.0.

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm verify
pnpm verify:base
```

`verify` executa ESLint, TypeScript e Prettier. `verify:base` compila os componentes e os estilos em uma cópia temporária com uma rota de verificação, usando o compilador Webpack. Remove a cópia ao terminar e não cria rotas no projeto original.

## Execução local

```bash
pnpm dev
```

Abra http://localhost:3000. Como nenhuma página foi criada, é esperado ver a resposta 404 padrão do Next.js. Isto não é uma prévia da Home. A próxima etapa depende de aprovação.

`pnpm build` e `pnpm start` serão os comandos de produção após a criação das páginas. Para verificar o build nesta etapa, use `pnpm verify:base`.

## Arquivos principais

- `styles/tokens.css`: cores, fonte, escala tipográfica, espaçamentos, raios, sombras, gradientes e breakpoints.
- `styles/globals.css`: reset, estilos globais e classes dos componentes.
- `app/layout.tsx`: idioma pt-BR e Poppins local com next/font.
- `components/ui/`: Button, SectionChip, SectionTitle e Container.
- `docs/ETAPA-1.md`: decisões, interfaces e limites desta entrega.

Nenhum ID, segredo ou variável de integração é necessário nesta etapa. Fonte distribuída pelo pacote @fontsource/poppins; os arquivos e a licença acompanham a dependência instalada. O build não busca fontes no Google.

## Etapa 2

Header, BottomNav, Footer e CookieBanner: execute `pnpm dev` e abra
http://localhost:3000/demonstracao. Essa rota de revisão tem `noindex` e não
substitui a Home. Veja [docs/ETAPA-2.md](docs/ETAPA-2.md) para instruções,
adaptação desktop, pendências e checklist visual.
