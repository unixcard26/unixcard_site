# Etapa 4 — Sobre a Unixcard

Página `/institucional`, baseada na tela 2 do PDF. O pacote inclui as etapas anteriores e mantém Next.js, TypeScript e Tailwind.

## Implementado

- Header interno claro e componentes compartilhados das etapas anteriores.
- Hero, apresentação, diagrama do ecossistema, fluxo de seis participantes, soluções, história, propósito, perguntas frequentes e chamada final.
- Conteúdo separado em `data/institutional.ts`.
- Imagens extraídas do PDF, convertidas em WebP e renderizadas com next/image; prioridade apenas no hero.
- Metadados próprios, um h1, JSON-LD Organization e AboutPage. BreadcrumbList e URLs absolutas dependem de NEXT_PUBLIC_SITE_URL.
- data-track nos CTAs da página.
- Ajuste em scripts/verify-base.mjs para copiar também lib, necessária às novas rotas.

## Adaptação desktop

As regras ficam em `components/sections/institutional/institutional.module.css`, nos blocos `min-width: 48rem` (768px) e `min-width: 64rem` (1024px). Valores visuais específicos ficam em `styles/tokens.css`, prefixo `--institutional-`.

A partir de 768px, hero e propósito têm texto e imagem lado a lado; apresentação e ecossistema usam duas colunas; soluções usam três; fluxo usa duas. A partir de 1024px, os CTAs ficam sob o texto do hero, o fluxo usa três colunas e os três cartões de apresentação ficam lado a lado. O container compartilhado limita a largura. A navegação inferior permanece exclusiva do mobile.

Abaixo de 360px, os cartões de apresentação empilham para preservar a leitura. O mobile segue a composição do PDF, sujeito à revisão visual do usuário; não foi realizada comparação automatizada pixel a pixel.

## Pendências

- Respostas oficiais do FAQ. As perguntas são exibidas sem expansão enquanto não há resposta. Quando preenchidas em data/institutional.ts, o acordeão e FAQPage são habilitados automaticamente para as perguntas respondidas.
- Domínio definitivo em NEXT_PUBLIC_SITE_URL, antes do build de produção.
- Destinos das próximas etapas: cartões, conta digital, produtos, empresas e rede. Essas rotas ainda não existem e podem retornar 404.
- Conferência editorial das datas e informações institucionais fornecidas no PDF.
- Revisão visual e aprovação desta etapa. Nenhuma publicação foi feita.

## Como testar

Extraia este ZIP em uma pasta nova, separada das etapas anteriores. Não coloque dentro da pasta da etapa 1. Abra a pasta `unixcard` no VS Code e execute no terminal:

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Acesse http://localhost:3000/institucional. A Home continua em http://localhost:3000/.

Teste o menu, as âncoras “Conheça o ecossistema” e “Ver nossas soluções”, e os tamanhos 320, 390, 768, 1024, 1280 e 1920px nas ferramentas do navegador. Os links de páginas ainda não implementadas são pendências das próximas etapas.

Para verificações locais:

```powershell
pnpm verify
pnpm build
```

## Validação realizada

Lint, TypeScript, formatação e build aprovados. Rota institucional gerada estaticamente. No navegador, documentElement.scrollWidth igual a clientWidth nas seis larguras acima; um único h1; hero e diagrama inspecionados visualmente; navegação por âncora e preferência de cookies testadas. Esta checagem não substitui teste em aparelhos físicos.
