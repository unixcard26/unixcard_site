import { InstitutionalPage } from '@/components/sections/institutional/institutional-page';
import {
  institutionalMetadata,
  institutionalStructuredData,
} from '@/lib/seo/institutional';
export const generateMetadata = institutionalMetadata;
export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(institutionalStructuredData()).replace(
            /</g,
            '\\u003c',
          ),
        }}
      />
      <InstitutionalPage />
    </>
  );
}
