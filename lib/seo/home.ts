import type { Metadata } from 'next';
import { home } from '@/data/home';
// Domínio não informado: URLs absolutas só são emitidas quando configuradas.
function origin() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) return undefined;
  try {
    const url = new URL(raw);
    if (!['https:', 'http:'].includes(url.protocol)) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}
export function homeMetadata(): Metadata {
  const url = origin();
  return {
    title: home.seo.title,
    description: home.seo.description,
    ...(url ? { alternates: { canonical: url + '/' } } : {}),
    openGraph: {
      type: 'website',
      title: home.seo.title,
      description: home.seo.description,
      locale: home.seo.locale,
      siteName: home.seo.name,
      ...(url
        ? {
            url: url + '/',
            images: [
              {
                url: url + '/images/home/about.png',
                width: 699,
                height: 336,
                alt: home.about.alt,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: home.seo.title,
      description: home.seo.description,
      ...(url ? { images: [url + '/images/home/about.png'] } : {}),
    },
  };
}
export function homeStructuredData() {
  const url = origin();
  const id = (fragment: string) => `${url ?? ''}/#${fragment}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': id('organization'),
        name: home.seo.name,
        legalName: home.seo.legalName,
        description: home.about.description,
        ...(url ? { url, logo: url + '/images/unixcard.svg' } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': id('website'),
        name: home.seo.name,
        inLanguage: 'pt-BR',
        publisher: { '@id': id('organization') },
        ...(url ? { url: url + '/' } : {}),
      },
      // Perguntas reais do protótipo. acceptedAnswer só existe quando aprovado e visível.
      {
        '@type': 'FAQPage',
        '@id': id('faq'),
        name: home.faq.title,
        inLanguage: 'pt-BR',
        mainEntity: home.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          ...(item.answer
            ? { acceptedAnswer: { '@type': 'Answer', text: item.answer } }
            : {}),
        })),
      },
    ],
  };
}
