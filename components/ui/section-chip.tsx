import type { ComponentPropsWithoutRef } from 'react';

export function SectionChip({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'span'>) {
  return <span className={`unix-section-chip ${className}`} {...props} />;
}
