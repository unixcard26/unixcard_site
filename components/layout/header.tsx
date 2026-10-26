'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ArrowLeft } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import {
  menuNavigation,
  primaryNavigation,
  productNavigation,
  siteCopy,
} from '@/data/navigation';
export function Header({
  variant = 'dark',
  preloadLogo = true,
}: {
  variant?: 'dark' | 'light';
  preloadLogo?: boolean;
}) {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 72);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function show() {
    setProducts(false);
    setOpen(true);
    dialog.current?.showModal();
  }
  function close() {
    dialog.current?.close();
    setOpen(false);
    trigger.current?.focus();
  }
  return (
    <>
      <header className={`site-header site-header--${variant}`}>
        <Container className="header-inner">
          <Link
            href="/"
            aria-label="Unixcard — Início"
            className="brand-logo"
            data-track="global-header-logo"
          >
            <Image
              src={`/images/unixcard${variant === 'dark' ? '-white' : ''}.svg`}
              width={1040}
              height={201}
              alt="Unixcard"
              priority={preloadLogo}
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {primaryNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                data-track={`global-header-${item.icon}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            href={siteCopy.ctaHref}
            size="compact"
            variant="muted"
            className="header-cta"
            data-track="global-header-cta"
          >
            {siteCopy.cta}
          </Button>
          <button
            ref={trigger}
            type="button"
            className={`menu-trigger ${scrolled ? 'menu-trigger--floating' : ''}`}
            aria-label={siteCopy.open}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={show}
          >
            <Menu aria-hidden="true" />
          </button>
        </Container>
      </header>
      <dialog
        ref={dialog}
        id="site-menu"
        className="site-menu"
        aria-label={siteCopy.menu}
        onCancel={close}
        onClose={() => setOpen(false)}
      >
        <div className="menu-top">
          {products ? (
            <button
              type="button"
              className="icon-button"
              onClick={() => setProducts(false)}
              aria-label={siteCopy.back}
            >
              <ArrowLeft />
            </button>
          ) : (
            <Image
              src="/images/unixcard.svg"
              width={1040}
              height={201}
              alt="Unixcard"
              className="menu-logo"
            />
          )}
          {products && <strong>Produtos</strong>}
          <button
            type="button"
            className="icon-button"
            onClick={close}
            aria-label={siteCopy.close}
          >
            <X />
          </button>
        </div>
        <nav aria-label={products ? 'Produtos' : siteCopy.menu}>
          {(products ? productNavigation : menuNavigation).map((item) =>
            item.href === '/produtos' && !products ? (
              <button
                className="menu-link"
                key={item.href}
                onClick={() => setProducts(true)}
              >
                {item.label}
                <ChevronRight aria-hidden="true" />
              </button>
            ) : (
              <Link
                className="menu-link"
                href={item.href}
                key={item.href}
                onClick={close}
                data-track="global-menu-link"
              >
                {item.label}
                <ChevronRight aria-hidden="true" />
              </Link>
            ),
          )}
        </nav>
      </dialog>
    </>
  );
}
