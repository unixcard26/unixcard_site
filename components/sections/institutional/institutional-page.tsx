import { SectionUrlSync } from '@/components/layout/section-url-sync';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  MapPin,
  Wallet,
  UsersRound,
  ShoppingCart,
  Truck,
  Building2,
  UserRound,
  CreditCard,
  Smartphone,
  Sparkles,
  LayoutGrid,
  Store,
  PanelsTopLeft,
} from 'lucide-react';
import {
  institutional as data,
  type InstitutionalIcon,
} from '@/data/institutional';
import { Header, Footer, BottomNav, CookieBanner } from '@/components/layout';
import { Button, Container, SectionChip, SectionTitle } from '@/components/ui';
import styles from './institutional.module.css';
const icons = {
  pin: MapPin,
  wallet: Wallet,
  users: UsersRound,
  cart: ShoppingCart,
  truck: Truck,
  building: Building2,
  person: UserRound,
  card: CreditCard,
  phone: Smartphone,
  sparkles: Sparkles,
  grid: LayoutGrid,
  store: Store,
};
function Icon({ name }: { name: InstitutionalIcon }) {
  const Component = icons[name];
  return <Component aria-hidden="true" />;
}
function Intro({
  chip,
  title,
  description,
}: {
  chip: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.intro}>
      <SectionChip>{chip}</SectionChip>
      <SectionTitle>{title}</SectionTitle>
      <p>{description}</p>
    </div>
  );
}
export function InstitutionalPage() {
  return (
    <div className={`site-shell ${styles.page}`}>
    <SectionUrlSync ids={["hero", "conteudo", "ecossistema", "solucoes", "faq", "contato"]} />
      <a href="#conteudo" className="skip-link">
        {data.ui.skip}
      </a>
      <Header variant="light" preloadLogo={false} />
      <main id="conteudo">
        <section id="hero" className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1>
                {data.hero.title}
                <span>{data.hero.highlight}</span>
              </h1>
              <p>{data.hero.description}</p>
            </div>
            <Image
              className={styles.map}
              src={data.hero.image}
              alt={data.hero.alt}
              width={1448}
              height={1086}
              priority
              sizes="(min-width:1024px) 560px, 100vw"
            />
            <div className={styles.heroActions}>
              <Button
                href={data.hero.primaryHref}
                variant="brand"
                fullWidth
                data-track="institucional-hero-ecossistema"
              >
                {data.hero.primary}
                <ArrowRight aria-hidden="true" />
              </Button>
              <Link
                href={data.hero.secondaryHref}
                data-track="institucional-hero-solucoes"
              >
                {data.hero.secondary}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </section>
        <Container>
          <nav className={styles.breadcrumb} aria-label={data.ui.page}>
            <Link href="/" data-track="institucional-voltar-inicio">
              <ArrowLeft aria-hidden="true" />
              {data.ui.back}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{data.ui.page}</span>
          </nav>
          <section className={styles.section}>
            <Intro {...data.about} />
            <div className={styles.aboutGrid}>
              <div className={styles.facts}>
                {data.about.cards.map((card) => (
                  <article className={styles.card} key={card.title}>
                    <Icon name={card.icon} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </article>
                ))}
              </div>
              <Image
                className={styles.bridge}
                src={data.about.image}
                alt={data.about.alt}
                width={438}
                height={164}
                sizes="(min-width:768px) 550px, 90vw"
              />
            </div>
          </section>
          <section id="ecossistema" className={styles.section}>
            <Intro {...data.ecosystem} />
            <div className={styles.ecosystemGrid}>
              <div className={styles.diagram}>
                <div className={styles.orbit} aria-hidden="true" />
                <ul>
                  {data.ecosystem.nodes.map((node, i) => (
                    <li
                      className={`${styles.node} ${styles['node' + i]}`}
                      key={node.title}
                    >
                      <Icon name={node.icon} />
                      <span>{node.title}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.center}>
                  <Image
                    src={data.ecosystem.image}
                    alt={data.ecosystem.alt}
                    width={500}
                    height={562}
                    sizes="40px"
                  />
                  <span>{data.ecosystem.center}</span>
                </div>
              </div>
              <p className={styles.caption}>{data.ecosystem.caption}</p>
            </div>
          </section>
          <section className={styles.section}>
            <Intro {...data.flow} />
            <ol className={styles.flow}>
              {data.flow.steps.map((step, i) => (
                <li key={step.title}>
                  <span className={styles.number} aria-hidden="true">
                    {i + 1}
                  </span>
                  {step.icon === 'brand' ? (
                    <Image
                      src={data.history.image}
                      alt=""
                      width={32}
                      height={32}
                    />
                  ) : (
                    <Icon name={step.icon} />
                  )}
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section id="solucoes" className={styles.section}>
            <Intro {...data.solutions} />
            <div className={styles.solutions}>
              {data.solutions.cards.map((card, i) => (
                <Link
                  className={styles.card}
                  href={card.href}
                  key={card.title}
                  data-track={`institucional-solucoes-${i + 1}`}
                >
                  <Icon name={card.icon} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </Link>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <Intro {...data.history} />
            <ol className={styles.timeline}>
              {data.history.items.map((item) => (
                <li key={item.year}>
                  <div className={styles.mark} aria-hidden="true">
                    {item.mark || (
                      <Image
                        src={data.history.image}
                        width={64}
                        height={64}
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    <p className={styles.year}>{item.year}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Container>
        <section className={styles.purpose}>
          <Container className={styles.purposeGrid}>
            <div className={styles.purposeCopy}>
              <SectionChip>{data.purpose.chip}</SectionChip>
              <h2>
                {data.purpose.title}
                <span>{data.purpose.highlight}</span>
                {data.purpose.second}
                <span>{data.purpose.secondHighlight}</span>
              </h2>
              <p>{data.purpose.description}</p>
            </div>
            <Image
              className={styles.purposeImage}
              src={data.purpose.image}
              alt={data.purpose.alt}
              width={1312}
              height={1199}
              sizes="(min-width:1024px) 500px, 100vw"
            />
            <div className={styles.heroActions}>
              <Button
                href={data.purpose.primaryHref}
                variant="brand"
                fullWidth
                data-track="institucional-proposito-solucoes"
              >
                {data.purpose.primary}
                <ArrowRight aria-hidden="true" />
              </Button>
              <Link
                href={data.purpose.secondaryHref}
                data-track="institucional-proposito-rede"
              >
                {data.purpose.secondary}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </Container>
        </section>
        <Container>
          <section id="faq" className={styles.section}>
            <Intro {...data.faq} />
            <div className={styles.faq}>
              {data.faq.items.map((item, i) =>
                item.answer ? (
                  <details key={item.question}>
                    <summary data-track={`institucional-faq-${i + 1}`}>
                      {item.question}
                      <ChevronRight aria-hidden="true" />
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                ) : (
                  <div
                    className={styles.question}
                    key={item.question}
                    aria-label={`${item.question} — ${data.ui.pendingAnswer}`}
                  >
                    {item.question}
                    <ChevronRight aria-hidden="true" />
                  </div>
                ),
              )}
            </div>
          </section>
          <section className={styles.closing}>
            <div className={styles.closingIntro}>
              <PanelsTopLeft aria-hidden="true" />
              <div>
                <h2>{data.closing.title}</h2>
                <p>{data.closing.description}</p>
              </div>
            </div>
            <div className={styles.closingActions}>
              <Button
                href={data.closing.primaryHref}
                variant="brand"
                size="compact"
                data-track="institucional-final-solucoes"
              >
                {data.closing.primary}
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button id="contato"
                href={data.closing.secondaryHref}
                variant="outline"
                size="compact"
                data-track="institucional-final-contato"
              >
                {data.closing.secondary}
              </Button>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
      <BottomNav />
      <CookieBanner />
    </div>
  );
}
