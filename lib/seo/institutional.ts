import type { Metadata } from 'next';
import { institutional as data } from '@/data/institutional';
import { home } from '@/data/home';
function origin() {
  try {
    const value = process.env.NEXT_PUBLIC_SITE_URL;
    if (!value) return undefined;
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.origin : undefined;
  } catch {
    return undefined;
  }
}
export function institutionalMetadata(): Metadata {
  const root = origin();
  return {
    title: data.seo.title,
    description: data.seo.description,
    ...(root ? { alternates: { canonical: root + '/institucional' } } : {}),
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      title: data.seo.title,
      description: data.seo.description,
      siteName: home.seo.name,
      ...(root
        ? {
            url: root + '/institucional',
            images: [
              {
                url: root + data.hero.image,
                width: 1448,
                height: 1086,
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
      ...(root ? { images: [root + data.hero.image] } : {}),
    },
  };
}
export function institutionalStructuredData() {
  const root = origin();
  const page = (root ?? '') + '/institucional';
  const organization = (root ?? '') + '/#organization';
  const answered = data.faq.items.filter((item) => item.answer);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organization,
        name: home.seo.name,
        legalName: home.seo.legalName,
        description: home.about.description,
        ...(root ? { url: root, logo: root + '/images/unixcard.svg' } : {}),
      },
      {
        '@type': 'AboutPage',
        '@id': page + '#page',
        name: data.seo.title,
        description: data.seo.description,
        inLanguage: 'pt-BR',
        about: { '@id': organization },
        ...(root ? { url: page } : {}),
      },
      ...(root
        ? [
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: data.ui.home,
                  item: root + '/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: data.ui.page,
                  item: page,
                },
              ],
            },
          ]
        : []),
      // O FAQ só recebe respostas estruturadas quando os textos forem aprovados.
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
