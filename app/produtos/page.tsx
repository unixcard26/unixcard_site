import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CreditCard,
  HandCoins,
  Store,
  Smartphone,
  ChartNoAxesCombined,
  UsersRound,
  Building2,
  Truck,
  Sparkles,
  Check,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { products as data } from '@/data/products';
import { Header, Footer, BottomNav, CookieBanner } from '@/components/layout';
import { Button, Container, SectionChip, SectionTitle } from '@/components/ui';
import styles from './products.module.css';

function getOrigin() {
  try {
    const value = process.env.NEXT_PUBLIC_SITE_URL;
    if (!value) return undefined;
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.origin : undefined;
  } catch {
    return undefined;
  }
}
const origin = getOrigin();
export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  ...(origin ? { alternates: { canonical: `${origin}/produtos` } } : {}),
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: 'website',
    locale: 'pt_BR',
    ...(origin ? { url: `${origin}/produtos` } : {}),
  },
};
const icons = {
  card: CreditCard,
  credit: HandCoins,
  store: Store,
  phone: Smartphone,
  chart: ChartNoAxesCombined,
  users: UsersRound,
  building: Building2,
  truck: Truck,
  sparkles: Sparkles,
  check: Check,
  shield: ShieldCheck,
  pin: MapPin,
};
type IconName = keyof typeof icons;
function Icon({ name }: { name: IconName }) {
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
function Checks({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.checks}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function Rows({
  items,
}: {
  items: readonly {
    title: string;
    description: string;
    icon: IconName;
    href?: string;
  }[];
}) {
  return (
    <div className={styles.rows}>
      {items.map((item) => {
        const content = (
          <>
            <span className={styles.icon}>
              <Icon name={item.icon} />
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </>
        );
        return item.href ? (
          <Link
            className={styles.row}
            key={item.title}
            href={item.href}
            data-track={`produtos-${item.icon}-${item.href.split('/').pop()}`}
          >
            {content}
            <ArrowRight aria-hidden="true" />
          </Link>
        ) : (
          <article className={styles.row} key={item.title}>
            {content}
          </article>
        );
      })}
    </div>
  );
}
export default function ProductsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: data.seo.title,
    description: data.seo.description,
    inLanguage: 'pt-BR',
    ...(origin
      ? {
          url: `${origin}/produtos`,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: data.solutions.items.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: item.title,
              url: origin + item.href,
            })),
          },
        }
      : {}),
  };
  return (
    <div className={`site-shell ${styles.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
        }}
      />
      <a href="#conteudo" className="skip-link">
        {data.skip}
      </a>
      <Header variant="light" preloadLogo={false} />
      <main id="conteudo">
        <section className={styles.hero}>
          <Container className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <SectionChip>{data.hero.chip}</SectionChip>
              <h1>{data.hero.title}</h1>
              <p>{data.hero.description}</p>
            </div>
            <Image
              className={styles.heroImage}
              src={data.hero.image}
              alt={data.hero.alt}
              width={1086}
              height={1448}
              priority
              sizes="(min-width:768px) 50vw, 100vw"
            />
            <div className={styles.heroAction}>
              <Button
                href="#solucoes"
                variant="brand"
                fullWidth
                data-track="produtos-hero-solucoes"
              >
                {data.hero.cta}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </Container>
        </section>
        <Container>
          <section className={styles.section}>
            <Intro {...data.needs} />
            <div className={styles.needs}>
              {data.needs.items.map((item) => (
                <Link
                  className={styles.need}
                  key={item.title}
                  href={item.href}
                  data-track={`produtos-necessidade-${item.icon}`}
                >
                  <span className={styles.icon}>
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
          <section id="solucoes" className={styles.section}>
            <Intro {...data.solutions} />
            <div className={styles.solutions}>
              {data.solutions.items.map((item) => (
                <Link
                  className={styles.solution}
                  href={item.href}
                  key={item.title}
                  data-track={`produtos-solucao-${item.href.slice(1)}`}
                >
                  <div className={styles.solutionTop}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={480}
                      height={400}
                      className={
                        'imageSecondary' in item
                          ? styles.cardImage
                          : styles.solutionImage
                      }
                      sizes="(min-width:768px) 280px, 45vw"
                    />
                    {'imageSecondary' in item && (
                      <Image
                        src={item.imageSecondary}
                        alt={item.altSecondary}
                        width={1089}
                        height={1445}
                        className={styles.secondCard}
                        sizes="(min-width:768px) 180px, 30vw"
                      />
                    )}
                  </div>
                  <div className={styles.solutionBottom}>
                    <Checks items={item.items} />
                    <ArrowRight aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <Intro {...data.more} />
            <Rows items={data.more.items} />
          </section>
          <section className={styles.section}>
            <Intro {...data.profiles} />
            <div className={styles.profiles}>
              {data.profiles.items.map((item) => (
                <article className={styles.profile} key={item.title}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1122}
                    height={1402}
                    sizes="(min-width:768px) 180px, 30vw"
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <Checks items={item.items} />
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <Intro {...data.ecosystem} />
            <div className={styles.ecosystem}>
              <div className={styles.diagram}>
                <div className={styles.orbit} aria-hidden="true" />
                <ul>
                  {data.ecosystem.nodes.map((node, i) => (
                    <li
                      className={`${styles.node} ${styles[`node${i}`]}`}
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
              <Button
                href="/institucional"
                variant="brand"
                fullWidth
                data-track="produtos-ecossistema-institucional"
              >
                {data.ecosystem.cta}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </section>
          <section className={styles.section}>
            <Intro {...data.benefits} />
            <Rows items={data.benefits.items} />
          </section>
          <section className={styles.section}>
            <Intro {...data.trust} />
            <Rows items={data.trust.items} />
          </section>
        </Container>
      </main>
      <Footer />
      <BottomNav />
      <CookieBanner />
    </div>
  );
}
