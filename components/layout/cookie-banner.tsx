'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { siteCopy } from '@/data/navigation';
const STORAGE_KEY = 'unixcard-consent-v1';
export type CookieConsent = {
  version: 1;
  essential: true;
  analytics: boolean;
  updatedAt: string;
};
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const value = raw ? JSON.parse(raw) : null;
        if (value?.version === 1 && typeof value.analytics === 'boolean')
          setAnalytics(value.analytics);
        else setVisible(true);
      } catch {
        setVisible(true);
      }
    });
    const reopen = () => {
      setVisible(true);
      setCustomize(true);
    };
    window.addEventListener('unixcard:cookie-preferences', reopen);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('unixcard:cookie-preferences', reopen);
    };
  }, []);
  function save(allowed: boolean) {
    const consent: CookieConsent = {
      version: 1,
      essential: true,
      analytics: allowed,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      /* A escolha vale nesta sessão se o armazenamento estiver bloqueado. */
    }
    setAnalytics(allowed);
    setVisible(false);
    window.dispatchEvent(
      new CustomEvent('unixcard:consent-changed', { detail: consent }),
    );
  }
  if (!visible) return null;
  const copy = siteCopy.cookie;
  return (
    <section
      className="cookie-banner"
      aria-labelledby="cookie-title"
      role="region"
    >
      <div>
        <h2 id="cookie-title">{copy.title}</h2>
        <p>
          {copy.description} <Link href="/cookies">{copy.policy}</Link>
        </p>
      </div>
      {customize && (
        <div className="cookie-options">
          <p>
            <strong>{copy.essential}</strong>
            <br />
            {copy.essentialDescription}
          </p>
          <label>
            <input
              type="checkbox"
              checked={analytics}
              onChange={(event) => setAnalytics(event.target.checked)}
            />
            <span>
              <strong>{copy.analytics}</strong>
              <br />
              {copy.analyticsDescription}
            </span>
          </label>
        </div>
      )}
      <div className="cookie-actions">
        <Button size="compact" onClick={() => save(false)} variant="outline">
          {copy.reject}
        </Button>
        <Button
          size="compact"
          onClick={() => save(customize ? analytics : true)}
        >
          {customize ? copy.save : copy.accept}
        </Button>
        {!customize && (
          <button
            type="button"
            className="text-button"
            onClick={() => setCustomize(true)}
          >
            {copy.customize}
          </button>
        )}
      </div>
    </section>
  );
}
export function CookiePreferencesButton() {
  return (
    <button
      className="text-button"
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event('unixcard:cookie-preferences'))
      }
    >
      {siteCopy.cookie.reopen}
    </button>
  );
}
