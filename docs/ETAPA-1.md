# Etapa 1 — configuração e componentes base

## Decisões

- Next.js real com App Router; sem Vite, SPA ou adaptação de hospedagem.
- Tailwind CSS v4 configurado com PostCSS e tokens em CSS. Não há tailwind.config duplicando os tokens.
- Poppins 400, 500, 600 e 700 com next/font/local.
- Cores do arquivo de cores prevalecem; texto secundário #53627A.
- Botões em pílula, altura mínima de 56 px; variante compacta de 48 px. Textos podem quebrar e aumentar a altura.
- Container de até 1200 px incluindo padding, 24 px laterais, 20 px abaixo de 360 px.
- H1 36/1.08, H2 30/1.12, H3 24/1.15; card 18/1.2; corpo 16/1.5; secundário 14/1.45; etiquetas 12 ou 13/1.2.
- Valores aprovados para cards e ícones já reservados nos tokens; esses componentes não foram implementados.
- Gradiente de fundo: #C0E8FC 0%, #4AA3CE 45%, #00559B 71%, #001B4C 94%. Direção vertical segue a composição; revisar visualmente na primeira página com esse fundo.
- Gradiente sobre fotografia: transparente até #061B3D opaco em 35%, mantendo a cor até 100%.
- Sem páginas, header, navegação, CMS, formulário, FAQs, analytics ou publicação nesta etapa.
- Logo oficial e demais assets preservados nos anexos; serão integrados na etapa correspondente.
- Husky e Conventional Commits pertencem à configuração do repositório Git posterior; não há remoto GitHub conectado nesta entrega.

## Componentes

```tsx
import { Button, Container, SectionChip, SectionTitle } from '@/components/ui';

<Container>
  <SectionChip>Sobre a Unixcard</SectionChip>
  <SectionTitle
    highlight=" oportunidades"
    afterHighlight=" em todos os lugares"
  >
    Conectamos
  </SectionTitle>
  <Button href="/produtos">Conhecer produtos</Button>
</Container>;
```

Button: variante primary, brand, muted ou outline; tamanho default ou compact; fullWidth opcional. Sem href produz button nativo, padrão type="button"; com href produz Link. Eventos de clique exigem um componente cliente chamador. Encaminha atributos ARIA, data-track e atributos nativos. Não admite disabled em links.

SectionChip: span com atributos nativos e className.

SectionTitle: h2 padrão ou h3, destaque explícito e texto posterior opcional. Preserva semântica, sem gerar H1 automaticamente.

Container: div responsiva com atributos nativos e className.

## Como alterar

Edite os valores em styles/tokens.css. Os componentes consomem as variáveis; não replique medidas nos arquivos TSX. A fonte é conectada pelo layout raiz. Depois execute pnpm verify e pnpm verify:base.

## Verificação visual

A compilação confirma integração dos componentes, fonte e Tailwind. A fidelidade visual ainda não pode ser avaliada sem a primeira tela. Não há galeria ou página de demonstração permanente nesta entrega, conforme o escopo aprovado.

## Resultado desta entrega

ESLint sem erros ou warnings, TypeScript estrito, Prettier e build de produção da rota temporária aprovados. A rota e o build temporário são removidos ao concluir. A versão ESLint 9 foi mantida por compatibilidade dos plugins oficiais do Next; o instalador informa sua depreciação, embora a verificação de lint passe sem warnings. Atualizar em conjunto quando os plugins suportarem ESLint 10.
