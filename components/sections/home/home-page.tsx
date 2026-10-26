import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Container, SectionChip, SectionTitle, Button } from '@/components/ui';
import { Header, BottomNav, Footer, CookieBanner } from '@/components/layout';
import { home, type HomeItem } from '@/data/home';
import { HomeIcon } from './home-icon';
import { Ecosystem, PendingAccess, ProductCarousel } from './home-interactions';
import styles from './home.module.css';
function Intro({
  chip,
  title,
  description,
}: {
  chip: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.intro}>
      <SectionChip>{chip}</SectionChip>
      <SectionTitle>{title}</SectionTitle>
      {description && <p>{description}</p>}
    </div>
  );
}
function Row({
  item,
  section,
  passive = false,
}: {
  item: HomeItem;
  section: string;
  passive?: boolean;
}) {
  const content = (
    <>
      <span className={styles.rowIcon}>
        <HomeIcon name={item.icon} />
      </span>
      <span className={styles.rowContent}>
        <span className={styles.rowTitle}>{item.title}</span>
        {item.description && (
          <span className={styles.rowDescription}>{item.description}</span>
        )}
      </span>
      {!passive && (
        <ChevronRight className={styles.chevron} aria-hidden="true" />
      )}
    </>
  );
  return passive ? (
    <div className={styles.row}>{content}</div>
  ) : item.href ? (
    <Link
      href={item.href}
      className={styles.row}
      data-track={`home-${section}-${item.id}`}
    >
      {content}
    </Link>
  ) : (
    <PendingAccess className={styles.row} track={`home-${section}-${item.id}`}>
      {content}
    </PendingAccess>
  );
}
export function HomePage() {
  return (
    <div className={`site-shell ${styles.home}`}>
      <a className="skip-link" href="#conteudo">
        {home.ui.skip}
      </a>
      <Header preloadLogo={false} />
      <main id="conteudo">
        <section className={styles.hero} aria-labelledby="hero-title">
          <Container className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 id="hero-title">
                {home.hero.lines.map((line, i) => (
                  <span
                    key={line}
                    className={i === 2 ? styles.heroHighlight : undefined}
                  >
                    {line}{' '}
                  </span>
                ))}
              </h1>
              <p>{home.hero.description}</p>
              <Button
                href={home.hero.href}
                variant="brand"
                data-track="home-hero-conheca"
              >
                {home.hero.cta}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
            <Image
              className={styles.heroImage}
              src={home.hero.image}
              width={1050}
              height={1400}
              alt={home.hero.alt}
              priority
              sizes="(min-width: 1024px) 480px, 65vw"
            />
          </Container>
        </section>
        <Container className={styles.quickWrap}>
          <section className={styles.quick} aria-labelledby="quick-title">
            <h2 id="quick-title">{home.quick.title}</h2>
            <div className={styles.quickGrid}>
              {home.quick.items.map((item) => {
                const content = (
                  <>
                    <span>
                      <HomeIcon name={item.icon} />
                    </span>
                    <span>{item.title}</span>
                  </>
                );
                return item.href ? (
                  <Link
                    key={item.id}
                    href={item.href}
                    data-track={`home-acesso-rapido-${item.id}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <PendingAccess
                    key={item.id}
                    track={`home-acesso-rapido-${item.id}`}
                  >
                    {content}
                  </PendingAccess>
                );
              })}
            </div>
          </section>
        </Container>
        <Container>
          <section id="sobre" className={`${styles.section} ${styles.about}`}>
            <div className={styles.intro}>
              <SectionChip>{home.about.chip}</SectionChip>
              <SectionTitle
                highlight={home.about.highlight}
                afterHighlight={home.about.after}
              >
                {home.about.title}
              </SectionTitle>
            </div>
            <div className={styles.aboutGrid}>
              <Image
                src={home.about.image}
                width={699}
                height={336}
                alt={home.about.alt}
                sizes="(min-width: 768px) 550px, 90vw"
                className={styles.aboutImage}
              />
              <div className={styles.aboutContent}>
                <p>{home.about.description}</p>
                <Ecosystem />
                <Button
                  href={home.about.href}
                  fullWidth
                  data-track="home-sobre-conheca"
                >
                  {home.about.cta}
                  <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </div>
          </section>
          <section id="solucoes" className={styles.section}>
            <Intro {...home.needs} />
            <div className={styles.rowGrid}>
              {home.needs.items.map((item) => (
                <Row key={item.id} item={item} section="necessidades" />
              ))}
            </div>
          </section>
          <section id="para-voce" className={styles.section}>
            <Intro {...home.personal} />
            <ProductCarousel>
              {home.personal.cards.map((card) => (
                <article
                  className={`${styles.productCard} ${card.theme === 'blue' ? styles.productBlue : ''}`}
                  key={card.id}
                >
                  <div className={styles.productImage}>
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 768px) 340px, 210px"
                      className={
                        card.theme === 'dark'
                          ? styles.blackCardImage
                          : undefined
                      }
                    />
                  </div>
                  <div className={styles.productCopy}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link
                      href={card.href}
                      className={styles.productLink}
                      data-track={`home-para-voce-${card.id}`}
                      aria-label={`${home.ui.learn} ${card.title}`}
                    >
                      {home.ui.learn}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </ProductCarousel>
          </section>
          <section id="para-empresas" className={styles.section}>
            <Intro {...home.business} />
            <div className={styles.rowGrid}>
              {home.business.items.map((item) => (
                <Row key={item.id} item={item} section="empresas" />
              ))}
            </div>
          </section>
          <section id="parceiros" className={styles.section}>
            <Intro {...home.partners} />
            <div className={styles.partnerGrid}>
              <Link
                href={home.partners.href}
                className={styles.partnerMap}
                data-track="home-parceiros-encontre"
              >
                <Image
                  src={home.partners.image}
                  width={756}
                  height={189}
                  alt={home.partners.alt}
                  sizes="(min-width: 768px) 550px, 90vw"
                />
                <span className={styles.mapLabel}>
                  <span className={styles.rowIcon}>
                    <HomeIcon name="pin" />
                  </span>
                  <span>{home.partners.search}</span>
                  <ChevronRight aria-hidden="true" />
                </span>
              </Link>
              <div className={styles.partnerDetails}>
                <h3>{home.partners.featured}</h3>
                <div className={styles.partnerLogos}>
                  {home.partners.logos.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.image}
                      width={logo.width}
                      height={logo.height}
                      alt={logo.alt}
                      sizes="120px"
                    />
                  ))}
                </div>
                <Link
                  className={styles.textLink}
                  href={home.partners.href}
                  data-track="home-parceiros-todos"
                >
                  {home.partners.cta}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
          <section id="diferenciais" className={styles.section}>
            <Intro {...home.benefits} />
            <div className={`${styles.rowGrid} ${styles.benefits}`}>
              {home.benefits.items.map((item) => (
                <Row key={item.id} item={item} section="diferenciais" passive />
              ))}
            </div>
          </section>
          <section id="confianca" className={styles.section}>
            <Intro {...home.trust} />
            <p className={styles.trustExtra}>{home.trust.extra}</p>
            <div className={`${styles.rowGrid} ${styles.trust}`}>
              {home.trust.items.map((item) => (
                <Row key={item.id} item={item} section="confianca" />
              ))}
            </div>
          </section>
          <section id="faq" className={styles.section}>
            <Intro {...home.faq} />
            <div className={styles.faqList}>
              {home.faq.items.map((item) =>
                item.answer ? (
                  <details key={item.question}>
                    <summary data-track="home-faq-pergunta">
                      {item.question}
                      <ChevronRight aria-hidden="true" />
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ) : (
                  <div
                    key={item.question}
                    className={styles.faqPending}
                    aria-label={`${item.question} — ${home.ui.faqPending}`}
                  >
                    {item.question}
                    <ChevronRight aria-hidden="true" />
                  </div>
                ),
              )}
            </div>
            <Link
              href={home.faq.href}
              className={styles.textLink}
              data-track="home-faq-todas"
            >
              {home.faq.cta}
              <ArrowRight aria-hidden="true" />
            </Link>
          </section>
          <section id="contato" className={styles.section}>
            <Intro {...home.contact} />
            <div className={`${styles.rowGrid} ${styles.contacts}`}>
              {home.contact.items.map((item) => (
                <Row key={item.id} item={item} section="contato" />
              ))}
            </div>
          </section>
          <section id="app" className={styles.appSection}>
            <PendingAccess className={styles.appLink} track="home-app-baixar">
              <span className={styles.appIcon}>
                <HomeIcon name="download" />
              </span>
              <span>
                <span className={styles.appTitle}>{home.app.title}</span>
                <span className={styles.appDescription}>
                  {home.app.description}
                </span>
              </span>
              <ChevronRight aria-hidden="true" />
            </PendingAccess>
          </section>
        </Container>
      </main>
      <Footer />
      <BottomNav />
      <CookieBanner />
    </div>
  );
}
