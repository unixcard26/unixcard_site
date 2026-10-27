
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Crop,
  UsersRound,
  ShieldCheck,
  ChartNoAxesColumn,
  Store,
  BriefcaseBusiness,
  Box,
  Building2,
} from 'lucide-react';
import { companies as data, type CompanyIcon } from '@/data/companies';
import { home } from '@/data/home';
import { Header, Footer, BottomNav, CookieBanner } from '@/components/layout';
import { Container, Button, SectionChip, SectionTitle } from '@/components/ui';
import { Solutions } from './solutions';
import styles from './companies.module.css';
import { SectionUrlSync } from '@/components/layout/section-url-sync';

function getOrigin() {
  try {
    const raw = process.env.NEXT_PUBLIC_SITE_URL;
    if (!raw) return undefined;
    const url = new URL(raw);
    return ['https:', 'http:'].includes(url.protocol) ? url.origin : undefined;
  } catch {
    return undefined;
  }
}
const origin = getOrigin();
export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  ...(origin ? { alternates: { canonical: `${origin}/para-empresas` } } : {}),
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: 'website',
    locale: 'pt_BR',
    ...(origin
      ? {
          url: `${origin}/para-empresas`,
          images: [
            {
              url: origin + data.hero.image,
              width: 799,
              height: 1066,
              alt: data.hero.alt,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: data.seo.title,
    description: data.seo.description,
    ...(origin ? { images: [origin + data.hero.image] } : {}),
  },
};
const icons = {
  tailored: Crop,
  people: UsersRound,
  shield: ShieldCheck,
  chart: ChartNoAxesColumn,
  store: Store,
  briefcase: BriefcaseBusiness,
  box: Box,
  building: Building2,
};
function Icon({ name }: { name: CompanyIcon }) {
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
function structuredData() {
  const organization = `${origin ?? ''}/#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organization,
        name: home.seo.name,
        legalName: home.seo.legalName,
        description: home.about.description,
        ...(origin
          ? { url: origin, logo: `${origin}/images/unixcard.svg` }
          : {}),
      },
      {
        '@type': 'WebSite',
        '@id': `${origin ?? ''}/#website`,
        name: home.seo.name,
        inLanguage: 'pt-BR',
        publisher: { '@id': organization },
        ...(origin ? { url: origin } : {}),
      },
      {
        '@type': 'CollectionPage',
        name: data.seo.title,
        description: data.seo.description,
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin ?? ''}/#website` },
        ...(origin ? { url: `${origin}/para-empresas` } : {}),
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: data.solutions.items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            description: item.description,
          })),
        },
      },
      ...(origin
        ? [
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: data.ui.home,
                  item: origin,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: data.ui.page,
                  item: `${origin}/para-empresas`,
                },
              ],
            },
          ]
        : []),
    ],
  };
}
export default function CompaniesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData()).replace(/</g, '\\u003c'),
        }}
      />
      <a className="skip-link" href="#conteudo">
        {data.ui.skip}
      </a>
      <Header variant="light" preloadLogo={false} />
      <SectionUrlSync ids={["conteudo", "solucoes", "escolha", "para-empresa", "parceiros", "diferenciais", "confianca", "faq", "contato"]} />
      <main id="conteudo" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <SectionChip>{data.hero.chip}</SectionChip>
              <h1>
                {data.hero.title}
                <span>{data.hero.highlight}</span>
              </h1>
              <p>{data.hero.description}</p>
            </div>
            <Image
              className={styles.heroImage}
              src={data.hero.image}
              alt={data.hero.alt}
              width={799}
              height={1066}
              priority
              sizes="(min-width: 1280px) 540px, (min-width: 768px) 50vw, 369px"
            />
            <div className={styles.heroAction}>
              <Button
                href="#solucoes"
                variant="brand"
                fullWidth
                data-track="empresas-hero-solucoes"
              >
                {data.hero.cta}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
        <Container>
          <nav className={styles.breadcrumb} aria-label={data.ui.breadcrumb}>
            <Link href="/" data-track="empresas-inicio">
              {data.ui.home}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{data.ui.page}</span>
          </nav>
          <section className={styles.section} id="solucoes">
            <Intro {...data.solutions} />
            <Solutions />
          </section>
          <section id="escolha" className={styles.section}>
            <Intro {...data.reasons} />
            <ul className={styles.reasons}>
              {data.reasons.items.map((item) => (
                <li key={item.title}>
                  <Icon name={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section id="para-empresa" className={styles.section}>
            <Intro {...data.audience} />
            <ul className={styles.audience}>
              {data.audience.items.map((item) => (
                <li key={item.title}>
                  <span className={styles.audienceIcon}>
                    <Icon name={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
          <Link
            className={styles.back}
            href="/produtos"
            data-track="empresas-voltar-produtos"
          >
            <ArrowLeft aria-hidden="true" />
            {data.ui.back}
          </Link>
        </Container>
      </main>
      <Footer />
      <BottomNav />
      <CookieBanner />
    </>
  );
}
