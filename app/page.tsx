import { HomePage } from '@/components/sections/home/home-page';
import { homeMetadata, homeStructuredData } from '@/lib/seo/home';
export const generateMetadata = homeMetadata;
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData()).replace(/</g, '\\u003c'),
        }}
      />
      <HomePage />
    </>
  );
}
