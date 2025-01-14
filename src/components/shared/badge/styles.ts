import { tv } from 'tailwind-variants';

export const badge = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl p-1 text-sm font-bold text-white transition-colors',
  variants: {
    color: {
      error: 'bg-error-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
    },
  },
  defaultVariants: {
    color: 'success',
  },
});
