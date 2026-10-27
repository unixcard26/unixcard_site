'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, X, Check } from 'lucide-react';
import { companies as data, type CompanySolution } from '@/data/companies';
import styles from './companies.module.css';

export function Solutions() {
  const track = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<CompanySolution | null>(null);

  useEffect(() => {
    const rail = track.current;
    if (!rail) return;
    const update = () => {
      const cards = Array.from(rail.children) as HTMLElement[];
      const left = rail.getBoundingClientRect().left;
      let nearest = 0;
      cards.forEach((card, index) => {
        if (
          Math.abs(card.getBoundingClientRect().left - left) <
          Math.abs(cards[nearest].getBoundingClientRect().left - left)
        )
          nearest = index;
      });
      setActive(nearest);
    };
    rail.addEventListener('scroll', update, { passive: true });
    return () => rail.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    modal?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
      modal?.close();
      opener.current?.focus({ preventScroll: true });
    };
  }, [selected]);

  return (
    <>
      <div
        ref={track}
        className={styles.carousel}
        aria-label={data.solutions.title}
      >
        {data.solutions.items.map((item) => (
          <article className={styles.solution} key={item.id}>
            <Image
              src={item.image}
              alt={item.alt}
              width={764}
              height={516}
              sizes="(min-width: 1280px) 270px, (min-width: 768px) 45vw, 260px"
            />
            <div className={styles.solutionCopy}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href ? (
                <Link
                  href={item.href}
                  data-track={`empresas-${item.id}`}
                  aria-label={`${data.ui.more}: ${item.title}`}
                >
                  {data.ui.more}
                  <ArrowRight aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  data-track={`empresas-${item.id}`}
                  aria-haspopup="dialog"
                  aria-label={`${data.ui.more}: ${item.title}`}
                  onClick={(event) => {
                    opener.current = event.currentTarget;
                    setSelected(item);
                  }}
                >
                  {data.ui.more}
                  <ArrowRight aria-hidden="true" />
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.dots} aria-label={data.solutions.title}>
        {data.solutions.items.map((item, index) => (
          <button
            type="button"
            key={item.id}
            aria-label={`${data.ui.show}: ${item.title}`}
            aria-pressed={active === index}
            data-track={`empresas-carrossel-${item.id}`}
            onClick={() => {
              const rail = track.current;
              const card = rail?.children[index] as HTMLElement | undefined;
              if (rail && card)
                rail.scrollTo({
                  left:
                    card.offsetLeft -
                    (rail.children[0] as HTMLElement).offsetLeft,
                  behavior: window.matchMedia(
                    '(prefers-reduced-motion: reduce)',
                  ).matches
                    ? 'auto'
                    : 'smooth',
                });
            }}
          >
            <span />
          </button>
        ))}
      </div>
      {selected && (
        <dialog
          ref={dialog}
          className={styles.dialog}
          aria-labelledby="company-solution-title"
          onClose={() => setSelected(null)}
          onCancel={() => setSelected(null)}
        >
          <button
            type="button"
            className={styles.close}
            aria-label={data.ui.close}
            data-track="empresas-fechar-detalhes"
            onClick={() => setSelected(null)}
          >
            <X aria-hidden="true" />
          </button>
          <h2 id="company-solution-title">{selected.title}</h2>
          <p>{selected.details}</p>
          <ul>
            {selected.benefits.map((benefit) => (
              <li key={benefit}>
                <Check aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          {selected.credit && (
            <p className={styles.disclaimer}>{data.ui.creditNotice}</p>
          )}
        </dialog>
      )}
    </>
  );
}
