import type { Metadata } from 'next';
import { Header, BottomNav, Footer, CookieBanner } from '@/components/layout';
import { Container, SectionChip, SectionTitle } from '@/components/ui';
export const metadata: Metadata = {
  title: 'Etapa 2 — Demonstração Unixcard',
  robots: { index: false, follow: false },
};
export default function Demonstration() {
  return (
    <div className="site-shell">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Container className="layout-demo">
          <SectionChip>Etapa 2</SectionChip>
          <h1 className="unix-section-title">Estrutura de navegação</h1>
          <p>
            Esta tela serve apenas para testar Header, BottomNav, Footer e
            CookieBanner. A Home será criada na próxima etapa.
          </p>
          <SectionTitle as="h3">Role para testar o menu</SectionTitle>
          <p>
            No celular, apenas o botão de menu acompanha a rolagem. A barra
            inferior permanece fixa.
          </p>
          <div className="demo-scroll-space" />
          <SectionTitle as="h3">Fim da demonstração</SectionTitle>
          <p>Teste também as preferências de cookies no rodapé.</p>
        </Container>
      </main>
      <Footer />
      <BottomNav activePath="/" />
      <CookieBanner />
    </div>
  );
}
