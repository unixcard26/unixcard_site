'use client';
import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, Pause, Play, X } from 'lucide-react';
import { home } from '@/data/home';
import { HomeIcon } from './home-icon';
import styles from './home.module.css';
export function PendingAccess({
  children,
  className,
  track,
}: {
  children: ReactNode;
  className?: string;
  track: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        className={className}
        data-track={track}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        ref={dialog}
        className={styles.pendingDialog}
        aria-label={home.ui.pendingTitle}
      >
        <button
          className={styles.dialogClose}
          onClick={() => dialog.current?.close()}
          aria-label={home.ui.close}
        >
          <X aria-hidden="true" />
        </button>
        <h2>{home.ui.pendingTitle}</h2>
        <p>{home.ui.pending}</p>
      </dialog>
    </>
  );
}
export function Ecosystem() {
  const [paused, setPaused] = useState(false);
  return (
    <div className={styles.ecosystem}>
      <div className={styles.ecosystemHeading}>
        <p>{home.ecosystem.title}</p>
        <button
          type="button"
          onClick={() => setPaused(!paused)}
          aria-label={paused ? home.ui.play : home.ui.pause}
          aria-pressed={paused}
        >
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </button>
      </div>
      <div className={styles.ecosystemWindow}>
        <div
          className={`${styles.ecosystemTrack} ${paused ? styles.paused : ''}`}
        >
          {[0, 1].map((copy) => (
            <div
              className={styles.ecosystemGroup}
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {home.ecosystem.items.map((label) => (
                <div className={styles.ecosystemItem} key={label}>
                  <span>
                    <span className={styles.ecosystemIcon}>
                      <HomeIcon name="users" />
                    </span>
                    <span>{label}</span>
                  </span>
                  <ArrowRight aria-hidden="true" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export function ProductCarousel({ children }: { children: ReactNode }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  function update() {
    const el = scroller.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    let best = 0;
    cards.forEach((card, i) => {
      if (
        Math.abs(card.offsetLeft - el.offsetLeft - el.scrollLeft) <
        Math.abs(cards[best].offsetLeft - el.offsetLeft - el.scrollLeft)
      )
        best = i;
    });
    setActive(best);
  }
  return (
    <>
      <div
        ref={scroller}
        className={styles.productScroller}
        onScroll={update}
        tabIndex={0}
        role="region"
        aria-label={home.ui.carousel}
      >
        {children}
      </div>
      <div className={styles.dots}>
        {home.personal.cards.map((card, index) => (
          <button
            key={card.id}
            type="button"
            aria-label={`${home.ui.slide}: ${card.title}`}
            aria-pressed={index === active}
            onClick={() => {
              const el = scroller.current;
              const target = el?.children[index] as HTMLElement;
              if (el && target)
                el.scrollTo({
                  left: target.offsetLeft - el.offsetLeft,
                  behavior: window.matchMedia(
                    '(prefers-reduced-motion: reduce)',
                  ).matches
                    ? 'instant'
                    : 'smooth',
                });
              setActive(index);
            }}
          >
            <span />
          </button>
        ))}
      </div>
    </>
  );
}
