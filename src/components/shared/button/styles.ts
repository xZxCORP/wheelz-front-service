import { tv } from 'tailwind-variants';

export const baseButton = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:min-w-4 [&_svg]:shrink-0',
  variants: {
    size: {
      xs: 'px-2 py-1 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg',
      xxl: 'px-10 py-5 text-xl',
    },

    rounded: {
      none: 'rounded-none',
      xs: 'rounded-[2px]',
      sm: 'rounded-[4px]',
      normal: 'rounded-[8px]',
      lg: 'rounded-[12px]',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    rounded: 'normal',
    size: 'md',
  },
});

export const solidButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary: 'bg-primary-800 text-background hover:bg-primary-900 active:bg-primary-950',
      secondary: 'bg-secondary-600 text-background hover:bg-secondary-700 active:bg-secondary-800',
      accent: 'bg-accent-600 text-background hover:bg-accent-700 active:bg-accent-800',
      error: 'bg-error-600 text-background hover:bg-error-700 active:bg-error-800',
      success: 'bg-success-600 text-background hover:bg-success-700 active:bg-success-800',
      warning: 'bg-warning-600 text-background hover:bg-warning-700 active:bg-warning-800',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const ghostButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary: 'text-primary-800 hover:bg-primary-100 hover:text-primary-900 active:bg-primary-200',
      secondary:
        'text-secondary-700 hover:bg-secondary-100 hover:text-secondary-800 active:bg-secondary-200',
      accent: 'text-accent-700 hover:bg-accent-100 hover:text-accent-800 active:bg-accent-200',
      error: 'text-error-700 hover:bg-error-100 hover:text-error-800 active:bg-error-200',
      success: 'text-success-700 hover:bg-success-100 hover:text-success-800 active:bg-success-200',
      warning: 'text-warning-700 hover:bg-warning-100 hover:text-warning-800 active:bg-warning-200',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const outlineButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary:
        'border border-primary-700 text-primary-800 hover:bg-primary-100 hover:text-primary-900 active:bg-primary-200',
      secondary:
        'border border-secondary-600 text-secondary-700 hover:bg-secondary-100 hover:text-secondary-800 active:bg-secondary-200',
      accent:
        'border border-accent-600 text-accent-700 hover:bg-accent-100 hover:text-accent-800 active:bg-accent-200',
      error:
        'border border-error-600 text-error-700 hover:bg-error-100 hover:text-error-800 active:bg-error-200',
      success:
        'border border-success-600 text-success-700 hover:bg-success-100 hover:text-success-800 active:bg-success-200',
      warning:
        'border border-warning-600 text-warning-700 hover:bg-warning-100 hover:text-warning-800 active:bg-warning-200',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const lightButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary:
        'border border-white/30 text-white hover:border-white hover:bg-white/10 active:bg-white/20',
      secondary:
        'border border-white/30 text-white hover:border-white hover:bg-white/10 active:bg-white/20',
      accent:
        'border border-white/30 text-white hover:border-white hover:bg-white/10 active:bg-white/20',
      error:
        'border border-white/30 text-white hover:border-white hover:bg-white/10 active:bg-white/20',
      success:
        'border border-white/30 text-white hover:border-white hover:bg-white/10 active:bg-white/20',
      warning:
        'border border-white/30 text-white hover:border-white hover:bg-white/10 active:bg-white/20',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
