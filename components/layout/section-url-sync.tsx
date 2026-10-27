"use client";

import { useEffect } from "react";

type Props = {
  ids: string[]; // ids das seções, na ordem em que aparecem na página
};

export function SectionUrlSync({ ids }: Props) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const base = () => `${location.pathname}${location.search}`;

    function setHash(id: string) {
      if (location.hash === `#${id}`) return;
      history.replaceState(null, "", `${base()}#${id}`);
    }

    function clearHash() {
      if (!location.hash) return;
      history.replaceState(null, "", base());
    }

    // Faixa fina no meio da tela: a seção que cruza essa faixa é a "ativa"
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHash(entry.target.id);
          } else if (
            entry.target === sections[0] &&
            entry.boundingClientRect.top > 0
          ) {
            // Voltou para cima da primeira seção (hero): limpa o #
            clearHash();
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return null;
}