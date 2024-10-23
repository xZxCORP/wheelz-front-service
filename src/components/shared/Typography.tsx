import React from 'react';
import { type VariantProps } from 'tailwind-variants';

import { typography } from './typography/styles';

interface BaseProps extends VariantProps<typeof typography> {
  className?: string;
}

interface TypographyProps extends BaseProps, React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

export const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ as: Component = 'div', className, variant, size, align, weight, children, ...props }, ref) => {
    return React.createElement(
      Component,
      {
        ref,
        className: typography({ variant, size, align, weight, className }),
        ...props,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  BaseProps & React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="h1" size="2xl" weight="bold" className={className} {...props}>
    {children}
  </Typography>
));
H1.displayName = 'H1';

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  BaseProps & React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="h2" size="xl" weight="semibold" className={className} {...props}>
    {children}
  </Typography>
));
H2.displayName = 'H2';

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  BaseProps & React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="h3" size="lg" weight="semibold" className={className} {...props}>
    {children}
  </Typography>
));
H3.displayName = 'H3';

export const H4 = React.forwardRef<
  HTMLHeadingElement,
  BaseProps & React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="h4" size="base" weight="semibold" className={className} {...props}>
    {children}
  </Typography>
));
H4.displayName = 'H4';

export const P = React.forwardRef<
  HTMLParagraphElement,
  BaseProps & React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="p" size="base" className={className} {...props}>
    {children}
  </Typography>
));
P.displayName = 'P';

export const Lead = React.forwardRef<
  HTMLParagraphElement,
  BaseProps & React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="p" size="lg" weight="medium" className={className} {...props}>
    {children}
  </Typography>
));
Lead.displayName = 'Lead';

export const Subtle = React.forwardRef<
  HTMLParagraphElement,
  BaseProps & React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <Typography ref={ref} as="p" size="sm" className={className} {...props}>
    {children}
  </Typography>
));
Subtle.displayName = 'Subtle';
