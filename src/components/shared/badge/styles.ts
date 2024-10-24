import { tv } from 'tailwind-variants';

export const badge = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl p-1 text-sm font-bold text-white transition-colors',
  variants: {
    color: {
      error: 'bg-error-600',
      success: 'bg-success-600',
      warning: 'bg-warning-600',
    },
  },
  defaultVariants: {
    color: 'success',
  },
});
