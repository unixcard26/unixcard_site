import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type SharedProps = {
  children: ReactNode;
  variant?: 'primary' | 'brand' | 'muted' | 'outline';
  size?: 'default' | 'compact';
  fullWidth?: boolean;
  className?: string;
};
type ButtonProps = SharedProps &
  (
    | ({ href?: never } & ComponentPropsWithoutRef<'button'>)
    | ({ href: string; disabled?: never } & Omit<
        ComponentPropsWithoutRef<typeof Link>,
        'href'
      >)
  );

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'default',
    fullWidth = false,
    className = '',
    ...rest
  } = props;
  const classes = [
    'unix-button',
    `unix-button--${variant}`,
    size === 'compact' && 'unix-button--compact',
    fullWidth && 'unix-button--full',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  if (typeof rest.href === 'string') {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
