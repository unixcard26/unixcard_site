import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type SectionTitleProps = ComponentPropsWithoutRef<'h2'> & {
  as?: 'h2' | 'h3';
  highlight?: ReactNode;
  afterHighlight?: ReactNode;
};

// O destaque é explícito: não depende de procurar ou substituir palavras no texto.
export function SectionTitle({
  as: Tag = 'h2',
  children,
  highlight,
  afterHighlight,
  className = '',
  ...props
}: SectionTitleProps) {
  const classes = [
    'unix-section-title',
    Tag === 'h3' && 'unix-section-title--h3',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag className={classes} {...props}>
      {children}
      {highlight != null && (
        <span className="unix-section-title__highlight">{highlight}</span>
      )}
      {afterHighlight}
    </Tag>
  );
}
