# Etapa 3 — Home

## Abrir no VS Code

Extraia unixcard-etapa-3.zip em uma pasta nova, separada das etapas anteriores. O pacote é completo. Abra a pasta unixcard, que contém package.json, e execute:

```powershell
pnpm install --frozen-lockfile
pnpm verify
pnpm build
pnpm dev
```

A Home agora está em http://localhost:3000/. Se houver outro servidor aberto, interrompa-o com Ctrl+C ou use a porta exibida pelo terminal.

## Implementação

Home na sequência da tela 1: hero, Acesso rápido, Sobre a Unixcard, ecossistema, necessidades, Para você, Para sua empresa, parceiros, diferenciais, confiança, FAQ, contato e app. Ecossistema dentro do bloco Sobre, com repetição contínua, pausa manual e respeito à preferência de movimento reduzido. Carrossel de produtos com rolagem interna e indicadores.

Textos, imagens, destinos e perguntas estão em data/home.ts. Componentes e CSS específicos em components/sections/home. Tokens exclusivos da Home foram acrescentados ao arquivo central styles/tokens.css. Metadados e JSON-LD estão em lib/seo/home.ts; a rota é app/page.tsx.

A única adaptação no componente compartilhado Header foi permitir desativar o preload do logo na Home, para priorizar exclusivamente a imagem do hero. O padrão nas outras páginas foi preservado. Não foram criadas outras páginas comerciais.

Imagens com next/image e textos alternativos. Conteúdo principal renderizado no HTML inicial. Um único h1. Todos os links e CTAs da Home têm data-track. O mapa é ilustrativo como no PDF; a implementação de busca e Leaflet pertence à etapa Onde usar.

## Desktop

Container centralizado de até 1200px; navegação herdada da Etapa 2. A partir de 768px, cards e benefícios em duas colunas, apresentação institucional e rede de parceiros lado a lado. A partir de 1024px, hero em duas colunas e Confiança em três colunas. O carrossel de dois produtos vira grid no desktop. Não há mudança nos textos entre os tamanhos.

## Correções de texto

- Padronização “Sobre a Unixcard”.
- “Ver todas as parceiras” corrigido para “Ver todos os parceiros”.
- Credenciamento: “Aceite o cartão Unixcard no seu estabelecimento”.
- Ajustes gramaticais nos horários de atendimento.
- “Busar”, “Tefelonia”, “Florianopólis”, “Mais de centenas de parceiros” e “ánalise” não aparecem nos textos desta Home; correções das outras páginas permanecem em suas etapas.

## SEO e pendências

Organization, WebSite e FAQPage são emitidos no JSON-LD. FAQPage contém exatamente as seis perguntas visíveis. Como as respostas ainda não foram aprovadas, acceptedAnswer não foi inventado. O FAQ e sua marcação permanecem incompletos para publicação; ao preencher answer em data/home.ts, o conteúdo e a marcação passam a incluir a resposta automaticamente.

O domínio oficial não foi informado. Defina NEXT_PUBLIC_SITE_URL em .env.local com a origem real antes do build final. Isso ativa canonical, URLs absolutas da entidade e imagens Open Graph/Twitter. Nenhum domínio fictício foi inserido. Referência de vocabulário: https://schema.org/FAQPage.

Fatura, acesso ao app, WhatsApp, SAC, Ouvidoria, Segurança e download do app aguardam destinos oficiais; nesta revisão, mostram um aviso de indisponibilidade. Links internos apontam para as rotas planejadas, ainda não implementadas. Formulários e respostas comerciais não foram acrescentados.

## Verificação

Lint, TypeScript, Prettier e build de produção verificados. HTML inicial contém o conteúdo, um h1 e JSON-LD. Conferida ausência de rolagem horizontal nas larguras 320, 390, 768, 1024, 1280 e 1920px em navegador, usando frames de teste. Verificados o aviso de acesso pendente, pausa do ecossistema e deslocamento do carrossel. Os testes de navegador usaram uma cópia isolada de produção, pois o supervisor não inicializava corretamente o modo de desenvolvimento deste projeto; esse adaptador não integra a entrega.

Revisar visualmente no seu computador em 390px e comparar com o Figma. Não foi realizada certificação pixel a pixel nem auditoria Lighthouse. Os arquivos de padrões aprovados prevalecem sobre as medidas que divergem no PDF.
