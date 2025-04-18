import { tv } from 'tailwind-variants';

export const typography = tv({
  base: ['prose max-w-none break-all'],
  variants: {
    variant: {
      primary: [
        'text-primary-600',
        '[&>h1]:text-primary-800',
        '[&>h2]:text-primary-800',
        '[&>h3]:text-primary-700',
        '[&>h4]:text-primary-700',
        '[&>p]:text-primary-600',
        '[&>ul]:text-primary-600',
        '[&>ol]:text-primary-600',
        '[&>li]:text-primary-600',
        '[&>blockquote]:text-primary-600',
        '[&>blockquote]:border-l-primary-200',
        '[&>hr]:border-primary-200',
        '[&>a]:text-primary-600',
        '[&>a:hover]:text-primary-700',
        '[&>strong]:text-primary-700',
      ],
      secondary: [
        'text-secondary-600',
        '[&>h1]:text-secondary-800',
        '[&>h2]:text-secondary-800',
        '[&>h3]:text-secondary-700',
        '[&>h4]:text-secondary-700',
        '[&>p]:text-secondary-600',
        '[&>ul]:text-secondary-600',
        '[&>ol]:text-secondary-600',
        '[&>li]:text-secondary-600',
        '[&>blockquote]:text-secondary-600',
        '[&>blockquote]:border-l-secondary-200',
        '[&>hr]:border-secondary-200',
        '[&>a]:text-secondary-600',
        '[&>a:hover]:text-secondary-700',
        '[&>strong]:text-secondary-700',
      ],
      accent: [
        'text-accent-600',
        '[&>h1]:text-accent-800',
        '[&>h2]:text-accent-800',
        '[&>h3]:text-accent-700',
        '[&>h4]:text-accent-700',
        '[&>p]:text-accent-600',
        '[&>ul]:text-accent-600',
        '[&>ol]:text-accent-600',
        '[&>li]:text-accent-600',
        '[&>blockquote]:text-accent-600',
        '[&>blockquote]:border-l-accent-200',
        '[&>hr]:border-accent-200',
        '[&>a]:text-accent-600',
        '[&>a:hover]:text-accent-700',
        '[&>strong]:text-accent-700',
      ],
      error: [
        'text-error-600',
        '[&>h1]:text-error-800',
        '[&>h2]:text-error-800',
        '[&>h3]:text-error-700',
        '[&>h4]:text-error-700',
        '[&>p]:text-error-600',
        '[&>ul]:text-error-600',
        '[&>ol]:text-error-600',
        '[&>li]:text-error-600',
        '[&>blockquote]:text-error-600',
        '[&>blockquote]:border-l-error-200',
        '[&>hr]:border-error-200',
        '[&>a]:text-error-600',
        '[&>a:hover]:text-error-700',
        '[&>strong]:text-error-700',
      ],
    },
    size: {
      'sm': 'prose-sm',
      'base': 'prose',
      'lg': 'prose-lg',
      'xl': 'prose-xl',
      '2xl': 'prose-2xl',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'base',
    align: 'left',
    weight: 'normal',
  },
});
