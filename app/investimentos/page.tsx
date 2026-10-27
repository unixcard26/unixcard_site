import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  Wallet,
  ChartNoAxesCombined,
  Clock3,
  CircleDollarSign,
  ShieldCheck,
  Building2,
  LockKeyhole,
  Info,
} from 'lucide-react';
import { investments as data } from '@/data/investments';
import { home } from '@/data/home';
import { Header, Footer, BottomNav, CookieBanner } from '@/components/layout';
import { Button, Container, SectionChip, SectionTitle } from '@/components/ui';
import styles from './investments.module.css';

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
  ...(origin ? { alternates: { canonical: `${origin}/investimentos` } } : {}),
  openGraph: {
    title: data.seo.title,
    description: data.seo.description,
    type: 'website',
    locale: 'pt_BR',
    ...(origin
      ? {
          url: `${origin}/investimentos`,
          images: [
            {
              url: origin + data.hero.image,
              width: 880,
              height: 588,
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
  wallet: Wallet,
  chart: ChartNoAxesCombined,
  clock: Clock3,
  money: CircleDollarSign,
  shield: ShieldCheck,
  building: Building2,
  lock: LockKeyhole,
};
type Fact = { title: string; description: string; icon: keyof typeof icons };
function Icon({ name }: { name: keyof typeof icons }) {
  const Component = icons[name];
  return (
    <span className={styles.icon}>
      <Component aria-hidden="true" />
    </span>
  );
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
function Facts({
  items,
  className = '',
}: {
  items: readonly Fact[];
  className?: string;
}) {
  return (
    <ul className={`${styles.facts} ${className}`}>
      {items.map((item) => (
        <li key={item.title}>
          <Icon name={item.icon} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
function Banner({
  image,
  alt,
  caption,
}: {
  image: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className={styles.banner}>
      <Image
        src={image}
        alt={alt}
        width={804}
        height={444}
        sizes="(min-width: 1280px) 1152px, 100vw"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
function structuredData() {
  const organizationId = `${origin ?? ''}/#organization`;
  const answered = data.faq.items.filter((item) => item.answer);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
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
        publisher: { '@id': organizationId },
        ...(origin ? { url: origin } : {}),
      },
      {
        '@type': 'FinancialProduct',
        name: data.hero.title,
        description: data.how.description,
        ...(origin ? { url: `${origin}/investimentos` } : {}),
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
                  item: `${origin}/investimentos`,
                },
              ],
            },
          ]
        : []),
      ...(answered.length
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: answered.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };
}
export default function InvestmentsPage() {
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
      <main id="conteudo" className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Image
              className={styles.heroImage}
              src={data.hero.image}
              alt={data.hero.alt}
              width={880}
              height={588}
              priority
              sizes="(min-width: 1280px) 660px, (min-width: 768px) 55vw, 100vw"
            />
            <Image
              className={styles.heroImageDesktop}
              src={data.hero.desktopImage}
              alt={data.hero.desktopAlt}
              width={880}
              height={588}
              sizes="(min-width: 1280px) 600px, 50vw"
            />
            <div className={styles.heroCopy}>
              <h1>{data.hero.title}</h1>
              <p className={styles.subtitle}>{data.hero.subtitle}</p>
              <p>{data.hero.description}</p>
              <Button
                href="#opcoes"
                variant="brand"
                fullWidth
                data-track="investimentos-hero-opcoes"
              >
                {data.hero.cta}
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
        <Container>
          <nav className={styles.breadcrumb} aria-label={data.ui.breadcrumb}>
            <Link href="/" data-track="investimentos-inicio">
              {data.ui.home}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{data.ui.page}</span>
          </nav>
          <section className={styles.section} id="opcoes">
            <Intro {...data.needs} />
            <div className={styles.options}>
              {data.needs.items.map((item) => (
                <details key={item.id} id={item.id} className={styles.option}>
                  <summary data-track={`investimentos-${item.id}`}>
                    <Icon name={item.icon} />
                    <span>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </span>
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <div className={styles.optionContent}>
                    <h3>{item.name}</h3>
                    <Link
                      href="#como-investir"
                      data-track={`investimentos-${item.id}-passos`}
                    >
                      {data.ui.next}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </details>
              ))}
            </div>
          </section>
           <section className={styles.section} id="lc-limite">
            <Intro {...data.special} />
            <Banner {...data.special} />
            <Facts items={data.special.items} className={styles.specialFacts} />
          </section>
          <section className={styles.section} id="como-funciona">
            <Intro {...data.how} />
            <Facts items={data.how.items} className={styles.howFacts} />
            <Banner {...data.how} />
          </section>
          <section className={styles.section} id="seguranca">
            <Intro {...data.security} />
            <Facts items={data.security.items} className={styles.security} />
            <a
              className={styles.noticeLink}
              href={data.security.href}
              data-track="investimentos-fgc"
            >
              <ShieldCheck aria-hidden="true" />
              <span>{data.security.cta}</span>
              <ArrowRight aria-hidden="true" />
            </a>
          </section>
          <section className={styles.section} id="tributacao">
            <Intro {...data.tax} />
            <table className={styles.table}>
              <caption className="sr-only">{data.tax.title}</caption>
              <thead>
                <tr>
                  {data.tax.headers.map((label) => (
                    <th scope="col" key={label}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.tax.rows.map(([term, rate]) => (
                  <tr key={term}>
                    <th scope="row">{term}</th>
                    <td>{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.notice}>
              <Info aria-hidden="true" />
              {data.tax.note}
            </p>
          </section>
         
          <section className={styles.section} id="como-investir">
            <Intro {...data.steps} />
            <ol className={styles.steps}>
              {data.steps.items.map((item, index) => (
                <li key={item.title}>
                  <span className={styles.number} aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className={styles.section} id="duvidas">
            <Intro {...data.faq} />
            <div className={styles.faq}>
              {data.faq.items.map((item, index) =>
                item.answer ? (
                  <details key={item.question}>
                    <summary data-track={`investimentos-faq-${index + 1}`}>
                      {item.question}
                      <ChevronDown aria-hidden="true" />
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
                    <ChevronDown aria-hidden="true" />
                  </div>
                ),
              )}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
      <BottomNav />
      <CookieBanner />
    </>
  );
}
