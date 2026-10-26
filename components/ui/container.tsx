import type { ComponentPropsWithoutRef } from 'react';

export function Container({
  className = '',
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={`unix-container ${className}`} {...props} />;
}
