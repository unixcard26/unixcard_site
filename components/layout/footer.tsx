import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui';
import { siteCopy } from '@/data/navigation';
import { CookiePreferencesButton } from './cookie-banner';
export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Image
              src="/images/unixcard.svg"
              width={1040}
              height={201}
              className="footer-logo"
              alt="Unixcard"
            />
            <p>{siteCopy.signature}</p>
          </div>
          {siteCopy.footerGroups.map((group) => (
            <nav key={group.title} aria-label={`Rodapé — ${group.title}`}>
              <h2>{group.title}</h2>
              {group.links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  data-track="global-footer-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
        <div className="footer-bottom">
          <p>{siteCopy.company}</p>
          <CookiePreferencesButton />
        </div>
      </Container>
    </footer>
  );
}
