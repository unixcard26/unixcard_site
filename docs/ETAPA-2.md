# Etapa 2 — estrutura global

## Testar no VS Code

Extraia este pacote em uma pasta nova. Ele inclui a Etapa 1 e a correção do teste no Windows. Abra a pasta unixcard, que contém package.json.

```bash
pnpm install --frozen-lockfile
pnpm verify
pnpm build
pnpm dev
```

Abra http://localhost:3000/demonstracao. A raiz / continua sem Home; 404 nela é esperado.

## O que foi implementado

- Header com logo vetorial extraído do arquivo AI oficial; versão clara troca apenas o preenchimento escuro por branco, mantendo o azul. Variante light disponível para páginas internas.
- No mobile o header sai com a rolagem. Após 72px, só o hambúrguer fica fixo. Menu branco, fechado com Escape, foco contido pelo dialog nativo e retorno ao botão ao fechar. Produtos abre um segundo nível.
- BottomNav com Início, Produtos, Onde usar e Ajuda, estado ativo por rota e espaço reservado para a área segura do celular. Na demonstração, Início é ativo explicitamente.
- Footer proposto dentro dos padrões existentes; não havia rodapé completo na tela 1.
- CookieBanner proposto: aceitar todos, somente essenciais ou personalizar. Salva a escolha localmente e permite reabertura no footer. Se o navegador bloquear o armazenamento, não impede o uso do site.
- Nenhum GA4 ou Clarity foi incluído nesta etapa. A integração futura deve ler unixcard-consent-v1, carregar apenas com analytics=true e respeitar o evento unixcard:consent-changed, inclusive revogação. Não há coleta de dados implementada.
- Dados e textos globais em data/navigation.ts. Tokens novos em styles/tokens.css; regras dos componentes em styles/layout.css.

## Adaptação desktop — seção 3 do prompt

- A partir de 768px, a barra inferior desaparece e seus quatro links aparecem horizontalmente no header.
- Logo à esquerda; CTA Conheça a Unixcard à direita, usando texto e destino já existentes no protótipo. O header desktop também não é fixo.
- Container centralizado com máximo de 1200px e margens laterais dos tokens.
- Footer passa de blocos empilhados para três colunas.
- Banner de cookies fica no canto inferior direito, com máximo de 720px. No celular fica acima da barra inferior e pode rolar internamente em telas baixas.
- Identidade, fonte Poppins, cores e botões em pílula preservados.

## Verificação e limites

Executados lint, TypeScript, Prettier e build de produção. A validação visual interativa não foi concluída neste ambiente: o supervisor de preview injeta argumentos de Vite (--host e --strictPort) incompatíveis com Next.js. O projeto continua em Next.js conforme solicitado; não houve alteração de stack para contornar isso.

Revisar localmente em 320, 390, 768, 1280 e 1920px:

1. Header, barra inferior e logo versus referência.
2. Rolagem: só o hambúrguer acompanha no mobile.
3. Menu: abrir, Produtos, voltar, Escape, Tab e Shift+Tab.
4. Cookies: recusar, recarregar, reabrir no rodapé, personalizar e salvar.
5. Ausência de rolagem horizontal e sobreposição de conteúdo pela barra.

A fidelidade visual final depende dessa revisão; não se declara equivalência pixel a pixel nem pontuação Lighthouse nesta entrega. O tom claro dos itens inativos da barra foi preservado do PDF, mas requer revisão de contraste antes da publicação.

## Pendências mantidas

Home e páginas internas não implementadas. Links navegam para os destinos planejados e podem retornar 404 até suas etapas. Conteúdos jurídicos e destinos externos oficiais continuam pendentes; não foram inventados números, URLs de aplicativos nem dados cadastrais. Formulários e respostas de FAQs seguem adiados. O menu usa o logo oficial e omite Blue, FGTS, Consignado, Segurança e Trabalhe conosco conforme aprovação.
