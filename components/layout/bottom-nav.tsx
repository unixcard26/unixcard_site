'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryNavigation } from '@/data/navigation';
import { NavIcon } from './nav-icon';
export function BottomNav({ activePath }: { activePath?: string }) {
  const pathname = usePathname();
  const current = activePath ?? pathname;
  return (
    <nav className="bottom-nav" aria-label="Navegação principal mobile">
      {primaryNavigation.map((item) => {
        const active =
          item.href === '/' ? current === '/' : current.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            data-track={`global-bottomnav-${item.icon}`}
          >
            <NavIcon name={item.icon} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
