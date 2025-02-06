import { tv } from 'tailwind-variants'

export const baseButton = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:min-w-4 [&_svg]:shrink-0',
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
})

export const solidButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary: 'bg-primary-200 hover:bg-primary-500 active:bg-primary-800',
      secondary: 'bg-secondary-300 hover:bg-secondary-400 active:bg-secondary-500',
      error: 'bg-error-600 hover:bg-error-500 active:bg-error-800 text-white',
      success: 'bg-success-600 hover:bg-success-500 active:bg-success-800 text-white',
      warning: 'bg-warning-600 hover:bg-warning-500 active:bg-warning-800 text-white',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

export const ghostButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary: 'text-primary-600 hover:bg-primary-100 active:bg-primary-200',
      secondary: 'text-secondary-600 hover:bg-secondary-100 active:bg-secondary-200',
      error: 'text-error-600 hover:bg-error-100 active:bg-error-200',
      success: 'text-success-600 hover:bg-success-100 active:bg-success-200',
      warning: 'text-warning-600 hover:bg-warning-100 active:bg-warning-200',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

export const outlineButton = tv({
  extend: baseButton,
  variants: {
    color: {
      primary:
        'border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 border',
      secondary:
        'border-secondary-600 text-secondary-600 hover:bg-secondary-50 active:bg-secondary-100 border',
      error: 'border-error-600 text-error-600 hover:bg-error-50 active:bg-error-100 border',
      success:
        'border-success-600 text-success-600 hover:bg-success-50 active:bg-success-100 border',
      warning:
        'border-warning-600 text-warning-600 hover:bg-warning-50 active:bg-warning-100 border',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})
